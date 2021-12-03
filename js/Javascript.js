document
  .querySelector(".custom-tooltip .close")
  .addEventListener("click", function () {
    this.parentElement.remove();
  });
