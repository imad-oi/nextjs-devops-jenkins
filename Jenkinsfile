pipeline {
    agent any

    environment {
        NETLIFY_AUTH_TOKEN = credentials('netlify-auth-token')
        NETLIFY_SITE_ID = credentials('netlify-site-id')
    }

    tools {
        nodejs 'Node 20.11.0'
    }

    stages {
        stage('Setup Node.js') {
            steps {
                sh 'node --version'
                sh 'npm --version'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh '''
                    npm ci || npm install
                    npm install netlify-cli -g
                '''
            }
        }

        stage('Type Check') {
            steps {
                sh 'npx tsc --noEmit'
            }
        }

        stage('Lint') {
            steps {
                sh 'npm run lint'
            }
        }

        stage('Build') {
            environment {
                NODE_ENV = 'production'
                NEXT_PUBLIC_API_URL = 'your-api-url-here' // Add if needed
            }
            steps {
                sh '''
                    npm run build
                    echo "Build completed, checking output directory"
                    ls -la out/
                '''
            }
        }

        stage('Test') {
            steps {
                sh 'npm test || true'
            }
        }

        stage('Deploy to Netlify') {
            steps {
                sh '''
                    if [ -d "out" ]; then
                        echo "Deploying to Netlify..."
                        npx netlify-cli deploy --site $NETLIFY_SITE_ID --auth $NETLIFY_AUTH_TOKEN --prod --dir out
                    else
                        echo "Error: 'out' directory not found"
                        exit 1
                    fi
                '''
            }
        }
    }

    post {
        always {
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