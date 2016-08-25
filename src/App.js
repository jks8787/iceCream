import React from 'react';
import VictoryPieChart from './components/VictoryPieChart.js';
import RechartsLineChart from './components/RechartsLineChart';

const App = () => (
  <div>
    <RechartsLineChart />
    <VictoryPieChart />
  </div>
);

export default App;
