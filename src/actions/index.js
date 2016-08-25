
import firebase from 'firebase';
import config from '../config/environment';

const pieChartData = firebase.initializeApp(config.firebase);

export const fetchPieChartData = () => {
  return dispatch => {
    pieChartData.database().ref('/chart').on('value', snapshot => {
      dispatch({
        type: 'FETCH_VICTORY_PIE_CHART_DATA',
        payload: snapshot.val(),
      });
    });
  };
}
