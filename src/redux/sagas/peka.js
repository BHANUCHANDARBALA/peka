import { call, put, takeLatest } from "redux-saga/effects";
import types from "../types/peka";
import peka from "../actions/peka";
import axios from "../../services/axios";

function* getPekaData({ payload }) {
  const data = yield call(axios.request, {
    url: `/tables?gameType=${payload.gameType}`,
  });

  yield put(peka.getPekaData(data));
}

function* pekaSaga() {
  yield takeLatest(types.GET_PEKA_DATA_REQUESTED, getPekaData);
}

export { pekaSaga };
