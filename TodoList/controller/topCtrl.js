angular.module('app', [])
    .controller('topControl', function($scope, service) {
        $taskList = service.readLocalStorage();
    })