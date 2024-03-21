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

const titleEl = document.querySelector(".title");
const descriptionEl = document.querySelector(".description");

const formEl = document.querySelector(".form");

// const valueLocalStorage = JSON.parse(localStorage.getItem("inputVal")) -1вариант ;
const valueLocalStorage = localStorage.getItem("inputVal");
const validValLS = JSON.parse(valueLocalStorage);
console.log(valueLocalStorage);
console.log(validValLS);

if (validValLS) {
  console.log(formEl.description);
  //   for (const key in validValLS) {
  //     // console.log(key);
  //     // console.log(formEl[key]);
  formEl[key].value = validValLS[key];
}

titleEl.value = validValLS.title;
descriptionEl.value = validValLS.description;
//   console.log("valueLocalStorage", valueLocalStorage);
//   inputEl.value = valueLocalStorage;

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  e.currentTarget.title.value = "";
  localStorage.removeItem("inputTitle");
});

titleEl.addEventListener("input", (e) => {
  const data = localStorage.getItem("inputVal");
  const ofjData = JSON.parse(data);
  console.log(e.target.name, e.target.value);
  console.log({...ofjData});
  //   const data = {
  //     title: e.currentTarget.value,
  //     description: descriptionEl.value,
  //       };
  //   localStorage.setItem("inputVal", JSON.stringify(data));
});
descriptionEl.addEventListener("input", (e) => {
  const data = {
    title: titleEl.value,
    description: e.currentTarget.value,
  };
  localStorage.setItem("inputVal", JSON.stringify(data));
});
console.dir(localStorage);
