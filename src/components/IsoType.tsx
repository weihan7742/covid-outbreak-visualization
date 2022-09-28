import { VegaLite, VisualizationSpec } from 'react-vega';

type IsoTypeProps = {
    width: number | "container";
    height: number | "container";
}

const IsoType = ({width, height}: IsoTypeProps) => {

    const spec: VisualizationSpec = {
        width: width,
        height: height,
        data: {
            values: [
                {country: "Great Britain", animal: "pigs"},
                {country: "Great Britain", animal: "pigs"},
                {country: "Great Britain", animal: "cattle"},
                {country: "Great Britain", animal: "cattle"},
                {country: "Great Britain", animal: "cattle"},
                {country: "Great Britain", animal: "sheep"},
                {country: "Great Britain", animal: "sheep"},
                {country: "Great Britain", animal: "sheep"},
                {country: "Great Britain", animal: "sheep"},
                {country: "Great Britain", animal: "sheep"},
                {country: "Great Britain", animal: "sheep"},
                {country: "Great Britain", animal: "sheep"},
                {country: "Great Britain", animal: "sheep"},
                {country: "Great Britain", animal: "sheep"},
                {country: "Great Britain", animal: "sheep"},
                {country: "United States", animal: "pigs"},
                {country: "United States", animal: "pigs"},
                {country: "United States", animal: "pigs"},
                {country: "United States", animal: "pigs"},
                {country: "United States", animal: "pigs"},
                {country: "United States", animal: "pigs"},
                {country: "United States", animal: "cattle"},
                {country: "United States", animal: "cattle"},
                {country: "United States", animal: "cattle"},
                {country: "United States", animal: "cattle"},
                {country: "United States", animal: "cattle"},
                {country: "United States", animal: "cattle"},
                {country: "United States", animal: "cattle"},
                {country: "United States", animal: "cattle"},
                {country: "United States", animal: "cattle"},
                {country: "United States", animal: "sheep"},
                {country: "United States", animal: "sheep"},
                {country: "United States", animal: "sheep"},
                {country: "United States", animal: "sheep"},
                {country: "United States", animal: "sheep"},
                {country: "United States", animal: "sheep"},
                {country: "United States", animal: "sheep"}
              ]
        },
        transform: [
            {
                calculate: "{'cattle': '🐄', 'pigs': '🐖', 'sheep': '🐏'}[datum.animal]",
                as: "emoji"
            },
            {window: [{op: "rank", as: "rank"}], groupby: ["country", "animal"]}
        ],
        mark: {type: "text", baseline: "middle"},
        config: {
            background: "transparent",
            view: {
                stroke: "transparent"
            },
        }
      }

    return (
        <VegaLite spec={spec} actions = {false}/>
    )
}

export default IsoType;