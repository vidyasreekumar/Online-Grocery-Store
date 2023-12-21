<?php

$uname = $_POST["username"];
$pwd = $_POST["pwd1"];
$firstName = $_POST["fname"];
$lastName = $_POST["lname"];
$age = intval($_POST["age"]);
$email = $_POST["email"];
$phno = filter_input(INPUT_POST, "phno", FILTER_VALIDATE_INT);
$address = $_POST["address"];

$host = "localhost";
$dbname = "grocerystore";
$username = "root";
$password = "Watermelon@99";
        
$connection = mysqli_connect($host, $username, $password, $dbname);
if (mysqli_connect_errno()) {
    die("Connection error: " . mysqli_connect_error());
} 

$customerId = generateUniqueCustomerId();
$stmt = mysqli_stmt_init($connection);

$customerTable = "INSERT INTO customers (CustomerID, FirstName, LastName, Age, PhoneNo, Address)
VALUES (?, ?, ?, ?, ?, ?)";
if (!mysqli_stmt_prepare($stmt, $customerTable)) {
    die(mysqli_error($connection));
}
mysqli_stmt_bind_param($stmt, "sssiss", $customerId, $firstName, $lastName, $age, $phno, $address);
mysqli_stmt_execute($stmt);
mysqli_stmt_close($stmt);

$stmt = mysqli_stmt_init($connection);
$userTable = "INSERT INTO users (CustomerID, Username, Password)
VALUES (?, ?, ?)";

if(!mysqli_stmt_prepare($stmt, $userTable)){
    die(mysqli_error($connection));
}
mysqli_stmt_bind_param($stmt, "sss", $customerId, $uname, $pwd);
mysqli_stmt_execute($stmt);

//echo '<script>alert("Registration successful!");</script>';

function generateUniqueCustomerId() {
    return random_int(1,1000);
}
?>