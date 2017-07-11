function decodeLevels(encodedLevelsString) {
  var decodedLevels = [];

  for (var i = 0; i < encodedLevelsString.length; ++i) {
    var level = encodedLevelsString.charCodeAt(i) - 63;
    decodedLevels.push(level);
  }
  return decodedLevels;
}

let popObj = {
  title: 'Population Density vs Transit Lines',
  description: 'Denver transit lines mapped over population density as reported by census blocks.',
  layer: 'Population',
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
  title: 'Ethnic Diversity vs Transit Lines',
  description: 'Denver transit lines mapped over ethnic diversity as reported by census blocks.',
  layer: 'Diversity',
  rangeStart: 'Less Diverse',
  rangeEnd: 'More Diverse',
  colorTiles: {
    color1: '#FFFFFF',
    color2: '#00FFCB',
    color3: '#0BC5E8',
    color4: '#007EFF',
    color5: '#0023F5'
  }
};

$('#map-population').data(popObj);
$('#map-diversity').data(raceObj);

function buildLegend(ele){
  let {title, description, layer, rangeStart, rangeEnd, color1, color2, color3, color4, color5} = ele.data();
  let $legend = $('.legend');
  $legend.find('.title').text(title);
  $legend.find('.description').text(description);
  $legend.find('.layer').text(layer);
  $legend.find('.range-start').text(rangeStart);
  $legend.find('.range-end').text(rangeEnd);
  $legend.find('.color-1').css('background', `${color1}`);
  $legend.find('.color-2').css('background',` ${color2}`);
  $legend.find('.color-3').css('background', `${color3}`);
  $legend.find('.color-4').css('background', `${color4}`);
  $legend.find('.color-5').css('background', `${color5}`);
}

$('.carousel').carousel({
  interval: false,
  ride: true
});

$('#carousel-map').on('slid.bs.carousel', function (ele) {
  initMap();
  let $eleInFocus = $(ele.relatedTarget).find('.map');
  buildLegend($eleInFocus);
});
