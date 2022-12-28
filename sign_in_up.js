
// let newObject = window.localStorage.getItem("myObject");
// console.log(JSON.parse(newObject));


function store(){

    var name = document.getElementById('name');
    var email=document.getElementById('email');
    var pw = document.getElementById('pw');
    var repeatpw=document.getElementById('repeat_pw');
    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;
   
    for(let key in localStorage){
        if(key.includes('@')){
            let user=JSON.parse(window.localStorage.getItem(key)).name;
            console.log(user);
            if(user==name.value){
                alert('This name is already in use');
                return false;
            }
        }
    }

    for(let key in localStorage){
        if(key.includes('@')){
            console.log(key);
            if(key==email.value){
                alert('This email is already registered');
                return false;
            }
        }
    }

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
    }else{
        var newDate = new Date();
        var datetime =newDate.getDate()+'/'+newDate.getMonth()+'-'+newDate.getHours()+':'+newDate.getMinutes();
        console.log(datetime);
        var User = {
            name:name.value,
            pw: pw.value,
            datetime: datetime,
            score_2048:0,
            score_Platformer:0,
            number_of_times_played_Platformer:0,
            number_of_times_played_2048:0

        };

        localStorage.setItem(email.value, JSON.stringify(User));
        
        //localStorage.setItem(name.value, pw.value);
        alert('Your account has been created');
    }
}

//checking
function check(){
    //var storedName = localStorage.getItem('name');
    //var storedPw = localStorage.getItem('pw');

    var userEmail = document.getElementById('userMail');
    var userPw = document.getElementById('userPw');

    //var storedPw = localStorage.getItem(userName.value);
    //var storedPw = window.localStorage.getItem(userName.value);
    var obj=JSON.parse(window.localStorage.getItem(userEmail.value));
    console.log(obj);

    // var userRemember = document.getElementById("rememberMe");

    // console.log(userEmail.value);
    // console.log(userPw.value);
    // console.log(obj);

    if(userEmail.value != 'undefined' && obj!=null){
        retries=3;
        count=0;
        while(count < retries){
            if( userPw.value == obj.pw ){
                localStorage.setItem('current user', userEmail.value);
                var newDate = new Date();
                var datetime = newDate.getDate()+'/'+newDate.getMonth()+'-'+newDate.getHours()+':'+newDate.getMinutes();
                console.log(datetime);
                console.log(obj.name);
                console.log(obj.name.value);
        

                obj.datetime=datetime;

                console.log(obj.name);
                console.log(obj.datetime);

                localStorage.setItem(userEmail.value, JSON.stringify(obj));
                doc=window.open("home_screen.html");
                doc.write(checkCookie());
                
            }
            else{
                count +=1;
               if (count>=3){
                    alert("Your account is blocked!")

                }
                else{
                    
                    var userPw = document.getElementById('userPw');

                }
            }
        }
    }else{
        alert('Error on login');
        
    }

}


  
  
  



