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

    stage('Test Docker') {
      parallel {
        stage('Test Docker') {
          steps {
            sh 'docker --version'
          }
        }

        stage('Docker Test log') {
          steps {
            sh 'echo "Testing Docker"'
          }
        }

      }
    }

  }
}