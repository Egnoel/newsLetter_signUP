var button = document.getElementById("btn");
var form = document.getElementById("signup-form");
var successCard = document.getElementById("success-card");
var subscriberEmail = document.getElementById("subscriber-email");
var dismissButton = document.getElementById("dismiss-btn");
var content = document.getElementById("form-content");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the default form submission behavior

  // Simulate form submission and show success card
  var email = form.email.value;
  subscriberEmail.textContent = email;
  content.style.display = "none";
  successCard.style.display = "flex";
});

dismissButton.addEventListener("click", function () {
  successCard.style.display = "none"; // Hide the success card
  content.style.display = "flex"; // Show the form
});
