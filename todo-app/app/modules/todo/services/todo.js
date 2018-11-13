function TodoService( $http ){

    //var uri = "https://api.github.com/users";
    var uri = "https://academiaangular.herokuapp.com/";

    var service = {
        getApiGit       : _getApiGit,
        getApiList      : _getApiList,
        findUserApi     : _findUserApi,
        createUserApi   : _createUserApi,
        updateUserApi   : _updateUserApi,
        deleteUserApi   : _deleteUserApi
    };

    return service;

    function _getApiGit(){
        return $http.get( uri );
    }

    function _getApiList(){
        return $http.get( uri );
    }

    function _findUserApi( id ){
        return $http.get( uri + 'users/' + id );
    }

    function _createUserApi( data ){
        return $http({
            method: 'POST',
            url: uri + 'users',
            data: data
        });
    }

    function _updateUserApi( id, data ){
        return $http({
            method: 'PUT',
            url: uri + 'users/' + id,
            data: data
        });
    }

    function _deleteUserApi(id){
        return $http({
            method: 'DELETE',
            url: uri + 'users/' + id
        });
    }


}


angular.module("todoApp").service("TodoService", TodoService);