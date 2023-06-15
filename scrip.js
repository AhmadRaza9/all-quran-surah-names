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

// window.addEventListener("load", function () {
//   let filter = document.getElementById("searchBox");

//   filter.addEventListener("keyup", function () {
//     var search = this.value.toLowerCase();
//     var items = document.querySelectorAll("ul li");

//     for (let item of items) {
//       let singleItem = item.innerHTML.toLowerCase();
//       if (singleItem.indexOf(search) == -1) {
//         item.classList.add("hide");
//       } else {
//         item.classList.remove("hide");
//       }
//     }
//   });
// });
