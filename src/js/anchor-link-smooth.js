const smoothScollAnchor = document.querySelectorAll("a[href^='#']");
for (let index = 0; index < smoothScollAnchor.length; index++) {
  const el = smoothScollAnchor[index];

  el.addEventListener("click", function (ev) {
    ev.preventDefault();
    if (document.getElementById(this.getAttribute("href").replace("#", "")))
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
  });
}
