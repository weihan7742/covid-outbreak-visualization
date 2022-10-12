import { VegaLite, VisualizationSpec } from 'react-vega';

type ChartProps = {
    width: number | "container";
    height: number | "container";
    state: string;
    toggle: boolean;
}

const DosesStackedBar = ({width, height, state, toggle}: ChartProps) => {

    const spec: VisualizationSpec = {
        width: width,
        height: height,
        data: {
            url: "data/vax/vax_doses.csv"
        },
        transform:[
            {filter: {field: "state", equal: state}},
            {filter: {field: "date", range: [
                {year: 2022, month: 3, date: 10},
                {year: 2022, month: 9, date: 10}
            ]}},
            {
                calculate: 'indexof(["1st Dose", "2nd Dose", "1st Booster", "2nd Booster"], datum.variable)',
                as: "order"
            }
        ],
        mark: "bar",
        encoding: {
            x: {
                field: "date",
                type: "temporal",
                title: "Date",
            },
            y: {
                field: "value",
                type: "quantitative",
                title: "Number of Doses",
            },
            color: {
                field: "variable",
                type: "nominal",
                title: "Vaccine Type",
                scale: {
                    domain: ["1st Dose", "2nd Dose", "1st Booster", "2nd Booster"],
                    range: toggle ? ["#3657B6", "#8ECEFC", "#E6550E", '#32904F'] : ["#3657B6", "#8ECEFC", "#E6550E", '#32904F'] 
                }
            },
            order: {field: "order", type: "ordinal"},
            tooltip: [
                {field: "date", "type": "temporal", "title": "Date", format: "%d-%b-%Y"},
                {field: "variable", "type": "nominal", "title": "Vaccine Type"},
                {field: "value", "type": "quantitative", "title": "Number of Doses", format: ","}
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

export default DosesStackedBar;