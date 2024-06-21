// navigation bar function
function myMenufunction(){
    let menuBtn = document.getElementById("myNavMenu");
    if(menuBtn.className == "nav-menu"){
        menuBtn.className += " responsive";
    }
    else{
        menuBtn.className = "nav-menu";
    }
}
// add shadow in navigation bar with scrolling
window.onscroll = function{headershadow()};

function headershadow(){
    const navHeader = document.getElementById("header");
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
        navHeader.style.boxShadow = "0 1px 6px  rgba(0, 0, 0, 0.1)";
        navHeader.style.height = "70px";
        navHeader.style.lineHeight = "70px";
} 
else{
    navHeader.style.boxShadow = "none";
    navHeader.style.height = "90px";
    navHeader.style.lineHeight = "90px";
}
}
// typing effect
let typingEffect = new Typed(".typedtext", {
    strings : ["Developer", "Designer", "Freelancer"],
    loop : true,
    typeSpeed : 100,
    backSpeed : 80,
    backDelay : 2000
})
// scroll reveal animation
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})
// home
sr.reveal('.featured-text-card',{})
sr.reveal('.featured-name',{delay:100})
sr.reveal('.featured-text-info',{delay:200})
sr.reveal('.featured-text-btn',{delay:300})
sr.reveal('.social-icons',{delay:200})
sr.reveal('.featured-image',{interval:300})
// project box
sr.reveal('.project-box',{interval:200})
// headings
sr.reveal('.top-header',{})
// scroll reveal left- right animation
// about info and contact info
const srLeft = ScrollReveal({
    origin: 'left',
    distance: '80px',
    duration: 2000,
    reset: true
})
srLeft.reveal('.about-info',{delay:100})
srLeft.reveal('.contact-info',{delay:100})
// about skills and form box
const srRight = ScrollReveal({
    origin: 'right',
    distance: '80px',
    duration: 2000,
    reset: true
})
srRight.reveal('.about-skills',{delay:100})
srRight.reveal('.contact-form',{delay:100})
// change active link
const section = document.querySelectorAll("section[id]");
function scrollActive(){
    const scrollY = window.scrollY;
    section.forEach(current =>{
        const sectionHeight = current.offsetHeight;
        sectionTop = current.offsetTop - 50,
        sectionId = current.getAttribute("id")
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector(".nav-menu a[href*=" + sectionId + "]").classList.add("active-link");
        }
        else{
            document.querySelector(".nav-menu a[href*=" + sectionId + "]").classList.remove("active-link");
        }
    })
}
window.addEventListener("scroll", scrollActive)