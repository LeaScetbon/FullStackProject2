function gameInDeveloppement(){
  alert("We are sorry, this game is still in development!")
}

// <<<<<<< HEAD
function Hi(){
  var key=localStorage.getItem('current user');
  var name=key.split("@");
  document.write(`<h1>Hi ${name[0]}</h1>`);

  //document.write(`<h1>Hi ${localStorage.getItem('current user')}</h1>`);

//cookies
document.cookie = "username=scetbonlea@gmail.com; expires=Thu, 5 Jan 2023 12:00:00 UTC";
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
}
