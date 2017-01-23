(function() {
    'use strict';

    angular
        .module('app')
        .config(httpConfig);

    httpConfig.$inject = ['$urlRouterProvider', '$sceDelegateProvider'];

    function httpConfig($urlRouterProvider, $sceDelegateProvider) {
        $urlRouterProvider.otherwise('/');
        $sceDelegateProvider.resourceUrlWhitelist(['**']);
    }
})();
