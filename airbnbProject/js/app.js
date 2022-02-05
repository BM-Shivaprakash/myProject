let scroll = document.addEventListener("scroll", e => {
    console.log(e);
    document.getElementById("_HeaderSection").style.backgroundColor = "white";
    document.getElementById("_HeaderSection").style.color = "black";
    
    
})

// scroll
let targetElement = document.getElementById("_HeaderSection");
window.addEventListener("scroll", function(){
    if (window.scrollY >= 100) {
        targetElement.classList.add = "scrolled";
        document.querySelector(".logoBlock a svg").style.fill = "red";
        document.querySelector(".hiddenBlock").style.display = "flex";
        document.querySelector("nav").style.display = "none";
    }
    else {
        targetElement.classList.remove = "scrolled";
        document.querySelector(".logoBlock a svg").style.fill = "red";
        document.querySelector(".hiddenBlock").style.display = "none";
        document.querySelector("nav").style.display = "flex";
    }
})

// login(modal) starts

let loginLink = document.querySelector(#login);
// console.log(loginLink);//connected
// dom event
loginLink.addEventListener("click", e => {
    e.preventDefault();
    modalBlock.style.display = "block";
    modalBlock.classList.add("open");
    document.querySelector(".dropDownMenu").style.display = "none";

},true);

document.addEventListener("click", e => {
    console.log(e.target.closest);

},true)

//login(modal) ends