angular.module('ngApp.ng_block_2', [])

    .controller('ng_block_2Ctrl', function($scope, $http, $log,AppSettings,DrupalService,Views,Nodes, Node) {
        $scope.settings = Drupal.settings.ng_block_2.model;
        $scope.nodes = [];
        $scope.$on('init', function (e,appScope) {
            DrupalService.queryNodes({type:'page'},function(nodes){
                $scope.nodes=nodes
            })
            $scope.$watch('nodes', function() {
                if(!$scope.nodes.length){return;}
            }, true);
            $scope.$watch('node', function () {
                if ($scope.node != 'undefined') {return;}
                $scope.renderNode($scope.node)
            }, true);
        })

        $scope.getNode = function(){
           $scope.node = Node.get({nid:this.node.nid});
        }
        $scope.renderNode = function(node){
           console.log('renderNode block 2');
        };
    })

;
