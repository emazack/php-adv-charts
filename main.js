$(document).ready(function() {

  function printLineChart() {

    $.ajax({
      url : "database.php",
      method : "GET",
      success: function (myDataset) {
        var ctx = $("#myChart");
        var chart = new Chart(ctx, {
          type: 'line',
          data: {
            labels: ['Gennaio','Febbraio','Marzo','Aprile','Maggio','Giugno','Luglio','Agosto','Settembre','Ottobre','Novembre','Dicembre'],
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
              data: myDataset
            }]
          },
          // Configuration options go here
          options: {}
        });
      },
      error : function (richiesta, stato, errore) {
        alert("E' avvenuto un errore. " + errore);
      }

    }); //chiude ajax

  }; //chiude funzione printLineChart


  /////////////////////////////// ESECUZIONE

  printLineChart();

});
