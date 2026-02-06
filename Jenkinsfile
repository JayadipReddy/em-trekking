pipeline {
    agent any

    environment {
        // Use Jenkins workspace to avoid permission issues
        DEPLOY_DIR = "${WORKSPACE}/deployments/trekky-hub"
        BACKEND_IMAGE = "trekky-backend:latest"
        FRONTEND_IMAGE = "trekky-frontend:latest"
        BACKEND_PORT = "8000"
        FRONTEND_PORT = "3000"
    }

    stages {

        stage('Checkout Code') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/JayadipReddy/em-trekking.git'
            }
        }

        stage('Prepare Deployment Folder') {
            steps {
                sh '''
                mkdir -p $DEPLOY_DIR
                cp -r backend $DEPLOY_DIR/
                cp -r frontend $DEPLOY_DIR/
                '''
            }
        }

        stage('Build Backend Docker Image') {
            steps {
                sh '''
                cd $DEPLOY_DIR/backend
                docker build -t $BACKEND_IMAGE .
                '''
            }
        }

        stage('Build Frontend Docker Image') {
            steps {
                sh '''
                cd $DEPLOY_DIR/frontend
                docker build -t $FRONTEND_IMAGE .
                '''
            }
        }

        stage('Deploy Backend to Kubernetes') {
            steps {
                sh '''
                kubectl apply -f k8s/backend-deployment.yaml
                kubectl set image deployment/trekky-backend backend=$BACKEND_IMAGE
                kubectl rollout status deployment/trekky-backend
                '''
            }
        }

        stage('Deploy Frontend to Kubernetes') {
            steps {
                sh '''
                kubectl apply -f k8s/frontend-deployment.yaml
                kubectl set image deployment/trekky-frontend frontend=$FRONTEND_IMAGE
                kubectl rollout status deployment/trekky-frontend
                '''
            }
        }
    }

    post {
        success {
            echo "🎉 Build and deployment successful!"
        }
        failure {
            echo "❌ Build or deployment failed!"
        }
    }
}
