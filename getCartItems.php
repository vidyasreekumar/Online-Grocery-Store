<?php
$host = "localhost";
$dbname = "grocerystore";
$username = "root";
$password = "Watermelon@99";

$conn = new mysqli($host, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$transactionID = $_POST['transactionId'];
$customerID = $_POST['customerID'];

$sql = "SELECT c.ItemNo, i.Name, c.Quantity, c.CartStatus
FROM carts AS c
JOIN inventory i ON i.ItemNo = c.ItemNo
WHERE c.CustomerID = '$customerID' AND c.TransactionID = '$transactionID'";

$result = $conn->query($sql);
$transactions = array();
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $transactions[] = $row;
    }
}
else {
    $transactions[] = "no cart items";
    
}

header('Content-Type: application/json');
echo json_encode($transactions);
$conn->close();
?>