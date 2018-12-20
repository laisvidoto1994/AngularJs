function DashCtrl() {
    var vm = this;
    vm.pageTitle = 'Dashboard <small>subtitle</small>';

    _init();

    function _init() {

    }
}

angular.module('todoApp')
    .controller('DashCtrl', DashCtrl);