<?php

$errorMSG = "";

// type
if (empty($_POST["type"])) {
    $errorMSG = "type is required ";
} else {
    $type = $_POST["type"];
}

// name
if (empty($_POST["name"])) {
    $errorMSG = "Name is required ";
} else {
    $name = $_POST["name"];
}

// url
if (empty($_POST["url"])) {
    $errorMSG .= "url is required ";
} else {
    $url = $_POST["url"];
}

// traffic
if (empty($_POST["traffic"])) {
    $errorMSG = "traffic is required ";
} else {
    $traffic = $_POST["traffic"];
}

// job_title
if (empty($_POST["job"])) {
    $errorMSG .= "job title is required ";
} else {
    $job = $_POST["job"];
}

// email
if (empty($_POST["email"])) {
    $errorMSG .= "Email is required ";
} else {
    $email = $_POST["email"];
}


$EmailTo = "convy18@gmail.com";
$Subject = "New Convy Bottom Form Request Received";

// prepare email body text
$Body = "";
$Body .= "Type: ";
$Body .= $type;
$Body .= "\n";
$Body .= "Name: ";
$Body .= $name;
$Body .= "\n";
$Body .= "URL: ";
$Body .= $url;
$Body .= "\n";
$Body .= "Traffic: ";
$Body .= $traffic;
$Body .= "\n";
$Body .= "Job: ";
$Body .= $job;
$Body .= "\n";
$Body .= "Email: ";
$Body .= $email;
$Body .= "\n";

// send email
$success = mail($EmailTo, $Subject, $Body, "From:".$email);

// redirect to success page
if ($success && $errorMSG == ""){
   echo "success";
}else{
    if($errorMSG == ""){
        echo "Something went wrong :(";
    } else {
        echo $errorMSG;
    }
}

?>