pipeline {
    agent any
    stages {

        stage('Build') {
            steps {
                echo 'Build'
                bat 'docker build -t node-app:1.0.0 .'
            }
        }

        stage('Deploy'){
            steps{
                echo 'Deploy the TODO application on Docker'
                bat 'docker run -p 3000:3000 -d node-app:1.0.0'
            }
        }
    }
}