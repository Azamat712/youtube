// fetch("https://jsonplaceholder.typicode.com/users")
// .then(res => res.json())
// .then(data => {
//   console.log(data);
// })

// const { default: axios } = require("axios");


// import axios from "axios";

// async function getData() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   const data = await res.json();
//   console.log(data);
// }
// getData()

// axios.get("https://jsonplaceholder.typicode.com/users")
// .then(res => {
//   console.log(res.data);
// })

// async function getData() {
//   const res = await axios.get("https://jsonplaceholder.typicode.com/users");
//   console.log(res.data);
// }
// getData()



import axios from "axios";

async function getData() {
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    const users = res.data;

    const listElement = document.getElementById("users-list");

    const htmlContent = users.map(user => {
      return `
        <li>
          <strong>${user.name}</strong> <br>
          <small>Email: ${user.email}</small>
        </li>
      `;
    }).join(""); 

    listElement.innerHTML = htmlContent;

  } catch (error) {
    console.error("Xatolik yuz berdi:", error);
    document.getElementById("users-list").innerHTML = "<li>Ma'lumotni yuklab bo'lmadi.</li>";
  }
}

getData();