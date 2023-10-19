<?php
// Database connection settings
$servername = "your_servername";
$username = "your_username";
$password = "your_password";
$dbname = "password_manager";

// Create a database connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $website = $_POST["website"];
    $username = $_POST["username"];
    $password = $_POST["password"];

    // Prepare and execute the SQL query to insert data
    $sql = "INSERT INTO passwords (website, username, password) VALUES (?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("sss", $website, $username, $password);

    if ($stmt->execute()) {
        echo "Password saved successfully!";
    } else {
        echo "Error: " . $stmt->error;
    }

    $stmt->close();
}

$conn->close();
?>
