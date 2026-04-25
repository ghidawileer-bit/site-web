document.querySelectorAll("[data-logo-image]").forEach((logo) => {
  logo.addEventListener("error", () => {
    const mark = logo.closest(".brand-mark");
    logo.style.display = "none";
    if (mark) {
      mark.classList.add("no-logo");
    }
  });
});

const currentPage = window.location.pathname.split("/").pop() || "index.html";
document.querySelectorAll("[data-nav-link]").forEach((link) => {
  const targetPage = link.getAttribute("href");
  if (targetPage === currentPage) {
    link.classList.add("is-active");
  }
});
