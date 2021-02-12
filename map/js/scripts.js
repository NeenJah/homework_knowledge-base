`use strict`;

ymaps.ready(init);
    function init(){
        const myMap = new ymaps.Map(`ymap`, {
            center: [55.76, 37.64],
            zoom: 7,
            controls: [],
        });
        
        const placemark = new ymaps.Placemark([55.76, 37.64], null, {
          iconLayout: 'default#image',
          iconImageHref: 'img/marker.png',
          iconImageSize: [40, 40],
          iconImageOffset: [-20, -20],
          iconShape: {
          type: 'Circle',
          coordinates: [0, 0],
          radius: 20
          },
        });
        
        myMap.geoObjects.add(placemark);
    }
    