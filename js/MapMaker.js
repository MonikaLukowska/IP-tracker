class MapMaker {
  constructor(){
    this.lat = localStorage.getItem('lat');
    this.lng = localStorage.getItem('lng');
    this.icon = L.icon ({
      iconUrl: '../icon-location.svg',
      iconSize: [20, 20]
    })
  }
  
  loadMapFirst(map) {
    
    map.setView([this.lat, this.lng], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}', {foo: 'bar', attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'}).addTo(map);
    L.marker([this.lat, this.lng], {icon:this.icon}).addTo(map)
    }

  
    updateMap(lat, lng,map) {
      map.setView([lat,lng], 13);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}', {foo: 'bar', attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'}).addTo(map);
      L.marker([lat,lng]).addTo(map)
      }
    runOnEnter(e) {
      const that = this;
      if(e.key == "Enter") {
        that.updateMap(this.map)
      } else return  
     }
   
}

export default MapMaker;