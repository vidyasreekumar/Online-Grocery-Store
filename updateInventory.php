<?php
$host = "localhost";
$dbname = "grocerystore";
$username = "root";
$password = "Watermelon@99";

$conn = new mysqli($host, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}


$itemNo = $_POST['itemNo'];
$quant = $_POST['quantity'];

// Use prepared statement to prevent SQL injection
$query = "SELECT Quantity FROM inventory WHERE ItemNo = ?";
$stmt = $conn->prepare($query);
$stmt->bind_param("i", $itemNo);
$stmt->execute();

$result = $stmt->get_result();

if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    $quantity = $row['Quantity'];

    if ($quantity > 0) {
        $newQuantity = $quantity - $quant;
        $queryCartUpdate = "UPDATE inventory SET Quantity = ? WHERE ItemNo = ?";
        $stmt = $conn->prepare($queryCartUpdate);
        $stmt->bind_param("ii", $newQuantity, $itemNo);
        $stmt->execute();

        echo 'Inventory updated successfully';
    } else {
        echo $quant;
    }
}

// $host = "localhost";
// $dbname = "grocerystore";
// $username = "root";
// $password = "Watermelon@99";
        
// $conn = new mysqli($host, $username, $password, $dbname);
// if ($conn->connect_error) {
//     die("Connection failed: " . $conn->connect_error);
// }

// var_dump($_POST);
// $itemName = $_POST['itemName'];
// $quant = $_POST['quantity'];

// // Get ItemNo from inventory based on the provided item name
// $query = "SELECT ItemNo, Quantity FROM inventory WHERE Name = '$itemName'";

// $result = $conn->query($query);
// $row = $result->fetch_assoc();
// echo $row;
// $itemNo = $row['ItemNo'];
// $quantity = $row['Quantity'];
// if($quantity > 0) {
//     $newQuantity = $quantity - $quant;
//     $queryCartUpdate = "UPDATE inventory SET Quantity = '$newQuantity' WHERE ItemNo = '$itemNo'";
//     $result = $conn->query($queryCartUpdate);
//     echo 'Item added to cart successfully';
// }
// else {
//     echo "Item unavailable";
// }
// $conn->close();
?>