(function() {

    angular.module('eventModule', [])
        .config([function() {
            console.log("[eventModule] -> Configuration hook")
        }])
        .run([function() {
            console.log("[eventModule] -> Run hook")
        }])
        .controller('HomeCtrl', [function() {

        }])
        .controller('ContactCtrl', [function() {

        }])
        .controller('EventCtrl', [function() {

        }])

})();