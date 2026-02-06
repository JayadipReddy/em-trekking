pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/JayadipReddy/em-trekking.git'
            }
        }

        stage('Build & Run Docker') {
            steps {
                sh '''
                docker compose down
                docker compose build
                docker compose up -d
                '''
            }
        }
    }
}
