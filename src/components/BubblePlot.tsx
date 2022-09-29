import { VegaLite, VisualizationSpec } from 'react-vega';

type ChartProps = {
    width: number | "container";
    height: number | "container";
}

const BubblePlot = ({width, height}: ChartProps) => {

    const spec: VisualizationSpec = {
        width: width,
        height: height,
        data: {
            url: "data/bubbleplot.csv"
        },
        mark: "circle",
        encoding: {
            x: {
                field: "cases_new",
                type: "quantitative",
                title: "Confirmed Cases",
                axis: {tickCount: 4},
                scale: {type: "log"}
            },
            y: {
                field: "deaths",
                type: "quantitative",
                title: "Deaths",
                axis: {tickCount: 6},
                scale: {type: "log"}

            },
            color: {
                field: "state",
                title: "State",
                type: "nominal",
            },
            size: {
                field: "pop",
                title: "Population",
                type: "quantitative",
                scale: {
                    type: "threshold",
                    domain: [1000000, 2000000, 4000000, 8000000],
                    range: [100, 200, 400, 800, 1600]
                },
                legend: {format: ".1s"}
            }
        },
        config: {
            background: "transparent",
            view: {
                stroke: "transparent"
            },
            axisX:{
                // domain: false,
                grid: false,
                ticks: false,
                title: null
            },
            axisY: {
                // domain: false,
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

export default BubblePlot;