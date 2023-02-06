const createSelectInput = () => {
  const selectElement = document.createElement("select");
  selectElement.classList.add("form-select");
  for (let i = 0; i < 5; i++) {
    const optionElement = document.createElement("option");
    optionElement.value = i + 1;
    optionElement.innerText = `${i + 1}`;
    selectElement.appendChild(optionElement);
  }
  return selectElement;
};

const initSelectInputs = (n) => {
  const selectContainer = document.querySelector(".select_group");
  for (let i = 1; i <= n; i++) {
    const selectInput = createSelectInput();
    selectInput.id = `select${i}`;
    selectInput.name = `select${i}`;
    selectContainer.appendChild(selectInput);
  }
};

function sendRequest() {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "serverResponse.json", true);

  xhr.send();

  xhr.onload = function () {
    if (xhr.status !== 404) {
      alert(xhr.response);
    } else {
      alert(`Что-то пошло не так`);
    }
  };
}

function formSubmitHandler(event) {
  event.preventDefault();

  const container = document.querySelector(".form_data");
  container.innerText = getFormData(event.target);
  sendRequest();
}

function getFormData(form) {
  const data = new FormData(form);
  return JSON.stringify(Object.fromEntries(data));
}

window.addEventListener("DOMContentLoaded", function () {
  initSelectInputs(5);
  const formDOMNode = document.getElementById("form");
  formDOMNode.addEventListener("submit", formSubmitHandler);
  console.log("reload");
});
