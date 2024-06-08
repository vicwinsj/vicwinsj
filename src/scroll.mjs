document.querySelector(".scroll-down").addEventListener("click", function (e) {
  e.preventDefault();
  document.querySelector("#portfolio-list").scrollIntoView({
    behavior: "smooth",
  });
});

document.querySelector(".scroll-up").addEventListener("click", function (e) {
  e.preventDefault();
  document.querySelector("body").scrollIntoView({
    behavior: "smooth",
  });
});
