const victoryPieCharts = (state={}, action) => {
  switch(action.type) {
    case 'FETCH_VICTORY_PIE_CHART_DATA':
      return action.payload;
    default:
      return state;
  }
}

export default victoryPieCharts;
