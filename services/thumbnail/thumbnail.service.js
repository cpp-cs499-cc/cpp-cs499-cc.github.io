(function() {
    'use strict';

    angular
        .module('app')
        .factory('ThumbnailService', ThumbnailService);

    ThumbnailService.$inject = ['EndpointService', 'ENDPOINT_NAMES', '$http'];

    function ThumbnailService (EndpointService, ENDPOINT_NAMES, $http) {
        return {
            get: function (params) {
                return EndpointService(ENDPOINT_NAMES.THUMBNAIL).then(function (result) {
                    return $http({url: result, method: "GET", params: {
                        fileid: params
                    }});
                });
            }
        };


    }
})();