pipeline {
  agent {
    docker {
      image 'mcr.microsoft.com/playwright:v1.43.1-jammy'
      args '-u root'
    }
  }
  environment {
    HOME = '/root'
  }
  stages {
    stage('Install') {
      steps {
        sh 'npm ci'
      }
    }
    stage('Install Browsers') {
      steps {
        sh 'npx playwright install --with-deps'
      }
    }
    stage('Run Load Test') {
      steps {
        sh 'npx artillery run --output results.json load-test.yml'
      }
    }
    stage('Send Metrics to Prometheus Pushgateway') {
      steps {
        sh 'node report-to-prometheus.js'
      }
    }
  }
  post {
    always {
      archiveArtifacts artifacts: 'results.json', allowEmptyArchive: true
    }
  }
}