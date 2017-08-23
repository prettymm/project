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
      sideActive: "side-active"
    };
    this.map = null;
    this.haightAshbury = {lat: 30.538048, lng: 0};
    this.styledMap = [
      {
        "featureType": "landscape",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      }, {
        "featureType": "road",
        "stylers": [
          {
            "visibility": "on"
          }
        ]
      }, {
        "featureType": "administrative",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      }, {
        "featureType": "water",
        "stylers": [
          {
            "visibility": "simplified"
          }
        ]
      }
    ];
    this.markers = [];
    this.infoWindow = [];
    this.locations =
    {
      biologic:[],
      clinical:[],
      development:[],
      modified:[],
      softgel:[],
      sterile:[]
    };
    super.init();
    
    emitter.on('initMap', () => {
      this.map = new google.maps.Map(document.getElementById('map'), {
        center: this.haightAshbury,
        zoom: 2,
        styles: this.styledMap
      });
      this.events();
    });

  }

  events() {
    this.initSquare();
    this.itemClickEvents();
    this.getSquare();
    this.getMarkers();
    this.setMapOnAll(this.map, "all");
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

  getSquare() {
    var square = $('.square');
    var contentString = '';
    var dataTitle;
    for(var i=0, len=square.length; i<len; i++){
      var id = square.eq(i).attr('data-id');
      var latlng = {lat:parseFloat(square.eq(i).attr('data-lat')), lng: parseFloat(square.eq(i).attr('data-lng'))};
      if(this.locations[id]){
        this.locations[id].push(latlng);
      }
      dataTitle = square.eq(i).attr('data-title');
      contentString = '<div id="content">'+ dataTitle +'</div>';
      this.infoWindow.push(new google.maps.InfoWindow({
        content: contentString
      }));
    }
  }

  getMarkers() {
    var iconBase = 'assets/img/locations/icon-';
    var count = 0;
    for(var key in this.locations){
      for(var i=0, len=this.locations[key].length; i<len; i++){
        this.markers.push(new google.maps.Marker({
          position: this.locations[key][i],
          inx: count++,
          map: this.map,
          icon: iconBase + key + '.png',
          id: key
        }));
      }
    }
  }

  closeInfoWindow(inx, map, marker) {
    for(var i=0, len=this.infoWindow.length; i<len; i++){
      this.infoWindow[i].close();
    }
    this.infoWindow[inx].open(map, marker);
  }

  setMapOnAll(map, key) {
    var _this =this;
    var iconBase = 'assets/img/locations/icon-';
    for(var i=0, len = this.markers.length; i<len; i++){
      if(key !=='all'){
        if(this.markers[i].id === key){
          this.markers[i].setIcon(iconBase+key+'.png');
          this.markers[i].setZIndex(google.maps.Marker.MAX_ZINDEX + 10);
          this.markers[i].addListener('click', function() {
            _this.closeInfoWindow(this.inx, _this.map, this);
          });
        }else{
          this.markers[i].setIcon(iconBase+'disabled.png');
          this.markers[i].setZIndex(google.maps.Marker.MAX_ZINDEX + 0);
        }
      }else{
        this.markers[i].setIcon(iconBase+'all.png');
        this.markers[i].setZIndex(google.maps.Marker.MAX_ZINDEX + 10);
        this.markers[i].addListener('click', function() {
          _this.closeInfoWindow(this.inx, _this.map, this);
        });
      }
    }
  }

  itemClickEvents() {
    var _this = this;
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
      _this.setMapOnAll(_this.map, id);
    });
  }




}
$.mlpModule(Map, 'Map');