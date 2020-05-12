$(document).ready(function() {

  function printAChart(typeOfGraph, myDataset, mylabels, selector) {

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

    }); //fine charts

  };

  /////////////////////////////// ESECUZIONE

  var labelsMounth = ['Gennaio','Febbraio','Marzo','Aprile','Maggio','Giugno','Luglio','Agosto','Settembre','Ottobre','Novembre','Dicembre'];


  $.ajax({
    url : "server.php",
    method : "GET",
    success: function (myDataset) {
      // the "line" word
      var lineGraph = Object.keys(myDataset)[0];
      // the "pie" word
      var pieGraph = Object.keys(myDataset)[1];
      // la lista dei valori presenti in line
      var datasetsLine = myDataset.line;
      // la lista delle keys (quindi i labels) presenti in pie
      var labelsPie = Object.keys(myDataset.pie);
      // la lista dei values (quindi i dati del grafico) presenti in pie
      var datasetsPie = [];
      for (var values in myDataset.pie) {
        datasetsPie.push(myDataset.pie[values])
      }
      printAChart(lineGraph, datasetsLine, labelsMounth, "#linear-chart");
      printAChart(pieGraph, datasetsPie, labelsPie, "#pie-chart");
    },
    error : function (richiesta, stato, errore) {
      alert("E' avvenuto un errore. " + errore);
    }

  }); //chiude ajax



});
