<?php
// Connect to your database
$host = "localhost";
$dbname = "grocerystore";
$username = "root";
$password = "Watermelon@99";

$conn = new mysqli($host, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get data from the POST request
$transactionID = $_POST['transactionID'];
$customerID = $_POST['customerID'];
$cartStatus = $_POST['cartStatus'];

$sql = "UPDATE carts SET CartStatus = '$cartStatus' WHERE TransactionID = '$transactionID' AND CustomerID = '$customerID'";
$result = $conn->query($sql);
if ($result === TRUE) {
    echo "cart status update success";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>