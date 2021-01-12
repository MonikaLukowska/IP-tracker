class UserIP {
  constructor(){
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
         localStorage.setItem('user-ip', data.ip)
       }))
       .catch(err => {
         console.log(err)
       })
    }
}

export default UserIP;