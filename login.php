<?php

$uname = $_POST["username"];
$pwd = $_POST["pwd"];

$host = "localhost";
$dbname = "grocerystore";
$username = "root";
$password = "Watermelon@99";
        
$connection = new mysqli($host, $username, $password, $dbname);
if ($connection->connect_error) {
    die("Connection error: " . $connection->connect_error);
} 

//$stmt = mysqli_stmt_init($connection);
if($uname == "admin" && $pwd == "admin"){
    $result = array("admin");
    echo json_encode($result);
}
else {
    $query = "SELECT CustomerID FROM users WHERE Username = '$uname' AND Password = '$pwd'";
    // if (!mysqli_stmt_prepare($stmt, $query)) {
    //     $error = array('error' => mysqli_error($connection));
    //     header('Content-Type: application/json');
    //     echo json_encode($error);
    //     exit;
    // }
    $result = $connection->query($query);
    if ($result->num_rows > 0) {
        $customerId = $result->fetch_assoc()['CustomerID'];
        $queryTID = "SELECT TransactionID FROM carts WHERE CustomerID = $customerId";
        $result = $connection->query($queryTID);
        if($result->num_rows > 0) {
            $transactionId = $result->fetch_assoc()['TransactionID'];
            $query = "SELECT TransactionID FROM transactions WHERE TransactionID = '$transactionId' AND TransactionStatus = 'In Cart'";
            $result = $connection->query($query);
            if($result->num_rows > 0) {
                $TransactionId = $result->fetch_assoc()['TransactionID'];
            }
            else {
                $TransactionId = random_int(1,1000);
            }
        }
        else {
            $TransactionId = random_int(1,1000);
        }
            // $ans = array();
            // $ans[] = "Use old TID";
            // $ans[] = $row;
            // header('Content-Type: text/json');
            // echo json_encode($ans);

        $data = array();
        $data[] = $TransactionId;
        $data[] = $customerId;
        header('Content-Type: text/json');
        echo json_encode($data);
    }
    else {
        $result = array("invalid");
        echo json_encode($result);
    }
}

//header('Content-Type: text/json');
// echo mysqli_fetch_assoc($result);
$connection->close();
?>