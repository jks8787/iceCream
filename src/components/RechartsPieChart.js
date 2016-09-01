import React, { Component } from 'react';
import { PieChart, Pie, Sector, Cell, Legend } from 'recharts';
import { connect } from 'react-redux';
import * as actions from '../actions';

class RechartsPieChart extends Component {
  componentWillMount() {
    this.props.fetchPieChartData();
  }

  onPieEnter() {
    console.log('entered?');
  }

  renderCustomizedLabel({ cx, cy, midAngle, innerRadius, outerRadius, percent, index, name }) {
    const RADIAN = Math.PI / 180;
   	const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x  = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy  + radius * Math.sin(-midAngle * RADIAN);
    return (
      <text x={x} y={y} fill="black" fontSize="13px" textAnchor={x > cx ? 'start' : 'end'} 	dominantBaseline="central">
      	{`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  }

  setColors() {
    // set colors so that each data object with the same name has the same color
  }

  renderForSize(){
    // maybe here i need to trigger calc the size i want the pic chart
  }

  sortData(data) {
    let sorted = data;
    if (data) {
      // put them in alphabetical order
      sorted = data.sort((a,b)=> a.name.localeCompare(b.name) );
    }
    return sorted;
  }

  render() {
    const dataPulledFromFireBaseATK = this.sortData(this.props.victoryPieCharts.atk_data_rc);
    const dataPulledFromFireBaseChefSteps = this.sortData(this.props.victoryPieCharts.chef_steps_data_rc);
    const dataPulledFromFireBaseJamieOliver = this.sortData(this.props.victoryPieCharts.jamie_oliver_data_rc);

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];
    return (
      <div
        className='recharts-pie-chart'
      >
        <h2> Recharts Pie Chart </h2>
        <div className='recharts-pie-chart__content'>
          <div className='recharts-pie-chart__chart-wrap'>
            <PieChart
              width={450}
              height={300}
              onMouseEnter={this.onPieEnter}
              margin={{top: 0, right: 0, left: 0, bottom: 10}}
              wrapperStyle={{border: '1ps solid pink'}}
            >
              <Pie
                data={dataPulledFromFireBaseATK}
                cx={225}
                cy={150}
                labelLine={false}
                label={this.renderCustomizedLabel}
                outerRadius={100}
                fill="#8884d8"
              >
                {
                  dataPulledFromFireBaseATK ? dataPulledFromFireBaseATK.map((entry, index) => <Cell key={index} fill={COLORS[index % COLORS.length]}/>) : null
                }
              </Pie>
              {/* layout="horizontal" to stack the legend */}
              <Legend align="left" verticalAlign="bottom" wrapperStyle={{position: 'relative', paddingTop: '1%'}}/>
            </PieChart>
          </div>
          <div className='recharts-pie-chart__chart-wrap'>
            <PieChart
             width={450}
             height={300}
             onMouseEnter={this.onPieEnter}
             margin={{top: 0, right: 0, left: 0, bottom: 10}}
             >
              <Pie
                data={dataPulledFromFireBaseJamieOliver}
                cx={225}
                cy={150}
                labelLine={false}
                label={this.renderCustomizedLabel}
                outerRadius={100}
                fill="#8884d8"
              >
                {
                  dataPulledFromFireBaseJamieOliver ? dataPulledFromFireBaseJamieOliver.map((entry, index) => <Cell key={index} fill={COLORS[index % COLORS.length]}/>) : null
                }
              </Pie>
              <Legend align="left" verticalAlign="bottom" wrapperStyle={{position: 'relative', paddingTop: '1%'}}/>
            </PieChart>
          </div>
          <div className='recharts-pie-chart__chart-wrap'>
            <PieChart
             width={450}
             height={300}
             onMouseEnter={this.onPieEnter}
             margin={{top: 0, right: 0, left: 0, bottom: 10}}
             >
              <Pie
                data={dataPulledFromFireBaseChefSteps}
                cx={225}
                cy={150}
                labelLine={false}
                label={this.renderCustomizedLabel}
                outerRadius={100}
                fill="#8884d8"
              >
                {
                  dataPulledFromFireBaseChefSteps ? dataPulledFromFireBaseChefSteps.map((entry, index) => <Cell key={index} fill={COLORS[index % COLORS.length]}/>) : null
                }
              </Pie>
              <Legend align="left" verticalAlign="bottom" wrapperStyle={{position: 'relative', paddingTop: '1%'}}/>
            </PieChart>
          </div>
        </div>
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    victoryPieCharts: state.victoryPieCharts
  };
}

export default connect(mapStateToProps, actions)(RechartsPieChart);
