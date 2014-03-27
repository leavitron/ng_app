angular.module('ngApp.ng_block_3', [])

    .controller('ng_block_3Ctrl', function($scope,AppSettings,$http,$log,Nodes,Node,Views) {
        $scope.$on('init', function (e,appScope) {
            $scope.model = Drupal.settings.ng_block_3.model;
        })
    })

;
