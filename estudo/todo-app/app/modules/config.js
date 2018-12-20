function run($rootScope, $state, $location) {
    // $rootScope.$on('$stateChangeStart', function (event, next, nextParams, toState) {
    //     if (toState.name !== "auth.signin" || toState.name === null) {
    //         $location.path("auth/signin");
    //     }
    // });
}

angular.module('todoApp').run(run);