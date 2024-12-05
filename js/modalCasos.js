document.querySelectorAll(".item-casos").forEach((div) => {
  div.addEventListener("click", () => {
    const modalId = div.getAttribute("data-info");
    const modal = document.getElementById(modalId);
    modal.showModal();
  });
});

document.querySelectorAll(".close-btn").forEach((button) => {
  button.addEventListener("click", () => {
    button.closest("dialog").close();
  });
});

window.addEventListener("click", (event) => {
  const modals = document.querySelectorAll("dialog");
  modals.forEach((modal) => {
    if (modal.open && event.target === modal) {
      modal.close();
    }
  });
});
