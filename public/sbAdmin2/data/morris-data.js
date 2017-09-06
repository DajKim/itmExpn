$(function() {

    Morris.Donut({
        element: 'morris-donut-chart',
        data: [{
            label: "시내교통비",
            value: 85
        }, {
            label: "시간외근무식비",
            value: 15,
            color: "red"
        }],
        resize: true
    });

    Morris.Bar({
        element: 'morris-bar-chart',
        data: [{
            y: '01월',
            b: 30000
        }, {
            y: '02월',
            b: 10000
        }, {
            y: '03월',
            b: 5000
        }, {
            y: '04월',
            b: 2500
        }, {
            y: '05월',
            b: 10000
        }, {
            y: '06월',
            b: 20000
        }, {
            y: '07월',
            b: 10000
        }, {
            y: '08월',
            b: 0
        }, {
            y: '09월',
            b: 3000
        }, {
            y: '10월',
            b: 0
        }, {
            y: '11월',
            b: 0
        }, {
            y: '12월',
            b: 0
        }],     
        xkey: 'y',
        ykeys: ['b'],
        labels: ['사용금액'],
        hideHover: 'auto',
        resize: true
    });
    
});
