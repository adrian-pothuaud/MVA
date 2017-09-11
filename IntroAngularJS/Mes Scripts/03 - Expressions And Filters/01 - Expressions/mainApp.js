// Angular Modules takes a name (lowerCamelCase) and a list of dependencies
angular.module('mainApp', ['eventModule'])
    .config([function() {
        // Configuration is where you configure providers
        console.log("[mainApp] -> Configuration hook")
    }])
    .run([function() {
        // Run is when the app gets kicked off
        console.log("[mainApp] -> Run hook")
    }])