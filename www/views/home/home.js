'Use Strict';
angular.module('App').controller('homeController', function ($scope, $state,$cordovaOauth, $localStorage, $location,$http,$ionicPopup, $firebaseObject, Auth, FURL, Utils, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk, Items) {

  $scope.logOut = function () {
      Auth.logout();
      $location.path("/login");
  }


    // Set Motion
    $timeout(function() {
        ionicMaterialMotion.slideUp({
            selector: '.slide-up'
        });
    }, 300);

    $timeout(function() {
        ionicMaterialMotion.fadeSlideInRight({
            startVelocity: 3000
        });
    }, 700);

    // Set Ink
    ionicMaterialInk.displayEffect();
    
    
        $scope.peso = Items;
        $scope.addPeso = function() {
        var peso = prompt("Cual es tu peso en kg?");
        if (peso) {
          $scope.peso.$add({
            "peso": peso
          });
        }
      };
    
        $scope.estatura = Items;
        $scope.addEstatura = function() {
        var estatura = prompt("Cual es tu estatura en cm?");
        if (estatura) {
          $scope.estatura.$add({
            "estatura": estatura
          });
        }
      };
        
        $scope.showPopupPeso = function() {
        $scope.data = {};
        
        var myPopup1 = $ionicPopup.show({
            template: '<input type="text" ng-model="data.text">',
            title: 'Introduce tu peso',
            subtitle: '(En Kg)',
            scope: $scope,
            buttons: [
                { text: 'Cancel'},
                {
                    text: '<b>Save</b>',
                    type: 'button-assertive',
                    onTap: function(e) {
                        if(!$scope.data.text){
                            e.preventDefault();
                        }else{
                            return $scope.data.text;
                            
                        }
                    }
                }
            ]
            
        });
        
        myPopup1.then(function(res){
            console.log('Pulsado', res);
        });
        
        $timeout(function(){
            myPopup1.close();
        }, 15000);        
    };

    
        $scope.showPopupEst = function() {

        
        var myPopup2 = $ionicPopup.show({
            template: '<input type="text" ng-model="data.est">',
            title: 'Introduce tu estatura',
            subtitle: '(En Kg)',
            scope: $scope,
            buttons: [
                { text: 'Cancel'},
                {
                    text: '<b>Save</b>',
                    type: 'button-assertive',
                    onTap: function(e) {
                        if(!$scope.data.est){
                            e.preventDefault();
                        }else{
                            return $scope.data.est;
                        }
                    }
                }
            ]
            
        });
        
        myPopup2.then(function(res){
            console.log('Pulsado', res);
        });
        
        $timeout(function(){
            myPopup2.close();
        }, 15000);        
    };
    
    
     $scope.clientGeneroList = [
    { text: "Masculino", value: "Mas" },
    { text: "Femenino", value: "Fem" }
    ];
    
    $scope.data = {
    clientGenero: 'Mas'
    };
            
    
    $scope.showPopupGen = function() {

        
        var myPopup3 = $ionicPopup.show({
            template: '<ion-radio ng-repeat="item in clientGeneroList" ng-value="item.value" ng-model="data.clientGenero">{{ item.text }}</ion-radio>',
            title: 'Selecciona tu género',
            subtitle:'(M/F)',
            scope: $scope,
            buttons: [
                { text: 'Cancel'},
                {
                    text: '<b>Save</b>',
                    type: 'button-assertive',
                    onTap: function(e) {
                        if(!$scope.data.clientGenero){
                            e.preventDefault();
                        }else{
                            return $scope.data.clientGenero;
                        }
                    }
                }
            ]
            
        });
        
        myPopup3.then(function(res){
            console.log('Pulsado', res);
        });
        
        $timeout(function(){
            myPopup3.close();
        }, 15000);        
    };
});
