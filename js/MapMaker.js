class MapMaker {
  constructor(){
    this.input = document.querySelector(".form__input");
    this.btn = document.querySelector(".form__button");
    this.form = document.querySelector(".form");
    this.lat = localStorage.getItem('lat');
    this.lng = localStorage.getItem('lng');
  }
  
  loadMapFirst(map) {
    
    map.setView([this.lat, this.lng], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}', {foo: 'bar', attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'}).addTo(map);
    L.marker([this.lat, this.lng]).addTo(map)
    console.log(localStorage.getItem('lat'),"this is lat from map maker")
    }

  
    updateMap(lat, lng,map) {
      map.setView([lat,lng], 13);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}', {foo: 'bar', attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'}).addTo(map);
      var marker = L.marker([lat,lng]).addTo(map)
      }
    runOnEnter(e) {
      const that = this;
      if(e.key == "Enter") {
        that.updateMap(this.map)
      } else return  
     }
   
}

export default MapMaker;