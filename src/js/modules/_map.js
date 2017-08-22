class Map extends MLP.apps.MLPModule {

  defaults() {
    this.defaults = {
      property: 'foo'
    };
  }

  init() {
    this.el = {
      map: $('#map'),
      item: $('.item'),
      square: $('.square')
    };
    this.sel = {
      sideActive: "side-active",
      locations:[
        {lat: -31.563910, lng: 147.154312},
        {lat: -33.718234, lng: 150.363181},
        {lat: -33.727111, lng: 150.371124},
        {lat: -33.848588, lng: 151.209834},
        {lat: -33.851702, lng: 151.216968},
        {lat: -34.671264, lng: 150.863657},
        {lat: -35.304724, lng: 148.662905},
        {lat: -36.817685, lng: 175.699196},
        {lat: -36.828611, lng: 175.790222},
        {lat: -37.750000, lng: 145.116667},
        {lat: -37.759859, lng: 145.128708},
        {lat: -37.765015, lng: 145.133858},
        {lat: -37.770104, lng: 145.143299},
        {lat: -37.773700, lng: 145.145187},
        {lat: -37.774785, lng: 145.137978},
        {lat: -37.819616, lng: 144.968119},
        {lat: -38.330766, lng: 144.695692},
        {lat: -39.927193, lng: 175.053218},
        {lat: -41.330162, lng: 174.865694},
        {lat: -42.734358, lng: 147.439506},
        {lat: -42.734358, lng: 147.501315},
        {lat: -42.735258, lng: 147.438000},
        {lat: -43.999792, lng: 170.463352}
      ]
    };

    super.init();
    this.events();
    emitter.on('initMap', () => {
      var uluru = {lat: -25.363, lng: 131.044};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map,
        });
    });
  }

  events() {
    this.initSquare();
    this.clickEvents();
  }

  initSquare() {
    var Obj = {
      "block": [
        {
          "title":"ASIA PACIFIC",
          "data":[
            {
              "text": "Braeside (Melbourne), AU",
              "content": [
                {
                  "dataLat": -38.007632,
                  "dataLng" : 145.107844,
                  "dataTitle" : "Braeside (Melbourne), AU",
                  "dataType" : "softgel",
                  "dataUrl" : "http://www.catalent.com/index.php/about-us/Our-Locations/ASIA-PACIFIC/Braeside-Melbourne-AU",
                  "dataId": "softgel",
                  "dataClass": "square softgel"
                },{
                  "dataLat": -38.007632,
                  "dataLng" : 145.107844,
                  "dataTitle" : "Braeside (Melbourne), AU",
                  "dataType" : "modified",
                  "dataUrl" : "http://www.catalent.com/index.php/about-us/Our-Locations/ASIA-PACIFIC/Braeside-Melbourne-AU",
                  "dataId": "modified",
                  "dataClass": "square modified"
                }
              ]
            },{
              "text": "Dee Why (Sydney), AU",
              "content": [
                {
                  "dataLat": -33.7360313,
                  "dataLng" : 151.2864794,
                  "dataTitle" : "Dee Why (Sydney), AU",
                  "dataType" : "softgel",
                  "dataUrl" : "http://www.catalent.com/index.php/about-us/Our-Locations/ASIA-PACIFIC/Dee-Why-Sydney-AU",
                  "dataId": "softgel",
                  "dataClass": "square softgel"
                }
              ]
            },{
              "text": "FTZ, Shanghai, China",
              "content": [
                {
                  "dataLat": 31.322701,
                  "dataLng" : 121.617107,
                  "dataTitle" : "FTZ, Shanghai, China",
                  "dataType" : "clinical",
                  "dataUrl" : "http://www.catalent.com/index.php/about-us/Our-Locations/ASIA-PACIFIC/FTZ-Shanghai-China",
                  "dataId": "clinical",
                  "dataClass": "square clinical"
                }
              ]
            },{
              "text": "Haining, China",
              "content": [
                {
                  "dataLat": 30.434628,
                  "dataLng" : 120.457781,
                  "dataTitle" : "Haining, China",
                  "dataType" : "softgel",
                  "dataUrl" : "http://www.catalent.com/index.php/about-us/Our-Locations/ASIA-PACIFIC/Haining-China",
                  "dataId": "softgel",
                  "dataClass": "square softgel"
                }
              ]
            },{
              "text": "Kakegawa, Japan",
              "content": [
                {
                  "dataLat": 34.812185,
                  "dataLng" : 138.03568,
                  "dataTitle" : "Kakegawa, Japan",
                  "dataType" : "softgel",
                  "dataUrl" : "http://www.catalent.com/index.php/about-us/Our-Locations/ASIA-PACIFIC/Kakegawa-Japan",
                  "dataId": "softgel",
                  "dataClass": "square softgel"
                },{
                  "dataLat": 34.812185,
                  "dataLng" : 138.03568,
                  "dataTitle" : "Kakegawa, Japan",
                  "dataType" : "softgel",
                  "dataUrl" : "http://www.catalent.com/index.php/about-us/Our-Locations/ASIA-PACIFIC/Kakegawa-Japan",
                  "dataId": "softgel",
                  "dataClass": "square softgel"
                },{
                  "dataLat": 34.812185,
                  "dataLng" : 138.03568,
                  "dataTitle" : "Kakegawa, Japan",
                  "dataType" : "clinical",
                  "dataUrl" : "http://www.catalent.com/index.php/about-us/Our-Locations/ASIA-PACIFIC/Kakegawa-Japan",
                  "dataId": "clinical",
                  "dataClass": "square clinical"
                }
              ]
            },{
              "text": "Shanghai, China",
              "content": [
                {
                  "dataLat": 31.223259,
                  "dataLng" : 121.447691,
                  "dataTitle" : "Shanghai, China",
                  "dataType" : "softgel",
                  "dataUrl" : "http://www.catalent.com/index.php/about-us/Our-Locations/ASIA-PACIFIC/Shanghai-China",
                  "dataId": "softgel",
                  "dataClass": "square softgel"
                },{
                  "dataLat": 31.223259,
                  "dataLng" : 121.447691,
                  "dataTitle" : "Shanghai, China",
                  "dataType" : "clinical",
                  "dataUrl" : "http://www.catalent.com/index.php/about-us/Our-Locations/ASIA-PACIFIC/Shanghai-China",
                  "dataId": "clinical",
                  "dataClass": "square clinical"
                }
              ]
            },{
              "text": "Singapore",
              "content": [
                {
                  "dataLat": 1.285222,
                  "dataLng" : 103.810185,
                  "dataTitle" : "Singapore",
                  "dataType" : "clinical",
                  "dataUrl" : "http://www.catalent.com/index.php/about-us/Our-Locations/ASIA-PACIFIC/Singapore",
                  "dataId": "clinical",
                  "dataClass": "square clinical"
                }
              ]
            },{
              "text": "Tokyo, Japan",
              "content": [
                {
                  "dataLat": 35.674768,
                  "dataLng" : 139.732586,
                  "dataTitle" : "Tokyo, Japan",
                  "dataType" : "biologic",
                  "dataUrl" : "http://www.catalent.com/index.php/about-us/Our-Locations/ASIA-PACIFIC/Tokyo-Japan",
                  "dataId": "biologic",
                  "dataClass": "square biologic"
                },{
                  "dataLat": 35.674768,
                  "dataLng" : 139.732586,
                  "dataTitle" : "Tokyo, Japan",
                  "dataType" : "softgel",
                  "dataUrl" : "http://www.catalent.com/index.php/about-us/Our-Locations/ASIA-PACIFIC/Tokyo-Japan",
                  "dataId": "softgel",
                  "dataClass": "square softgel"
                },{
                  "dataLat": 35.674768,
                  "dataLng" : 139.732586,
                  "dataTitle" : "Tokyo, Japan",
                  "dataType" : "modified",
                  "dataUrl" : "http://www.catalent.com/index.php/about-us/Our-Locations/ASIA-PACIFIC/Tokyo-Japan",
                  "dataId": "modified",
                  "dataClass": "square modified"
                }
              ]
            }
          ]
        },{
          "title":"EUROPE",
          "data":[
            {
              "text": "Aprilia (Rome), Italy",
              "content": [
                {
                  "dataLat": 41.756971,
                  "dataLng" : 12.562866,
                  "dataTitle" : "Aprilia (Rome), Italy",
                  "dataType" : "softgel",
                  "dataUrl" : "http://www.catalent.com/index.php/about-us/Our-Locations/EUROPE/Aprilia-Rome-Italy",
                  "dataId": "softgel",
                  "dataClass": "square softgel"
                }
              ]
            },{
              "text": "Bathgate, Scotland",
              "content": [
                {
                  "dataLat": 55.892388,
                  "dataLng" : -3.6171739,
                  "dataTitle" : "Bathgate, Scotland",
                  "dataType" : "clinical",
                  "dataUrl" : "http://www.catalent.com/index.php/about-us/Our-Locations/EUROPE/Bathgate-Scotland",
                  "dataId": "clinical",
                  "dataClass": "square clinical"
                }
              ]
            },{
              "text": "Beinheim, France",
              "content": [
                {
                  "dataLat": 48.859825,
                  "dataLng" : 8.076652,
                  "dataTitle" : "Beinheim, France",
                  "dataType" : "softgel",
                  "dataUrl" : "http://www.catalent.com/index.php/about-us/Our-Locations/EUROPE/Beinheim-France",
                  "dataId": "softgel",
                  "dataClass": "square softgel"
                }
              ]
            },{
              "text": "Bolton, UK",
              "content": [
                {
                  "dataLat": 53.555999,
                  "dataLng" : -2.533267,
                  "dataTitle" : "Bolton, UK",
                  "dataType" : "clinical",
                  "dataUrl" : "http://www.catalent.com/index.php/about-us/Our-Locations/EUROPE/Bolton-UK",
                  "dataId": "clinical",
                  "dataClass": "square clinical"
                }
              ]
            },{
              "text": "Brussels, Belgium",
              "content": [
                {
                  "dataLat": 50.910088,
                  "dataLng" : 4.397718,
                  "dataTitle" : "Brussels, Belgium",
                  "dataType" : "development",
                  "dataUrl" : "http://www.catalent.com/index.php/about-us/Our-Locations/EUROPE/Brussels-Belgium",
                  "dataId": "development",
                  "dataClass": "square development"
                },{
                  "dataLat": 50.910088,
                  "dataLng" : 4.397718,
                  "dataTitle" : "Brussels, Belgium",
                  "dataType" : "sterile",
                  "dataUrl" : "http://www.catalent.com/index.php/about-us/Our-Locations/EUROPE/Brussels-Belgium",
                  "dataId": "sterile",
                  "dataClass": "square sterile"
                }
              ]
            },{
              "text": "Cham, Switzerland",
              "content": [
                {
                  "dataLat": 47.18952,
                  "dataLng" : 8.475592,
                  "dataTitle" : "Cham, Switzerland",
                  "dataType" : "softgel",
                  "dataUrl" : "http://www.catalent.com/index.php/about-us/Our-Locations/EUROPE/Cham-Switzerland",
                  "dataId": "softgel",
                  "dataClass": "square softgel"
                }
              ]
            },{
              "text": "Dartford, UK",
              "content": [
                {
                  "dataLat": 51.453079,
                  "dataLng" : 0.262534,
                  "dataTitle" : "Dartford, UK",
                  "dataType" : "development",
                  "dataUrl" : "http://www.catalent.com/index.php/about-us/Our-Locations/EUROPE/Dartford-UK",
                  "dataId": "development",
                  "dataClass": "square development"
                }
              ]
            },{
              "text": "Eberbach, Germany",
              "content": [
                {
                  "dataLat": 49.46546,
                  "dataLng" : 8.962496,
                  "dataTitle" : "Eberbach, Germany",
                  "dataType" : "softgel",
                  "dataUrl" : "http://www.catalent.com/index.php/about-us/Our-Locations/EUROPE/Eberbach-Germany",
                  "dataId": "softgel",
                  "dataClass": "square softgel"
                }
              ]
            },{
              "text": "Limoges, France",
              "content": [
                {
                  "dataLat": 45.888813,
                  "dataLng" : 1.270294,
                  "dataTitle" : "Limoges, France",
                  "dataType" : "development",
                  "dataUrl" : "http://www.catalent.com/index.php/about-us/Our-Locations/EUROPE/Limoges-France",
                  "dataId": "development",
                  "dataClass": "square development"
                },{
                  "dataLat": 45.888813,
                  "dataLng" : 1.270294,
                  "dataTitle" : "Limoges, France",
                  "dataType" : "sterile",
                  "dataUrl" : "http://www.catalent.com/index.php/about-us/Our-Locations/EUROPE/Limoges-France",
                  "dataId": "sterile",
                  "dataClass": "square sterile"
                }
              ]
            },{
              "text": "Schorndorf, Germany",
              "content": [
                {
                  "dataLat": 48.809633,
                  "dataLng" : 9.514461,
                  "dataTitle" : "Schorndorf, Germany",
                  "dataType" : "modified",
                  "dataUrl" : "http://www.catalent.com/index.php/about-us/Our-Locations/EUROPE/Schorndorf-Germany",
                  "dataId": "modified",
                  "dataClass": "square modified"
                },{
                  "dataLat": 48.809633,
                  "dataLng" : 9.514461,
                  "dataTitle" : "Schorndorf, Germany",
                  "dataType" : "clinical",
                  "dataUrl" : "http://www.catalent.com/index.php/about-us/Our-Locations/EUROPE/Schorndorf-Germany",
                  "dataId": "clinical",
                  "dataClass": "square clinical"
                }
              ]
            },{
              "text": "nySwindon, UK",
              "content": [
                {
                  "dataLat": 51.545482,
                  "dataLng" : -1.842542,
                  "dataTitle" : "Swindon, UK",
                  "dataType" : "development",
                  "dataUrl" : "http://www.catalent.com/index.php/about-us/Our-Locations/EUROPE/Swindon-UK",
                  "dataId": "development",
                  "dataClass": "square development"
                },{
                  "dataLat": 51.545482,
                  "dataLng" : -1.842542,
                  "dataTitle" : "Swindon, UK",
                  "dataType" : "modified",
                  "dataUrl" : "http://www.catalent.com/index.php/about-us/Our-Locations/EUROPE/Swindon-UK",
                  "dataId": "modified",
                  "dataClass": "square modified"
                }
              ]
            }
          ]
        },{
          "title":"LATIN AMERICA",
          "data":[
            {
              "text": "Buenos Aires, Argentina",
              "content": [
                {
                  "dataLat": -34.569681,
                  "dataLng" : -58.591126,
                  "dataTitle" : "Buenos Aires, Argentina",
                  "dataType" : "softgel",
                  "dataUrl" : "http://www.catalent.com/index.php/about-us/Our-Locations/LATIN-AMERICA/Buenos-Aires-Argentina",
                  "dataId": "softgel",
                  "dataClass": "square softgel"
                }
              ]
            },{
              "text": "Indaiatuba, Brazil",
              "content": [
                {
                  "dataLat": -23.133794,
                  "dataLng" : -47.230735,
                  "dataTitle" : "Indaiatuba, Brazil",
                  "dataType" : "softgel",
                  "dataUrl" : "http://www.catalent.com/index.php/about-us/Our-Locations/LATIN-AMERICA/Indaiatuba-Brazil",
                  "dataId": "softgel",
                  "dataClass": "square softgel"
                }
              ]
            },{
              "text": "Montevideo, Uruguay",
              "content": [
                {
                  "dataLat": -34.903601,
                  "dataLng" : -56.135804,
                  "dataTitle" : "Montevideo, Uruguay",
                  "dataType" : "softgel",
                  "dataUrl" : "http://www.catalent.com/index.php/about-us/Our-Locations/LATIN-AMERICA/Montevideo-Uruguay",
                  "dataId": "softgel",
                  "dataClass": "square softgel"
                }
              ]
            },{
              "text": "Sorocaba, Brazil",
              "content": [
                {
                  "dataLat": -23.439782,
                  "dataLng" : -47.387338,
                  "dataTitle" : "Sorocaba, Brazil",
                  "dataType" : "softgel",
                  "dataUrl" : "http://www.catalent.com/index.php/about-us/Our-Locations/LATIN-AMERICA/Sorocaba-Brazil",
                  "dataId": "softgel",
                  "dataClass": "square softgel"
                }
              ]
            }
          ]
        },{
          "title":"AMERICA",
          "data":[
            {
              "text": "Emeryville, CA",
              "content": [
                {
                  "dataLat": 37.838439,
                  "dataLng" : -122.288869,
                  "dataTitle" : "Emeryville, CA",
                  "dataType" : "biologic",
                  "dataUrl" : "http://www.catalent.com/index.php/about-us/Our-Locations/NORTH-AMERICA/Emeryville-CA",
                  "dataId": "biologic",
                  "dataClass": "square biologic"
                }
              ]
            },{
              "text": "Kansas City, MO",
              "content": [
                {
                  "dataLat": 38.939634,
                  "dataLng" : -94.533186,
                  "dataTitle" : "Kansas City, MO",
                  "dataType" : "biologic",
                  "dataUrl" : "http://www.catalent.com/index.php/about-us/Our-Locations/NORTH-AMERICA/Kansas-City-MO",
                  "dataId": "biologic",
                  "dataClass": "square biologic"
                },{
                  "dataLat": 38.939634,
                  "dataLng" : -94.533186,
                  "dataTitle" : "Kansas City, MO",
                  "dataType" : "biologic",
                  "dataUrl" : "http://www.catalent.com/index.php/about-us/Our-Locations/NORTH-AMERICA/Kansas-City-MO",
                  "dataId": "biologic",
                  "dataClass": "square biologic"
                },{
                  "dataLat": 38.939634,
                  "dataLng" : -94.533186,
                  "dataTitle" : "Kansas City, MO",
                  "dataType" : "clinical",
                  "dataUrl" : "http://www.catalent.com/index.php/about-us/Our-Locations/NORTH-AMERICA/Kansas-City-MO",
                  "dataId": "clinical",
                  "dataClass": "square clinical"
                }
              ]
            },{
              "text": "Madison, WI",
              "content": [
                {
                  "dataLat": 43.077281,
                  "dataLng" : -89.535443,
                  "dataTitle" : "Madison, WI",
                  "dataType" : "biologic",
                  "dataUrl" : "http://www.catalent.com/index.php/about-us/Our-Locations/NORTH-AMERICA/Madison-WI",
                  "dataId": "biologic",
                  "dataClass": "square biologic"
                }
              ]
            },{
              "text": "Malvern, PA",
              "content": [
                {
                  "dataLat": 40.067349,
                  "dataLng" : -75.560338,
                  "dataTitle" : "Malvern, PA",
                  "dataType" : "development",
                  "dataUrl" : "http://www.catalent.com/index.php/about-us/Our-Locations/NORTH-AMERICA/Malvern-PA",
                  "dataId": "development",
                  "dataClass": "square development"
                }
              ]
            },{
              "text": "Morrisville/RTP, NC",
              "content": [
                {
                  "dataLat": 35.833811,
                  "dataLng" : -78.811435,
                  "dataTitle" : "Morrisville/RTP, NC",
                  "dataType" : "biologic",
                  "dataUrl" : "http://www.catalent.com/index.php/about-us/Our-Locations/NORTH-AMERICA/Morrisville-RTP-NC",
                  "dataId": "biologic",
                  "dataClass": "square biologic"
                },{
                  "dataLat": 35.833811,
                  "dataLng" : -78.811435,
                  "dataTitle" : "Morrisville/RTP, NC",
                  "dataType" : "development",
                  "dataUrl" : "http://www.catalent.com/index.php/about-us/Our-Locations/NORTH-AMERICA/Morrisville-RTP-NC",
                  "dataId": "development",
                  "dataClass": "square development"
                }
              ]
            },{
              "text": "Philadelphia, PA",
              "content": [
                {
                  "dataLat": 40.086691,
                  "dataLng" : -74.999696,
                  "dataTitle" : "Philadelphia, PA",
                  "dataType" : "clinical",
                  "dataUrl" : "http://www.catalent.com/index.php/about-us/Our-Locations/NORTH-AMERICA/Philadelphia-PA",
                  "dataId": "clinical",
                  "dataClass": "square clinical"
                }
              ]
            },{
              "text": "San Diego, CA",
              "content": [
                {
                  "dataLat": 32.886134,
                  "dataLng" : -117.164238,
                  "dataTitle" : "San Diego, CA",
                  "dataType" : "development",
                  "dataUrl" : "http://www.catalent.com/index.php/about-us/Our-Locations/NORTH-AMERICA/San-Diego-CA",
                  "dataId": "development",
                  "dataClass": "square development"
                }
              ]
            },{
              "text": "Somerset, NJ, HQ",
              "content": [
                {
                  "dataLat": 40.528871,
                  "dataLng" : -74.548494,
                  "dataTitle" : "Somerset, NJ, HQ",
                  "dataType" : "development",
                  "dataUrl" : "http://www.catalent.com/index.php/about-us/Our-Locations/NORTH-AMERICA/Somerset-NJ-HQ",
                  "dataId": "development",
                  "dataClass": "square development"
                },
                {
                  "dataLat": 40.528871,
                  "dataLng" : -74.548494,
                  "dataTitle" : "Somerset, NJ, HQ",
                  "dataType" : "modified",
                  "dataUrl" : "http://www.catalent.com/index.php/about-us/Our-Locations/NORTH-AMERICA/Somerset-NJ-HQ",
                  "dataId": "modified",
                  "dataClass": "square modified"
                }
              ]
            },{
              "text": "St. Petersburg, FL",
              "content": [
                {
                  "dataLat": 27.887412,
                  "dataLng" : -82.673206,
                  "dataTitle" : "St. Petersburg, FL",
                  "dataType" : "softgel",
                  "dataUrl" : "http://www.catalent.com/index.php/about-us/Our-Locations/NORTH-AMERICA/St.-Petersburg-FL",
                  "dataId": "softgel",
                  "dataClass": "square softgel"
                }
              ]
            },{
              "text": "Strathroy, Ontario, Canada",
              "content": [
                {
                  "dataLat": 42.986365,
                  "dataLng" : -81.625694,
                  "dataTitle" : "Strathroy, Ontario, Canada",
                  "dataType" : "softgel",
                  "dataUrl" : "http://www.catalent.com/index.php/about-us/Our-Locations/NORTH-AMERICA/Strathroy-Ontario-Canada",
                  "dataId": "softgel",
                  "dataClass": "square softgel"
                }
              ]
            },{
              "text": "Winchester, KY",
              "content": [
                {
                  "dataLat": 38.016574,
                  "dataLng" : -84.179925,
                  "dataTitle" : "Winchester, KY",
                  "dataType" : "modified",
                  "dataUrl" : "http://www.catalent.com/index.php/about-us/Our-Locations/NORTH-AMERICA/Winchester-KY",
                  "dataId": "modified",
                  "dataClass": "square modified"
                }
              ]
            },{
              "text": "Windsor, Ontario, Canada",
              "content": [
                {
                  "dataLat": 42.276625,
                  "dataLng" : -83.053937,
                  "dataTitle" : "Windsor, Ontario, Canada",
                  "dataType" : "softgel",
                  "dataUrl" : "http://www.catalent.com/index.php/about-us/Our-Locations/NORTH-AMERICA/Windsor-Ontario-Canada",
                  "dataId": "softgel",
                  "dataClass": "square softgel"
                }
              ]
            },{
              "text": "Woodstock, IL",
              "content": [
                {
                  "dataLat": 42.285588,
                  "dataLng" : -88.409724,
                  "dataTitle" : "Woodstock, IL",
                  "dataType" : "sterile",
                  "dataUrl" : "http://www.catalent.com/index.php/about-us/Our-Locations/NORTH-AMERICA/Woodstock-IL",
                  "dataId": "sterile",
                  "dataClass": "square sterile"
                }
              ]
            }
          ]
        }
      ]
    };
    var addressList = $('.address-list');
    for(var i=0, len=Obj.block.length; i<len; i++){
      addressList.append('<div class="address-list-block"><h3>'+ Obj.block[i].title +'</h3></div>');
      var addressListBlock = $('.address-list-block');
      var str = '';
      for(var j=0, lens=Obj.block[i].data.length; j<lens; j++){
        var squareItem = '';
        for(var k=0, lenss=Obj.block[i].data[j].content.length; k<lenss; k++){
          squareItem += '<span data-id="'+ Obj.block[i].data[j].content[k].dataId +'" data-lat="'+ Obj.block[i].data[j].content[k].dataLat +'" data-lng="'+ Obj.block[i].data[j].content[k].dataLng +'" data-title="'+ Obj.block[i].data[j].content[k].dataTitle +'" data-type="'+ Obj.block[i].data[j].content[k].dataType +'" data-url="'+ Obj.block[i].data[j].content[k].dataUrl +'" class="'+ Obj.block[i].data[j].content[k].dataClass +'"></span>';
        }
        str+='<p><a href="#">'+ Obj.block[i].data[j].text +'</a>'+squareItem+'</p>';
      }       
      addressListBlock.eq(i).append(str);
    }
  }

  clickEvents() {
    this.el.item.on('click', function(e) {
      var target = $(e.target);
      var id = target.attr('data-id');
      $(this).siblings().addClass('disabled');
      $(this).removeClass('disabled');
      $('.square').addClass('disabled');
      $('.square[data-id=' + id + ']').removeClass('disabled');
      if($(this).hasClass('viewAll')){
        $(this).siblings().removeClass('disabled');
        $('.square').removeClass('disabled');
      }
    });
  }

  
  


}
$.mlpModule(Map, 'Map');