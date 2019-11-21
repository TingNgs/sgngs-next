

pipeline {
  agent any
   parameters {
      string(name: 'APP_USER', defaultValue: 'TingNgs', description: 'User')
      string(name: 'APP_NAME', defaultValue: 'sgngs', description: 'App name')
  }
  stages {
    stage('Build') {
      steps {
        sh 'npm install'
        sh 'npm run build'
      }
    }

    stage('Deploy') {
      steps {
        sh '''docker build -t ${params.APP_USER}/${params.APP_NAME}'''
        sh '''docker run -d -p 3000:3000 ${params.APP_USER}/${params.APP_NAME}:latest'''
        } 
    }
  }
}