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
  title: 'Ethnic Diversity vs Transit line Routes',
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
  let title = ele.data().title;
  let description = ele.data().description;
  let layer = ele.data().layer;
  let rangestart = ele.data().rangeStart;
  let rangeend = ele.data().rangeEnd;
  let color01 = ele.data().colorTiles.color1;
  let color02 = ele.data().colorTiles.color2;
  let color03 = ele.data().colorTiles.color3;
  let color04 = ele.data().colorTiles.color4;
  let color05 = ele.data().colorTiles.color5;
  let $legend = $('.legend');
  $legend.find('.title').text(title);
  $legend.find('.description').text(description);
  $legend.find('.layer').text(layer);
  $legend.find('.range-start').text(rangestart);
  $legend.find('.range-end').text(rangeend);
  $legend.find('.color-1').css('background', `${color01}`);
  $legend.find('.color-2').css('background',` ${color02}`);
  $legend.find('.color-3').css('background', `${color03}`);
  $legend.find('.color-4').css('background', `${color04}`);
  $legend.find('.color-5').css('background', `${color05}`);
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
