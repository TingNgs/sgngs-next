USER = "tingngs"
APP_NAME = "sgngs"

pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh 'npm install'
        sh 'npm run build'
      }
    }

    stage('Deploy') {
      steps {
        sh '''docker build -t ${USER}/${APP_NAME}'''
        sh '''docker run -d -p 3000:3000 ${USER}/${APP_NAME}:latest'''
        } 
    }
  }
}