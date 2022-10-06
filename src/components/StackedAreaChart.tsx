import { VegaLite, VisualizationSpec } from 'react-vega';

type ChartProps = {
    width: number | "container";
    height: number | "container";
    state: string
}

const StackedAreaChart = ({width, height, state}: ChartProps) => {

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

export default StackedAreaChart;