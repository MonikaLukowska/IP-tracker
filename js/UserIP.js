class UserIP {
  constructor(){
    this.url = "https://api64.ipify.org?format=json";
    this.userIPinput = document.querySelector(".header__user-ip");
    this.publicIp = ""
    this.event();
  }

  event() {
      window.addEventListener("load", () => this.getUserIP()
       .then(data => this.displayUserIP(data))
      );
    }

 getUserIP() {
   return fetch(this.url)
       .then(response => response.json())
       .then((data => {
       localStorage.setItem('user-ip', data.ip)
       return data
       }))
       .catch(err => {
         console.log(err)
       })
    }
    
  displayUserIP(data){
      this.userIPinput.textContent = `Your IP is ${data.ip}`;
    }
}

export default UserIP;