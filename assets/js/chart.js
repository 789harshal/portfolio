
var options = {
    series: [93],
    chart: {
    height: 350,
    type: 'radialBar',
  },
  plotOptions: {
    radialBar: {
      hollow: {
        size: '70%',
      }
    },
  },
  labels: ['HTML/CSS'],
  };

  var chart= new ApexCharts(document.querySelector("#chart-1"), options);
  chart.render();

  var options = {
    series: [88],
    chart: {
    height: 350,
    type: 'radialBar',
  },
  plotOptions: {
    radialBar: {
      hollow: {
        size: '70%',
      }
    },
  },
  labels: ['JAVASCRIPT'],
  };

  var chart= new ApexCharts(document.querySelector("#chart-2"), options);
  chart.render();

  var options = {
    series: [95],
    chart: {
    height: 350,
    type: 'radialBar',
  },
  plotOptions: {
    radialBar: {
      hollow: {
        size: '70%',
      }
    },
  },
  labels: ['PHP'],
  };

  var chart= new ApexCharts(document.querySelector("#chart-3"), options);
  chart.render();

  var options = {
    series: [89],
    chart: {
    height: 350,
    type: 'radialBar',
  },
  plotOptions: {
    radialBar: {
      hollow: {
        size: '70%',
      }
    },
  },
  labels: ['WORDPRESS'],
  };

  var chart= new ApexCharts(document.querySelector("#chart-4"), options);
  chart.render();