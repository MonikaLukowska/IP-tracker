import MapMaker from '../js/MapMaker.js';
class IPinfo {
  constructor(content, value){
    this.content = content;
    this.value = value;
    this.url = `https://geo.ipify.org/api/v1?apiKey=at_SiB15INYsXcVuNNK1vZcN0D2dNIHG&${value}=${this.content}`
    this.ip = document.querySelector(".ip");
    this.location = document.querySelector(".location");
    this.timezone = document.querySelector(".time");
    this.isp = document.querySelector(".isp");
    this.map = new MapMaker  
  }

  loadFirstTime() {
      this.getUserData()
      .then(data => this.displayFetchedData(data))
      .then((data) => this.map.loadMapFirst(L.map('mapid'), data.lat, data.lng))
    }

  getUserData() {
   return fetch(this.url)
       .then(response => response.json())
       .then((data => {
         return data
       }))
       .catch(err => {
         console.log(err)
       })
  }
  
  displayFetchedData(data) {
         this.ip.textContent = data.ip;
         this.location.textContent = data.location.city;
         this.timezone.textContent = `UTC ${data.location.timezone}`;
         this.isp.textContent = data.isp;
         const lat = data.location.lat;
         const lng = data.location.lng;
         return ({lat, lng})
  }
}

export default IPinfo;