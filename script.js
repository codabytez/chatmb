const accordion = document.getElementsByClassName("accordion-header");

for (let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    // closeAllPanels();
    this.classList.toggle("active");

    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

// function closeAllPanels() {
//   for (let i = 0; i < accordion.length; i++) {
//     accordion[i].classList.remove("active");
//     var panel = accordion[i].nextElementSibling;
//     panel.style.maxHeight = null;
//   }
// }
