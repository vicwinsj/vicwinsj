document.querySelector(".scroll-btn").addEventListener("click", function (e) {
  e.preventDefault();
  document.querySelector("#portfolio-list").scrollIntoView({
    behavior: "smooth",
  });
});
