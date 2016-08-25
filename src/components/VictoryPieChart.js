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
    const dataPulledFromFireBase = this.props.victoryPieCharts.data;
    // the below allows there to be different styles for different conditions
    // const pieChartStyle = {
    //   data: {
    //     stroke: (data) => data.y < 75 ?
    //       "pink" : "black",
    //     strokeWidth: (data) => data.y < 75 ?
    //       1 : 1
    //   },
    //   labels: {
    //     fill: "white",
    //     fontSize: 10,
    //     fontWeight: "normal"
    //   }
    // };

    return (
      <div
        className="victory-pie-charts"
      >
        <h2> Victory Pie Charts! </h2>
        <div className="victory-pie-charts__content">
          <div className="victory-pie-charts__chart-wrap">
            <VictoryPie
              style={{
                labels: {
                  fill: "darkred",
                  fontSize: 10,
                  fontWeight: "normal",
                  padding: 200
                }
              }}
              colorScale={[
                 "#D85F49",
                 "#F66D3B",
                 "#D92E1D",
                 "#D73C4C",
                 "#FFAF59",
                 "#E28300",
                 "#F6A57F"
               ]}
              data={dataPulledFromFireBase}
            />
            {/* <svg>
              <VictoryLabel
                x={10}
                y={20}
                lineHeight={2}
                textAnchor="start"
                verticalAnchor="start"
              >
                label text
              </VictoryLabel>
            </svg> */}
          </div>
          <div className="victory-pie-charts__chart-wrap">
            <VictoryPie
              style={{
                labels: {
                  fill: "darkred",
                  fontSize: 10,
                  fontWeight: "normal",
                  padding: 200
                }
              }}
              colorScale={[
                 "#D85F49",
                 "#F66D3B",
                 "#D92E1D",
                 "#D73C4C",
                 "#FFAF59",
                 "#E28300",
                 "#F6A57F"
               ]}
              data={dataPulledFromFireBase}
            />
            {/* <svg>
              <VictoryLabel
                x={10}
                y={20}
                lineHeight={2}
                textAnchor="start"
                verticalAnchor="start"
              >
                label text
              </VictoryLabel>
            </svg> */}
          </div>
          <div className="victory-pie-charts__chart-wrap">
            <VictoryPie
              style={{
                labels: {
                  fill: "darkred",
                  fontSize: 10,
                  fontWeight: "normal",
                  padding: 200
                }
              }}
              colorScale={[
                 "#D85F49",
                 "#F66D3B",
                 "#D92E1D",
                 "#D73C4C",
                 "#FFAF59",
                 "#E28300",
                 "#F6A57F"
               ]}
              data={dataPulledFromFireBase}
            />
            {/* <svg>
              <VictoryLabel
                x={10}
                y={20}
                lineHeight={2}
                textAnchor="start"
                verticalAnchor="start"
              >
                label text
              </VictoryLabel>
            </svg> */}
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
