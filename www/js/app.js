'Use Strict';
angular.module('App', ['ionic', 'ionic-material', 'ngStorage', 'ngCordova','firebase','ngMessages','ionic-datepicker'])
.config(function($stateProvider, $urlRouterProvider) {
$stateProvider.state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'views/menu/menu.html',
        controller: 'MenuController'
    })
    .state('login', {
      url: '/login',
      templateUrl: 'views/login/login.html',
      controller:'loginController'
    })
    .state('forgot', {
      url: '/forgot',
      templateUrl: 'views/forgot/forgot.html',
      controller:'forgotController'
    })
    .state('register', {
      url: '/register',
    
      templateUrl: 'views/register/register.html',
      controller:'registerController'
    })
    .state('app.home', {
      url: '/home',
    views: {
            'menuContent': {
                  templateUrl: 'views/home/home.html',
                  controller:'homeController'
            }
    }

    })
    .state('app.conexion', {
    url:'/conexion',
    views: {
        'menuContent': {
            templateUrl: 'views/Conexion/conexion.html',
            controller:'conexionController'
        }
    }
    })
    .state('app.actividad', {
      url: '/actividad',
    views: {
            'menuContent': {
                  templateUrl: 'views/actividad/actividad.html',
                  controller:'actividadController'
            }
    }

    })

    .state('app.modificar', {
      url: '/modificar',
    views: {
            'menuContent': {
                  templateUrl: 'views/modificar/modificar.html',
                  controller:'modificarController'
            }
    }
    })

    .state('app.calendario', {
      url: '/calendario',
    views: {
            'menuContent': {
                  templateUrl: 'views/calendario/calendario.html',
                  controller:'calendarioController'
            }
    }
    })
    ;
$urlRouterProvider.otherwise("/login");
})
// Changue this for your Firebase App URL.
.constant('FURL', 'https://demoble.firebaseio.com/')
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});

