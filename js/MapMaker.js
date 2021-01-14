class MapMaker {
  constructor(){
    this.tileurl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' 
    this.attr = 'Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors,' +
    ' <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'
    this.icon = L.icon ({
      iconUrl: '../icon-location.svg',
      iconSize: [20, 20]
    })
  }
  
  loadMapFirst(map, lat, lng) {
    map.setView([lat, lng], 13);
    L.tileLayer(this.tileurl, {attribution:this.attr}).addTo(map);
    L.marker([lat, lng], {icon:this.icon}).addTo(map)
    }

  
    updateMap(lat, lng, map) {
      map.setView([lat,lng], 13);
      L.tileLayer(this.tile, {attribution:this.attr}).addTo(map);
      L.marker([lat,lng], {icon:this.icon}).addTo(map)
      }
}

export default MapMaker;