const values = [
  { id: 1, name: "HTML" },
  { id: 2, name: "CSS" },
  { id: 3, name: "JavaScript" },
  { id: 4, name: "Node.js" },
  { id: 5, name: "React" },
  { id: 6, name: "Vue" },
  { id: 7, name: "Next.js" },
  { id: 8, name: "Mobx" },
  { id: 9, name: "Redux" },
  { id: 10, name: "React Router" },
  { id: 11, name: "GraphQl" },
  { id: 12, name: "PostgreQl" },
  { id: 13, name: "MongoDB" },
];

const inputEl = document.querySelector(".title");
const formEl = document.querySelector(".form");

const valueLocalStorage = localStorage.getItem("inputTitle");

if (valueLocalStorage) {
  console.log("valueLocalStorage", valueLocalStorage);
  inputEl.value = valueLocalStorage;
}

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e.currentTarget.title.value);
  e.currentTarget.title.value = "";
  localStorage.removeItem("inputTitle");
});

inputEl.addEventListener("input", (e) => {
  console.log(e.currentTarget.value);
  localStorage.setItem("inputTitle", e.currentTarget.value);
});

console.dir(localStorage);

