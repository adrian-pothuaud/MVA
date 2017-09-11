// Angular Modules takes a name (lowerCamelCase) and a list of dependencies
angular.module('mainApp', [])
    .config([function() {
        // Configuration is where you configure providers
        console.log("Configuration hook")
    }])
    .run([function() {
        // Run is when the app gets kicked off
        console.log("Run hook")
    }])