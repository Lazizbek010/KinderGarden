const toTopBtn = document.querySelector(".to-Top-Btn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    toTopBtn.classList.add("active");
  } else {
    toTopBtn.classList.remove("active");
  }
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
  });
}

// ResNAv
const resNav = document.querySelector('.resNAv')
const bars = document.querySelector('.bars')

bars.addEventListener('click', ()=>{
      resNav.classList.toggle('active')
      bars.classList.toggle('active')
})