const validationInput = document.getElementById("validation-input");

validationInput.addEventListener("blur", () => {
  if (validationInput.value.length === +validationInput.getAttribute("data-length")) {
    validationInput.classList.add("valid");
    validationInput.classList.remove("invalid");
  } else {
    validationInput.classList.add("invalid");
    validationInput.classList.remove("valid");
  }
});