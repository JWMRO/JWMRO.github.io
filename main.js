d3.csv("https://raw.githubusercontent.com/JWMRO/LATIA112-1-repository/main/111_student.csv").then(
    res => {
        console.log("res",res);
        drawLineChart(res);
        drawBarChart(res);
        drawPieChart(res);
    }
)

//line chart

function drawLineChart(res){
    let myGraph = document.getElementById("myGraph");
    console.log(res)
    let trace1 = {};
    trace1.mode = "lines+markers";
    trace1.type = "scatter";
    trace1.name = "Revenue";
    trace1.marker = {
        size: 10
    };
    trace1.x = [];
    trace1.y = [];
    trace1.text = [];
    trace1.textposition = "bottom center";
    trace1.textfont = {
        family: "Raleway, sans-serif",
        size: 15,
        color: "blue"
    };

    for (let i = 0; i < res.length; i++) {
        trace1.x[i] = res[i]["學校名稱"];
        trace1.y[i] = Number(0)
        trace1.y[i] =Number(res[i]["總計"]);
        console.log(trace1.y[i])
        trace1.text[i] = res[i]["學年度"];
    }

    let data = [];
    data.push(trace1);


    let layout = {
        margin: {
            t: 80
        },
        title:"111學年年級人數"
    };
    Plotly.newPlot(myGraph, data, layout);
}

//bar chart
function drawBarChart(res){
    let myGraph2 = document.getElementById('myGraph2');
    let trace2 = {};
    trace2.type = "bar";
    trace2.name = "男生";
    trace2.x = [];
    trace2.y = [];
    trace2.y[1]=Number(0);
    trace2.y[0]=Number(0);


    for (let i=0; i < res.length; i++){
        trace2.y[0]+= Number(res[i]["男生計"]);
        trace2.y[1]+= Number(res[i]["女生計"]);
        // console.log(res[i]["男生計"])
    }
    trace2.x[0] = "男生";
    trace2.x[1] = "女生";
    console.log(trace2.y[0])
    console.log(trace2.y[1])
    
    let data2 = [];
    data2.push(trace2);

    
    let layout2 = {
        margin:{
            t:0
        },
    };
    
    Plotly.newPlot(myGraph2, data2, layout2);
}

// pie chart
function drawPieChart(res){
    let myGraph3 = document.getElementById('myGraph3');

    let trace3 = {};
    trace3.type = 'pie';
    trace3.title = "111年學校男女比";
    trace3.labels = ['男生', '女生'];
    trace3.values = [0, 0];
    trace3.hole = 0.5;
    trace3.values[1]=Number(0);
    trace3.values[0]=Number(0);


    for (let i=0; i < res.length; i++){
        trace3.values[0]+= Number(res[i]["男生計"]);
        trace3.values[1]+= Number(res[i]["女生計"]);
        // console.log(res[i]["男生計"])
    }

    console.log(trace3.values[0])
    console.log(trace3.values[1])
    
    let data3 = [];
    data3.push(trace3);
    
    let layout3 = {
        margin:{
            t:10,
            l:0
        }
    };
    
    Plotly.newPlot(myGraph3, data3, layout3);}