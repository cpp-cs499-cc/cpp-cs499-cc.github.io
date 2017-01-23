(function() {
    'use strict';

    angular
        .module('app')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('docs', {
            parent: 'app',
            url: '/docs',
            views: {
                'content@': {
                    templateUrl: 'app/docs/docs.html',
                    controller: 'DocsController',
                    controllerAs: 'vm'
                },
                'fab@': {
                    templateUrl: 'app/fab/fab.html',
                    controller: 'FabController',
                    controllerAs: 'vm'
                }
            }
        });
    }
})();
