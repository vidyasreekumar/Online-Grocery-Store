<?php
$host = "localhost";
$dbname = "grocerystore";
$username = "root";
$password = "Watermelon@99";

$conn = new mysqli($host, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT distinct c.CustomerID, c.FirstName, c.LastName, COUNT(t.TransactionID) AS TransactionCount
from customers c
JOIN carts ct ON c.CustomerID = ct.CustomerID
JOIN transactions t ON ct.TransactionID = t.TransactionID
where c.Age > 20
GROUP BY c.CustomerID, t.TransactionID
HAVING TransactionCount > 3";

$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $customersData = array();
    while($row = $result->fetch_assoc()) {
        $customersData[] = $row;
    }
    header('Content-Type: application/json');
    echo json_encode($customersData);
}
else {
    echo json_encode(array('message' => 'No customers found.'));
}
$conn->close();
?>
