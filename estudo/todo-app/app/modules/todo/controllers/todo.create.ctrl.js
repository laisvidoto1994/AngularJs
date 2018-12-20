function TodoCreateCtrl( $state, TodoService, TodoFactory ) {
    var vm = this;
    vm.pageTitle = 'Todo <small>Create</small>';   
    vm.user = {
        name: "Arthur Costa2",
        email: "root.arthur@gmail.com",
        cpf: "30062092091",
        rg: "208926791",
        qtdChildrens: 1
    };
    vm.createUser = _createUser;

    _init();

    function _init() {
        
    }
    
    function _createUser(){
        TodoService.createUserApi( vm.user ).then(_successPost, _errorPost );
    }

    function _successPost(response){
        $state.go('main.todo');
    }

    function _errorPost(error){
        alert(error);
    }
    


}

angular.module('todoApp')
    .controller('TodoCreateCtrl', TodoCreateCtrl);