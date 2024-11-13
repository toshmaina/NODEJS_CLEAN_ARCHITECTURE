pipeline {
  agent any
  stages {
    stage('Welcome Greeting') {
      steps {
        sh 'echo "Hello from Jenkins"'
      }
    }

    stage('Clone') {
      steps {
        git(url: 'https://github.com/toshmaina/NODEJS_CLEAN_ARCHITECTURE', branch: 'main')
      }
    }

    stage('List files') {
      steps {
        sh 'ls -al'
      }
    }
    stage("Checks on docker"){
     steps{
       sh 'docker --version'
     }
    }

  }
}
