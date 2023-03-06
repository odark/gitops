node {
    def app

    stage('Clone repository') {
        checkout scm
    }

    stage('Build image') {
        app = docker.build("odark/test")
    }

    stage('Test image') {
        app.inside {
            sh 'echo "test passed"'
        }
    }

    stage('Push image') {
        docker.withRegistry('https://registry.hub.docker.com','odark') {
            app.push("${env.BUILD_NUMBER}")
        }
   }

   stage('Trigger kubernetes ManifestUpdate') {
        echo "triggering updatemanifestjob"
        build job: 'updatemanifest', parameters: [string(name: 'DOCKERTAG', value: env.BUILD_NUMBER)]
   }
}