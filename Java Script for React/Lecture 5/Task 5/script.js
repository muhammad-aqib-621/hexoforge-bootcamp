document.getElementById("feedbackForm").addEventListener("submit", function (event) {
  event.preventDefault(); 

  const fullName = document.getElementById("fullName").value.trim();
  const email = document.getElementById("email").value.trim();
  const rating = document.getElementById("rating").value;

  if (fullName === "") {
    alert("Full Name is required.");
    return;
  }

  if (email === "" || !email.includes("@")) {
    alert("Please enter a valid email address.");
    return;
  }

  if (rating === "") {
    alert("Please select a rating between 1 and 5.");
    return;
  }

  alert("Thank you for Form Submission");
});
