function getMapUrl(lat, lon) {
    return `https://www.openstreetmap.org/#map=10/${lat}/${lon}`
}

module.exports = { getMapUrl }
