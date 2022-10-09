const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const username = document.querySelector("#username");
const button = document.querySelector("#login-btn");
const todolist = document.getElementById("todolist");

const USERNAME_KEY = "username";
const HIDDEN_CLASSS = "hidden";

function onLogin(enevt) {
  enevt.preventDefault();
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreeting(username);
}

function paintGreeting(savedUsername) {
  loginForm.classList.add(HIDDEN_CLASSS);
  username.innerText = `Hello!! ${savedUsername}`;
}

const savedUsername = localStorage.getItem(USERNAME_KEY);
if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSS);
  loginForm.addEventListener("submit", onLogin);
} else {
  paintGreeting(savedUsername);
  todolist.classList.remove(HIDDEN_CLASSS);
}
