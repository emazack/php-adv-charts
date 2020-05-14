$(document).ready(function() {

  // FUNZIONE

  function getLevelFunction() {
    var url_string = window.location.href;
    var url = new URL(url_string);
    var level = url.searchParams.get("level");
    return level;
  }

  // FUNZIONE

  function printChartGuest(selector, typeOfGraph, mylabels, mysecondarylabel, myDataset) {
    var ctx = $(selector);
    var chart = new Chart(ctx, {
      type: typeOfGraph,
      data: {
        labels: mylabels,
        datasets: [{
          label: mysecondarylabel,
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

  }

  // FUNZIONE

  function printChartEmployee(selector, typeOfGraph, mylabels, myDataset) {
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

  // FUNZIONE

  function printChartClevel(
    selector,
    typeOfGraph,
    mylabels,
    mysecondarylabel_1,
    mysecondarylabel_2,
    mysecondarylabel_3,
    myDataset_1,
    myDataset_2,
    myDataset_3) {
    var ctx = $(selector);
    var chart = new Chart(ctx, {
      type: typeOfGraph,
      data: {
        labels: mylabels,
        datasets:
        [
          {
            label: mysecondarylabel_1,
            data: myDataset_1,
            backgroundColor: [
                'rgba(55, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(55, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(53, 102, 255, 0.2)',
                'rgba(55, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(55, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(55, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(53, 102, 255, 1)',
                'rgba(55, 159, 64, 1)'
            ],
            borderWidth: 1
        },
        {
          label: mysecondarylabel_2,
          data: myDataset_2,
          backgroundColor: [
              'rgba(355, 99, 132, 0.2)',
              'rgba(354, 162, 235, 0.2)',
              'rgba(355, 206, 86, 0.2)',
              'rgba(375, 192, 192, 0.2)',
              'rgba(353, 102, 255, 0.2)',
              'rgba(355, 159, 64, 0.2)'
          ],
          borderColor: [
              'rgba(355, 99, 132, 1)',
              'rgba(354, 162, 235, 1)',
              'rgba(355, 206, 86, 1)',
              'rgba(375, 192, 192, 1)',
              'rgba(353, 102, 255, 1)',
              'rgba(355, 159, 64, 1)'
          ],
          borderWidth: 1
        },
        {
          label: mysecondarylabel_3,
          data: myDataset_3,
          backgroundColor: [
              'rgba(5, 99, 132, 0.2)',
              'rgba(4, 162, 235, 0.2)',
              'rgba(5, 206, 86, 0.2)',
              'rgba(5, 192, 192, 0.2)',
              'rgba(3, 102, 255, 0.2)',
              'rgba(5, 159, 64, 0.2)'
          ],
          borderColor: [
              'rgba(5, 99, 132, 1)',
              'rgba(4, 162, 235, 1)',
              'rgba(5, 206, 86, 1)',
              'rgba(5, 192, 192, 1)',
              'rgba(3, 102, 255, 1)',
              'rgba(5, 159, 64, 1)'
          ],
          borderWidth: 1
        },
      ]
    },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: true
                  }
              }]
          }
      }
  });
  }

  /////////////////////////////// ESECUZIONE

  var labelsMounth = ['Gennaio','Febbraio','Marzo','Aprile','Maggio','Giugno','Luglio','Agosto','Settembre','Ottobre','Novembre','Dicembre'];


  $.ajax({
    url : "server.php",
    method : "GET",
    data: "level=" + getLevelFunction(),
    success: function (myDataset) {
      if (myDataset['levelAccessGuest']) {
        printChartGuest('#guest', myDataset['typeLineChart'], labelsMounth, 'Vendite', myDataset['dataLineChart']);
      }
      if (myDataset['levelAccessEmployee']) {
        printChartEmployee('#employee', myDataset['typePieEmployee'], myDataset['labelsPieEmployee'], myDataset['dataPieEmployee']);
      }
      if (myDataset['levelAccessClevel']) {
        printChartClevel('#clevel',
         myDataset['typeLineClevel'],
         labelsMounth,
         myDataset['labelsLineClevel'][0],
         myDataset['labelsLineClevel'][1],
         myDataset['labelsLineClevel'][2],
         myDataset['dataLineClevel'][0],
         myDataset['dataLineClevel'][1],
         myDataset['dataLineClevel'][2],
       );
      }
    },
    error : function (richiesta, stato, errore) {
      alert("E' avvenuto un errore. " + errore);
    }

  }); //chiude ajax



});
