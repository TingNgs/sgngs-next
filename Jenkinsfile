def APP_USER = 'tingngs'
def APP_NAME = 'sgngs'
def CONTAINER_NAME = 'sgngs_container'

pipeline {
  agent any
  stages {
    /*stage('Test') {steps {
      steps {
        sh 'npm install'
        sh 'npm run build'
        sh 'rm -r ./.next'
        sh 'rm -r ./node_modules'
      }
    }*/

    stage('Deploy') {
      steps {
        sh "docker stop ${CONTAINER_NAME} || true && docker rm ${CONTAINER_NAME} || true"
        sh "docker build -t ${APP_USER}/${APP_NAME} ."
        sh "docker run -d -p 3000:3000 -name ${CONTAINER_NAME} ${APP_USER}/${APP_NAME}:latest"
        } 
    }
  }
}