import { VegaLite, VisualizationSpec } from 'react-vega';

type ChartProps = {
    width: number | "container";
    height: number | "container";
    state: string;
    toggle: boolean;
}

const StackedAreaChart = ({width, height, state, toggle}: ChartProps) => {

    const spec: VisualizationSpec = {
        width: width,
        height: height,
        data: {
            url: "data/vax/vax_brand_time.csv"
        },
        mark: "area",
        
        transform:[
            {filter: {field: "state", equal: state}},
            {filter: {field: "date", range: [
                {year: 2022, month: 3, date: 10},
                {year: 2022, month: 9, date: 10}
            ]}}
        ],
        encoding: {
            x: {field: "date", type: "temporal", title: "Date"},
            y: {field: "value", type: "quantitative", stack: "normalize"},
            color: {field: "variable", type: "nominal", title: "Vaccine Brand",
            scale: {
                domain: ["AstraZeneca", "Cansino", "Pfizer", "Sinopharm", "Sinovac"],
                range: ["#E6550E", "#32904F", "#8ECEFC", "#756BB1", "#F88D3D"]
            }},
            tooltip: [
                {field: "date", "type": "temporal", "title": "Date", format: "%d-%b-%Y"},
                {field: "variable", "type": "nominal", "title": "Vaccine Brand"},
                {field: "value", "type": "quantitative", "title": "Number of Vaccinations", format: ","}
            ]
        },
        config: {
            background: "transparent",
            view: {
                stroke: "transparent"
            },
            axisX:{
                domain: false,
                grid: false,
                ticks: false,
                // labels: false,
                title: null,
                labelColor: toggle ? "black" : "white",
                domainColor: toggle ? "black" : "white",
                titleColor: toggle ? "black" : "white",
                labelFontSize: 12,
                titleFontSize: 13,                     
            },
            axisY: {
                domain: false,
                grid: false,
                ticks: false,
                title: null,
                labelColor: toggle ? "black" : "white",
                domainColor: toggle ? "black" : "white",
                titleColor: toggle ? "black" : "white",
                labelFontSize: 12,
                titleFontSize: 13,                     
            },
            text: {
                color: "white"
            },
            legend: {
                labelColor: toggle ? "black" : "white",
                titleColor: toggle ? "black" : "white",
                symbolFillColor: toggle ? "black" : "white",
                labelFontSize: 12,
                titleFontSize: 13,                                 
            }
        }
      }

    return (
        <VegaLite spec={spec} actions = {false}/>
    )
}

export default StackedAreaChart;