document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  const notification = document.getElementById("notification");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    if (validateForm()) {
      // Form submission code (e.g., send data to server)
      showNotification();
      console.log("Form submitted successfully");
    }
  });

  function validateForm() {
    const fullName = document.getElementById("full-name").value.trim();
    const email = document.getElementById("email").value.trim();
    const mobileNumber = document.getElementById("mobile-number").value.trim();
    const emailSubject = document.getElementById("email-subject").value.trim();
    const message = document.getElementById("message").value.trim();

    if (fullName === "" || email === "" || mobileNumber === "" || emailSubject === "" || message === "") {
      alert("Please fill out all fields.");
      return false;
    }

    return true;
  }

  function showNotification() {
    notification.style.display = "block";
    setTimeout(function () {
      notification.style.display = "none";
    }, 5000); // Hide notification after 3 seconds
  }
});
