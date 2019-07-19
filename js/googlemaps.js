function createMap(id) {
    var mapProp= {
      center:new google.maps.LatLng(47.608638, -122.340138),
      zoom:15,
    };

    var map = new google.maps.Map(document.getElementById(id), mapProp);
}

function createMaps() {
  createMap('googleMap1');
  createMap('googleMap2');
  createMap('googleMap3');
}
