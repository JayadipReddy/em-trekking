pipeline {
    agent any

    environment {
        DOCKER_USERNAME = "jayadip07"
        BACKEND_IMAGE   = "trekky-backend"
        FRONTEND_IMAGE  = "trekky-frontend"
        K8S_NAMESPACE   = "default"
        KUBECONFIG = 'C:\\ProgramData\\Jenkins\\.kube\\config'

    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker Images') {
            steps {
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
                    bat "docker login -u %DH_USER% -p %DH_PASS%"
                }
            }
        }

        stage('Push to Docker Hub') {
            steps {
                bat "docker push %DOCKER_USERNAME%/%BACKEND_IMAGE%:latest-test"
                bat "docker push %DOCKER_USERNAME%/%FRONTEND_IMAGE%:latest-test"
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                // bat "kubectl delete -f k8s/backend-deployment.yaml"
                // bat "kubectl delete -f k8s/frontend-deployment.yaml"
                bat "kubectl apply -f k8s/backend-deployment.yaml"
                bat "kubectl apply -f k8s/frontend-deployment.yaml"
            }
        }
    }
}
