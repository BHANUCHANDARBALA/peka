import { all, fork } from "redux-saga/effects";
import { pekaSaga } from "./peka";

function* rootSaga() {
  yield all([pekaSaga].map(fork));
}

export default rootSaga;
