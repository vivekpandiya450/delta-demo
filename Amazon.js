let signinBtn=document.getElementById("signin-btn")
signinBtn.addEventListener("click",function(){
    window.location.href="signin.html";
});

navigator.geolocation.getCurrentPosition((position)=>{
    console.log(position.coords.latitude);
    console.log(position.coords.longitude);
})

let locationBox=document.getElementById("locationBox")
let locationText=document.getElementById("locationText")

locationBox.addEventListener("click",function(){
    let city=prompt("Enter your delivery location:")

    if(city!==null&&city.trim()!==""){
        locationText.innerText=city;
    }
})