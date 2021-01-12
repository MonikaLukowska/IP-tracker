class UserMapMarker {
  constructor(){
    this.lat = localStorage.getItem("lat");
    this.lng = localStorage.getItem("lng");
    this.event()
  }

  event() {
      window.addEventListener("load", () => this.loadMap());
    }

  loadMap() {
    console.log(this.lat, this.lng)
    const map = L.map('mapid').setView([54.2, this.lng], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}', {foo: 'bar', attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'}).addTo(map);
    var marker = L.marker([this.lat, this.lng]).addTo(map);
  }
}

export default UserMapMarker;