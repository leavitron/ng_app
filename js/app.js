
    angular.module("ngApp",["ui.bootstrap","stoute.ng-baseApp","stoute.ng-drupalService","stoute.ng-drupalService.controllers","stoute.ng-drupalService.directives","stoute.ng-drupalService.filters","stoute.ng-swipe","stoute.require","ngApp.ng_block_1","ngApp.ng_block_2","ngApp.ng_block_3","ngApp.ng_weather"])
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
  