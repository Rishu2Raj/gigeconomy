maptilersdk.config.apiKey = mapToken;
const map = new maptilersdk.Map({
    container: 'map', // container's id or the HTML element to render the map
    style: maptilersdk.MapStyle.STREETS,
    center: coordinates,
    zoom: 7,
});
console.log(coordinates);
const marker = new maptilersdk.Marker({ color: "red" })
    .setLngLat(coordinates)
    .addTo(map);
