<?php

  header('Content-Type: application/json');
  require_once "database.php";

  $prova = $_GET['level'] ?? 'guest';



  echo $prova;

 ?>
