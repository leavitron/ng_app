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



    // fixme: put in submodule

    .controller('ngWeatherCtrl', function($scope, $http, $log) {
        console.log('ngWeatherCtrl');
        // alert('ngWeatherCtrl');
        $scope.city = 'Paris';
        $scope.units = 'metric';
        //  process form submission.
        $scope.change = function() {
            var url = 'http://api.openweathermap.org/data/2.5/weather';
            $http.jsonp(url, { params : {
                q : $scope.city,
                units : $scope.units,
                callback: 'JSON_CALLBACK'
            }}).
                success(function(data, status, headers, config) {
                    $scope.main = data.main;
                    $scope.wind = data.wind;
                    $scope.description = data.weather[0].description;
                }).
                error(function(data, status, headers, config) {
                    $log.error('Could not retrieve data from ' + url); // Log an error in the browser's console
                });
        };
        // Trigger form submission for first load.
        $scope.change();
    })



;
