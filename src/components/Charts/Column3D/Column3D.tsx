// Include the react-fusioncharts component
import ReactFC from 'react-fusioncharts';

// Include the fusioncharts library
import FusionCharts from 'fusioncharts';

// Include the chart type
import Chart from 'fusioncharts/fusioncharts.charts';
import Column3DProps from './types/Column3DProps.type';

// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Chart);

const Column3D = ({ data }: Column3DProps) => {
	const chartConfigs = {
		type: 'column2d', // The chart type
		width: '100%', // Width of the chart
		height: '350', // Height of the chart
		dataFormat: 'json', // Data type
		dataSource: {
			// Chart Configuration
			chart: {
				caption: 'Most Popular',
				yAxisName: 'Stars',
				yAxisNameFontSize: 16,
				xAxisName: 'Repos',
				xAxisNameFontSize: 16,
				showCanvasBorder: 0,
				showAlternateHGridColor: 0,
				usePlotGradientColor: 0,
				valueFontSize: 16,
				placeValuesInside: 0,
				divLineColor: '#102a42',
				divLineAlpha: 15,
				captionFontColor: '#102a42',
				captionFontBold: 0,
				captionFontSize: 20,
				captionFont: 'Roboto',
				baseFont: 'Open Sans',
				baseFontSize: 12,
				baseFontColor: '#617d98',
				smartLineColor: '#617d98',
				showShadow: 0,
				showPlotBorder: 0,
				paletteColors: '#2caeba, #5D62B5, #FFC533, #F2726F, #8d6e63, #1de9b6, #6E80CA',
				bgColor: '#FFFFFF',
				showBorder: 0,
			},
			// Chart Data
			data,
		},
	};

	// @ts-expect-error: Ignorar erro de tipo até que as definições de tipo sejam atualizadas
	return <ReactFC {...chartConfigs} />;
};

export default Column3D;
