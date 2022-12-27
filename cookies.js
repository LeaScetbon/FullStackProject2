
function setCookie(cname,cvalue,exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  
  function getCookie(cname) {
    console.log(cname);
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  
  function checkCookie() {
    var key=localStorage.getItem('current user');
    let currentuser=JSON.parse(window.localStorage.getItem(key)).name;
    let user = getCookie(currentuser);
    console.log(user);
    if (user != "") {
      alert("Welcome again " + currentuser);
    } else {
      
      //  user = prompt("Please enter your name:","");
       if (currentuser != "" && currentuser != null) {
         setCookie(currentuser, key, 30);
       }
    }
  }