let name = document.querySelector(".name");
let email = document.querySelector(".email");
let password = document.querySelector(".password");
let signUp = document.querySelector("#signup");
let p = document.querySelector("#check");
let arr ;
if(localStorage.getItem("arr")){
    arr = JSON.parse(localStorage.getItem("arr"));
}
else {
    arr = [];
}
function checkData (){
let emailRegex = /\w+@gmail.com/;
let passwordRegex = /\d{5,9}/;
let nameRegex = /\w{3,9}/;
if(emailRegex.test(email.value)){
    if(passwordRegex.test(password.value)){
        if(nameRegex.test(name.value)){
            return true;
        }
        else {
            p.classList.replace("text-success","text-danger")
            p.innerHTML = "invalid name";
        }
    }
    else {
        p.classList.replace("text-success","text-danger")
        p.innerHTML = "invalid password";
    }
}
else {
    p.classList.replace("text-success","text-danger")
p.innerHTML = "invalid email";
}
return false;
}
function getdata() {
    if(name.value==""&&email.value==""&&password.value==""){
        p.classList.replace("text-success","text-danger")
        p.innerHTML = "you must enter the data";
    }
    else {
        if(checkData ()){
            let flag = true;
            for(let i=0; i<arr.length; i++){
                if(email.value==arr[i].email){
                    flag = false;
                    p.classList.replace("text-success","text-danger")
                    p.innerHTML = "this email is already exist";
                    break;
                }
            }
            if(flag){
                let customerData = {
                    name : name.value,
                    email : email.value,
                    password : password.value,
                }
                arr.push(customerData);
                localStorage.setItem("arr",JSON.stringify(arr));
                clearInputs();
                p.innerHTML = "sucess";
                p.classList.replace("text-danger","text-success")
            }
        }
    }
}
function clearInputs(){
    name.value = '';
    email.value = '';
    password.value = '';
}
signUp.addEventListener("click",getdata);