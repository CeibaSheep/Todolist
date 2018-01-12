angular.module('app')
    .factory('service', function($window) {
        return {
            readLocalStorage: function() {
                var localStore = $window.localStorage;
                if (!localStore.getItem('0') || localStore.length == 1) {
                    localStore.setItem('0', 0)
                }
                return localStore
            },

        }
    });


// angular.module('app', [])
//     .factory('serviceId', function() {
//         var shinyNewServiceInstance = 1;
//         // factory function body that constructs shinyNewServiceInstance
//         return shinyNewServiceInstance;
//     });