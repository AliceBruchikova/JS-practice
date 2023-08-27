const addHeaderToTable = (table) => {
  table.innerHTML = `
    <tr>
    <th>#</th>
    <th>Name</th>
    <th>Surname</th>
    <th>Age</th>
    </tr>`;
}
const init = () => {
  const data = [];
  const name = document.querySelector("#nameForm");
  const surname = document.querySelector("#surnameForm");
  const age = document.querySelector("#ageForm");
  const dataForm = document.querySelector(".dataForm");
  const submitBtn = document.querySelector(".submitBtn");
  const deleteBtn = document.querySelector(".deleteBtn");
  const table = document.querySelector("#table");

  const drawTable = (data) => {
    addHeaderToTable(table)
    data.forEach((item, index) => {
      table.innerHTML += `
      <tr>
      <td>${index + 1}</td>
      <td>Name: ${item.name}</td>
      <td>Surname: ${item.surname}</td>
      <td>Age: ${item.age}</td>
  </tr>`
    });
  }
  submitBtn.addEventListener('click', (event) => {
    event.preventDefault();

data.push({
  name: name.value,
  surname: surname.value,
  age: age.value
});

drawTable(data);

name.value = '';
surname.value = '';
age.value = '';
});

deleteBtn.addEventListener('click', (e) => {
    table.remove(data);
});
}
init();