
function getLocation() {
    // check for Geolocation support
    if (navigator.geolocation) {
        console.log('Geolocation is supported!');
        //alert('Geolocation is supported')
        var startPos;
        var geoSuccess = function (position) {
            startPos = position;
            document.getElementById('startLat').value = startPos.coords.latitude;
            document.getElementById('startLon').value = startPos.coords.longitude;
        };
        var geoError = function (error) {
            if(error.code=='0'){
                alert('unknown error');
            }
            if (error.code=='1') {
                alert('permission denied');
            }
            if (error.code=='2') {
                alert('position unavailable ');
            }
            if (error.code=='3') {
                ('timed out');
            }

          console.log('Error occurred. Error code: ' + error.code);
           
        };
        navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
    }
    else {
        //console.log('Geolocation is not supported for this Browser/OS version yet.');
        alert('Geolocation is not supported for this Browser/OS version yet.');
    }
    
};