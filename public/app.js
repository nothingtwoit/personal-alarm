function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}
function showPosition(position) {
    console.log(position.coords.latitude);
    console.log(position.coords.longitude);
    var location = {
        "latitude" : position.coords.latitude,
        "longitude" : position.coords.longitude,
    }
    $.post('/data', {info: location}, function (data) {
        console.log(data);
    });

}