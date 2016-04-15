'Use Strict';
angular.module('App').controller('conexionController', function ($scope, $state,$cordovaOauth, $localStorage, $location,$http,$ionicPopup, $firebaseObject, Auth, FURL, Utils){
    
//  vm= this;
//  vm.foo = true;
//  vm.bar = "true";
//  vm.setFoo = function() {
//     alert("Foo: " + vm.foo);
//    };
//  vm.setBar = function() {
//     alert("Bar: " + vm.bar);
//    };

    $scope.items = [
    { id: "1" },
    { id: "2" },
    { id: "3" },
    { id: "4" },
    { id: "5" },
    { id: "6" },
    { id: "7" },
    { id: "8" },
    { id: "9" },
    { id: "10"}
  ];
    
    
    con=this; 

    
    con.devices = {};
    // UI methods.
    con.ui = {};
    
    con.start=false;
    
    con.initialize = function()
{
	document.addEventListener('deviceready', this.onDeviceReady, false);
	
	// Important to stop scanning when page reloads/closes!
	window.addEventListener('beforeunload', function(e)
	{
		con.stopScan();
	});

};



con.onDeviceReady = function()
{
	// Not used.
	// Here you can update the UI to say that
	// the device (the phone/tablet) is ready
	// to use BLE and other Cordova functions.
};

// Start the scan. Call the callback function when a device is found.
// Format:
//   callbackFun(deviceInfo, errorCode)
//   deviceInfo: address, rssi, name
//   errorCode: String
con.startScan = function(callbackFun)
{
    alert("Escaneando");
	con.stopScan();
	console.log("starting");
	evothings.ble.startScan(
		function(device)
		{
			// Report success.
			callbackFun(device, null);
            alert('device.name');
		},
		function(errorCode)
		{
			// Report error.
			callbackFun(null, errorCode);
		}
	);
};

// Stop scanning for devices.
con.stopScan = function()
{
	evothings.ble.stopScan();
};

// Called when Start Scan button is selected.
con.ui.onStartScanButton = function()
{
    
    alert("Escaneo en proceso");
	con.startScan(con.ui.deviceFound);
	con.ui.displayStatus('Scanning...');
    
};

// Called when Stop Scan button is selected.
con.ui.onStopScanButton = function()
{
	con.stopScan();
	con.devices = {};
	con.ui.displayStatus('Scanning turned off');
	con.ui.displayDeviceList();
};

// Called when a device is found.
con.ui.deviceFound = function(device, errorCode)
{
	if (device)
	{
		// Insert the device into table of found devices.
		con.devices[device.address] = device;

		// Display device in UI.
        alert("NOMBRE" + device.address + device.name);
		con.ui.displayDeviceList();
	}
	else if (errorCode)
	{
		con.ui.displayStatus('Scan Error: ' + errorCode);
	}
};

// Display the device list.
con.ui.displayDeviceList = function()
{
	// Clear device list.
	//$('#found-devices').empty();
    
    //$scope.devicelist.empty();
    con.devicelist=[];
    //con.devicelist=[];

    angular.forEach(con.devices, function (key, device) {

    con.devicelist.push({
        nombre: device.name,
        ip: device.address
    });

    // Clear input fields after push
//    $scope.device.name = "";
//    $scope.device.address= "";

});

//	var i = 1;
//	$.forEach(con.devices, function(key, device)
//	{
//		// Set background color for this item.
//
//		// Create a div tag to display sensor data.
//		var element =[
////            $(
////			'<li>'
////			+	'<b>' + device.name + '</b><br/>'
////			+	device.address + '<br/>'
////			+	device.rssi + '<br/>'
////			+ '</li>'
////		);
//        
//            {nombre: device.name},
//            {ip: device.address},
//            {rssi: device.rssi}
//            ];
//
//		$scope.devicelist.push(element);
//        //push
//	});
};

// Display a status message
con.ui.displayStatus = function(message)
{
	$('#scan-status').html(message);
};



con.initialize();

    
})