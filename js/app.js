
<<<<<<< HEAD
            /*
            * DO NOT ALTER THIS SCRIPT: dynamically generated Drupal / Angular app
            */
            var ng_app_modules = ["ngCookies","ngResource","ngSanitize","ngRoute","ngApp.controllers","ngApp.directives","ngApp.services","stoute.ng-baseApp","stoute.ng-drupalService","stoute.ng-drupalService.controllers","stoute.ng-drupalService.directives","stoute.ng-drupalService.filters","stoute.ng-swipe","stoute.require","ngApp.ng_block_3","ngApp.ng_weather"];
            var ng_app_domain= "local.flexico.nl:8888";
            var ng_app_config_file = "http://local.flexico.nl:8888/sites/default/modules/ng_blocks/appsettings.json";
            window.Drupal = window.Drupal || {};
            window.Drupal.settings = window.Drupal.settings || {};
            window.Drupal.settings.baseUrl = "http://"+ng_app_domain+"/";

            var app = angular.module("ngApp",ng_app_modules)
                .controller("ngAppCtrl", function($scope,$http,$route,AppService,AppSettings,DrupalService,Node) {
                    app._rootScope = $scope;
                    $scope.isBusy = true;
                    var lastRoute = $route.current;
                    $scope.$on("$routeChangeSuccess",function(event){
                            AppSettings.currentRoute = $route.current
                            $scope.$broadcast("routeChange",$route.current)
                        }
                    );
                })
                .config(["$routeProvider",function ($routeProvider) {
                    $routeProvider
                      .when("/", {
                            templateUrl: "sites/default/modules/ng_app/templates/main.tpl.html",
                            controller: "MainCtrl",
                            resolve: bootResolve.app,
                      })
                      .when("/node/:nid",{
                            redirectTo: "/",
                            action: "node.render",
                      })
                      .otherwise({
                         redirectTo: "/"
                      });
                }]);

             var bootResolve = {
                      app: ["$q","AppService","AppSettings","DrupalService","require",function ($q,AppService,AppSettings,DrupalService,require) {
                          var defer = $q.defer();
                          var scope = app._rootScope
                          if(AppService.ready){
                              defer.resolve();
                          }else{
                              AppSettings.domain = ng_app_domain;
                              AppSettings.baseUrl = "http://"+ng_app_domain+"/";
                              AppService.initialize({
                                  config_file: ng_app_config_file ,
                                  scope: scope,
                                  callback:function(){
                                      DrupalService.initialize({domain:AppSettings.domain,callback:function(){
                                          // drupal ng_blocks models
                                          if(AppSettings.ng_app_blocks){
                                            var ng_app_blocks = AppSettings.ng_app_blocks;
                                            for(var k in ng_app_blocks){
                                              for(var kk in ng_app_blocks[k]){
                                                 window.Drupal.settings[kk]={}
                                                 window.Drupal.settings[kk].model=ng_app_blocks[k][kk]
                                              }
                                            }
                                          }
                                          scope.isBusy = false;
                                          defer.resolve();
                                          scope.$broadcast("init",scope);
                                        }
                                      })
                                  }
                              });
                          }
                          return defer.promise;
                      }]
                  }
=======
    angular.module("ngApp",["ui.bootstrap","stoute.ng-baseApp","stoute.ng-drupalService","stoute.ng-swipe","stoute.require","ngApp.controllers","ngApp.directives","ngApp.services","ngApp.ng_block_1","ngApp.ng_block_2","ngApp.ng_block_3","ngApp.ng_weather"])
        .controller("ngAppCtrl", function($scope,$http,AppService,AppSettings,DrupalService) {
            AppService.initialize({
                config_file: window.Drupal.settings.ng_app.config_file,
                scope: $scope,
                callback:function(){
                    AppSettings.siteParams = window.Drupal.settings.domain_tools;
                    AppSettings.baseUrl = AppSettings.siteParams.base_root+AppSettings.siteParams.base_path;
                    DrupalService.initialize({domain:AppSettings.siteParams.domain,version:AppSettings.version,callback:function(){
                        $scope.$broadcast("init",$scope)
                    }})
                }
            });
        });
>>>>>>> FETCH_HEAD
  