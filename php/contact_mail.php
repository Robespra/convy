<?php
$toEmail = "convy18@gmail.com";
$mailHeaders = "From: " . $_POST["userName"] . "<". $_POST["userEmail"] .">\r\n";
if(mail($toEmail, $_POST["userName"], $mailHeaders)) {
print "<p class='success'>Your request has been correctly sent. We will provide feedback within 48h. Thank you.</p>";
} else {
print "<p class='Error'>Problem in sending form, please try again later</p>";
}
?>
