const loginButton = document.getElementById("loginButton");
const loginPopup = document.getElementById("loginPopup");
const closePopup = document.getElementById("closePopup");
const popupContent = loginPopup.querySelector(".popup-content");

//popup login dengan animasi
loginButton.addEventListener("click", () => {
  loginPopup.classList.remove("hidden");
  popupContent.classList.add("animate");

  setTimeout(() => {
    popupContent.classList.remove("animate");
  }, 300);
});

// Menyembunyikan popup login
closePopup.addEventListener("click", () => {
  loginPopup.classList.add("hidden");
});

// Menutup popup 
window.addEventListener("click", (event) => {
  if (event.target === loginPopup) {
    loginPopup.classList.add("hidden");
  }
});
