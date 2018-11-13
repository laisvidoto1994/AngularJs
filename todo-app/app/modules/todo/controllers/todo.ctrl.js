function TodoCtrl( TodoService, TodoFactory ) {
    var vm = this;
    vm.pageTitle = 'Todo <small>list</small>';   
    vm.users = {};

    vm.deleteUserApi = _deleteUserApi;

    _init();

    function _init() {
        TodoService.getApiList().then( _apiSuccess, _apiError );
    }

    function _apiSuccess(response){
        vm.users = TodoFactory.getApiToView( response );
    }

    function _apiError(error){
        
    }

    function _deleteUserApi( item ){
        TodoService.deleteUserApi( item.id ).then( function(response){
            // Pega o parametro para escolher a linha que vai remover da view
            // Por isso só essa parte nao estar com um method anonymous
            _deleteSuccess( item );
        }, _apiError);
    }

    function _deleteSuccess( item ){
        var index = vm.users.indexOf(item);
        vm.users.splice(index, 1);
    }

}

angular.module('todoApp')
    .controller('TodoCtrl', TodoCtrl);