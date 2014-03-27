angular.module('ngApp.ng_block_1', [])

    .controller('ng_block_1Ctrl', function($scope,$http,$log,AppSettings,DrupalService,Node,Nodes,SystemConnect,Views,TaxonomyVocabulary,TaxonomyTerm) {
        $scope.settings = Drupal.settings.ng_block_1.model;
        $scope.terms = $scope.nodes = $scope.nodes = $scope.menuTree = [];
        $scope.node = {};
        $scope.$on('init', function (e,appScope) {
            $scope.$watch('vocabularies',$scope.getTaxonomyTree, true);
            $scope.$watch('terms',$scope.parseTaxonomyTree, true);
            $scope.$watch('node', $scope.renderNode, true);
            $scope.vocabularies = TaxonomyVocabulary.get({vid:$scope.settings.vid});
            // $scope.user = SystemConnect.post({});
            // $scope.nodes = Nodes.get({query:'parameters[type]=app&parameters[nid]=58'});
        });
        $scope.getTaxonomyTree = function(){
            DrupalService.getTaxonomyTree($scope.settings.vid,function(result){
                $scope.terms = result
            })
        }
        $scope.parseTaxonomyTree = function(){
            if(!$scope.vocabularies.length){return;}
            angular.forEach($scope.terms, function(term, i){
                $scope.menuTree.push(angular.copy(term))
            });
            console.log('$scope.menuTree',$scope.menuTree);
        }
        $scope.getTermNodes = function(){
            $scope.nodes = Views.get({view_name:$scope.settings.view_name,view_arguments:'args[0]='+this.term.tid});
            $scope.$watch('view', function () {
                if(!$scope.nodes.length){return}
                $scope.node = Node.get({nid: $scope.nodes[0].nid});
            }, true);
        }
        $scope.renderNode = function(){
            if ($scope.node != 'undefined') {return;}
            console.log('renderNode block 1 :: '+$scope.node.nid);
        }
    })

;
