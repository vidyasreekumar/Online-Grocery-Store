<?php
$host = "localhost";
$dbname = "grocerystore";
$username = "root";
$password = "Watermelon@99";

$conn = new mysqli($host, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$transactionID = $_POST['transactionID'];
$customerID = $_POST['customerID'];

$sql = "SELECT c.TransactionID, i.ItemNo, i.Name, i.Category, i.Subcategory, i.UnitPrice, c.Quantity, FORMAT((i.UnitPrice * c.Quantity), 2) AS Total_Price
FROM carts AS c
JOIN inventory i ON i.ItemNo = c.ItemNo
WHERE c.CustomerID = '$customerID' AND c.TransactionID = '$transactionID' AND c.CartStatus = 'In Cart'";

$result = $conn->query($sql);
$transactions = array();
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $transactions[] = $row;
    }
}

header('Content-Type: application/json');
echo json_encode($transactions);
$conn->close();
?>