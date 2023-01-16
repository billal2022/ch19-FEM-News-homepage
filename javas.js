const opene = document.getElementById("open");
const closew =document.getElementById("close");
const navbar = document.querySelector(".nav-bar");

  opene.addEventListener("click",()=>{
navbar.classList.toggle("scale")
})
closew.addEventListener("click",()=>{
  navbar.classList.toggle("scale")
  console.log("hi");
})
  

