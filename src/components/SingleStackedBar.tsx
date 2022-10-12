import { VegaLite, VisualizationSpec } from 'react-vega';

type ChartProps = {
    width: number | "container";
    height: number | "container";
    state: string;
    toggle: boolean;
}

const SingleStackedBar = ({width, height, state, toggle}: ChartProps) => {

    const spec: VisualizationSpec = {
        width: width,
        height: height,
        data: {
            url: "data/vax/total_vax.csv"
        },
        transform: [{filter: {field: "state", equal: state}}],
        mark: {
            type: "bar",
            width: 100,
        },
        encoding: {
            y: {field: "value", type: "quantitative", title: "Number of Vaccinations"},
            color: {field: "variable", type: "nominal", title: "Vaccine Brand", 
            scale: {
                domain: ["AstraZeneca", "Cansino", "Pfizer", "Sinopharm", "Sinovac"],
                range: ["#3657B6", "#4C78D9", "#8ECEFC", "#F9AE6B", "#F88D3D"]
            }},
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
            },
            font: 'Montserrat',
        }
      }

    return (
        <VegaLite spec={spec} actions = {false}/>
    )
}

export default SingleStackedBar;