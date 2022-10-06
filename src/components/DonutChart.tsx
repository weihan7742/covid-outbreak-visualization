import { VegaLite, VisualizationSpec } from 'react-vega';

type ChartProps = {
    width: number | "container";
    height: number | "container";
    state: string;
    toggle: boolean;
}

const DonutChart = ({width, height, state, toggle}: ChartProps) => {

    const spec: VisualizationSpec = {
        width: width,
        height: height,
        data: {
            url: "data/cases/age_cases.csv"
        },
        transform:[{filter: {field: "state", equal: state}}],
        mark: {type: "arc", innerRadius: 100},
        encoding: {
            theta: {field: "value", type: "quantitative"},
            color: {field: "variable", type: "nominal", title: "Age Group", scale: {scheme: "category20c"}},
            tooltip: [
                {field: "variable", "type": "nominal", "title": "Age Group"},
                {field: "value", "type": "quantitative", "title": "Cases", format: ","}
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
                labels: false,
                title: null,
                labelColor: toggle ? "black" : "white",
                domainColor: toggle ? "black" : "white",
                titleColor: toggle ? "black" : "white",    
            },
            axisY: {
                domain: false,
                grid: false,
                ticks: false,
                title: null,
                labelColor: toggle ? "black" : "white",
                domainColor: toggle ? "black" : "white",
                titleColor: toggle ? "black" : "white",    
            },
            legend: {
                labelColor: toggle ? "black" : "white",
                titleColor: toggle ? "black" : "white",
                symbolFillColor: toggle ? "black" : "white"     
            },
            text: {
                color: toggle ? "black" : "white"
            }
        }
      }

    return (
        <VegaLite spec={spec} actions = {false}/>
    )
}

export default DonutChart;