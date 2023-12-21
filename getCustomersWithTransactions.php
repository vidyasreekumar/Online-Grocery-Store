<?php
$host = "localhost";
$dbname = "grocerystore";
$username = "root";
$password = "Watermelon@99";

$conn = new mysqli($host, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$specificDate = $_POST['date'];

$sql = "SELECT c.CustomerID, c.FirstName, c.LastName, COUNT(t.TransactionID) AS TransactionCount
FROM customers c
JOIN carts ct ON c.CustomerID = ct.CustomerID
JOIN transactions t ON ct.TransactionID = t.TransactionID
WHERE t.TransactionDate = '$specificDate' 
GROUP BY c.CustomerID, t.TransactionID
HAVING TransactionCount > 2";

$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $customersData = array();
    while($row = $result->fetch_assoc()) {
        $customersData[] = $row;
    }
    header('Content-Type: application/json');
    echo json_encode($customersData);
} else {
    echo json_encode(array('message' => 'No customers with more than 2 transactions on the specified date.'));
}
$conn->close();

?>
