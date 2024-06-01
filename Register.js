const username = document.getElementById("username");
const password = document.getElementById("password");
const button = document.getElementById("button");

button.addEventListener("click", function () {
  if (username.value === "" && password.value === "") {
    alert("Anda Belum Ter-Registrasi");
  } else if (username.value === "") {
    alert("Anda Belum Ter-Registrasi");
  } else if (password.value === "") {
    alert("Anda Belum Ter-Registrasi");
  } else {
    alert("Anda Sudah Ter-Registrasi")
    localStorage.setItem("DataNama", username.value);
    localStorage.setItem("DataPass", password.value);
    window.location.href = "index.html";
  }
});
