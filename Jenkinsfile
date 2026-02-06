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
                bat 'docker --version'
                bat 'docker compose version'
            }
        }

        stage('Stop Existing Containers') {
            steps {
                bat 'docker compose down || exit 0'
            }
        }

        stage('Build Docker Images') {
            steps {
                bat 'docker compose build'
            }
        }

        stage('Run Containers') {
            steps {
                bat 'docker compose up -d'
            }
        }

        stage('Verify Containers') {
            steps {
                bat 'docker ps'
            }
        }
    }
}
