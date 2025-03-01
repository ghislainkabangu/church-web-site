/** @format */

let openMenu = document.querySelector(".openMenu");
let navigation_mobile = document.querySelector(".navigation_mobile");
let closeMenu = document.querySelector(".closeMenu");

openMenu.addEventListener("click", () => {
  // openMenu.style = "display:none";
  navigation_mobile.classList.add("navigation_mobileJs");
});
closeMenu.addEventListener("click", () => {
  //openMenu.style = "display:block";
  navigation_mobile.classList.remove("navigation_mobileJs");
});
