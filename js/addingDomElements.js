// Adding DoM Elements
const addButton = document.getElementById("add");
addButton.addEventListener("click", function () {
  const type = prompt("What do u want to add in DOM??");
  // console.log(type);
  const firstSection = document.getElementsByTagName("section")[0];
  const sectionToBeAdded = document.createElement(type);
  sectionToBeAdded.setAttribute("class", `new ${type} `);
  sectionToBeAdded.innerHTML = `<h2>This is new ${type}</h2>
    <br/>
    <br/>
    `;
  firstSection.insertAdjacentElement("afterend", sectionToBeAdded);
});

// Removing Dom Elements
const removeButton = document.getElementById("remove");

removeButton.addEventListener("click", function () {
  const addedElements = document.querySelectorAll(".new");
  for (i = 0; i < addedElements.length; i++) {
    addedElements[0].parentNode.removeChild(addedElements[0]);
  }
});
