pipeline {
    agent any

    stages {

        stage('Checkout Code') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/JayadipReddy/em-trekking.git'
            }
        }

        stage('Docker Info') {
            steps {
                sh 'docker --version'
                sh 'docker compose version'
            }
        }

        stage('Stop Existing Containers') {
            steps {
                sh '''
                docker compose down || true
                '''
            }
        }

        stage('Build Docker Images') {
            steps {
                sh '''
                docker compose build
                '''
            }
        }

        stage('Run Containers') {
            steps {
                sh '''
                docker compose up -d
                '''
            }
        }

        stage('Verify Containers') {
            steps {
                sh '''
                docker ps
                '''
            }
        }
    }
}
