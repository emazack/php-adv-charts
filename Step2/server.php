<?php

  header('Content-Type: application/json');
  require_once "database.php";

  $typeLineChart = $graphs["fatturato"]['type'];
  $dataLineChart = $graphs["fatturato"]['data'];
  $typePieChart = $graphs["fatturato_by_agent"]['type'];
  $dataPieChart = [];
  $labelsPieChart = [];

  $completeData = 

  foreach ($graphs["fatturato_by_agent"]['data'] as $label => $data) {
    $dataPieChart[] = $data;
    $labelsPieChart[] = $label;
  }



  echo json_encode($labelsPieChart);


 ?>
