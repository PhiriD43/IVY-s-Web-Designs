// Highlight the CTA button when page loads
document.addEventListener("DOMContentLoaded", () => {
  const cta = document.querySelector(".cta");
  if (cta) {
    cta.style.transition = "transform 0.5s ease, box-shadow 0.5s ease";
    setInterval(() => {
      cta.style.transform = "scale(1.05)";
      cta.style.boxShadow = "0 0 20px rgba(255,200,0,0.8)";
      setTimeout(() => {
        cta.style.transform = "scale(1)";
        cta.style.boxShadow = "none";
      }, 500);
    }, 2000);
  }
});
