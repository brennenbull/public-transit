function decodeLevels(encodedLevelsString) {
  var decodedLevels = [];

  for (var i = 0; i < encodedLevelsString.length; ++i) {
    var level = encodedLevelsString.charCodeAt(i) - 63;
    decodedLevels.push(level);
  }
  return decodedLevels;
}

let popObj = {
  title: 'Population Density vs Transit line Routes',
  description: 'Denver transit lines mapped over population density as reported by census blocks',
  rangeStart: '0',
  rangeEnd: '>120',
  colorTiles: {
    color1: '#02F5B9',
    color2: '#00EDFF',
    color3: '#0092E8',
    color4: '#0055FF',
    color5: '#0008F5'
  }
};

let raceObj = {
  title: 'Ethnic Diversity vs Transit line Routes',
  description: 'Denver transit lines mapped over Ethnic Diversity as reported by census blocks',
  rangeStart: 'Less Diverse',
  rangeEnd: 'More Diverse',
  colorTiles: {
    color1: '#0023F5',
    color2: '#007EFF',
    color3: '#0BC5E8',
    color4: '#00FFCB'
  }
};

$('#map-population').data(popObj);
$('#map-diversity').data(raceObj);

function buildLegend(mapElement){
  let title = mapElement.data.title;
  let description = mapElement.data.description;
}

$('.carousel').carousel({
  interval: false,
  ride: true
});

$('#carousel-map').on('slid.bs.carousel', function (ele) {
  initMap();
  let $eleInFocus = $(ele.relatedTarget).find('.map');
  console.log($eleInFocus.data());
});
