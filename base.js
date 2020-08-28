const eye = document.querySelector("header nav a.eye");
const navMenu = document.querySelector("#nav-menu");

const pixelsTag = document.querySelector("div.pixels");
const bodyTag = document.querySelector("body");
const progressTag = document.querySelector("div.progress");
const sections = document.querySelectorAll("section");

eye.addEventListener("click", (e) => {
  const navMenu = document.querySelector("#nav-menu");
  navMenu.classList.toggle("open");

  console.log("working");
  e.preventDefault();
});

document.addEventListener("scroll", () => {
  const pixels = window.pageYOffset;

  pixelsTag.innerHTML = pixels;
});

document.addEventListener("scroll", () => {
  const pixels = window.pageYOffset;
  const pageHeight = bodyTag.getBoundingClientRect().height;
  const totalScrollableDistance = pageHeight - window.innerHeight;

  const percentage = pixels / totalScrollableDistance;

  progressTag.style.width = `${100 * percentage}%`;
});

document.addEventListener("scroll", () => {
  const topViewport = window.pageYOffset;
  const midViewport = topViewport + window.innerHeight / 2;

  sections.forEach((section) => {
    const topSection = section.offsetTop;
    const midSection = topSection + section.offsetHeight / 2;

    const distanceToSection = midViewport - midSection;

    const parallaxTags = section.querySelectorAll(`[data-parallax]`);

    // loop over each parallaxed tag
    parallaxTags.forEach((tag) => {
      const speed = parseFloat(tag.getAttribute("data-parallax"));
      tag.style.transform = `translate(0, ${distanceToSection * speed}px)`;
    });
  });
});
