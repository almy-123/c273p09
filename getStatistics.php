<?php

include 'dbFunctions.php';

$statistics = Array();

$query = "SELECT * FROM statistics";

$result = mysqli_query($link, $query) or die(mysqli_error($link));

while($row = mysqli_fetch_assoc($result)){
    $statistics[] = $row;
}

echo json_encode($statistics);