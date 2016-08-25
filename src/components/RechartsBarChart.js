import React, { Component } from 'react';
import { ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

export default class RechartsBarChart extends Component {
  createMarkup(htmlData) {
    return {__html: htmlData};
  }
  render() {
    // this is for pure Acetic acid not really vinegar but ... will update with better data later
    const data = [
          { temp: '-5C', 'grams salt needed for water': 134, 'grams salt needed for vinegar': 35 },
          { temp: '-10C', 'grams salt needed for water': 157, 'grams salt needed for vinegar': 76 },
          { temp: '-15C', 'grams salt needed for water': 234, 'grams salt needed for vinegar': 111 },
          { temp: '-20C', 'grams salt needed for water': 315,  'grams salt needed for vinegar': 152 },
    ];
    return (
      <div
        className='recharts-bar-chart'
      >
        <h2> Recharts ComposedChart </h2>
        <div className='recharts-bar-chart__content'>
          <div className='recharts-bar-chart__chart-wrap'>
            <h3> Salt -- how much do you need? </h3>
            <ComposedChart width={1200} height={400} data={data}
                  margin={{top: 20, right: 30, left: 40, bottom: 5}}>
              <XAxis dataKey='temp' label='Temp'/>
              <YAxis label='grams of salt'/>
              <Tooltip/>
              <Legend/>
              <CartesianGrid stroke='grey'/>
              <Area type='monotone' dataKey='grams salt needed for water' fill='#8884d8' stroke='#8884d8'/>
              {/* <Line type='monotone' dataKey='w' stroke='#ff7300'/> */}
              <Bar dataKey='grams salt needed for water' barSize={20} fill='blue'/>
              <Bar dataKey='grams salt needed for vinegar' barSize={20} fill='pink'/>
          </ComposedChart>
          </div>
        </div>
        <div className='recharts-bar-chart__info'>
          {/* here */}
        </div>
      </div>
    );
  }
};
