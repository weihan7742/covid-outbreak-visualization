import { VegaLite, VisualizationSpec } from 'react-vega';

type ChartProps = {
    width: number | "container";
    height: number | "container";
    state: string
}

const SingleStackedBar = ({width, height, state}: ChartProps) => {

    const spec: VisualizationSpec = {
        width: width,
        height: height,
        data: {
            url: "data/vax/total_vax.csv"
        },
        transform: [{filter: {field: "state", equal: state}}],
        mark: "bar",
        encoding: {
            y: {field: "value", type: "quantitative", title: "Number of Vaccinations"},
            color: {field: "variable", type: "nominal", title: "Vaccine Brand"},
            tooltip: [
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

export default SingleStackedBar;