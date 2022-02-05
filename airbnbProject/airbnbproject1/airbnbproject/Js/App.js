var drop = document.getElementsByClassName("dropDown");
let down;
function mydropDown() {
  down = !down;
  down ? (drop[0].style.display = "none") : (drop[0].style.display = "block");
}

let TripData = [
  {
    img: "https://a0.muscache.com/im/pictures/0538dab4-a0fc-4035-b6b2-40fa3532ee7b.jpg?im_w=480",
    title: "Gokarna",
    discription: "393 kilometers away",
    color: "#DE3151",
  },
  {
    img: "https://a0.muscache.com/im/pictures/9fb3e0bc-29ad-41cf-823d-30e2ff583753.jpg?im_w=480",
    title: "Madikeri",
    discription: "209 kilometers away",
    color: "#D93B30",
  },
  {
    img: "https://a0.muscache.com/im/pictures/0d4ae5be-37d9-400c-917a-de52a034fe4c.jpg?im_w=480",
    title: "Chikmagalur",
    discription: "199 kilometers away",
    color: "#CC2D4A",
  },
  {
    img: "https://a0.muscache.com/im/pictures/0d4ae5be-37d9-400c-917a-de52a034fe4c.jpg?im_w=480",
    title: "Ooty",
    discription: "199 kilometers away",
    color: "#BC1A6E",
  },
];

let tripContent = document.getElementById("tripBlock");
let output = [];
TripData.forEach((trip, index) => {
  output += `
  <div class="tripContainer" style="background:${trip.color}">
  <figure>
  <img src=${trip.img} alt=${trip.title}/>
  </figure>
  <h1>${trip.title}</h1>
  <P>${trip.discription}</P>
  </div>
  `;
});

tripContent.innerHTML = output;

window.addEventListener("scroll", function () {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("_headerSection").style.position = "fixed";
    document.getElementById("_headerSection").style.background = "#fff";
    document.querySelector(".logoBlock a svg").style.fill = "red";
    document.querySelector("nav").style.display = "none";
    document.querySelector(".hiddenBlock").style.display = "flex";
  } else {
    document.getElementById("_headerSection").style.position = "static";
    document.getElementById("_headerSection").style.background = "#111";
    document.querySelector(".logoBlock a svg").style.fill = "#fff";
    document.querySelector("nav").style.display = "flex";
    document.querySelector(".hiddenBlock").style.display = "none";
  }
});

let login = document.querySelector("#login");
let model = document.querySelector("#signupBlock");
login.addEventListener(
  "click",
  e => {
    e.preventDefault();
    model.style.display = "block";
    model.classList.add("open");
    document.querySelector(".dropDown").style.display = "none";
  },
  true
);

document.addEventListener("click", e => {
  e.preventDefault();
  if (
    e.target.matches("#signupBlock article div span i") ||
    !e.target.closest("#signupBlock")
  ) {
    model.style.display = "none";
  }
}, true
);
