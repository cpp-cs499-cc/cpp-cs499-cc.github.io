(function() {
    'use strict';

    angular
        .module('app')
        .factory('DocsSelectionService', DocsSelectionService);

    DocsSelectionService.$inject = [];

    function DocsSelectionService () {
        var callbacks = [];
        return {
            enroll: function (callback) {
                callbacks.push(callback);
            },
            update: function () {
                callbacks.forEach(function (callback) {
                    callback()
                });
            },
            selection: []
        };
    }
})();