
    angular.module("ngApp",["ngApp.ng_weather","ui.bootstrap","stoute.ng-baseApp","stoute.ng-drupalService","stoute.ng-swipe","stoute.require","ngApp.controllers","ngApp.directives","ngApp.services","ngApp.ng_block_1","ngApp.ng_block_2","ngApp.ng_block_3"])
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
  