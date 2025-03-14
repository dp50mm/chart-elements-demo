import './App.css';
import BarChartElement from './components/BarChartElement';
import AxisTicks from './components/AxisTicks';
import GridLines from './components/GridLines';
import PieChartSegment from './components/PieChartSegment';
import ScatterPlotPoints from './components/ScatterPlotPoints';
import LineChartElement from './components/LineChartElement';
import ColorScaleLegend from './components/ColorScaleLegend';
import AnnotationOnPoint from './components/AnnotationOnPoint';
import MovingAverageTimeSeries from './components/MovingAverageTimeSeries';
import TrendLineTimeSeries from './components/TrendLineTimeSeries';
import StackedBarChart from './components/StackedBarChart';
import SunburstChart from './components/SunburstChart';

var elements = [
  { elem: ( <BarChartElement />), title: "Bar Chart" },
  { elem: ( <AxisTicks />), title: "Axis Ticks" },
  { elem: ( <GridLines />), title: "Grid Lines" },
  { elem: ( <PieChartSegment />), title: "Pie Chart Segment" },
  { elem: ( <ScatterPlotPoints />), title: "Scatter Plot Points" },
  { elem: ( <LineChartElement />), title: "Line Chart" },
  { elem: ( <ColorScaleLegend />), title: "Color Scale Legend" },
  { elem: ( <AnnotationOnPoint />), title: "Annotation On Point" },
  { elem: ( <MovingAverageTimeSeries />), title: "Moving Average Time Series" },
  { elem: ( <TrendLineTimeSeries />), title: "Trend Line Time Series" },
  { elem: ( <StackedBarChart />), title: "Stacked Bar Chart" },
  { elem: ( <SunburstChart />), title: "Sunburst Chart" },
]

function App() {
  return (
    <div className="App">
      {elements.map((element, index) => (
        <div key={index} style={{
          display: "inline-block",
          padding: "10px",
          margin: "10px",
          marginBottom: '40px',
          verticalAlign: "top",
        }}>
          <h2>{element.title}</h2>
          {element.elem}
        </div>
      ))}
    </div>
  );
}

export default App;
