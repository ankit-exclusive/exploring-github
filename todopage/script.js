let inputbox = document.getElementById("inputs");
let submit = document.getElementById("todo");
submit.onclick = function () {
  adtodo();
  inputbox.value = "";
};

document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    submit.click();
  } else {
    inputbox.focus();
  }
});

function del(y) {
  y.parentElement.remove();
}

function adtodo() {
  let element = document.createElement("li");
  element.innerHTML = document.getElementById("inputs").value + " ";

  //creating the edit button for every todo added
  let editbut = document.createElement("button");
  editbut.innerHTML =
    '<i class="fa-solid fa-feather"></i>' +
    '<span class="tooltiptext">will edit the todo </span>';
  editbut.classList.add("tooltip");
  editbut.onclick = function () {
    let edit = prompt("enter to do");
    element.textContent = edit + "  ";
      element.appendChild(editbut);

      element.appendChild(but);
  };
  //created the edit button for every todo added
  //creating the delete button
  let but = document.createElement("button");
  but.innerHTML =
    '<i class="fa-solid fa-x"></i>' +
    '<span class="tooltiptext">will delete the todo forever</span>';
  but.classList.add("tooltip");
  but.onclick = function () {
    del(this);
  };
  //created the delete button
  if (element.innerHTML == " ") {
    window.alert("write some task inside the  input box");
  } else {
    element.appendChild(editbut);

    element.appendChild(but);

    document.getElementsByTagName("ol")[0].appendChild(element);
  }
}
