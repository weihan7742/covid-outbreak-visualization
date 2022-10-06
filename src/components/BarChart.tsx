import { VegaLite, VisualizationSpec } from 'react-vega';

type BarChartProps = {
    width: number | "container";
    height: number | "container";
    toggle: boolean;
}

const BarChart = ({width, height, toggle}: BarChartProps) => {

    const spec: VisualizationSpec = {
        width: width,
        height: height,
        data: {
            url: "data/death/death_groupby_states.csv"
        },
        encoding: {
            y: {
                field: "state", type: "nominal", sort: "-x"
            },
            x: {
                aggregate: "sum", field: "deaths_per_population", type:"quantitative"
            },
            tooltip: [
                {field: "state", "type": "nominal", "title": "State"},
                {field: "deaths_per_population", "type": "quantitative", "title": "Deaths per 100,000", format: ","}
            ]
        },
        layer: [{
            mark: "bar",
            encoding: {
                color: {value: toggle ? "#2B7AB9" : "#8ECEFC"}
            }
        }, {
            mark: {
                type: "text",
                align: "left",
                baseline: "middle",
                dx: 3
            },
            encoding: {
                text: {field: "deaths_per_population", type: "quantitative"},
            },
        },
        ],
        config: {
            text: {
                color: toggle ? "black" : "white"
            },
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
            }
        }
      }

    return (
        <VegaLite spec={spec} actions = {false}/>
    )
}

export default BarChart;