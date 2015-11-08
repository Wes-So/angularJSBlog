'use strict';

var blogDirectives = angular.module('blogDirectives',[]);

blogDirectives.directive('blgMenu', function(){
    return {
        restrict: 'A',
        templateUrl: 'partials/menu.html',
        link: function(scope, e1,attrs){
            scope.label = attrs.menuTitle;
        }
    };
});


