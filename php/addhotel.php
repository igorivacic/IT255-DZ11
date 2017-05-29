<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET, POST');
include("functions.php");
include("confiq.php");

if(isset($_POST['naziv']) && isset($_POST['zvezdice']) && isset($_POST['komentar']) ){

$naziv = $_POST['naziv'];
$zvezdice = intval($_POST['zvezdice']);
$komentar = $_POST['komentar'];


addHotel($naziv,$zvezdice,$komentar);
}

?>
