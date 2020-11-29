class Ejercicio115 {
    constructor() {}


    initMap() {
        const directionsRenderer = new google.maps.DirectionsRenderer();
        const directionsService = new google.maps.DirectionsService();
        navigator.geolocation.getCurrentPosition(this.mostrar);

        const map = new google.maps.Map(document.getElementById("map"), {
            zoom: 7,
            center: { lat: 43.361747, lng: -5.849877 },
        });
        directionsRenderer.setMap(map);
        directionsRenderer.setPanel(document.getElementById("right-panel"));
        const control = document.getElementById("floating-panel");
        control.style.display = "block";
        map.controls[google.maps.ControlPosition.TOP_CENTER].push(control);

        const that = this;
        const onChangeHandler = function() {
            that.calculateAndDisplayRoute(directionsService, directionsRenderer);
        };

        document.getElementById("end").addEventListener("click", onChangeHandler);
    }

    calculateAndDisplayRoute(directionsService, directionsRenderer) {
        const start = { lat: lat, lng: long };
        console.log(start);
        const end = { lat: 43.35504, lng: -5.851287 };
        directionsService.route({
                origin: start,
                destination: end,
                travelMode: google.maps.TravelMode.DRIVING,
            },
            (response, status) => {
                if (status === "OK") {
                    directionsRenderer.setDirections(response);
                } else {
                    window.alert("Directions request failed due to " + status);
                }
            }
        );
    }
    mostrar(datos) {
        lat = datos.coords.latitude;
        long = datos.coords.longitude;
        console.log(lat);
        console.log(long);
    }

}
var lat;
var long;
var ejercicio = new Ejercicio115();