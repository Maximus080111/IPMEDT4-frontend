import {login} from "./js/loginJS";
import {controls} from "./js/controlJS";

window.onload = () => {
    var currentPage = window.location.href.split("/")[window.location.href.split("/").length - 1];
    if(currentPage == "login"){login();}
    else if(currentPage == "controls"){controls();}
}