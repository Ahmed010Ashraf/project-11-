
let email = document.querySelector(".email");
let password = document.querySelector(".password");
let p = document.querySelector("#check");
let btn = document.querySelector("#login");
let arr = JSON.parse(localStorage.getItem("arr"));

console.log(arr);

function checkDataToLogin() {
    let flag = false; 
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].email === email.value && arr[i].password === password.value) {
            flag = true;
            localStorage.setItem("name", arr[i].name);
            break;
        }
    }
    if (flag) {
        p.innerHTML = "";
        email.value = "";
        password.value = "";
        window.location.href = '../ourpage.html';
    } else {
        p.classList.replace("text-success", "text-danger");
        p.innerHTML = "incorrect password or email";
    }
}

btn.addEventListener("click", checkDataToLogin);
