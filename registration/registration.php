<!DOCTYPE html>
<html>
<head>
  <title>Registration Form</title>
  <link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
  <div class="container">
  
    <h1>Wallet:Registration</h1>
    <form id="registration-form" action="register.php" method="post">
      <div class="form-group">
        <label for="username">Username</label>
        <input type="text" id="username" placeholder="Enter your username"  name="username">
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" placeholder="Enter your email" name="email">
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" id="password" placeholder="Enter your password" name="password">
      </div>
      <div class="form-group">
        <label for="confirm-password">Confirm Password</label>
        <input type="text" id="confirmPassword" placeholder="Confirm your password" name="confirmPassword">
      </div>
      <input type="submit" class="btn" value="Register" name="submit">
    </form>
  </div>
     <!-- Script file adding  -->
  <!--<script src="script.js"></script> -->
</body>
</html>
