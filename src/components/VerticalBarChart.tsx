import { VegaLite, VisualizationSpec } from 'react-vega';

type ChartProps = {
    width: number | "container";
    height: number | "container";
    state: string
}

const VerticalBarChart = ({width, height, state}: ChartProps) => {

    const spec: VisualizationSpec = {
        width: width,
        height: height,
        data: {
            url: "data/cases/vax_cases.csv"
        },
        transform: [{filter: {field: "state", equal: state}}],
        layer: [{
            mark: "bar"
        }, {
            mark: {
                type: "text",
                align: "center",
                baseline: "middle",
                dy: -10,
            },
            encoding: {
                text: {field: "value", type: "quantitative"}
            }
        }],
        encoding: {
            x: {field: "variable", type: "nominal", axis: {labelAngle: 0}, title: "Vaccine Phases"},
            y: {field: "value", type: "quantitative", title: "Number of Cases"},
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

export default VerticalBarChart;