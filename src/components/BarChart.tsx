import { VegaLite, VisualizationSpec } from 'react-vega';

type BarChartProps = {
    width: number | "container";
    height: number | "container";
}

const BarChart = ({width, height}: BarChartProps) => {

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
            }
        },
        layer: [{
            mark: "bar"
        }, {
            mark: {
                type: "text",
                align: "left",
                baseline: "middle",
                dx: 3
            },
            encoding: {
                text: {field: "deaths_per_population", type: "quantitative"}
            }
        },
        ],
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

export default BarChart;