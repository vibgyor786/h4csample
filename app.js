const hamburger_menu = document.querySelector(".hamburger-menu");
const container = document.querySelector(".navcontainer");

hamburger_menu.addEventListener("click", () => {
  container.classList.toggle("active");
});


window.onload = function () {
  console.log("loaded")
  var typed = new Typed('#typed', {
      strings: ["WELCOME TO IEEE SSIT", "CROPIN TECHNOLOGIES", "PRESENTS", "HACK4CAUSE", "MACHINE LEARNING", "ARTICIAL INTELLIGENCE","WEBDEV","BLOCKCHAIN",""],
      backSpeed: 15,
      smartBackspace: true,
      backDelay: 1900,
      startDelay: 500,
      typeSpeed: 25,
      loop: true,
  });
};