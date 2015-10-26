/**
 * Created by Андрей on 22.09.2015.
 */
var app = angular.module("MyApp", [
  'ngSails',
  'ui.router',
  'messages'

]);
app.config( function myAppConfig( $stateProvider, $urlRouterProvider, $locationProvider ){
  $stateProvider.state('root',{
    url: '',
    views: {
      'main': {
        template: '<h1> some content </h1>'
      }
    }
  });
  $urlRouterProvider.when('/', '/');

  $urlRouterProvider.otherwise(function ($injector, $location ) {
   if($location.$$url === '/login' || $location.$$url === '/register' || $location.$$url === '/logout'){
      // pass through to let the web server handle this request
      window.location = $location.$$absUrl;
    }else{
      //window.location = '/';
    }
  });

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
});
//OPTIONAL! Set socket URL!
app.config(['$sailsProvider', function ($sailsProvider) {
  $sailsProvider.url = 'http://localhost:1337';
  console.log('angular started');
}]);
