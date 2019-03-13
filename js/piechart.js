window.onload = function () {
    CanvasJS.addColorSet("adventielShades",
        [//colorSet Array
            "#89C34A",
            "#FAB331",
            "#60CBF3",
            "#752F8E",
            "#EA212D"
        ]);

    var options = {
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
    $("#chartContainer").CanvasJSChart(options);
};