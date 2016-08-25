import React, { Component } from 'react';
import { VictoryPie } from 'victory';
// import { VictoryLabel } from 'victory';
import { connect } from 'react-redux';
import * as actions from '../actions';

class VictoryPieChart extends Component {
  componentWillMount() {
    this.props.fetchPieChartData();
  }

  sortData(data) {
    let sorted = data;
    if (data) {
      sorted = data.sort((a,b)=> a.x.localeCompare(b.x) );
    }
    return sorted;
  }

  dataStyles(data) {
    let pieChartStyle = {
      labels: {
        fill: "darkred",
        fontSize: 10,
        fontWeight: "normal",
        padding: 25
      }
    };
    if (data) {
      const max = Math.max.apply(Math, data.map(function(o){return o.y;}));
      pieChartStyle = {
        data: {
          stroke: (data) => data.y === max ?
            "grey" : "transparent",
          strokeWidth: (data) => data.y === max ?
            2 : 2
        },
        labels: {
          fill: "darkred",
          fontSize: 10,
          fontWeight: "normal",
          padding: 25
        }
      };
    }
    return pieChartStyle;
  }

  render() {
    const dataPulledFromFireBaseATK = this.props.victoryPieCharts.atk_data;
    const dataPulledFromFireBaseChefSteps = this.props.victoryPieCharts.chef_steps_data;
    const dataPulledFromFireBaseJamieOliver = this.props.victoryPieCharts.jamie_oliver_data;
    const pieChartStyle = {
      labels: {
        fill: "darkred",
        fontSize: 10,
        fontWeight: "normal",
        padding: 25
      }
    };

    return (
      <div
        className="victory-pie-charts"
      >
        <h2> Victory Pie Charts </h2>
        <div className="victory-pie-charts__content">
          <div className="victory-pie-charts__chart-wrap">
            <h3 className="victory-pie-charts__chart-header">ATK</h3>
            <VictoryPie
              style={this.dataStyles(dataPulledFromFireBaseATK)}
              colorScale={[
                 "#D85F49",
                 "#F66D3B",
                 "#D92E1D",
                 "#D73C4C",
                 "#FFAF59"
               ]}
              data={this.sortData(dataPulledFromFireBaseATK)}
            />
          </div>
          <div className="victory-pie-charts__chart-wrap">
            <h3 className="victory-pie-charts__chart-header">Jamie Oliver</h3>
            <VictoryPie
              style={this.dataStyles(dataPulledFromFireBaseJamieOliver)}
              colorScale={[
                 "#ff6699",
                 "#ff99ff",
                 "#ffcccc",
                 "#ff3399"
               ]}
              data={this.sortData(dataPulledFromFireBaseJamieOliver)}
            />
          </div>
          <div className="victory-pie-charts__chart-wrap">
            <h3 className="victory-pie-charts__chart-header">Chef Steps</h3>
            <VictoryPie
              style={this.dataStyles(dataPulledFromFireBaseChefSteps)}
              colorScale={[
                 "#3399ff",
                 "#33ccff",
                 "#00ffff",
                 "#99ccff",
                 "#6699ff"
               ]}
              data={this.sortData(dataPulledFromFireBaseChefSteps)}
            />
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

export default connect(mapStateToProps, actions)(VictoryPieChart);
