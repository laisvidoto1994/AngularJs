var app = angular.module("testeInicial", []);

/**
 *  Controller testeInicialCtrl
 */
app.controller("testeInicialCtrl", function ($scope) {

    google.charts.load('current', { 'packages': ['corechart'] });

    google.charts.setOnLoadCallback(
        function () {
            drawChart1(); /* barra*/
            drawChart2(); /* pizza*/
            drawChart3(); /* pizza json*/
            drawChart4(); /* Donut Chart*/
        }
    );

    /* barra*/
    function drawChart1() {

        var data = google.visualization.arrayToDataTable([
            ['Year', 'Sales', 'Expenses', 'Profit'],
            ['2014', 1000, 400, 200],
            ['2015', 1170, 460, 250],
            ['2016', 660, 1120, 300],
            ['2017', 1030, 540, 350]
        ]);

        var view = new google.visualization.DataView(data);
        view.setColumns([
            0,
            1, {
                calc: "stringify",
                sourceColumn: 1,
                type: "string",
                role: "annotation"
            },
            2, {
                calc: "stringify",
                sourceColumn: 2,
                type: "string",
                role: "annotation"
            },
            3, {
                calc: "stringify",
                sourceColumn: 3,
                type: "string",
                role: "annotation"
            }
        ]);

        var options = {
            title: 'Google Chart the bar',
            subtitle: 'exemplos com anos e dados',
            height: 250,
            colors: ['#93bfa3', '#f2b680', '#f29999'],//cor das barras em ordem
            legend: {
                position: 'top',//posição onde ficará as legendas do grafico
                maxLines: 1, //numero maximo de linhas
            },
            seriesType: 'bars',
            vAxis: {
                title: 'Valor',
            },
            hAxis: {
                title: 'Anos',
                gridlines: {
                    color: '#ffff'
                },
                baselineColor: 'black',
            },
            backgroundColor: {
                fill: '#f2efc4', //cor do plano de fundo do grafico
                fillOpacity: 0.3
            }
        };

        var chart = new google.visualization.ColumnChart(document.getElementById('barras'));
        chart.draw(view, options);
    }

    /* pizza*/
    function drawChart2() {

        var data = google.visualization.arrayToDataTable([
            ['Year', 'Sales'],
            ['2014', 1000],
            ['2015', 1170],
            ['2016', 660],
            ['2017', 1030]
        ]);

        var options = {
            title: 'Google Chart Pie',
            colors: ['#93bfa3', '#f2b680', '#f29999', '#737373'],
            legend: {
                position: 'left',
                textStyle: {
                    color: 'black',
                    fontSize: 15
                }
            },
            backgroundColor: {
                fill: '#f2efc4',
                fillOpacity: 0.3
            },
            is3D: false,
        };

        var chart = new google.visualization.PieChart(document.getElementById('pie'));
        chart.draw(data, options);
    }

    /*pizza json*/
    function drawChart3() {

        var options = {
            title: 'Google Chart Pie Json',
            legend: {
                position: 'left',
                textStyle: {
                    color: 'black',
                    fontSize: 15
                },
            },
            colors: ['#93bfa3', '#f2b680', '#f29999', '#737373','#d97b66'],
            backgroundColor: {
                fill: '#f2efc4',
                fillOpacity: 0.3
            },
            is3D: true,//deixar o grafico como se fosse 3D
        };

        var jsonData = $.ajax({
            url: "dado.json",
            dataType: "json",
            async: false
        }).responseText;


        //Dado é lido do servidor!
        var data = new google.visualization.DataTable(jsonData);

        var chart = new google.visualization.PieChart(document.getElementById('pieJson'));
        chart.draw(data, options);
    }

    /* Donut Chart*/
    function drawChart4() {

        var data = google.visualization.arrayToDataTable([
            ['Year', 'Sales'],
            ['2014', 1000],
            ['2015', 1170],
            ['2016', 660],
            ['2017', 1030]
        ]);

        var options = {
            title: 'Google Chart Donut',
            pieHole: 0.4,
            colors: ['#93bfa3', '#f2b680', '#f29999', '#737373'],
            backgroundColor: {
                fill: '#f2efc4',
                fillOpacity: 0.3
            }
        }

        var chart = new google.visualization.PieChart(document.getElementById('donut'));
        chart.draw(data, options);
    }


});


/**
 *  Controller gaugeCtrl
 */
app.controller("gaugeCtrl", function ($scope) {

    google.charts.load('current', { 'packages': ['gauge'] });

    google.charts.setOnLoadCallback(
        function () {
            drawChart5(); /* Gauge Chart*/
        }
    );

    /* Gauge Chart*/
    function drawChart5() {
        var data = google.visualization.arrayToDataTable([
            ['Label', 'Value'],
            ['Memory', 80],
            ['CPU', 55],
            ['Network', 68]
        ]);

        var options = {
            min: 0,//valor minimo do velocimetro
            width: 400,
            height: 120,
            greenFrom: 40, greenTo: 70,//faixa minima e maxima do verde   
            yellowFrom: 70, yellowTo: 90,//faixa minima e maxima do amarelo            
            redFrom: 90, redTo: 100,//faixa minima e maxima do vermelho
            minorTicks: 5,//
        };

        var chart = new google.visualization.Gauge(document.getElementById('gauge'));
        chart.draw(data, options);

        setInterval(function () {
            data.setValue(0, 1, 40 + Math.round(60 * Math.random()));
            chart.draw(data, options);
        }, 13000);
        setInterval(function () {
            data.setValue(1, 1, 40 + Math.round(60 * Math.random()));
            chart.draw(data, options);
        }, 5000);
        setInterval(function () {
            data.setValue(2, 1, 60 + Math.round(20 * Math.random()));
            chart.draw(data, options);
        }, 26000);
    }

});


/**
 * Controller mapaCtrl
 */
app.controller("mapaCtrl", function ($scope) {

    google.charts.load('current', { 'packages': ['map'], "mapsApiKey": "AIzaSyCIT5iiiDPx8apkLVMI9XhX8yasWc9kZ00" });

    google.charts.setOnLoadCallback(
        function () {
            drawChart6(); /* mapa */
        }
    );

    /* mapa */
    function drawChart6() {
        var data = google.visualization.arrayToDataTable([
            ['Lat', 'Long', 'Name'],
            [37.4232, -122.0853, 'Work'],
            [37.4289, -122.1697, 'University'],
            [37.6153, -122.3900, 'Airport'],
            [37.4422, -122.1731, 'Shopping']
        ]);

        var map = new google.visualization.Map(document.getElementById('mapa'));
        map.draw(data, {
            showTooltip: true,
            showInfoWindow: true
        });
    }

});