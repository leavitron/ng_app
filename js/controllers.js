angular.module('ngApp.controllers', [])

    .controller('fieldCtrl', function($scope,$element,$attrs) {
        // console.log($attrs)
    })
    .controller('nodeCtrl', function($scope, $element, $attrs, AppSettings, Nodes, Node) {
        $scope.nid = $attrs.nid;
        if($('body').attr('class').match('node-page-'+$scope.nid)){
            AppSettings.currentNid = $scope.nid;
        }
        $scope.getNode = function(){
            $scope.node = Node.get({nid: $scope.nid});
        }
    })
    .controller('swipeController', function($scope, $element, $attrs, $http, $log) {
        $scope.onNextSlide = function (e) {
            console.log('next');
        };
        $scope.onPrevSlide = function (e) {
            console.log('prev');
        };
        $scope.swiperCallBack = function (e){
            var swipe = e.mySwipe;
            var id = e.id;
            var currentSlide = swipe.getPos();
            var totalSlides = swipe.getNumSlides();
            console.log('Swiper .. : '+id+' : '+(currentSlide+1)+' of '+totalSlides);
        }
    })
    .controller('accordionController', function($scope, $attrs, $element, $log) {
        $scope.data = $scope.$eval($attrs.json);
        $log.log('accordionController.items', $scope.items); // fixme:
        $scope.clickHandler = function (e) {
            console.log(e)
        };
        $scope.groupHeader = 'show'; // fixme
    })

;
