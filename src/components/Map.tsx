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
        layer: [
            {
                mark: {
                    type: "geoshape",
                    stroke: toggle ? "gray" : "white"
                },
                projection: {
                    type: "equirectangular"
                },
            },
            {
                // Label each state
                mark: {
                    type: "text",
                    align: "center",
                    baseline: "middle",
                    fontSize: 10,
                    fontWeight: 500,
                    dx: 0,
                    dy: 0,
                    fill: toggle ? "black" : "white"
                },
            }
        ],
        encoding: {
            color: {
                field: "cases_per_100k",
                type: "quantitative",
                title: "Cases per 100k Population",
                scale: {
                    scheme: "blues",
                }
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
                labelFontSize: 12,
                titleFontSize: 12,
            },
            font: 'Montserrat',
        }
      }

    return (
        <VegaLite spec={spec} actions = {false}/>
    )
}

export default Map;