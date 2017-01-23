(function() {
    'use strict';

    angular
        .module('app')
        .factory('DeleteService', DeleteService);

    DeleteService.$inject = ['EndpointService', 'ENDPOINT_NAMES', '$http'];

    function DeleteService (EndpointService, ENDPOINT_NAMES, $http) {
        return function(params) {
            return EndpointService(ENDPOINT_NAMES.TRASH_FILES).then(function (result) {
                return $http({url: result, method: "GET", params: {
                    files: params
                }}).then(function (res) {
                    console.log(res);
                });
            });
        }
    }
})();