function MainCtrl() {
    var vm = this;

    vm.titleApp = "App ToDo";
}

angular.module('todoApp')
.controller('MainCtrl', MainCtrl);