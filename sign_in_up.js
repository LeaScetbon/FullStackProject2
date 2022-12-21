


function store(){

    var name = document.getElementById('name');
    var pw = document.getElementById('pw');
    var repeatpw=document.getElementById('repeat_pw');
    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;

    if(name.value.length == 0){
        alert('Please fill in email');

    }else if(pw.value.length == 0){
        alert('Please fill in password');

    }else if(name.value.length == 0 && pw.value.length == 0){
        alert('Please fill in email and password');

    // }else if(pw.value.length > 8){
    //     alert('Max of 8');

    }else if(!pw.value.match(numbers)){
        alert('please add 1 number');

    }else if(!pw.value.match(upperCaseLetters)){
        alert('please add 1 uppercase letter');

    }else if(!pw.value.match(lowerCaseLetters)){
        alert('please add 1 lovercase letter');

    }else if(pw.value!=repeatpw.value){
        alert('passwords do not match');
    }
    else{
        localStorage.setItem('name', name.value);
        localStorage.setItem('pw', pw.value);
        alert('Your account has been created');
    }
}

//checking
function check(){
    var storedName = localStorage.getItem('name');
    var storedPw = localStorage.getItem('pw');


    var userName = document.getElementById('userName');
    var userPw = document.getElementById('userPw');
    
    var userRemember = document.getElementById("rememberMe");

   
    if(userName.value == storedName && userPw.value == storedPw ){
        window.open("home_screen.html")
    }else{
        alert('Error on login');
    }
}

//cookies
//document.cookie = "username=scetbonlea@gmail.com; expires=Thu, 5 Jan 2023 12:00:00 UTC";
//console.log(document.cookie);

function setCookie(name, value, daysToLive) {
    const date = new Date();
    date.setTime(date.getTime() + (daysToLive * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = name + "=" + value + ";" + daysToLive + ";path=/";
  }

  setCookie("email","scetbonlea@gmail.com", 365),
  console.log(document.cookie);
  
  
  



