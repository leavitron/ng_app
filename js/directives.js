 angular.module('ngApp.directives', [])

     .directive('angularNode', ['$compile', '$templateCache', function($compile, $templateCache) {
         var linker = function (scope, element, attrs) {
             var c = attrs.class;
             if (c.match('node-page')) {
                 // console.log('node-page:' +attrs.nid)
             }
             if (c.match('node-gallery')) {
                 // console.log('image')
             }
             if (c.match('node-test')) {
                 scope.test = 'zis is added by angular';
                 var newElem = angular.element("<div>test: {{test}}</div>");
                 element.prepend($compile(newElem)(scope));
             }
         };
         return {
             restrict: 'C',
             controller: "nodeCtrl",
             scope: {
                 // class:'='
             },
             link: linker
         };
     }])

     //.directive('angularField', ['$compile', function($compile) {
     .directive('field', ['$compile', function($compile) {
         var linker = function (scope, element, attrs) {
             var c = attrs.class;
             if (c.match('field-name-body')) {
             }
             if (c.match('field-name-field-image')) {
                 element.find('img').addClass('thumbnail')
             }
         };
         return {
             restrict: 'C',
             controller: "fieldCtrl",
             scope: {

             },
             link: linker
         };
     }])

     .directive('fieldNameFieldRelated', ['$compile', function($compile) {
         return {
             restrict: 'C',
             link: function(scope, element, attrs) {
                 var icon = '<i class="pull-left glyphicon glyphicon-chevron-right"></i>';
                 element.append(icon)
             }
         };
     }])


     .directive('pageHeader', ['$compile', function($compile) {
        return {
            restrict: 'C',
            link: function(scope, element, attrs) {
                var icon = '<i class="pull-left glyphicon glyphicon-chevron-down"></i>'
            }
        };
    }])

//     .directive("navigation", ['$compile',function ($compile) {
//         return {
//             restrict: 'E',
//             replace: true,
//             scope: {
//                 menu: '='
//             },
//             template: '<ul><li ng-repeat="item in menu"><a href="#">{{item.Name}}</a><span ng-if="item.Children.length > 0"><navigation menu="item.Children"></navigation></span></li></ul>',
//             compile: function (el) {
//                 var contents = el.contents().remove();
//                 var compiled;
//                 return function(scope,el){
//                     if(!compiled)
//                         compiled = $compile(contents);
//
//                     compiled(scope,function(clone){
//                         el.append(clone);
//                     });
//                 };
//             }
//         };
//
//     }])


//.directive('field', ['$compile', '$http', '$templateCache', function($compile, $http, $templateCache) {
//    var getTemplate = function(contentType) {
//        var templateLoader,
//            baseUrl = Drupal.settings.ng_app+Drupal.settings.ng_app.path_to_module+'/',
//            templateMap = {
//                text: 'text.html',
//                image: 'image.html',
//                video: 'video.html',
//                quote: 'quote.html',
//                audio: 'audio.html',
//                answer: 'answer.html'
//            };
//        var templateUrl = baseUrl + '/template/'+templateMap[contentType];
//        templateLoader = $http.get(templateUrl, {cache: $templateCache});
//        return templateLoader;
//    }
//    var linker = function(scope, element, attrs) {
//        var loader = getTemplate(scope.post.type);
//        var promise = loader.success(function(html) {
//            element.html(html);
//        }).then(function (response) {
//                element.replaceWith($compile(element.html())(scope));
//            });
//    }
//    return {
//        restrict: 'E,C',
//        scope: {
//            post:'='
//        },
//        link: linker
//    };
//})

;
