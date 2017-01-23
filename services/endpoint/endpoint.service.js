(function() {
    'use strict';

    angular
        .module('app')
        .factory('EndpointService', EndpointService);

    EndpointService.$inject = ['$mdDialog'];

    function EndpointService ($mdDialog) {
        var endpoints = [];
        function request(name) {
            var confirm = $mdDialog.prompt()
                .title('Please configure your endpoint.')
                .textContent('We were unable to locate an endpoint for "' + name + '" you must configure one before continuing.')
                .placeholder('http://myapp.com/' + name)
                .ariaLabel('dialog')
                .ok('Submit!')
                .cancel('Cancel');

            return $mdDialog.show(confirm).then(function(result){
                endpoints[name] = result;
            });
        }


        return function (name) {
            return new Promise(function (resolve, reject) {
                if(endpoints[name]){
                    resolve(endpoints[name]);
                } else {
                    request(name).then(function () {
                        resolve(endpoints[name]);
                    })
                }
            });
        };
    }
})();


