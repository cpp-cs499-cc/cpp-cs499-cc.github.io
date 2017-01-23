(function() {
    'use strict';

    angular
        .module('app')
        .controller('NavbarController', NavbarController);

    NavbarController.$inject = [];

    function NavbarController() {
        var vm = this;
    }
})();