const password = document.getElementById("password");
const show = document.getElementById("show");

show.onchange = function (e) {
  password.type = show.checked ? "text" : "password";
};