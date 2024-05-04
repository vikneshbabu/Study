<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
require_once('emails.php');
$formName = $_POST['form_name'];
$data ="";
if($formName == "contactUs") {
    $data .="Name:".$_POST['fname']."\nEmail:".$_POST['email']."\nPhoneNumber:".$_POST['phonenumber']."\nCity:".$_POST['city'];
    //$Split_data= nl2br($data);
    $sender_email = $_POST['sender_email'] ?? 'viknesh@vaipratech.com';
    $fname = $_POST['fname'] ?? 'Contact us';
    email($data, $sender_email, $fname);
}

//mail functionality start
//require_once('PHPMailer/PHPMailer.php');
