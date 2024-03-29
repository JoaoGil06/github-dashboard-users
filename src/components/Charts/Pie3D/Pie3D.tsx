import Pie3DProps from './types/Pie3DProps.type';
// Include the react-fusioncharts component
import ReactFC from 'react-fusioncharts';

// Include the fusioncharts library
import FusionCharts from 'fusioncharts';

// Include the chart type
import Chart from 'fusioncharts/fusioncharts.charts';

// Include the theme as fusion
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);

const Pie3D = ({ data }: Pie3DProps) => {
	const chartConfigs = {
		type: 'pie2d', // The chart type
		width: '100%', // Width of the chart
		height: '350', // Height of the chart
		dataFormat: 'json', // Data type
		dataSource: {
			// Chart Configuration
			chart: {
				caption: 'Languages',
				captionFontColor: '#102a42',
				captionFontBold: 0,
				captionFontSize: 20,
				captionFont: 'Roboto',
				baseFont: 'Open Sans',
				baseFontSize: 16,
				baseFontColor: '#617d98',
				smartLineColor: '#617d98',
				showShadow: 0,
				showPlotBorder: 0,
				paletteColors: '#2caeba, #5D62B5, #FFC533, #F2726F, #8d6e63, #1de9b6, #6E80CA',
				use3DLighting: 0,
				useDataPlotColorForLabels: 0,
				bgColor: '#FFFFFF',
				showBorder: 0,
				decimals: 0,
				pieRadius: '45%',
			},
			// Chart Data
			data,
		},
	};
	// @ts-expect-error: Ignorar erro de tipo até que as definições de tipo sejam atualizadas
	return <ReactFC {...chartConfigs} />;
};

export default Pie3D;
