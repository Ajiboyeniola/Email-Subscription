const form = document.getElementById("formFill");

form.addEventListener("submit", function () {
  let email = document.getElementById("email").value;
  if (email.value === email.value + "@") {
    console.log(`Your email is ${email}`);
  } else {
    console.log("@ is missing");
  }
});
