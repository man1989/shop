pipeline {
  agent {
    kubernetes {
      yamlFile 'kaniko.yml'
    }
  }

  environment {
        APP_NAME = "shop"
        RELEASE = "1.0.0"
        IMAGE_NAME = "${APP_NAME}"
        IMAGE_TAG = "${RELEASE}-${BUILD_NUMBER}"
        /* JENKINS_API_TOKEN = credentials("JENKINS_API_TOKEN") */

    }

  stages {

    stage("Cleanup Workspace") {
      steps {
        cleanWs()
      }
    }

    stage("Checkout from SCM"){
            steps {
                git branch: 'master', credentialsId: 'github', url: 'https://github.com/man1989/shop.git'
            }

        }

    
    stage('Build & Push with Kaniko') {
      steps {
        container(name: 'kaniko', shell: '/busybox/sh') {
          sh '''#!/busybox/sh

            /kaniko/executor --dockerfile `pwd`/Dockerfile --context `pwd` --destination=registry.local.innolab.in/${IMAGE_NAME}:latest
          '''
        }
      }
    }

    stage('Deploy to k3s') {
      steps {
        script {
          // Replace image reference in the deployment YAML file
          // sh """
          // sed -i 's|image: .*|image: registry.local.innolab.in/shop:latest|' deployment.yaml
          // """

          // Apply the Kubernetes manifests
          // withEnv(["KUBECONFIG=${env.KUBECONFIG}"]) {
          sh """
          kubectl apply -f deployment.yml
          kubectl apply -f ingress.yml
          """
          // }
        }
      }
    }    
  }
}