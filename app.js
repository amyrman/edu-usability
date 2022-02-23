let password = document.getElementById("passEntry");
let badgeTitle = document.getElementById("badgeTitle");
let badgeStrength = document.getElementById("badgeStrength");
let passHelper = document.getElementById("passHelper");
let strongPassword = new RegExp(
  "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[.])(?=.{12,})"
);
let mediumPassword = new RegExp(
  "^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})"
);

function strengthChecker(PasswordParameter) {
  if (strongPassword.test(PasswordParameter)) {
    badgeStrength.style.backgroundColor = "green";
    badgeStrength.textContent = "Strong";
  } else if (mediumPassword.test(PasswordParameter)) {
    badgeStrength.style.backgroundColor = "blue";
    badgeStrength.textContent = "Medium";
  } else {
    badgeStrength.style.backgroundColor = "red";
    badgeStrength.textContent = "Weak";
  }
}

password.addEventListener("input", () => {
  strengthChecker(password.value);
  if (password.value.length > 0) {
    badgeTitle.style.display = "block";
    badgeStrength.style.display = "block";
    passHelper.style.display = "block";
  } else {
    badgeTitle.style.display = "none";
    badgeStrength.style.display = "none";
    passHelper.style.display = "none";
  }
});
