<?php

  header('Content-Type: application/json');
  require_once "database.php";

  $level = $_GET['level'] ?? 'guest';

// primo grafico
  $typeLineGuest = $graphs["fatturato"]['type'];
  $dataLineGuest = $graphs["fatturato"]['data'];
  $levelAccessGuest = $graphs["fatturato"]['access'];

// secondo grafico
  $typePieEmployee = $graphs["fatturato_by_agent"]['type'];
  $dataPieEmployee = [];
  $labelsPieEmployee = [];
  $levelAccessEmployee = $graphs["fatturato_by_agent"]['access'];


  foreach ($graphs["fatturato_by_agent"]['data'] as $label => $data) {
    $dataPieChart[] = $data;
    $labelsPieChart[] = $label;
  }

// terzo grafico
  $typeLineClevel = $graphs["team_efficiency"]['type'];
  $dataLineClevel = [];
  $labelsLineClevel = [];
  $levelAccessClevel = $graphs["team_efficiency"]['access'];

  foreach ($graphs["team_efficiency"]['data'] as $label => $data) {
    $dataLineClevel[] = $data;
    $labelsLineClevel[] = $label;
  }



  $completeData = [
    'typeLineChart' => $typeLineGuest,
    'dataLineChart' => $dataLineGuest,
    'levelAccessGuest' => $levelAccessGuest,
    'typePieEmployee' => $typePieEmployee,
    'dataPieEmployee' => $dataPieEmployee,
    'labelsPieEmployee' => $labelsPieEmployee,
    'levelAccessEmployee' => $levelAccessEmployee,
    'typeLineClevel' => $typeLineClevel,
    'dataLineClevel' => $dataLineClevel,
    'labelsLineClevel' => $labelsLineClevel,
    'levelAccessClevel' => $levelAccessClevel
  ];

  echo json_encode($completeData);

 ?>
