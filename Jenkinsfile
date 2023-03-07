node {
    def app

    stage('Clone repository') {
        checkout scm
    }

    stage('Env Variables') {

        echo "The build number is ${env.BUILD_NUMBER}"
        echo "You can also use \${BUILD_NUMBER} -> ${BUILD_NUMBER}"
        sh 'echo "I can access $BUILD_NUMBER in shell comman as well.'

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