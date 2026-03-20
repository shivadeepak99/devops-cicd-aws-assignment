pipeline {
    agent any

    options {
        skipDefaultCheckout(true)
    }

    environment {
        DOCKERHUB_USERNAME = "shivadeepak"
        FRONTEND_IMAGE = "${DOCKERHUB_USERNAME}/2023bcd0048_frontend"
        BACKEND_IMAGE = "${DOCKERHUB_USERNAME}/2023bcd0048_backend"
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker Images') {
            steps {
                sh "docker build -t ${FRONTEND_IMAGE} ./frontend"
                sh "docker build -t ${BACKEND_IMAGE} ./backend"
            }
        }

        stage('Login to Docker Hub') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub-creds', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                    sh 'echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin'
                }
            }
        }

        stage('Push Images') {
            steps {
                sh "docker push ${FRONTEND_IMAGE}"
                sh "docker push ${BACKEND_IMAGE}"
            }
        }
    }

    post {
        success {
            echo 'Pipeline completed successfully'
        }
        failure {
            echo 'Pipeline failed'
        }
    }
}
