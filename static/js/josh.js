// Set up function to initialize map of Connecticut on page open
function createMap() {
    // Set up variable for map to be centered on Connecticut, US
    let mapConn = L.map('map-id').setView([41.6032, -73.0877], 12);



    // Add base map layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap',
        maxZoom: 19
    }).addTo(mapConn);
};