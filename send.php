<?php

if(isset($_POST['submit'])){
$to = "pycc_lan@mail.ru";;
$phone = $_POST['phone']; 
$name = $_POST['name'];
$subject = "Форма отправки сообщений с сайта";
$subject2 = "Copy of your form submission";
$message = $name . " оставил свой номер:" . $phone . "\n\n" . $_POST['message'];
$message2 = "Here is a copy of your message " . $name . "\n\n" . $_POST['message'];

}

?>