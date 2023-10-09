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

    if (this.classList.contains("active")) {
      // Code to change the icon to '-' when open
      console.log("true", this);
      this.querySelector(".accordion-icon").textContent = "-";
    } else {
      // Code to change the icon to '+' when closed
      this.querySelector(".accordion-icon").textContent = "+";
    }

    // Toggle the display of the content
    content.style.display = this.classList.contains("active")
      ? "block"
      : "none";
  });
}

scrollToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);
