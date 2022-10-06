import { VegaLite, VisualizationSpec } from 'react-vega';

type ChartProps = {
    width: number | "container";
    height: number | "container";
    state: string
}

const DonutChart = ({width, height, state}: ChartProps) => {

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
            color: {field: "variable", type: "nominal", title: "Age Group"},
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
                title: null
            },
            axisY: {
                domain: false,
                grid: false,
                ticks: false,
                title: null
            }
        }
      }

    return (
        <VegaLite spec={spec} actions = {false}/>
    )
}

export default DonutChart;