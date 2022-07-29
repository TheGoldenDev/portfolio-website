<?php
if ( 'POST' != $_SERVER['REQUEST_METHOD'] ) {
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: GET, POST");
	header('Allow: POST');
if(isset($_POST['submit'])){
    $to = "spencer.uab@gmail.com"; // this is your Email address
    $from = $_POST['email']; // this is the sender's Email address
    $name = $_POST['name'];
    $subject = "Form submission";
    $message = $name . " wrote the following:" . "\n\n" . $_POST['message'];
    $headers = "From:" . $from;
    $headers2 = "From:" . $to;
    $myfile = fopen("/assets/files/contact.txt" , "w") or die("Unable to open file!"); //this will create the file if it doesn't exist
    $txt = isset($_POST["name"]) ? $_POST["name"] . "\n" : ''; //this will get the data from selected input
    $txt .= isset($_POST["message"]) ? $_POST["message"] . "\n" : ''; //this will get the data from selected input
    fwrite($myfile, $txt);
    mail($to,$subject,$message,$headers);
    mail($from,$subject,$message,$headers); // sends a copy of the message to the sender
    echo "Mail Sent. Thank you " . $name . ", we will contact you shortly.";
    // You can also use header('Location: thank_you.php'); to redirect to another page.
    }}
?>