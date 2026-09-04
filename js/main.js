// Prototipo — solo interacción visual mínima (menú móvil).
// No hay lógica real de IA, búsqueda ni backend en este archivo.

document.addEventListener("DOMContentLoaded", () => {
  const burger = document.getElementById("burger");
  const navMobile = document.getElementById("navMobile");

  if (burger && navMobile) {
    burger.addEventListener("click", () => {
      navMobile.classList.toggle("is-open");
    });

    navMobile.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navMobile.classList.remove("is-open");
      });
    });
  }
});
