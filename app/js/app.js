var toDoListApp = angular.module("toDoListApp", ["ngRoute", "ngAnimate", "mgcrea.ngStrap"])
.config( function($routeProvider, $httpProvider, $locationProvider ){
    console.log("preparing to initialize app...");
    //AppRoutes sets up the app routes before app is initialized
    $locationProvider.hashPrefix("");
    AppRoutes($routeProvider);
    $routeProvider.otherwise("/login"), { templateUrl: "views/login.html" };

    //Reset Http Headers
    //TODO: Fix this
    $httpProvider.defaults.headers.common = {};
    $httpProvider.defaults.headers.post = {};
    $httpProvider.defaults.headers.put = {};
    $httpProvider.defaults.headers.patch = {};
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
    // $httpProvider.interceptors.push('httpInterceptor');


})
.run(function($location){
    console.log("todo list app initialized!");
    // $location.path("/login");
});

//TODO: Add interceptors to include basic auth credentials with every http request
//TODO: Test CORS on localhost, & after app deployed