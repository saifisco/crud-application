const form_element = document.querySelector(".form");
const table_body = document.querySelector("tbody");
const inputs = document.querySelectorAll("input");
inputs.forEach((element) => {
  element.addEventListener("input", (e) => {
    e.target.style.borderColor = "inherit";
  });
});
form_element.addEventListener("submit", (e) => {
  e.preventDefault();
  if (
    e.target[0].value == "" ||
    e.target[1].value == "" ||
    e.target[2].value == ""
  ) {
    if (e.target[0].value == "") {
      e.target[0].style.borderColor = "red";
    }
    if (e.target[1].value == "") {
      e.target[1].style.borderColor = "red";
    }
    if (e.target[2].value == "") {
      e.target[2].style.borderColor = "red";
    }
    return;
  }
  e.target[0].style.borderColor = "inherit";
  table_body.innerHTML += `<tr>
          <td>${e.target[0].value}</td>
          <td>${e.target[1].value}</td>
          <td>${e.target[2].value}</td>
          <td>
            <button onClick="editItem(this)" type="button" class="btn btn-warning">Edit</button>
            <button onClick="deleteItem(this)" type="button" class="btn btn-danger">Delete</button>
          </td>
        </tr>`;
  e.target[0].value = "";
  e.target[1].value = "";
  e.target[2].value = "";
});
function deleteItem(e) {
  e.parentElement.parentElement.remove();
}
function editItem(e) {
  // inputs[0].value = ''
  // inputs[1].value = ''
  // inputs[2].value = ''
  inputs[0].value = e.parentElement.parentElement.children[0].innerHTML;
  inputs[1].value = e.parentElement.parentElement.children[1].innerHTML;
  inputs[2].value = e.parentElement.parentElement.children[2].innerHTML;
  e.parentElement.parentElement.remove();
}
