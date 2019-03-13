window.onload = function () {
    CanvasJS.addColorSet("adventielShades",
        [//colorSet Array

            "#4C0958",
            "#FAB331",
            "#89C34A",
            "#60CBF3",
            "#EA212D",
            "#C02188",
            "#104E9E",
            "#F59130",
            "#0096D5",
            "#34B14F",
            "#752F8E"

        ]);

    var chart = new CanvasJS.Chart("chartContainer", {

        colorSet: "adventielShades",
        animationEnabled: true,
        data: [{
            type: "doughnut",
            innerRadius: "65%",
            startAngle: 270,
            indexLabel: "{label}: {y}",
            dataPoints: [
                { label: "Développeur", y: 18 },
                { label: "CDP", y: 10 },
                { label: "Analyste", y: 8 },
                { label: "Architecte", y: 6 },
                { label: "DP", y: 3 },
                { label: "RBU", y: 1 },
                { label: "Expert Fonctionnel", y: 1 }
            ]
        }]
    });
    chart.render();

    var chartprestcoll = new CanvasJS.Chart("chartContainerPrestaColla", {

        colorSet: "adventielShades",
        animationEnabled: true,
        data: [{
            type: "doughnut",
            innerRadius: "65%",
            startAngle: 270,
            indexLabel: "{label}: {y}",
            dataPoints: [
                { label: "Collab", y: 31 },
                { label: "Presta", y: 10 },
            ]
        }]
    });
    chartprestcoll.render();

    /*var options = {
        colorSet: "adventielShades",
        animationEnabled: true,
        data: [{
            type: "doughnut",
            innerRadius: "65%",
            showInLegend: true,
            legendText: "{label}",
            indexLabel: "{label}: {y}",
            dataPoints: [
                { label: "Développeur", y: 18 },
                { label: "CDP", y: 10 },
                { label: "Analyste", y: 8 },
                { label: "Architecte", y: 6 },
                { label: "DP", y: 3 },
                { label: "RBU", y: 1 },
                { label: "Expert Fonctionnel", y: 1 }
            ]
        }]
    };
    $("#chartContainer").CanvasJSChart(options);*/
};