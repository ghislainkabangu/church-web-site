/** @format */

let openMenu = document.querySelector(".openMenu");
let navigation_mobile = document.querySelector(".navigation_mobile");
let closeMenu = document.querySelector(".closeMenu");
let link=document.querySelectorAll(".link")
openMenu.addEventListener("click", () => {
  // openMenu.style = "display:none";
  navigation_mobile.classList.add("navigation_mobileJs");
});
closeMenu.addEventListener("click", () => {
  //openMenu.style = "display:block";
  navigation_mobile.classList.remove("navigation_mobileJs");
});


for (let i = 0; i < link.length; i++) {
  link[i].addEventListener("click",()=>{
    navigation_mobile.classList.remove("navigation_mobileJs");
  })
}