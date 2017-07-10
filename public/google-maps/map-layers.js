
function initMap() {
  let denver = {lat:39.731009, lng: -104.999619};
  let map1 = new google.maps.Map(document.getElementById('map-diversity'), {
    zoom: 13,
    center: denver,
    disableDefaultUI: true,
    scrollwheel: false,
    draggable: false,
  });

  let map2 = new google.maps.Map(document.getElementById('map-population'), {
    zoom: 13,
    center: denver,
    disableDefaultUI: true,
    scrollwheel: false,
    draggable: false,
  });

  let raceLayer = new google.maps.FusionTablesLayer({
    query: {
      select: 'geometry',
      from: '1rUSVXaP8YJTkoYqE9ptzZGXydvig4Zvgs7Vnufy1'
    },
    styles: [{
      where: "'PCT_WHITE' <= 1",
      polygonOptions: {
        fillColor: '#FFFFFF',
        fillOpacity: 0.1
      }
    },{
      where: "'PCT_WHITE' <= 40 AND 'PCT_WHITE' > 1 ",
      polygonOptions: {
        fillColor: '#0023F5',
        fillOpacity: 0.4
      }
    },{
      where: "'PCT_WHITE' <= 60 AND 'PCT_WHITE' > 40 ",
      polygonOptions: {
        fillColor: '#007EFF',
        fillOpacity: 0.4
      }
    },{
      where: "'PCT_WHITE' <= 80 AND 'PCT_WHITE' > 60 ",
      polygonOptions: {
        fillColor: '#0BC5E8',
        fillOpacity: 0.4
      }
    },{
      where: "'PCT_WHITE' <= 100 AND 'PCT_WHITE' > 80 ",
      polygonOptions: {
        fillColor: '#00FFCB',
        fillOpacity: 0.4
      }
    }]
  });
  raceLayer.setMap(map1);

  let populationLayer = new google.maps.FusionTablesLayer({
    query: {
      select: 'geometry',
      from: '1rUSVXaP8YJTkoYqE9ptzZGXydvig4Zvgs7Vnufy1'
    },
    styles:[{
      where: "'POPULATION_2010' <= 20",
      polygonOptions: {
        fillColor: '#02F5B9',
        fillOpacity: 0.1
      }
    },{
      where:"'POPULATION_2010' > 20 AND 'POPULATION_2010' <= 60 ",
      polygonOptions: {
        fillColor: '#00EDFF',
        fillOpacity: 0.5
      }
    },{
      where:"'POPULATION_2010' > 60 AND 'POPULATION_2010' <= 80 ",
      polygonOptions: {
        fillColor: '#0092E8',
        fillOpacity: 0.6
      }
    },{
      where:"'POPULATION_2010' > 80 AND 'POPULATION_2010' <= 120 ",
      polygonOptions: {
        fillColor: '#0055FF',
        fillOpacity: 0.7
      }
    },{
      where:"'POPULATION_2010' > 120",
      polygonOptions: {
        fillColor: '#0008F5',
        fillOpacity: 0.8
      }
    }]
  });

  populationLayer.setMap(map2);

  drawlines(map1,'#ff0000','#ffe100');
  drawlines(map2,'#ff0000','#ffe100');

}
