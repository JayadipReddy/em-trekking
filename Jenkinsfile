pipeline {
    agent any

    environment {
        DOCKER_USERNAME = "brharishreddy"
        BACKEND_IMAGE   = "trekky-backend"
        FRONTEND_IMAGE  = "trekky-frontend"
        K8S_NAMESPACE   = "default"

        // Use your kubeconfig path
        KUBECONFIG = 'C:\\Users\\HarishBodireddy\\.kube\\config'
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker Images') {
            steps {
                // Build backend and frontend with full tag including username
                bat "docker build -t %DOCKER_USERNAME%/%BACKEND_IMAGE%:latest-test backend"
                bat "docker build -t %DOCKER_USERNAME%/%FRONTEND_IMAGE%:latest-test frontend"
            }
        }

        stage('Docker Login') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'dockerhub-creds',
                    usernameVariable: 'DH_USER',
                    passwordVariable: 'DH_PASS'
                )]) {
                    // Use echo | docker login --password-stdin for secure login
                    bat """
                    echo %DH_PASS% | docker login -u %DH_USER% --password-stdin
                    """
                }
            }
        }

        stage('Push to Docker Hub') {
            steps {
                // Push the images to your Docker Hub account
                bat "docker push %DOCKER_USERNAME%/%BACKEND_IMAGE%:latest-test"
                bat "docker push %DOCKER_USERNAME%/%FRONTEND_IMAGE%:latest-test"
            }
        }

        stage('Verify Kubernetes Access') {
            steps {
                bat """
                echo Using kubeconfig: %KUBECONFIG%
                kubectl config current-context
                kubectl get nodes
                """
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                // Deploy backend and frontend using kubectl
                bat "kubectl apply -f k8s/backend-deployment.yaml"
                bat "kubectl apply -f k8s/frontend-deployment.yaml"
            }
        }
    }
}
