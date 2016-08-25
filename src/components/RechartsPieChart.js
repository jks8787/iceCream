import React, { Component } from 'react';
import { PieChart, Pie, Sector, Cell } from 'recharts';

export default class RechartsPieChart extends Component {

  onPieEnter() {
    console.log('entered?');
  }

  renderCustomizedLabel({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) {
    const RADIAN = Math.PI / 180;
   	const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x  = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy  + radius * Math.sin(-midAngle * RADIAN);
    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} 	dominantBaseline="central">
      	{`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  }

  render() {
    const data = [{name: 'Group A', value: 400}, {name: 'Group B', value: 300},
                      {name: 'Group C', value: 300}, {name: 'Group D', value: 200}];
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
    return (
      <div
        className='recharts-pie-chart'
      >
        <h2> Recharts Pie Chart </h2>
        <div className='recharts-pie-chart__content'>
          <div className='recharts-pie-chart__chart-wrap'>
            <PieChart width={800} height={400} onMouseEnter={this.onPieEnter}>
              <Pie
                data={data}
                cx={300}
                cy={200}
                labelLine={false}
                label={this.renderCustomizedLabel}
                outerRadius={80}
                fill="#8884d8"
              >
                {
                  data.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)
                }
              </Pie>
            </PieChart>
          </div>
        </div>
      </div>
    );
  }
};