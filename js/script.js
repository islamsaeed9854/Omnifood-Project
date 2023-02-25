// MAKING IT DYNAMIC DATE
const vr = document.querySelector(".year");
vr.textContent = new Date().getFullYear();

// ADDING NAVIGATION WINDOW
const btnNavEl = document.querySelector(".btn-moblie-nav");
const headerEl = document.querySelector("header");
btnNavEl.addEventListener("click", () => {
  headerEl.classList.contains("nav-open")
    ? headerEl.classList.remove("nav-open")
    : headerEl.classList.add("nav-open");
});

// Fixing Smooth

const allLinks = document.querySelectorAll("a:link");
console.log(allLinks);

allLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const href = link.getAttribute("href");
    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    if (href != "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({
        behavior: "smooth",
      });
      headerEl.classList.remove("nav-open");
    }
  });
});

// STICKY NAVIGATION 

const sectionHeroEl = document.querySelector(".section-hero");

const observer = new IntersectionObserver(function(entries){
  const ent = entries[0];
  console.log(entries);
  if(ent.isIntersecting === false){
    document.querySelector('body').classList.add('sticky');
    document.querySelector('.btn-moblie-nav').style.backgroundColor = "white";
  }
  else{
    document.querySelector('body').classList.remove('sticky');
    document.querySelector('.btn-moblie-nav').style.backgroundColor = "#fdf2e9";
  }
},{
  root:null,
  threshold:0,
  rootMargin:"-80px",
});

observer.observe(sectionHeroEl);

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js
