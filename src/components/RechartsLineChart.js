import React, { Component } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

export default class RechartsLineChart extends Component {
  createMarkup(htmlData) {
    return {__html: htmlData};
  }
  render() {
    const data = [
          { temp: 5, b: 2.3},
          { temp: 10, b: 2.7},
          { temp: 15, b: 4.0},
          { temp: 20, b: 5.4},
    ];
    const introInfo = 'use the freezing point depression equation to calculate how much a solvent’s freezing point will drop as a solute is added';
    const detailInfo = 'Water has a single freezing point (32 degrees Fahrenheit or 0 degrees Celsius). When particles are dissolved in water, that freezing point goes down, meaning the water will need to get colder before it turns to ice. This phenomenon is referred to as freezing point depression.';
    const eqInfo = {
      eq: '∆Tf = b · Kf  · i',
      eqDetail: '<span>∆Tf -> Freezing point depression, defined as Tf of  pure solvent – Tf of solution, </br> K f -> Cryoscopic constant of the solvent. This is an intrinsic property of the solvent, </br>  b -> Molar concentration of the solute: the number of moles of solute per kilogram of solvent, </br> i -> Number of ion particles per molecule of solute, also known as the "Van’t Hoff factor", Salt is made up of one sodium ion and one chloride ion, so its Van’t Hoff factor is 2.</span>'
    }
    return (
      <div
        className="recharts-line-chart"
      >
        <h2> Recharts Line Chart </h2>
        <h3> Freezing Point Depression </h3>
        <h4> Use salt to lower the melting point of ice </h4>
        <div className="recharts-line-char__info">
          <p>{introInfo}</p>
          <p>{detailInfo}</p>
          <p>{eqInfo.eq}</p>
          <p dangerouslySetInnerHTML={this.createMarkup(eqInfo.eqDetail)}></p>
        </div>
        <div className="recharts-line-chart__content">
          <div className="recharts-line-chart__chart-wrap">
            <LineChart width={1200} height={300} data={data}
                  margin={{top: 5, right: 30, left: 20, bottom: 5}}>
             <XAxis dataKey="temp"/>
             <YAxis/>
             <CartesianGrid strokeDasharray="3 3"/>
             <Tooltip/>
             <Legend />
             <Line type="monotone" dataKey="b" stroke="#8884d8" activeDot={{r: 8}}/>
            </LineChart>
          </div>
        </div>
      </div>
    );
  }
};
