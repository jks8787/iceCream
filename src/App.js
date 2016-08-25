import React from 'react';
import VictoryPieChart from './components/VictoryPieChart.js';
import RechartsLineChart from './components/RechartsLineChart';
import RechartsBarChart from './components/RechartsBarChart';

const App = () => (
  <div>
    <RechartsBarChart />
    <RechartsLineChart />
    <VictoryPieChart />
  </div>
);

export default App;
