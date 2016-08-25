import React, { Component } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

export default class RechartsLineChart extends Component {
  createMarkup(htmlData) {
    return {__html: htmlData};
  }
  render() {
    // this is for pure Acetic acid not really vinegar but ... will update with better data later
    const data = [
          { temp: '-5C', 'mol/kg salt in water': 2.3, 'mol/kg salt in vinegar': 0.6},
          { temp: '-10C', 'mol/kg salt in water': 2.7, 'mol/kg salt in vinegar': 1.3},
          { temp: '-15C', 'mol/kg salt in water': 4.0, 'mol/kg salt in vinegar': 1.9},
          { temp: '-20C', 'mol/kg salt in water': 5.4,  'mol/kg salt in vinegar': 2.6},
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
        <div className="recharts-line-chart__content">
          <div className="recharts-line-chart__chart-wrap">
            <h3> Freezing Point Depression <em>aka</em> Making it Cold</h3>
            <LineChart width={1200} height={400} data={data}
                  margin={{top: 20, right: 30, left: 40, bottom: 5}}>
             <XAxis dataKey="temp"/>
             <YAxis label="b( mol solute/kg solvent )"/>
             <CartesianGrid strokeDasharray="3 3"/>
             <Tooltip/>
             <Legend/>
             <Line type="monotone" dataKey="mol/kg salt in water" stroke="#8884d8" activeDot={{r: 8}}/>
             <Line type="monotone" dataKey="mol/kg salt in vinegar" stroke="#008000" activeDot={{r: 8}}/>
            </LineChart>
          </div>
        </div>
        <div className="recharts-line-char__info">
          <p>{introInfo}</p>
          <p>{detailInfo}</p>
          <p dangerouslySetInnerHTML={this.createMarkup(eqInfo.eqDetail)}></p>
          <div className="recharts-line-char__info-eq">{eqInfo.eq}</div>
        </div>
      </div>
    );
  }
};
