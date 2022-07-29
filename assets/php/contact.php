<?php
if ( 'POST' != $_SERVER['REQUEST_METHOD'] ) {
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: GET, POST");
	header('Allow: POST');
if(isset($_POST['submit'])){
    $to = $_POST['email']; // this is your Email address
    $from = $_POST['email']; // this is the sender's Email address
    $name = $_POST['name'];
    $subject = "Form submission";
    $message = $name . " wrote the following:" . "\n\n" . $_POST['message'];
    $headers = "From:" . $from;
    $headers2 = "From:" . $to;
    $myfile = fopen("/assets/files/contact.txt" , "a") or die("Unable to open file!"); //this will create the file if it doesn't exist
    $nametxt = isset($_POST['name']); //this will get the data from selected input
    $messagetxt = isset($_POST['message']); //this will get the data from selected input
    fwrite($myfile, $nametxt);
    fwrite($myfile, $messagetxt);
    fclose($myfile);
    mail($to,$subject,$message,$headers);
    mail($from,$subject,$message,$headers); // sends a copy of the message to the sender
    echo "Mail Sent. Thank you " . $name . ", I will contact you shortly.";
    }}
?>