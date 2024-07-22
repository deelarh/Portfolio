/* -----------------------------------------
  Have focus outline only for keyboard users 
 ---------------------------------------- */

document.addEventListener("DOMContentLoaded", function () {
  const text = "Saeed Ele-ojo Fadillah";
  const typingTextElement = document.getElementById("typing-text");
  let index = 0;

  function type() {
    if (index < text.length) {
      typingTextElement.textContent += text.charAt(index);
      index++;
      setTimeout(type, 150); // Adjust typing speed here
    }
  }

  type();
});

// Show the "Back to Top" button when scrolling down
window.onscroll = function () {
  var backToTopButton = document.querySelector(".back-to-top");
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
};

// Smooth scroll to the top when clicking the button
document
  .querySelector(".back-to-top")
  .addEventListener("click", function (event) {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

window.onload = type;

const handleFirstTab = (e) => {
  if (e.key === "Tab") {
    document.body.classList.add("user-is-tabbing");

    window.removeEventListener("keydown", handleFirstTab);
    window.addEventListener("mousedown", handleMouseDownOnce);
  }
};

const handleMouseDownOnce = () => {
  document.body.classList.remove("user-is-tabbing");

  window.removeEventListener("mousedown", handleMouseDownOnce);
  window.addEventListener("keydown", handleFirstTab);
};

window.addEventListener("keydown", handleFirstTab);

const backToTopButton = document.querySelector(".back-to-top");
let isBackToTopRendered = false;

let alterStyles = (isBackToTopRendered) => {
  backToTopButton.style.visibility = isBackToTopRendered ? "visible" : "hidden";
  backToTopButton.style.opacity = isBackToTopRendered ? 1 : 0;
  backToTopButton.style.transform = isBackToTopRendered
    ? "scale(1)"
    : "scale(0)";
};

window.addEventListener("scroll", () => {
  if (window.scrollY > 700) {
    isBackToTopRendered = true;
    alterStyles(isBackToTopRendered);
  } else {
    isBackToTopRendered = false;
    alterStyles(isBackToTopRendered);
  }
});
