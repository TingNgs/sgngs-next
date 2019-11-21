def APP_USER = 'tingngs'
def APP_NAME = 'sgngs'

pipeline {
  agent any
  stages {
    /*stage('Build') {steps {
      steps {
        sh 'npm install'
        sh 'npm run build'
      }
    }*/

    stage('Deploy') {
      steps {
        sh "docker build -t ${APP_USER}/${APP_NAME}"
        sh "docker run -d -p 3000:3000 ${APP_USER}/${APP_NAME}:latest"
        } 
    }
  }
}