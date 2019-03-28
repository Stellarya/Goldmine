window.onload = function () {
    CanvasJS.addColorSet("adventielShades",
        [   "#89C34A",
            "#60CBF3",
            "#EA212D",
            "#C02188",
            "#104E9E",
            "#F59130",

            "#0096D5",
            "#752F8E",
            "#34B14F",
            "#FAB331",

        ]);
    CanvasJS.addColorSet("adventielPrestaColl",
        [//colorSet Array
            "#4C0958",
            "#FAB331"

        ]);

    /*var chart = new CanvasJS.Chart("chartContainerBUX", {

        colorSet: "adventielShades",
        animationEnabled: true,
        data: [{
            type: "doughnut",
            innerRadius: "65%",
            startAngle: 270,
            indexLabel: "{label}: {y}",
            dataPoints: [
                {label: "Développeur", y: 18},
                {label: "CDP", y: 10},
                {label: "Analyste", y: 8},
                {label: "Architecte", y: 6},
                {label: "DP", y: 3},
                {label: "RBU", y: 1},
                {label: "Expert Fonctionnel", y: 1}
            ]
        }]
    });
    chart.render();*/

    var chartAdv = new CanvasJS.Chart("chartContainerAdv", {

        colorSet: "adventielShades",
        animationEnabled: true,
        data: [{
            type: "doughnut",
            innerRadius: "65%",
            startAngle: 270,
            indexLabel: "{label}: {y}",
            dataPoints: [
                {label: "Développeur", y: 47},
                {label: "CDP", y: 21},
                {label: "Analyste", y: 17},
                {label: "Architecte", y: 16},
                {label: "DP", y: 5},
                {label: "RBU", y: 1},
                {label: "Expert Fonctionnel", y: 1},
                {label: "Ingé Méthode", y: 1},
                {label: "Intégrateur Indus", y: 1}
            ]
        }]
    });
    chartAdv.render();

    /*var chartprestcoll = new CanvasJS.Chart("chartContainerPrestaCollaBUX", {

        colorSet: "adventielPrestaColl",
        animationEnabled: true,
        data: [{
            type: "doughnut",
            innerRadius: "65%",
            startAngle: 270,
            indexLabel: "{label}: {y}",
            dataPoints: [
                {label: "Collab", y: 31},
                {label: "Presta", y: 10},
            ]
        }]
    });
    chartprestcoll.render();*/

    var chartprestcollAdv = new CanvasJS.Chart("chartContainerPrestaCollaAdv", {

        colorSet: "adventielPrestaColl",
        animationEnabled: true,
        data: [{
            type: "doughnut",
            innerRadius: "65%",
            startAngle: 270,
            indexLabel: "{label}: {y}",
            dataPoints: [
                {label: "Collab", y: 141},
                {label: "Presta", y: 22},
            ]
        }]
    });
    chartprestcollAdv.render();

};