import pekaTypes from "../types/peka";
function getPekaData(payload) {
  return {
    type: pekaTypes.GET_PEKA_DATA,
    payload,
  };
}

function getPekaDataRequested(payload) {
  return {
    type: pekaTypes.GET_PEKA_DATA_REQUESTED,
    payload,
  };
}


function filterAndSortData(payload){
  return{
  type: pekaTypes.GET_FILTER_AND_SORT_DATA,
  payload
  }
}

export default {
  getPekaData,
  getPekaDataRequested,
  filterAndSortData
};
