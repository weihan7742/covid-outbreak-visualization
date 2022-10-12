import { VegaLite, VisualizationSpec } from 'react-vega';

type ChartProps = {
    width: number | "container";
    height: number | "container";
    state: string;
    toggle: boolean;
}

const VerticalBarChart = ({width, height, state, toggle}: ChartProps) => {

    const spec: VisualizationSpec = {
        width: width,
        height: height,
        data: {
            url: "data/vax/vax_boosters.csv"
        },
        transform: [{filter: {field: "state", equal: state}}],
        layer: [{
            mark: "bar",
            encoding: {
                color: {value: toggle ? "#2B7AB9" : "#8ECEFC"}
            }
        }, {
            mark: {
                type: "text",
                align: "center",
                baseline: "middle",
                dy: -10,
            },
            encoding: {
                text: {field: "value", type: "quantitative", format: ","}
            }
        }],
        encoding: {
            x: {field: "variable", type: "nominal", axis: {labelAngle: 0}, title: "Booster Combo", sort: "-y"},
            y: {aggregate: "sum", field: "value", type: "quantitative", title: "Number of Vaccinations"},
            tooltip: [
                {field: "variable", "type": "nominal", "title": "Booster Combo"},
                {field: "value", "type": "quantitative", "title": "Number of Vaccinations", format: ","}
            ]
        },
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
            font: 'Montserrat',
            mark: {
                fontSize: 14
            }
        },
      }

    return (
        <VegaLite spec={spec} actions = {false}/>
    )
}

export default VerticalBarChart;