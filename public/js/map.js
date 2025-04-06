maptilersdk.config.apiKey = mapToken;
const map = new maptilersdk.Map({
    container: 'map', // container's id or the HTML element to render the map
    style: maptilersdk.MapStyle.STREETS,
    center: listing.geometry.coordinates,
    zoom: 7,
});

 // create the popup
 var popup = new maptilersdk.Popup({ offset: 25 }).setHTML(
    `<h4>${listing.title}</h4><p>Exact location provided after booking.</p>`
);

// create DOM element for the marker
var el = document.createElement('div');
el.id = 'marker';

const marker = new maptilersdk.Marker({ color: "red" })
    .setLngLat(listing.geometry.coordinates)
    .setPopup(popup)
    .addTo(map);
