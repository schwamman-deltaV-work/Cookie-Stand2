function createMap(id, latX, latY) {
    var mapProp= {
      center:new google.maps.LatLng(latX, latY),
      zoom:15,
    };

  new google.maps.Map(document.getElementById(id), mapProp);
}


function createMaps() {
  createMap('googleMap1', 47.608638, -122.340138);
  createMap('googleMap2', 47.443638, -122.300444);
  createMap('googleMap3', 47.620745, -122.350433);
  createMap('googleMap4', 47.623776, -122.320630);
  createMap('googleMap5', 47.578794, -122.411136);
}
