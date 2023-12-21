<?php

// Database connection parameters
$host = "localhost";
$dbname = "grocerystore";
$username = "root";
$password = "Watermelon@99";

// Create connection
$conn = new mysqli($host, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
$data = json_decode(file_get_contents("php://input"));
$itemName = $data->item;

$query = "SELECT * FROM inventory WHERE Name = '$itemName'";

$result = $conn->query($query);
if ($result->num_rows > 0) {

    $row = $result->fetch_assoc();
    $response = array('ItemNo' => $row['ItemNo'], 'Name' => $row['Name'], 'UnitPrice' => $row['UnitPrice'], 'Quantity' => $row['Quantity']);
    echo json_encode($response);

} else {
    echo "No results found for '$itemName'";
}

// Close the connection
$conn->close();
?>