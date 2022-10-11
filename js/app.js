const dotsMenu = document.getElementById("dots-menu");
const dropdownDots = document.getElementById("dropdown-dots");
const dotsDescription = document.getElementById("dots-description");
const primeBtn = document.getElementById("prime");
const primeDescription = document.getElementById("prime-description");
const notificationsBtn = document.getElementById("notifications");
const notificationsDescription = document.getElementById("notifications-description");
const whispersBtn = document.getElementById("whispers");
const whispersDescription = document.getElementById("whispers-description");
const userBtn = document.getElementById("user");
const userDropdown = document.getElementById("user-dropdown");
const primeDropdown = document.getElementById("prime-dropdown");

dropdownDots.style.display = "none";
dotsDescription.style.display = "none";
primeDescription.style.display = "none";
notificationsDescription.style.display = "none";
whispersDescription.style.display = "none";
userDropdown.style.display = "none";
primeDropdown.style.display = "none";

dotsMenu.addEventListener("click", () => {
  if (dropdownDots.style.display == "none") {
    dropdownDots.style.display = "flex";
  } else {
    dropdownDots.style.display = "none";
  }
});

userBtn.addEventListener("click", () => {
  if (userDropdown.style.display == "none") {
    userDropdown.style.display = "flex";
  } else {
    userDropdown.style.display = "none";
  }
});

primeBtn.addEventListener("click", () => {
  primeDescription.style.display = "none";
  
  if (primeDropdown.style.display == "none") {
    primeDropdown.style.display = "block";
  } else {
    primeDropdown.style.display = "none";
  }
});

dotsMenu.addEventListener("mouseover", () => {
  dotsDescription.style.display = "block";
});

dotsMenu.addEventListener("mouseout", () => {
  dotsDescription.style.display = "none";
});

primeBtn.addEventListener("mouseover", () => {
  primeDescription.style.display = "block";
});

primeBtn.addEventListener("mouseout", () => {
  primeDescription.style.display = "none";
});

notificationsBtn.addEventListener("mouseover", () => {
  notificationsDescription.style.display = "block";
});

notificationsBtn.addEventListener("mouseout", () => {
  notificationsDescription.style.display = "none";
});

whispersBtn.addEventListener("mouseover", () => {
  whispersDescription.style.display = "block";
});

whispersBtn.addEventListener("mouseout", () => {
  whispersDescription.style.display = "none";
});