//This fulfils requirement 5.6(b)
function validateForm(event) {
    // Prevent the form from submitting by default
    event.preventDefault();

    // Get form values
    var firstName = document.getElementById("firstName").value.trim();
    var lastName = document.getElementById("lastName").value.trim();
    var email = document.getElementById("email").value.trim();
    var phone = document.getElementById("phone").value.trim();
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value.trim();

    // Validation checks
    if (firstName === "" || lastName === "" || email === "" || message === "") {
      alert("Please fill in all required fields (marked with *)");
      return;
    }

    // Email format check
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address");
      return;
    }
//This fulfils requirement 5.6(c)
    // If all validations pass
    alert("Form submitted successfully!");

  }