pipeline {
   agent{
      docker{
        image "node:14-alpine"
      }
    }
  stages {
    stage('Welcome Greeting') {
      steps {
        sh 'echo "Hello from Jenkins"'
      }
    }

    stage('Clone The Repo') {
      steps {
        git(url: 'https://github.com/toshmaina/NODEJS_CLEAN_ARCHITECTURE', branch: 'main')
      }
    }
    stage('Check Dependencies') {
      steps {
        sh '''
        node --version
        npm --version
        '''
      }
    }
    // stage('Install Dependencies') {
    //   steps {
    //     sh 'npm ci'
    //   }
    // }
    // stage('Build the Application') {
    //   steps {
    //     sh 'npm run build'
    //   }
    //   stage('Build a Docker Image'){
    //     steps{
    //       sh 'node dist/index.js'
    //     }
    //   }
    // }

    // stage('Checks on docker') {
    //   steps {
    //     sh 'docker --version'
    //   }
    }

  }
