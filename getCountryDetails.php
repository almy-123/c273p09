<?php

$id = $_GET['id'];

include 'dbFunctions.php';

$query = "SELECT * FROM statistics WHERE id=$id";

$result = mysqli_query($link, $query) or die(mysqli_error($link));

$row = mysqli_fetch_assoc($result);

echo json_encode($row);