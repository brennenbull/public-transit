$('.carousel').carousel({
  interval: false,
  ride: true
});

function decodeLevels(encodedLevelsString) {
    var decodedLevels = [];

    for (var i = 0; i < encodedLevelsString.length; ++i) {
        var level = encodedLevelsString.charCodeAt(i) - 63;
        decodedLevels.push(level);
    }
    return decodedLevels;
}

$('#carousel-map').on('slid.bs.carousel', function () {
  initMap();
});
