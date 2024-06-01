const username = document.getElementById("username");
const password = document.getElementById("password");
const button = document.getElementById("button");

const namabenar = localStorage.getItem("DataNama");
const passbenar = localStorage.getItem("DataPass");

button.addEventListener("click", function () {
  if (username.value === "" && password.value === "") {
    alert("Isi Password Dan Username Terlebih Dahulu");
  } else if (username.value === "") {
    alert("Isi Username Terlebih Dahulu");
  } else if (password.value === "") {
    alert("Isi Password Terlebih Dahulu");
  } else if (username.value === namabenar && password.value === passbenar) {
    alert("Anda Telah Berhasil Login!");
    window.location.href = "todolist.html"
  } else {
    alert("Password Atau Username Salah")
  }
});
