var map;
function initMap() {
    var mapOptions = {
        center: { lat: -8.046405476081103, lng: - 34.88636408156298 },
        zoom 6,
    }
    map = new google.maps.Map(document.getElementById('map'), map0ptions);

    var marker = new google.maps.Marker({
        position: { lat: -8.02640821713978, lng: -34.903500650307784 },
        map: map