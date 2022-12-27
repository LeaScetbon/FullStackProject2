function gameInDeveloppement(){
  alert("We are sorry, this game is still in development!")
}

// <<<<<<< HEAD
function Hi(){
  var key=localStorage.getItem('current user');
  var name=JSON.parse(window.localStorage.getItem(key)).name;
  document.write(`<h1>Hi ${name}</h1>`);

}
//cookies
document.cookie= "username=scetbonlea@gmail.com; expires=Thu, 5 Jan 2023 12:00:00 UTC";
// document='name=kyle';
console.log(document.cookie);
console.log(navigator.cookieEnabled);


function setCookie(name, value, daysToLive) {
  const date = new Date();
  date.setTime(date.getTime() + (daysToLive * 24 * 60 * 60 * 1000));
  let expires = "expires=" + date.toUTCString();
  // debugger
  document.cookie = name + "=" + value + ";" + daysToLive + ";path=/";
  console.log(document.cookie)
}


setCookie("scetbonlea@gmail.com","lea", 365);
console.log(getCookies("email"));

function deleteCookie(name){
  setCookies(name,null,null);
}

function getCookies(name){
  const cDecoded = decodeURIComponent(document.cookies);
  const cArray = cDecoded.split("; ");
  let result;

  cArray.forEach(element=> {
      if(element.indexOf(name) == 0){
      result = element.substring(name.length + 1)
      }

  })
  return result;
  // >>>>>>> 2e969c2e5db8c77471ccaa9c62132bfec4c3be6b;
}







// function setCookie(cname,cvalue,exdays) {
//   const d = new Date();
//   d.setTime(d.getTime() + (exdays*24*60*60*1000));
//   let expires = "expires=" + d.toUTCString();
//   document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
// }

// function getCookie(cname) {
//   let name = cname + "=";
//   let decodedCookie = decodeURIComponent(document.cookie);
//   let ca = decodedCookie.split(';');
//   for(let i = 0; i < ca.length; i++) {
//     let c = ca[i];
//     while (c.charAt(0) == ' ') {
//       c = c.substring(1);
//     }
//     if (c.indexOf(name) == 0) {
//       return c.substring(name.length, c.length);
//     }
//   }
//   return "";
// }

// function checkCookie() {
//   var key=localStorage.getItem('current user');
//   var name=JSON.parse(window.localStorage.getItem(key)).name;
//   let user = getCookie(name);
//   if (user != "") {
//     alert("Welcome again " + user);
//   } else {
//      user = prompt("Please enter your name:","");
//      if (user != "" && user != null) {
//        setCookie("username", user, 30);
//      }
//   }
// }

// function WriteCookie() {
//   if( document.myform.customer.value == "" ) {
//      alert("Enter some value!");
//      return;
//   }
//   cookievalue = encodeURIComponent(document.myform.customer.value) + ";";
//   document.cookie = "name=" + cookievalue;
//   document.write ("Setting Cookies : " + "name=" + cookievalue );
// }
