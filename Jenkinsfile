pipeline {
  agent any
  stages {
    stage('GitClone') {
      steps {
        git(url: 'git@github.com:toshmaina/NODEJS_CLEAN_ARCHITECTURE.git', branch: 'main', credentialsId: 'my_jenkins_github_id')
      }
    }

  }
}