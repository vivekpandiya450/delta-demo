let loginBtn=document.getElementById("loginBtn")
loginBtn.addEventListener("click",function(){
    let user=document.getElementById("username").value
    let pass=document.getElementById("password").value
    let error=document.getElementById("error")

    let correctUser="ravi"
    let correctPass="12345"

    if(user===correctUser&&pass===correctPass){
        window.location.href="Amazon.html";
    }
    else{
        error.innerText="Incorrect username or password"
        error.style.color="red"
    }
});
