<?php
        if (isset($_POST["submit"])) {
           $username = $_POST["username"];
           $email = $_POST["email"];
           $password = $_POST["password"];
           $confirmPassword = $_POST["confirmPassword"];
           
           $passwordHash = password_hash($password, PASSWORD_DEFAULT);

           $errors = array();
           
           if (empty($username) OR empty($email) OR empty($password) OR empty($confirmPassword)) {
            array_push($errors,"All fields are required");
           }
           if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            array_push($errors, "Email is not valid");
           }
           if (strlen($password)<8) {
            array_push($errors,"Password must be at least 8 charactes long");
           }
           if ($password!==$confirmPassword) {
            array_push($errors,"Password does not match");
           }
           require_once "../database.php";
           $sql = "SELECT * FROM users WHERE email = '$email'";
           $result = mysqli_query($conn, $sql);
           $rowCount = mysqli_num_rows($result);
           if ($rowCount>0) {
            array_push($errors,"Email already exists!");
           }
           if (count($errors)>0) {
            foreach ($errors as  $error) {
                echo "<div class='alert alert-danger'>$error</div>";
            }
           }else{           
            
            $sql = "INSERT INTO users (username, email, password) VALUES ( ?, ?, ? )";
            $stmt = mysqli_stmt_init($conn);
            $prepareStmt = mysqli_stmt_prepare($stmt,$sql);
            if ($prepareStmt) {
                mysqli_stmt_bind_param($stmt,"sss",$username, $email, $passwordHash);
                mysqli_stmt_execute($stmt);
                echo "<div class='alert alert-success'>You are registered successfully.</div>";
            }else{
                die("Something went fgfgfg wrong");
            }
           }
          

        }
        ?>