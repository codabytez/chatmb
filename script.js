const accordion = document.getElementsByClassName("accordion-header");
const scrollToTop = document.querySelector(".scroll-to-top");

for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    // console.log('test')
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

scrollToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
