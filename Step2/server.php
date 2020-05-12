<?php

  header('Content-Type: application/json');
  require_once "database.php";

  $dataComplete = [];

  foreach ($graphs as $fatturati => $value) {
    $tipodigrafico = $value['type'];
    $datasets = $value['data'];
    $dataComplete[$tipodigrafico] = $datasets;
  };

  echo json_encode($dataComplete);


 ?>
