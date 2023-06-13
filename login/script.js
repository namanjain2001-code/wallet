document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission
  
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Perform validation or authentication logic here
  // Example: check if username and password match

  // Placeholder logic to display success or error message
  if (username === "admin" && password === "password") {
    alert("Login successful!");
  } else {
    alert("Invalid username or password.");
  }
});
