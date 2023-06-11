// Get all the checkboxes
const checkboxes = document.querySelectorAll(".checkbox-input");

// Load the checkbox state from localStorage
for (let i = 0; i < checkboxes.length; i++) {
  const checkbox = checkboxes[i];
  const checkboxId = checkbox.getAttribute("id");
  const savedState = localStorage.getItem(checkboxId);

  if (savedState === "checked") {
    checkbox.checked = true;
  } else {
    checkbox.checked = false;
  }
}

// Add event listeners to checkboxes
checkboxes.forEach(function (checkbox) {
  checkbox.addEventListener("change", function () {
    const checkboxId = checkbox.getAttribute("id");

    if (checkbox.checked) {
      localStorage.setItem(checkboxId, "checked");
    } else {
      localStorage.setItem(checkboxId, "unchecked");
    }
  });
});
