import { VegaLite, VisualizationSpec } from 'react-vega';

type ChartProps = {
    width: number | "container";
    height: number | "container";
    toggle: boolean;
}

const BubblePlot = ({width, height, toggle}: ChartProps) => {

    const spec: VisualizationSpec = {
        width: width,
        height: height,
        data: {
            url: "data/bubbleplot.csv"
        },
        params: [
            {
                name: "Population_Above",
                value: 0,
                bind: {
                input: "range",
                min: 0,
                max: 15000000,
                step: 100000,
                name: "Minimum Population: "
                }
            }
        ],
        transform: [
            {
                calculate: "datum.cases_new/datum.pop * 10000",
                as: "Cases per 10,000 Population"
            },
            {filter: "datum.pop > Population_Above"}
        ],
        encoding: {
            x: {
                field: "cases_new",
                type: "quantitative",
                title: "Confirmed Cases",
                axis: {tickCount: 4},
                scale: {type: "log", domain: [10000, 20000000]}
            },
            y: {
                field: "deaths",
                type: "quantitative",
                title: "Deaths",
                axis: {tickCount: 6},
                scale: {type: "log", domain: [10, 100000]}
            },
        },
        layer: [
            {
                mark: "circle",
                encoding: {
                    size: {
                        field: "pop",
                        type: "quantitative",
                        scale: {
                            type: "threshold",
                            domain: [100000, 1000000, 5000000, 10000000],
                            range: [100, 300, 500, 1000, 2000]
                        },
                        legend: {"format": ".1s", "title": "Population"}
                    },
                    color: {
                        field: "state",
                        title: "State",
                        type: "nominal",
                        legend: null,
                        scale: {scheme: "category20c"}
                    },
                    tooltip: [
                        {field: "state", "type": "nominal", "title": "State"},
                        {field: "cases_new", "type": "quantitative", "title": "Confirmed Cases", "format": ","},
                        {field: "deaths", "type": "quantitative", "title": "Deaths", "format": ","},
                        {field: "pop", "type": "quantitative", "title": "Population", "format": ","},
                        {field: "Cases per 10,000 Population", "type": "quantitative", "format": ".2f"},
                    ]
                }
            },
            {
                mark: {
                    type: "text",
                    align: "right",
                    baseline: "middle",
                    dx: 80,
                    fontSize: 11.5,
                    fontStyle: "italic"
                },
                encoding: {
                    text: {"field": "state", "type": "nominal"},
                    color: {"value": toggle ? "black" : "white"},
                    opacity: {
                        condition: {
                            test: "datum['state'] === 'Selangor' | datum['state'] === 'W.P. Labuan'",
                            value: 1
                        },
                        value: 0
                    }
                }
            }
        ],
        config: {
            background: "transparent",
            view: {
                stroke: "transparent"
            },
            text: {
                color: toggle ? "black" : "white"
            },
            axisX:{
                // domain: false,
                grid: false,
                ticks: false,
                title: null,
                labelColor: toggle ? "black" : "white",
                domainColor: toggle ? "black" : "white",
                titleColor: toggle ? "black" : "white",
                labelFontSize: 12,
                titleFontSize: 13,                     
            },
            axisY: {
                // domain: false,
                grid: false,
                ticks: false,
                title: null,
                labelColor: toggle ? "black" : "white",
                domainColor: toggle ? "black" : "white",
                titleColor: toggle ? "black" : "white",
                labelFontSize: 12,
                titleFontSize: 13, 
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

export default BubblePlot;