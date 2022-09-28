import { VegaLite, VisualizationSpec } from 'react-vega';

type TrellisAreaProps = {
    width: number;
    height: number;
}

const TrellisArea = ({width, height}: TrellisAreaProps) => {

    const spec: VisualizationSpec = {
        width: 500,
        height: 50,
        data: {
            url: "data/cases/cases_state.csv"
        },
        mark: "area",
        encoding:{
            x: {
                field: "date",
                type: "temporal",
                title: "Date",
                axis: {grid: false},
            },
            y: {
                field: "cases_new",
                type: "quantitative",
                axis: {grid: false},
                title: "",
            },
            color: {
                field: "state",
                type: "nominal",
                legend: null
            },
            row: {
                field: "state",
                type: "nominal",
                title: "State",
                sort: {op: "sum", field: "cases_new", order: "descending"},
            }
        }
      }

    return (
        <VegaLite spec={spec} actions = {false}/>
    )
}

export default TrellisArea;