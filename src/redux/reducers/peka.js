import pekaTypes from "../types/peka";
import { filterAndSortData } from "../../services/globalService";

export const initialTodos = {
  pekaData: [],
  dataToRender: [],
  isLoading: false,
};

function peka(state = initialTodos, action) {
  console.log("@reducer quiz", action.type);
  switch (action.type) {
    case pekaTypes.GET_PEKA_DATA:
      return {
        ...state,
        pekaData: action.payload,
        isLoading: false,
      };
    case pekaTypes.GET_PEKA_DATA_REQUESTED:
      return {
        ...state,
        isLoading: true,
      };
    case pekaTypes.GET_FILTER_AND_SORT_DATA:
      return {
        ...state,
        dataToRender: filterAndSortData(state, action.payload),
        isLoading: false,
      };
    default:
      return state;
  }
}

export default peka;
