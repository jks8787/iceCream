import React, { Component } from 'react';
import { VictoryPie, VictoryLabel } from "victory";
//import { connect } from 'react-redux';
//import { fetchStaticPieChartData } from '../actions';
//import * as actions from '../actions';

export default class VictoryPieChart extends Component {
  componentWillMount() {
    // this.props.fetchStaticPieChartData();
  }

  render() {
    // const dataPulledFromFireBase = this.props.victoryPieCharts.data;
    const divStyle = {
      backgroundColor: 'pink',
      maxWidth: '450px'
    };

    return (
      <div
        className="static-pie-chart"
        style={divStyle}
      >
        <h2> Victory Pie Chart </h2>
        <VictoryPie
          style={{
            data: {
              stroke: (data) => data.y > 75 ?
                "black" : "transparent",
              opacity: (data) => data.y > 75 ?
                1 : 0.4
            },
            labels: {
              fill: "white",
              fontSize: 12,
              fontWeight: "bold"
            }
          }}
          data={[
            {x: "Milk", y: 10},
            {x: "Sugar", y: 30}
          ]}
        />
        <svg>
          <VictoryLabel
            x={10}
            y={20}
            lineHeight={2}
            textAnchor="start"
            verticalAnchor="start"
          >
            Milk: 10%
          </VictoryLabel>
          <VictoryLabel
            x={10}
            y={40}
            lineHeight={2}
            textAnchor="start"
            verticalAnchor="start"
          >
            Sugar: 30%
          </VictoryLabel>
        </svg>
      </div>
    );
  }
};

// function mapStateToProps(state) {
//   return {
//     victoryPieCharts: state.victoryPieCharts
//   };
// }
//
// export default connect(mapStateToProps, actions)(VictoryPieChart);
