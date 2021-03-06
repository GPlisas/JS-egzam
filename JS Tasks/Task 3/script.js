/**
 * /* ------------------------------ TASK 3 -----------------------------------
 * Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
 * pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).
 *
 * Paspaudus mygtuką "Show users":
 * 1. Informacija atvaizdavima <div id="output"></div> bloke
 * 1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
 * 2. Žinutė "Press "Show Users" button to see users" turi išnykti;
 *
 * Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi
 * turėti bent minimalų stilių ir būti responsive;
 * --------------------------------------------------------------------------
 *
 * @format
 */

const ENDPOINT = "https://api.github.com/users";

let getUsers = async () => {
  try {
    const response = await fetch(ENDPOINT);
    let users = await response.json();
    createUserCards(users);
  } catch (error) {
    console.error(error);
    throw error;
  }
};
let renderUsers = async () => {
  document.getElementById("btn").addEventListener("click", getUsers);
};

function createUserCards(users) {
  const usersContainer = document.getElementById("output");
  usersContainer.innerHTML = "";

  users.forEach((user) => {
    const userImage = document.createElement("img");
    userImage.src = user.avatar_url;
    userImage.setAttribute("alt", "User picture");

    const userName = document.createElement("h1");
    userName.innerText = user.login;
    userName.setAttribute("alt", "User name");

    const userCard = document.createElement("div");
    userCard.setAttribute("class", "user-card");
    userCard.append(userImage, userName);
    usersContainer.append(userCard);
  });
}
renderUsers();
