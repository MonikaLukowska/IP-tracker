import '../sass/style.scss';
import UserIP from '../js/UserIP.js';
import IPinfo from '../js/IPinfo.js';
import Search from '../js/Search.js';

const userIP = new UserIP;

const publicIp = localStorage.getItem("user-ip");
const ipInfo = new IPinfo(publicIp);
ipInfo.loadFirstTime()


const search = new Search;
document.querySelector(".form__button").addEventListener("click", () =>  search.fetchData())
document.querySelector(".form").addEventListener("keydown",(e) => search.runOnEnter(e))