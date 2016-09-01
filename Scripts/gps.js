
function getLocation() {
    // check for Geolocation support
    if (navigator.geolocation) {
        //console.log('Geolocation is supported!');
        alert('Geolocation is supported')
        var startPos;
        var geoSuccess = function (position) {
            startPos = position;
            document.getElementById('startLat').value = startPos.coords.latitude;
            document.getElementById('startLon').value = startPos.coords.longitude;
        };
        navigator.geolocation.getCurrentPosition(geoSuccess);
    }
    else {
        //console.log('Geolocation is not supported for this Browser/OS version yet.');
        alert('Geolocation is not supported for this Browser/OS version yet.')      
    }
    
};