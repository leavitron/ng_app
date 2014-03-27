angular.module('ngApp.services', ['ngResource'])

    .factory('Node', function($resource) {
        var Node = $resource( Drupal.settings.baseUrl + '?q=rest/node/:nid.json', {}, {
            update: { method: 'PUT' }
        });
        Node.prototype.update = function (node) {
            return Node.update({nid: this.nid}, angular.extend({}, this, {nid: undefined}), node);
        };
        return Node;
    }).config(["$httpProvider", function(provider) {
        provider.defaults.headers.common['X-CSRF-Token'] = Drupal.settings.ng_app.restws_csrf_token;
        provider.defaults.headers.common['X-ANGULARJS'] = 1;
        //provider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
    }])

//    .factory('TaxonomyTree', ['$http', function($http) {
//        var terms = [];
//        var server_queried = false;
//        var promise;
//        return {
//            get: function(params) {
//                if(!promise || !server_queried) {
//                    var data = $.param({vid:params.vid,maxDepth:params.maxDepth||10});
//                    $http.post(Drupal.settings.baseUrl+'?q=rest/taxonomy_vocabulary/getTree.json', data,{headers: {'Content-Type': 'application/x-www-form-urlencoded'}}
//                    ).then(function(result){
//                            server_queried = true;
//                            terms = result.data;
//                            console.log(terms);
//                            // FIXME: doesn't return
//                            return terms;
//                        });
//                }
//                return promise;
//            }
//        };
//    }])

;

