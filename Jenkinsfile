pipeline {
    agent any

    environment {
        NETLIFY_AUTH_TOKEN = credentials('netlify-auth-token')
        NETLIFY_SITE_ID = credentials('netlify-site-id')
        NODE_VERSION = '18.17.0'
    }

    stages {
        stage('Setup Node.js') {
            steps {
                script {
                    // Use nvm or nodejs plugin to install Node.js
                    nodejs(nodeJSInstallationName: 'Node 18.17.0') {
                        sh 'node --version'
                    }
                }
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
                sh 'npm install netlify-cli -g'
            }
        }

        stage('Lint') {
            steps {
                sh 'npm run lint || true'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Test') {
            steps {
                sh 'npm test || true'
            }
        }

        stage('SonarQube Analysis') {
            environment {
                SONAR_TOKEN = credentials('sonar-token')
            }
            steps {
                script {
                    def scannerHome = tool 'SonarScanner'
                    withSonarQubeEnv('SonarQube') {
                        sh """
                            ${scannerHome}/bin/sonar-scanner \
                            -Dsonar.projectKey=nextjs-task-manager \
                            -Dsonar.sources=. \
                            -Dsonar.host.url=http://localhost:9000 \
                            -Dsonar.login=$SONAR_TOKEN
                        """
                    }
                }
            }
        }

        stage('Deploy to Netlify') {
            steps {
                script {
                    // Deploy to Netlify
                    sh """
                        netlify deploy --site $NETLIFY_SITE_ID --auth $NETLIFY_AUTH_TOKEN --prod --dir out
                    """
                }
            }
        }
    }

    post {
        always {
            // Clean workspace after build
            cleanWs()
        }
        success {
            echo 'Pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline failed!'
        }
    }
}