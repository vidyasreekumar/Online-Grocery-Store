<?php
// Assuming you have a MySQL database connection
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

//$data = json_decode(file_get_contents("php://input"));
$price = $_POST['totalCost'];
$transactionID = $_POST['transactionID'];
$flag = $_POST['flag'];

// Start a transaction
// $conn->begin_transaction();

if ($flag == 1) {
    $sqlInsertCart = "UPDATE transactions SET TotalPrice = '$price' WHERE TransactionID = '$transactionID'";
    $resultInsertCart = $conn->query($sqlInsertCart);
    if ($resultInsertCart === TRUE) {
        $conn->commit();
        $response = array('updated transaction');
    } else {
        // Rollback the transaction if an error occurred
        $conn->rollback();
    
        $response = array('error' => 'Error adding item to cart');
    }
} else {
    // if($flag == 0)
    //     $transactionID = random_int(1,1000);
    $sqlInsertCart = "INSERT INTO transactions (TransactionID, TransactionStatus, TransactionDate, TotalPrice) VALUES ('$transactionID', 'In Cart', NOW(), '$price')";
    $resultInsertCart = $conn->query($sqlInsertCart);
    
    // Check if the insertion was successful
    if ($resultInsertCart === TRUE) {
        $conn->commit();
    
        // Send the JSON response with the transaction ID
        $response = array('inserted transaction');
    } else {
        $conn->rollback();
        $response = array('error' => 'Error adding item to cart');
    }
}

$conn->close();
header('Content-Type: application/json');
echo json_encode($response);
?>