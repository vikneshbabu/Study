<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

use PHPMailer\PHPMailer\PHPMailer;

//Load Composer's autoloader
require 'vendor/autoload.php';

function email($data, $sender_email, $fname){
$mail = new PHPMailer(true);

$mail->isSMTP();
$mail->SMTPAuth = true;
$mail->SMTPSecure = 'tls';
$mail->Host = 'smtp.gmail.com';
$mail->Port = 587;
$mail->Username = 'iyirkai2017@gmail.com';
$mail->Password = 'dwkmxhwqetqbhtxn';

// Set up email content
$mail->setFrom('iyirkai2017@gmail.com', $fname);
$mail->addAddress($sender_email, $fname);
$mail->Subject = 'Contact Us';
$mail->Body = $data;

// Send email
if ($mail->send()) {
    echo 'Success';
} else {
    echo 'Error sending email: ' . $mail->ErrorInfo;
}
}
?>