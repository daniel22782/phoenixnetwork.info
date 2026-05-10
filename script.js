document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  const cta = document.getElementById("cta-btn");
  const contact = document.getElementById("contact");

  if (cta && contact) {
    cta.addEventListener("click", () => {
      contact.scrollIntoView({ behavior: "smooth" });
    });
  }
});
