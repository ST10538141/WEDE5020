// Basic client-side validation for the enquiry form.
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("enquiryForm");
  const message = document.getElementById("formMessage");

  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      if (!form.checkValidity()) {
        message.textContent = "Please complete all required fields.";
        message.setAttribute("role", "alert");
        return;
      }

      message.textContent = "Thank you! Your enquiry has been prepared successfully.";
      message.setAttribute("role", "status");
      form.reset();
    });
  }
});