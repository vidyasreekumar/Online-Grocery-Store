<?php

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
$transactionStatus = $_POST['transactionStatus'];

$query = "UPDATE transactions SET TransactionStatus = '$transactionStatus' WHERE TransactionId = '$transactionID';";

$result = $conn->query($query);
if ($result === TRUE) {
    echo "Transaction status update success";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}


$conn->close();
?>