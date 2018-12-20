var app = angular.module("testeInicial", []);

app.controller("testeInicialCtrl", function ($scope) {

    google.charts.load('current', { 'packages': ['corechart'] });

    google.charts.setOnLoadCallback(
        function () {
            drawChart1(); /* barra*/
            drawChart2(); /* pizza*/
            drawChart3(); /*pizza json*/
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

            title: 'Google Chart',

            subtitle: 'exemplos com anos e dados',
            height: 500,
            colors: ['#1b9e77', '#d95f02', '#7570b3'],
            legend: {
                position: 'right'
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
                fill: 'black',
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

            colors: ['#1b9e77', '#d95f02', '#7570b3', '#FFA500'],
            legend: {
                position: 'left',
                textStyle: {
                    color: 'black',
                    fontSize: 15
                }
            },
            backgroundColor: {
                fill: 'black',
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
            backgroundColor: {
                fill: 'black',
                fillOpacity: 0.3
            },
            is3D: true,
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
            title: 'Google Chart donut',
            pieHole: 0.4,
            backgroundColor: {
                fill: 'black',
                fillOpacity: 0.3
            }
        }

        var chart = new google.visualization.PieChart(document.getElementById('donut'));
        chart.draw(data, options);
    }

});