const langOptionItems = document.querySelectorAll(".lang-option-item");
const langOptions = document.querySelector(".nav__lang-options");
const langTextInfo = document.querySelector(".lang-text-info");

function openLangMenu() {
  langOptions.classList.toggle("hidden");
}

if (langOptionItems) {
  langOptionItems.forEach((Item) => {
    Item.addEventListener("click", (e) => {
      langOptions.classList.add("hidden");
      const id = e.target.getAttribute("id");
      switch (id) {
        case "uz":
          langTextInfo.textContent = "UZ";
          break;
        case "en":
          langTextInfo.textContent = "EN";
          break;
        case "ru":
          langTextInfo.textContent = "RU";
          break;
        default:
          break;
      }
    });
  });
}
