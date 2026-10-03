const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle?.addEventListener("click", () => navLinks.classList.toggle("open"));
document.querySelectorAll(".nav-links a").forEach(link =>
  link.addEventListener("click", () => navLinks.classList.remove("open"))
);

const tabs = document.querySelectorAll(".tab");
const cards = document.querySelectorAll(".credential-card");

function filterCredentials(category) {
  cards.forEach(card => {
    card.style.display = card.dataset.category === category ? "" : "none";
  });
}
tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");
    filterCredentials(tab.dataset.category);
  });
});
filterCredentials("certified");

const modal = document.getElementById("certificateModal");
const frame = document.getElementById("certificateFrame");
const openCertificate = document.getElementById("openCertificate");

document.querySelectorAll(".view-certificate").forEach(button => {
  button.addEventListener("click", () => {
    const file = button.dataset.certificate;
    frame.src = file;
    openCertificate.href = file;
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  });
});

function closeModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  frame.src = "";
  document.body.style.overflow = "";
}
document.querySelector(".modal-close")?.addEventListener("click", closeModal);
document.querySelector(".modal-backdrop")?.addEventListener("click", closeModal);
document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeModal();
});
