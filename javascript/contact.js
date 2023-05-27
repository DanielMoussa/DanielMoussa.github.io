function goToMaps(){
    window.location.href = "https://maps.google.com";
}

function performanceIn(){
    let map = document.getElementById('address');
    map.style.background = "url(../Photos/map.jpg)";
    map.style.transform = "scale(1.2)";
}

function performanceOut(){
    let map = document.getElementById('address');
    map.style.background = "#fff";
    map.style.transform = "scale(1)";
}

function phoneIn(){
    let phone = document.getElementById('phone');
    phone.style.background = "green";
    phone.style.transform = "scale(1.2)";
}

function phoneOut(){
    let phone = document.getElementById('phone');
    phone.style.background = "#fff";
    phone.style.transform = "scale(1)";
}

function emailIn(){
    let email = document.getElementById('email');
    email.style.background = "red";
    email.style.transform = "scale(1.2)";
}

function emailOut(){
    let email = document.getElementById('email');
    email.style.background = "#fff";
    email.style.transform = "scale(1)";
}

function validateEmail(){
    let email = document.getElementById('validate');
    if(!email.value.includes('@gmail.com') ){
        alert("YOU SHOULD ENTER A VALID EMAIL!!!")
    }
}