// Initialize and add the map
function initMap() {
    // The map, centered in Bournemouth
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 13,
        center: { lat: 50.7402, lng: -1.8885 },
    });

    // Marker icon
    const markerImage = {
        url: "images/yoga-color.svg",
        scaledSize: new google.maps.Size(50, 50),
    };

    // Marker locations
    addMarker({
        coords: { lat: 50.7485, lng: -1.897 },
        content:
            "<h1>Slades Farm</h1><h2>Monday, Friday</h2><h3>16:00-17:00</h3>",
    });
    addMarker({
        coords: { lat: 50.727, lng: -1.888 },
        content:
            "<h1>Meyrick Park</h1><h2>Tuesday, Thursday</h2><h3>13:00-14:00</h3>",
    });
    addMarker({
        coords: { lat: 50.7395, lng: -1.845 },
        content:
            "<h1>Queens Park</h1><h2>Wednesday, Friday</h2><h3>12:00-13:00</h3>",
    });
    addMarker({
        coords: { lat: 50.7345, lng: -1.8379 },
        content:
            "<h1>Kings Park</h1><h2>Thursday, Saturday</h2><h3>19:00-20:00</h3>",
    });
    addMarker({
        coords: { lat: 50.726, lng: -1.9322 },
        content:
            "<h1>Alexandra Park</h1><h2>Tuesday, Friday</h2><h3>16:00-17:00</h3>",
    });
    addMarker({
        coords: { lat: 50.7325, lng: -1.9248 },
        content: "<h1>Branksome Rec</h1><h2>Saturday</h2><h3>10:00-11:00</h3>",
    });

    var currentInfoWindow = null;

    // Places markers on the map
    function addMarker(props) {
        const marker = new google.maps.Marker({
            position: props.coords,
            map: map,
            icon: markerImage,
        });

        var infowindow = new google.maps.InfoWindow({
            content: props.content,
        });
        google.maps.event.addListener(marker, "click", function () {
            if (currentInfoWindow != null) {
                currentInfoWindow.close();
            }
            infowindow.open(map, marker);
            currentInfoWindow = infowindow;
        });
    }
}

window.initMap = initMap;
