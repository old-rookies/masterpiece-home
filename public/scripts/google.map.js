window.__google = window.__google || {};
window.__google.map = window.__google.map || {
    init : function(){
        // The location of Uluru
        var uluru = {lat: -25.344, lng: 131.036};
        // The map, centered at Uluru
        var map = new google.maps.Map(
            document.getElementById('map'), {zoom: 4, center: uluru});
        // The marker, positioned at Uluru
        var marker = new google.maps.Marker({position: uluru, map: map});

        console.log('called');
    }
}

function initMap(){
    window.__google.map.init(arguments);
}
