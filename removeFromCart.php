<?php
$host = "localhost";
$dbname = "grocerystore";
$username = "root";
$password = "Watermelon@99";
        
$conn = new mysqli($host, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

var_dump($_POST);

$transactionID = $_POST['transactionID'];
$customerID = $_POST['customerID'];
$itemName = $_POST['itemName'];
$quantity = $_POST['quantity'];
$cartStatus = $_POST['cartStatus'];

// Get ItemNo from inventory based on the provided item name
$query = "SELECT ItemNo FROM inventory WHERE Name = '$itemName'";

$result = $conn->query($query);
$row = $result->fetch_assoc();
$itemNo = $row['ItemNo'];

// Check if the item already exists in the cart for the current user
$queryCartCheck = "SELECT CartStatus FROM carts WHERE CustomerID = '$customerID' AND TransactionID = '$transactionID' AND ItemNo = $itemNo";
$result = $conn->query($queryCartCheck);

if ($result->num_rows > 0) {
    
    // If the item exists for the current user, update the cart status
    $queryCartUpdate = "UPDATE carts SET CartStatus = '$cartStatus' WHERE CustomerID = '$customerID' AND TransactionID = '$transactionID' AND ItemNo = '$itemNo'";
    $result = $conn->query($queryCartUpdate);
    echo 'Item cancelled from cart successfully';
} 

$conn->close();

// Send success response



// header('Content-Type: text/plain');
// echo mysqli_fetch_assoc($result);
?>