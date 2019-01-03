angular.module('myApp')
.run(['$transitions', '$q', 'Auth', '$state', function($transitions, $q, Auth, $state) {
  //overrides default error outputting by ui.router
  $state.defaultErrorHandler(function(error) {
    console.error(error);

  });

  //redirects to login page if we're not signed in
  $transitions.onBefore({to: 'home.**', from: '**'}, function(trans) {

    var deferred = $q.defer();

    Auth.$requireSignIn().then(function() {
      //we're signed in, so proceed to home.**
      deferred.resolve();
    }).catch(function() {
      //we're not signed in and home.** requires authentication
      //so resolve with the state you want to reroute to, refreshing
      //the url w/ reload === true
      var params = { reload: true };
      deferred.resolve($state.target('index', undefined, params));
    });

    return deferred.promise;

  });

  //redirects to home page if we're signed in
  $transitions.onBefore({to: 'index.**', from: '**'}, function(trans) {

    var deferred = $q.defer();

    Auth.$requireSignIn().then(function() {
      //we're signed in, so lets avoid going to login, and instead
      //go to our authenticated state
      var params = { reload: true };
      deferred.resolve($state.target('home', undefined, params));
    }).catch(function() {
      //we're not signed in, so continue to login.**
      deferred.resolve(); 
    });

    return deferred.promise;
    
  });
  
  //redirects to home page if we're signed in
  $transitions.onBefore({to: 'register.**', from: '**'}, function(trans) {

    var deferred = $q.defer();

    Auth.$requireSignIn().then(function() {
      //we're signed in, so lets avoid going to login, and instead
      //go to our authenticated state
      var params = { reload: true };
      deferred.resolve($state.target('home', undefined, params));
    }).catch(function() {
      //we're not signed in, so continue to login.**
      deferred.resolve(); 
    });

    return deferred.promise;
    
  });

}]);