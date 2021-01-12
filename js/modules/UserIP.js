class UserIP {
  constructor(){
    this.userIPinput = document.querySelector(".header__user-ip");
    this.url = "https://api64.ipify.org?format=json";
    this.event();
  }

  event() {
      window.addEventListener("load", () => this.getUserIP());
    }

  getUserIP() {
       fetch(this.url)
       .then(response => response.json())
       .then((data => {
         console.log(data)
         this.userIPinput.textContent = `Your IP is ${data.ip}`;
       }))
    }
}

export default UserIP;