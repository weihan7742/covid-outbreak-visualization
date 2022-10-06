import { VegaLite, VisualizationSpec } from 'react-vega';

type MapProps = {
    width: number;
    height: number;
    toggle: boolean;
}

const Map = ({width, height, toggle}: MapProps) => {

    const spec: VisualizationSpec = {
        width: width,
        height: height,
        autosize: {
            resize: true
        },
        data: {
            url: "negeri.json",
            format: {
                type: "topojson",
                feature: "negeri"
            }
        },
        transform: [{
            lookup: "properties.name",
            from: {
                data: {
                    url: "data/cases/cases_per_100k.csv"
                },
                key: "state",
                fields: ["cases_per_100k"]
            },
        }],
        mark: {
            type: "geoshape",
            stroke: "darkgray"
        },
        projection: {
            type: "equirectangular"
        },
        encoding: {
            color: {
                field: "cases_per_100k",
                type: "quantitative",
                title: "Cases per 100k Population",
            },
            tooltip: [
                {
                    field: "properties.name",
                    type: "nominal",
                    title: "State"
                },
                {
                    field: "cases_per_100k",
                    type: "quantitative",
                    title: "Cases per 100k Population"
                }
            ]
        },
        config: {
            background: "transparent",
            legend: {
                labelColor: toggle ? "black" : "white",
                titleColor: toggle ? "black" : "white",
            }
        }
      }

    return (
        <VegaLite spec={spec} actions = {false}/>
    )
}

export default Map;