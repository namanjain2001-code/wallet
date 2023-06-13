
// Registration 
document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirm-password').value;
  
    // You can perform further validation or send the registration request to the server here
  
    // For this example, let's just log the form data to the console
    console.log("Username: " + username);
    console.log("Email: " + email);
    console.log("Password: " + password);
    console.log("Confirm Password: " + confirmPassword);
  });

  