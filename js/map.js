$( function() { 

  function initMap() {
    $.getJSON('http://localhost/project-sass-music-travel/api/articles-data.php', function( data ) {
      var myMap = null;
      var markerClusters;
      var markers = []; 
      myMap = L.map('map').setView([48.852969, 2.349903], 11);
      markerClusters = L.markerClusterGroup(); 
      L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
        attribution: 'données © <a href="//osm.org/copyright">OpenStreetMap</a>/ODbL - rendu <a href="//openstreetmap.fr">OSM France</a>',
        minZoom: 1,
        maxZoom: 20
      }).addTo(myMap);
      for (var i = 0; i < data.result.articles.length; i++) {
        var marker = L.marker([data.result.articles[i].lat, data.result.articles[i].lon]);
        marker.bindPopup('<a href="http://localhost/project-sass-music-travel/article.php?id=' + data.result.articles[i].id + '">' + data.result.articles[i].title + '</a>' + '<br/> ' + data.result.articles[i].description);
        markerClusters.addLayer(marker); 
        markers.push(marker);
      } 
      var group = new L.featureGroup(markers); 
      myMap.fitBounds(group.getBounds().pad(0.5)); 
      myMap.addLayer(markerClusters); 
    });
  }

  initMap();  
   
});