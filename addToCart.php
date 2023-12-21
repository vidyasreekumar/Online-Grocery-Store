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
$itemNo = $_POST['itemNumber'];
$quantity = $_POST['quantity'];
$cartStatus = $_POST['cartStatus'];

// Get ItemNo from inventory based on the provided item name
// $query = "SELECT ItemNo FROM inventory WHERE Name = '$itemName'";

// $result = $conn->query($query);
// $itemNo = $result->fetch_assoc()['ItemNo'];
// Check if the item already exists in the cart for the current user
$queryCartCheck = "SELECT Quantity, CartStatus FROM carts WHERE CustomerID = '$customerID' AND TransactionID = '$transactionID' AND ItemNo = $itemNo";
$result = $conn->query($queryCartCheck);

if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    $cartstatus = $row['CartStatus'];
    // If the item exists for the current user, update the quantity
    if($cartstatus == "In Cart") {
        $quant = $row['Quantity'];
        $newQuantity = $quant + $quantity;
        $queryCartUpdate = "UPDATE carts SET Quantity = '$newQuantity' WHERE CustomerID = '$customerID' AND TransactionID = '$transactionID' AND ItemNo = '$itemNo' AND CartStatus = 'In Cart'";
        $result = $conn->query($queryCartUpdate);
        echo 'Updated cart';
    }
    else {
        // If the item cartStatus is cancelled for the current user, insert a new record
            $queryCartInsert = "INSERT INTO carts (CustomerID, TransactionID, ItemNo, Quantity, CartStatus) VALUES ('$customerID', '$transactionID', '$itemNo', '$quantity', '$cartStatus')";
            $result = $conn->query($queryCartInsert);
            echo 'Item added to cart successfully';
    }
}
else {
    // If the item does not exist for the current user, insert a new record
        $queryCartInsert = "INSERT INTO carts (CustomerID, TransactionID, ItemNo, Quantity, CartStatus) VALUES ('$customerID', '$transactionID', '$itemNo', '$quantity', '$cartStatus')";
        $result = $conn->query($queryCartInsert);
        echo 'Item added to cart successfully';
}
   
$conn->close();

// Send success response
?>