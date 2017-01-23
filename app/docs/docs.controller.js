(function() {
    'use strict';

    angular
        .module('app')
        .controller('DocsController', DocsController);

    DocsController.$inject = ['DocsService', 'DocsSelectionService'];

    function DocsController (DocsService, DocsSelectionService) {
        var vm = this;
        vm.selected = DocsSelectionService.selection;
        vm.files = [];
        vm.update = DocsSelectionService.update;
        vm.promise = DocsService.get().then(function(result){
           vm.files = result;
        });
        vm.refresh = function () {
            vm.promise = DocsService.get().then(function(result){
                vm.files = result;
                vm.update();
            });
        }
    }
})();