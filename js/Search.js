import IPinfo from '../js/IPinfo.js';
import MapMaker from '../js/MapMaker.js';

class Search {
  constructor(){
    this.input = document.querySelector(".form__input");
    this.btn = document.querySelector(".form__button");
    this.form = document.querySelector(".form")
    this.ip = document.querySelector(".ip");
    this.location = document.querySelector(".location");
    this.timezone = document.querySelector(".time");
    this.isp = document.querySelector(".isp");
    this.regexIP = /((^\s*((([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]))\s*$)|(^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$))/;
    this.regexDomain = /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+$/; 
    this.map = new MapMaker
  }

//get data from user's input
  getInputData() {
    const value = this.input.value
    return value
  }
//check if valid ipv4/ipv6 or domain addres
  validate(value) {
    let content
    let type
    value = this.getInputData();
    if(value.match(this.regexIP)) {
      type = "ipAddress"
      content = value
    }else if(value.match(this.regexDomain)){
        type = "domain"
        content = value
    } else {
      alert("Enter valid IP or domain")
    }
    return {type, content};
  }
  //run on enter
  runOnEnter(e) {
   const that = this;
   if(e.key == "Enter") {
     that.fetchData()
   } else return  
  }
  //fetch and display. remomve old map container
  fetchData() {
      document.querySelector("#mapid").outerHTML = ""
      document.querySelector('.map-container').innerHTML = '<div id="mapid" class="map-container__map"></div>'
      const map = new L.map('mapid')
      let url = this.validate();
      const info = new IPinfo(url.content, url.type)
      info.getUserData()
      .then(data => info.displayFetchedData(data))
      .then(data => this.map.updateMap(data.lat, data.lng, map))
   }
  }

export default Search;