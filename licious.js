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
document.querySelector(".login>p").innerText="Profile"
})