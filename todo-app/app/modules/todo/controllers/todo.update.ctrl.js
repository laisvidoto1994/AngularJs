function TodoUpdateCtrl( $state, $stateParams, TodoService, TodoFactory ) {
    var vm = this;
    vm.pageTitle    = 'Todo <small>Update</small>';   
    vm.user         = {};
    vm.updateUser   = _updateUser;

    _init();

    function _init() {
        // Valida se existe o ID se nao vai redirecionanr para lista
        if( angular.isUndefined( $stateParams.id ) ){
            $state.go('main.todo');
        }
        // caso contrario vai buscar o usuario no servidor
        TodoService.findUserApi($stateParams.id).then( _successFind, _errorFind );
    }
    
    function _successFind( response ){
        vm.user = TodoFactory.getUserApiToView(response);
    }

    function _errorFind(error){
        alert(error);
    }

    function _updateUser(){
        // Trata o obj do user para enviar para o servidor
        var user = TodoFactory.setUserViewToApi( vm.user );
        // Enviar o dado tratado pela fac
        TodoService.updateUserApi( user._id, user ).then(_successUpdate, _errorUpdate );
    }

    function _successUpdate(response){
        $state.go('main.todo');
    }

    function _errorUpdate(error){
        alert(error);
    }
    


}

angular.module('todoApp')
    .controller('TodoUpdateCtrl', TodoUpdateCtrl);