import {
    Flex,
} from '@chakra-ui/react';

import { VegaLite, VisualizationSpec } from 'react-vega';

type MapProps = {
    width: number;
    height: number;
}

const Map = ({width, height}: MapProps) => {

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
        }
      }

    return (
        <VegaLite spec={spec} actions = {false}/>
    )
}

export default Map;