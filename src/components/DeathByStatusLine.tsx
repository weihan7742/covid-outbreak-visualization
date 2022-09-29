import { VegaLite, VisualizationSpec } from 'react-vega';

type ChartProps = {
    width: number | "container";
    height: number | "container";
    state: string
}

const DeathByStatusLine = ({width, height, state}: ChartProps) => {

    const spec: VisualizationSpec = {
        width: width,
        height: height,
        data: {
            url: "data/death/deaths_state_melt.csv"
        },
        transform:[
            {filter: {field: "state", equal: state}},
            {filter: {field: "date", range:[{year:2022, month: "aug", date:1}, {year:2022, month: "sep", date:1}]}},
            {filter: "datum.variable != 'Total' && datum.variable != 'Booster'"}
        ],
        mark: "line",
        encoding: {
            x: {field: "date", type: "temporal"},
            y: {field: "value", type: "quantitative"},
            color: {field: "variable", type: "nominal"}
        }
    }

    // const spec: VisualizationSpec = {
    //     width: width,
    //     height: height,
    //     data: {
    //         url: "data/death/deaths_state_melt.csv"
    //     },
    //     layer: [
    //         {
    //             encoding: {
    //                 x: {field: "date", type: "temporal"},
    //                 y: {field: "value", type: "quantitative"},
    //                 color: {field: "variable", type: "nominal"}
    //             },
    //             layer: [
    //                 {mark: "line"},
    //                 {
    //                     params: [{
    //                         name: "label",
    //                         select: {
    //                             type: "point",
    //                             encodings: ["x"],
    //                             nearest: true,
    //                             on: "mouseover",
    //                         }
    //                     }],
    //                     mark: "point",
    //                     encoding: {
    //                         opacity: {
    //                             condition: {
    //                                 param: "label",
    //                                 empty: false,
    //                                 value: 1
    //                             },
    //                             value: 0
    //                         }
    //                     }
    //                 }
    //             ]
    //         },
    //         {
    //             transform: [{filter: {param: "label", empty: false}}],
    //             layer: [
    //                 {
    //                     mark: {type: "rule", color: "gray"},
    //                     encoding: {
    //                         x: {type: "temporal", field: "date", aggregate: "min"}
    //                     }
    //                 },
    //                 {
    //                     encoding: {
    //                         text: {type: "quantitative", field: "value"},
    //                         x: {type: "temporal", field: "date"},
    //                         y: {type: "quantitative", field: "value"},
    //                     },
    //                     layer: [
    //                         {
    //                             mark: {
    //                                 type: "text",
    //                                 stroke: "white",
    //                                 strokeWidth: 2,
    //                                 align: "left",
    //                                 dx: 5,
    //                                 dy: -5
    //                             }
    //                         },
    //                         {
    //                             mark: {type: "text", align: "left", dx: 5, dy: -5},
    //                             encoding: {
    //                                 color: {type: "nominal", field: "variable"}
    //                             }
    //                         }
    //                     ]
    //                 }
    //             ]
    //         }
    //     ],
    //     config: {
    //         background: "transparent",
    //         view: {
    //             stroke: "transparent"
    //         },
    //         axisX:{
    //             domain: false,
    //             grid: false,
    //             ticks: false,
    //             labels: false,
    //             title: null
    //         },
    //         axisY: {
    //             domain: false,
    //             grid: false,
    //             ticks: false,
    //             title: null
    //         }
    //     }
    //   }

    return (
        <VegaLite spec={spec} actions = {false}/>
    )
}

export default DeathByStatusLine;