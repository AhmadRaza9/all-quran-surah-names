const resetAllButton = document.querySelector(".button");
const checkboxes = document.querySelectorAll(".checkbox-input");

// Load the checkbox state from localStorage
for (let i = 0; i < checkboxes.length; i++) {
  const checkbox = checkboxes[i];
  const list = checkbox.closest("li");
  const checkboxId = checkbox.getAttribute("id");
  const savedState = localStorage.getItem(checkboxId);

  if (savedState === "checked") {
    checkbox.checked = true;
    list.classList.add("grey-bg");
  } else {
    checkbox.checked = false;
    list.classList.remove("grey-bg");
  }
}

// Add event listeners to checkboxes
checkboxes.forEach(function (checkbox) {
  checkbox.addEventListener("change", function () {
    const checkboxId = checkbox.getAttribute("id");
    const li = checkbox.closest("li");

    if (checkbox.checked) {
      li.classList.add("grey-bg");
      localStorage.setItem(checkboxId, "checked");
    } else {
      li.classList.remove("grey-bg");
      localStorage.setItem(checkboxId, "unchecked");
    }
  });
});

resetAllButton.addEventListener("click", function () {
  localStorage.clear();
  window.location.reload();
});

const urduTranlationLinks = document.querySelectorAll(".urdu-translation");

urduTranlationLinks.forEach((e) => {
  e.addEventListener("click", function (event) {
    event.preventDefault();

    var videoUrl = e.getAttribute("href");
    var popup = window.open(videoUrl, "popup", "width=600,height=400");
    popup.focus();
  });
});
