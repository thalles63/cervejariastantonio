var map;
  $(document).ready(function(){
    map = new GMaps({
      el: '#map',
      lat: -28.518198,
      lng: -50.926406
    });
    map.addMarker({
      lat: -28.518198,
      lng: -50.926406
    });
  });