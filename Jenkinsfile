pipeline {
    agent any

    environment {
        DEPLOY_DIR = "/opt/deployments/trekky-hub"
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

        stage('Copy Code') {
            steps {
                sh '''
                mkdir -p $DEPLOY_DIR
                cp -r backend $DEPLOY_DIR/
                cp -r frontend $DEPLOY_DIR/
                '''
            }
        }

        stage('Backend Setup') {
            steps {
                sh '''
                cd $DEPLOY_DIR/backend
                python3 -m venv .venv
                . .venv/bin/activate
                pip install -r requirements.txt
                '''
            }
        }

        stage('Frontend Build') {
            steps {
                sh '''
                cd $DEPLOY_DIR/frontend
                npm install
                npm run build
                '''
            }
        }
    }
}
 