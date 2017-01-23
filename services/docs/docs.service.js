(function() {
    'use strict';

    angular
        .module('app')
        .factory('DocsService', DocsService);

    DocsService.$inject = ['EndpointService', 'ENDPOINT_NAMES', '$http'];

    function DocsService (EndpointService, ENDPOINT_NAMES, $http) {
        return {
            get: function () {
                return EndpointService(ENDPOINT_NAMES.ALL_DOCUMENTS).then(function (result) {
                    return $http.get(result).then(function (result) {
                        var files = [];
                        return new Promise(function(resolve, reject){
                            if(!result.data){
                                reject("Incorrect JSON formatting");
                            }
                            result.data.forEach(function (obj, i) {
                                files.push({
                                    "id": obj.Key,
                                    "url": obj.Url,
                                    "name": obj.Key,
                                    "modified": new Date(obj.LastModified).toDateString(),
                                    "owner": obj.Owner.DisplayName,
                                    "size": obj.Size
                                });
                                if(i == result.data.length - 1){
                                    resolve(files);
                                }
                            });
                        });
                    });
                });
            },
            delete: function(params) {
                return EndpointService(ENDPOINT_NAMES.TRASH_FILES).then(function (result) {
                    return $http({url: result, method: "DELETE", params: params}).then(function (res) {
                        console.log(res);
                    });
                });
            }
        };


    }
})();