class MapMaker {
  constructor(){
    this.tileurl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    this.attr = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
    this.icon = L.icon ({
      iconUrl: 'icon-location.svg',
      iconSize: [20, 20]
    })
  }
  
  loadMapFirst(lat, lng) {
    const map = L.map('mapid')
    map.setView([lat, lng], 13);
    L.tileLayer(this.tileurl, {attribution:this.attr}).addTo(map);
    L.marker([lat, lng], {icon:this.icon}).addTo(map)
    }

  
  updateMap(lat, lng) {
      const map = new L.map('mapid')
      map.setView([lat,lng], 13);
      L.tileLayer(this.tileurl, {attribution:this.attr}).addTo(map);
      L.marker([lat,lng], {icon:this.icon}).addTo(map)
  }
}

export default MapMaker;