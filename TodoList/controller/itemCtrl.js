angular.module('app')
    .controller('itemControl', function($scope, service) {
        $scope.taskList = [
            { index: '1', value: 'dsdh' },
            { index: '2', value: 'dsddf' },
        ]
        console.log('hello')
    }).directive('item', function() {
        return {
            restrict: 'E',
            template: "../listItem/index.html"
        }
    });