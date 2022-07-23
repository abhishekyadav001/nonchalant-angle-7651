document.querySelector(".categories").addEventListener("mouseenter",()=>{
    document.querySelector(".headpoints").style.display = "flex"
})

document.querySelector(".headpoints").addEventListener("mouseleave",()=>{
    document.querySelector(".headpoints").style.display = "none"
})

document.querySelector(".login").addEventListener("mouseenter",()=>{
    document.querySelector(".loginpage").style.display = "block"
})

document.querySelector(".loginpage").addEventListener("mouseleave",()=>{
    document.querySelector(".loginpage").style.display = "none"
})
document.querySelector(".submitbtn").addEventListener("click",(event)=>{
    event.preventDefault();
    let number=document.querySelector(".moble").value;
    let otp=document.querySelector(".OTP").value;
  if(number=="" && otp==""){
    alert("Fill Information First");
    return;
  }else if(number!="" && otp==""){
    alert("Enter OTP")
    return;
  }else if(otp!="" && number==""){
    alert("Enter Mobile Number first")
    return;
  }
document.querySelector(".login>p").innerText="Profile"
})