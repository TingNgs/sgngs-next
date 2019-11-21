pipeline {
  agent {
    docker {
      image 'alpine-node:lastest'
      args '-p 3000:3000'
    }

  }
  stages {
    stage('Build') {
      steps {
        sh 'npm install'
      }
    }

    stage('Deploy') {
      steps {
        sh 'npm run build'
        sh 'npm run start'
      } 
    }

  }
  environment {
    HOME = '.'
  }
}