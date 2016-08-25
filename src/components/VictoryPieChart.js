import React, { Component } from 'react';
import { VictoryPie } from 'victory';
// import { VictoryLabel } from 'victory';
import { connect } from 'react-redux';
import * as actions from '../actions';

class VictoryPieChart extends Component {
  componentWillMount() {
    this.props.fetchPieChartData();
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

  // showing styles based on data
  // const max = Math.max.apply(Math, dataPulledFromFireBaseATK.map(function(o){return o.y;}));
  // const pieChartStyle = {
  //   data: {
  //     stroke: (data) => data.y === max ?
  //       "pink" : "transparent",
  //     strokeWidth: (data) => data.y === max ?
  //       5 : 0
  //   },
  //   labels: {
  //     fill: "darkred",
  //     fontSize: 10,
  //     fontWeight: "normal",
  //     padding: 25
  //   }
  // };


    console.log(pieChartStyle);

    return (
      <div
        className="victory-pie-charts"
      >
        <h2> Victory Pie Charts </h2>
        <div className="victory-pie-charts__content">
          <div className="victory-pie-charts__chart-wrap">
            <VictoryPie
              style={pieChartStyle}
              colorScale={[
                 "#D85F49",
                 "#F66D3B",
                 "#D92E1D",
                 "#D73C4C",
                 "#FFAF59",
                 "#E28300",
                 "#F6A57F"
               ]}
              data={dataPulledFromFireBaseATK}
            />
          </div>
          <div className="victory-pie-charts__chart-wrap">
            <VictoryPie
              style={pieChartStyle}
              colorScale={[
                 "#D85F49",
                 "#F66D3B",
                 "#D92E1D",
                 "#D73C4C",
                 "#FFAF59",
                 "#E28300",
                 "#F6A57F"
               ]}
              data={dataPulledFromFireBaseJamieOliver}
            />
          </div>
          <div className="victory-pie-charts__chart-wrap">
            <VictoryPie
              style={pieChartStyle}
              colorScale={[
                 "#D85F49",
                 "#F66D3B",
                 "#D92E1D",
                 "#D73C4C",
                 "#FFAF59",
                 "#E28300",
                 "#F6A57F"
               ]}
              data={dataPulledFromFireBaseChefSteps}
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
