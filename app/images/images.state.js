(function() {
    'use strict';

    angular
        .module('app')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('images', {
            parent: 'app',
            url: '/images',
            views: {
                'content@': {
                    templateUrl: 'app/images/images.html',
                    controller: 'ImagesController',
                    controllerAs: 'vm'
                }
            }
        });
    }
})();
