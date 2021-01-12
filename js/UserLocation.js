class UserLocation {
  constructor(){
    this.publicIp = localStorage.getItem("user-ip");
    this.url = `https://geo.ipify.org/api/v1?apiKey=at_SiB15INYsXcVuNNK1vZcN0D2dNIHG&ipAddress=${this.publicIp}`
    this.userIPinput = document.querySelector(".header__user-ip");
    this.ip = document.querySelector(".ip");
    this.location = document.querySelector(".location");
    this.timezone = document.querySelector(".time");
    this.isp = document.querySelector(".isp");
    this.event();
  }

  event() {
      window.addEventListener("load", () => this.getUserData());
    }

  getUserData() {
   fetch(this.url)
       .then(response => response.json())
       .then((data => {
         console.log(data)
         this.userIPinput.textContent = `Your IP is ${this.publicIp}`;
         this.ip.textContent = this.publicIp;
         this.location.textContent = data.location.city;
         this.timezone.textContent = `UTC ${data.location.timezone}`;
         this.isp.textContent = data.isp;
         localStorage.setItem('lat', data.location.lat);
         localStorage.setItem('lng', data.location.lng);

       }))
       .catch(err => {
         console.log(err)
       })
  }
}

export default UserLocation;