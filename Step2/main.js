$(document).ready(function() {

  function printAChart(typeOfGraph, myDataset, mylabels, selector, optionTrue) {
    if (optionTrue) {
      var ctx = $(selector);
      var chart = new Chart(ctx, {
        type: typeOfGraph,
        data: {
          labels: mylabels,
          datasets: [{
            label: 'Vendite',
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            data: myDataset,
            borderWidth: 1
          }]
        },
        // Configuration options go here
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          }
        } //fine options

      }); //fine charts con opzioni attive

    } else {
      var ctx = $(selector);
      var chart = new Chart(ctx, {
        type: typeOfGraph,
        data: {
          labels: mylabels,
          datasets: [{
            label: 'Vendite',
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            data: myDataset,
            borderWidth: 1
          }]
        },
        // Configuration options go here
        options: {} //fine options
      }); //fine charts con opzioni disattivate

    }

  };

  /////////////////////////////// ESECUZIONE

  var labelsMounth = ['Gennaio','Febbraio','Marzo','Aprile','Maggio','Giugno','Luglio','Agosto','Settembre','Ottobre','Novembre','Dicembre'];


  $.ajax({
    url : "server.php",
    method : "GET",
    success: function (myDataset) {
      printAChart(myDataset['typeLineChart'], myDataset['dataLineChart'], labelsMounth, '#linear-chart', true);
      printAChart(myDataset['typePieChart'], myDataset['dataPieChart'], myDataset['labelsPieChart'], '#pie-chart', false); 
    },
    error : function (richiesta, stato, errore) {
      alert("E' avvenuto un errore. " + errore);
    }

  }); //chiude ajax



});
