pipeline {
    agent any

    environment {
        DOCKER_USERNAME = "jayadip07"
        BACKEND_IMAGE   = "trekky-backend"
        FRONTEND_IMAGE  = "trekky-frontend"
        IMAGE_TAG       = "%BUILD_NUMBER%"
        K8S_NAMESPACE   = "dev"
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker Images') {
            steps {
                bat 'docker build -t %DOCKER_USERNAME%/%BACKEND_IMAGE%:%IMAGE_TAG% backend'
                bat 'docker build -t %DOCKER_USERNAME%/%FRONTEND_IMAGE%:%IMAGE_TAG% frontend'
            }
        }

        stage('Docker Login') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'dockerhub-creds',
                    usernameVariable: 'DH_USER',
                    passwordVariable: 'DH_PASS'
                )]) {
                    bat 'docker login -u %DH_USER% -p %DH_PASS%'
                }
            }
        }

        stage('Push to Docker Hub') {
            steps {
                bat 'docker push %DOCKER_USERNAME%/%BACKEND_IMAGE%:%IMAGE_TAG%'
                bat 'docker push %DOCKER_USERNAME%/%FRONTEND_IMAGE%:%IMAGE_TAG%'
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                echo "Kubernetes deploy will be enabled after manifests are ready"
            }
        }
    }
}
