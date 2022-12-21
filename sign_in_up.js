



//localStorage.setItem('i', 1);
// var users=[];
// function counter(){
//     var j=Number(localStorage.getItem('i'));
//     j+=1;
//     console.log(j);
//     localStorage.setItem('i', j);
    
//     return j;
// }
function store(){

    var name = document.getElementById('name');
    var pw = document.getElementById('pw');
    var repeatpw=document.getElementById('repeat_pw');
    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;
    

    if(name.value.length == 0){
        alert('Please fill in name');

    }else if(pw.value.length == 0){
        alert('Please fill in password');

    }else if(name.value.length == 0 && pw.value.length == 0){
        alert('Please fill in name and password');

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
        
        
        localStorage.setItem(name.value, pw.value);
        alert('Your account has been created');
    }
}

//checking
function check(){
    //var storedName = localStorage.getItem('name');
    //var storedPw = localStorage.getItem('pw');


    var userName = document.getElementById('userName');
    var userPw = document.getElementById('userPw');

    var storedPw = localStorage.getItem(userName.value);

    
    var userRemember = document.getElementById("rememberMe");


    if(userName.value != 'undefined' && userPw.value == storedPw ){
        localStorage.setItem('current user', userName.value);
        window.open("home_screen.html");
        
    }else{
        alert('Error on login');
    }

}


  
  
  



