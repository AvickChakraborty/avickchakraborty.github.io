
var typed = new Typed(".text", {
    strings: ["Foundation Object" , "MDF" , "People Profile" , "Business Rules" , "Workflow" , "Time Management"],
    typeSpeed:70,
    backSpeed:70,
    backDelay:700,
    loop:true
});


const toTop = document.querySelector(".top");
window.addEventListener("scroll",() =>{
    if (window.pageYOffset > 100){
        toTop.classList.add("active");
    }
    else{
        toTop.classList.remove("active");
    }
})