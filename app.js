const letters = document.querySelectorAll(".letters span");

letters.forEach((letter) => {
  letter.addEventListener("click", (e) => {
    letter.classList.add("active");
  });
});
