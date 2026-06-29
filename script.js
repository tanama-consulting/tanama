const toggle = document.querySelector(".menu-toggle");
const dropdown = document.querySelector(".menu-dropdown");

function closeMenu() {
  dropdown.classList.remove("open");
  toggle.setAttribute("aria-expanded", "false");
}

toggle.addEventListener("click", () => {
  const isOpen = dropdown.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(isOpen));
});

document.addEventListener("click", (event) => {
  if (!event.target.closest(".menu")) {
    closeMenu();
  }
});

dropdown.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});
