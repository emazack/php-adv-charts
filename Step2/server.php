<?php

  header('Content-Type: application/json');
  require_once "database.php";

  $typeLineChart = $graphs["fatturato"]['type'];
  $dataLineChart = $graphs["fatturato"]['data'];
  
  $typePieChart = $graphs["fatturato_by_agent"]['type'];
  $dataPieChart = [];
  $labelsPieChart = [];

  foreach ($graphs["fatturato_by_agent"]['data'] as $label => $data) {
    $dataPieChart[] = $data;
    $labelsPieChart[] = $label;
  }

  $completeData = [
    'typeLineChart' => $typeLineChart,
    'dataLineChart' => $dataLineChart,
    'typePieChart' => $typePieChart,
    'dataPieChart' => $dataPieChart,
    'labelsPieChart' => $labelsPieChart
  ];

  echo json_encode($completeData);


 ?>
