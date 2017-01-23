(function () {
    'use strict';

    angular
        .module('app')
        .controller('FabController', FabController);

    FabController.$inject = ['EndpointService', 'ENDPOINT_NAMES', 'DocsSelectionService' ,'$http', 'DeleteService'];

    function FabController(EndpointService, ENDPOINT_NAMES, DocsSelectionService, $http, DeleteService) {
        var vm = this;
        vm.isOpen = false;
        vm.filesSelected = false;
        DocsSelectionService.enroll(update);
        vm.open = function () {
            vm.isOpen = true;
        };
        vm.close = function () {
            vm.isOpen = false;
        };
        vm.uploadGeneric = function () {
            EndpointService(ENDPOINT_NAMES.GENERIC_UPLOAD).then(function (result) {
                console.log(result);
            });
        };
        vm.delete = function () {
            DeleteService(DocsSelectionService.selection);
        };
        function update() {
            vm.filesSelected = DocsSelectionService.selection.length > 0;
        }
    }
})();