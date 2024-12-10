document.querySelectorAll(".item-casos").forEach((div) => {
  div.addEventListener("click", () => {
    const modalId = div.getAttribute("data-info");
    const modal = document.getElementById(modalId);
    modal.classList.add("showAparece");
  });
});

document.querySelectorAll(".close-btn").forEach((button) => {
  const modals = document.querySelectorAll(".modal-casos");
  modals.forEach((modal) => {
    button.addEventListener("click", () => {
      modal.classList.remove("showAparece");
    });
  });
});
