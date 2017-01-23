(function() {
    'use strict';

    angular
        .module('app')
        .controller('ImagesController', ImagesController);

    ImagesController.$inject = ['DocsService', 'ThumbnailService'];

    function ImagesController (DocsService, ThumbnailService) {
        var vm = this;
        vm.files = [];
        vm.promise = DocsService.get().then(function(result){
            vm.files = result;
            ThumbnailService.get(result[0].id).then(function () {
                result.forEach(function (item) {
                    if(item.name.match(/.(jpg|jpeg|png|gif)$/))
                            ThumbnailService.get(item.id).then(function (result) {
                            item.thumbnail = result.data;
                            vm.images.push(item);
                        });
                })
            });
        });
        vm.images = [];
    }
})();