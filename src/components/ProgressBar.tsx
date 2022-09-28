import { VegaLite, VisualizationSpec } from 'react-vega';

type ProgressBarProps = {
    total: number;
    remaining: number;
    width: number;
    height: number;
}

const ProgressBar = ({total, remaining, width, height}: ProgressBarProps) => {

    const spec: VisualizationSpec = {
        width: width,
        height: height,
        data: {
            values: [{"total_data": remaining, "remaining": total}] // Somehow is switched up, not sure why
        },
        transform: [
            {fold: ["total_data", "remaining"], as: ["label", "percentage"]}
        ],
        mark: "bar",
        encoding: {
            x: {
                field: "percentage",
                type: "quantitative",
                axis: null
            },
            color: {
                field: "label", 
                type: 'nominal',
                legend: null
            },
        },
        config:{
            view: {
                stroke: "transparent"
            }
        }
      }

    return (
        <VegaLite spec={spec} actions = {false}/>
    )
}

export default ProgressBar;