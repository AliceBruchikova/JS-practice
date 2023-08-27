const drawItem = (item, index) => {
  return `
  <div class="itemTable">
        <div class="text_title">Title: ${item.title}</div>
        <div class="text_description">Description: ${item.description}</div>
      <div class="btns">
        <button class="editBtn" data-index="${index}">Edit</button>
        <button class="deleteBtn" data-index="${index}">Delete</button>    
      </div>
      </div>
  `;
}

const init_2 = () => {
  let index = 0;
  let currentDataIndex = 0;
  let data = [];
  const dataTable = document.querySelector(".dataTable");
  const title = document.querySelector("#title");
  const description = document.querySelector("#description");
  const submitBtn = document.querySelector(".submitBtn");
  const modalWindow = document.querySelector(".modalWindow");
  const saveBtn = document.querySelector(".saveBtn");

  const drawData = (data) => {
      dataTable.innerHTML = '';
      data.forEach((item) => {
          dataTable.innerHTML += drawItem(item, item.index);
      });
  };

  submitBtn.addEventListener('click', (event) => {
      event.preventDefault();

      data.push({
          index,
          title: title.value,
          description: description.value
      });
      ++index;

      title.value = '';
      description.value = '';

      drawData(data);
  });

  dataTable.addEventListener('click', (event) => {
      if (event.target.closest(".deleteBtn")) {
          currentDataIndex = +event.target.closest('.deleteBtn').getAttribute('data-index');
          const currentItemIndex = data.find(item => {
              return item.index === currentDataIndex;
          })?.index;
          data = data.filter(item => item.index !== currentDataIndex);
          drawData(data);
      }
      const editButton = event.target.closest(".editBtn");
      if (editButton) {
          currentDataIndex = +event.target.closest('.editBtn').getAttribute('data-index');
          const currentItem = data.find(item => {
              return item.index === currentDataIndex;
          });
          const editTitle = document.querySelector(".editTitle");
          const editDescription = document.querySelector(".editDescription");
          editTitle.value = currentItem.title;
          editDescription.value = currentItem.description;
          modalWindow.style.display = "flex";
      }
  });

  saveBtn.addEventListener('click', (event) => {
      event.preventDefault();
      const currentItem = data.find(item => {
          return item.index === currentDataIndex;
      });
      const editTitle = document.querySelector(".editTitle");
      const editDescription = document.querySelector(".editDescription");
      currentItem.title = editTitle.value;
      currentItem.description = editDescription.value;
      editTitle.value = '';
      editDescription.value = '';
      drawData(data);
      modalWindow.style.display = "none";
  });
};
init_2();
