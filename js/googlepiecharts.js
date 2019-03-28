var myChartStudio = echarts.init(document.getElementById('chartContainerBUX'));

let ContainerBUX = {

    tooltip : {
        trigger: 'item',
        formatter: "{b} : {c} ({d}%)"
    },
    series : [
        {
            type: 'pie',
            radius : ['30%', '50%'],
            center: ['50%', '50%'],
            data:[
                {value:18, name:'Developpeur'},
                {value:10, name:'CDP'},
                {value:8, name:'Analyste'},
                {value:6, name:'Architecte'},
                {value:3, name:'DP'},
                {value:3, name:'RBU'},
                {value:3, name:'Expert Fonctionnel'}
            ],
            color:[
                "#89C34A",
                "#60CBF3",
                "#EA212D",
                "#C02188",
                "#104E9E",
                "#F59130",
                "#0096D5",
                "#752F8E",
                "#34B14F",
                "#FAB331"],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};

myChartStudio.setOption(ContainerBUX);

var myChartStudioPC = echarts.init(document.getElementById('chartContainerPrestaCollaBUX'));
let PrestaCollaBUX = {

    tooltip : {
        trigger: 'item',
        formatter: "{b} : {c} ({d}%)"
    },
    series : [
        {
            type: 'pie',
            radius : ['30%', '50%'],
            center: ['50%', '50%'],
            data:[
                {value:31, name:'Collab'},
                {value:10, name:'Presta'}
            ],
            color:[
                "#4C0958",
                "#FAB331"],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};
myChartStudioPC.setOption(PrestaCollaBUX);