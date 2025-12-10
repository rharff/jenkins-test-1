pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                echo 'Checkout source code'
                checkout scm
            }
        }

        stage('Validate Files') {
            steps {
                echo 'Check required files exist'
                sh '''
                  test -f index.html
                  test -f style.css
                  test -f script.js
                '''
            }
        }

        stage('Basic HTML Check') {
            steps {
                echo 'Basic HTML validation'
                sh '''
                  grep -q "<html" index.html
                  grep -q "</html>" index.html
                '''
            }
        }
    }

    post {
        success {
            echo '✅ Static site validation passed'
        }
        failure {
            echo '❌ Validation failed'
        }
    }
}
