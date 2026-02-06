pipeline {
    agent any

    environment {
        // 🔁 REPLACE these two values
        DOCKER_IMAGE = "jayadip07/trekky-hub"
        IMAGE_TAG    = "${BUILD_NUMBER}"

        // 🔁 REPLACE namespace if different
        K8S_NAMESPACE = "dev"
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                bat '''
                docker build -t $DOCKER_IMAGE:$IMAGE_TAG .
                '''
            }
        }

        stage('Push to Docker Hub') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'dockerhub-creds',
                    usernameVariable: 'DOCKER_USER',
                    passwordVariable: 'DOCKER_PASS'
                )]) {
                    bat '''
                    echo "$DOCKER_PASS" | docker login -u "$DOCKER_USER" --password-stdin
                    docker push $DOCKER_IMAGE:$IMAGE_TAG
                    '''
                }
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                bat '''
                # 🔁 REPLACE deployment-name and container-name
                kubectl set image -n $K8S_NAMESPACE -n deployment/kube-system \
                  <coredns>=$DOCKER_IMAGE:$IMAGE_TAG

                kubectl rollout status -n $K8S_NAMESPACE deployment/kube-system
                '''
            }
        }
    }
}

 
