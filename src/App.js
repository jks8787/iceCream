import React from 'react';
import VictoryPieChart from './components/VictoryPieChart.js';
import RechartsLineChart from './components/RechartsLineChart';
import RechartsBarChart from './components/RechartsBarChart';
import RechartsPieChart from './components/RechartsPieChart';

const App = () => (
  <div>
    <RechartsPieChart />
    <RechartsLineChart />
    <RechartsBarChart />
    <VictoryPieChart />
  </div>
);

export default App;
