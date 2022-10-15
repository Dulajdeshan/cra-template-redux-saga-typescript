import { delay, put, takeEvery, Effect, ForkEffect } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { counterActions } from './slice';

export function* watchIncrementAsync(): Generator<Effect, void> {
  yield delay(1000);
  yield put(counterActions.increment());
}

export function* watchDecrementAsync(): Generator<Effect, void> {
  yield delay(1000);
  yield put(counterActions.decrement());
}

export function* watchIncrementByAmountAsync(
  action: PayloadAction<any>
): Generator<Effect, void> {
  try {
    if (typeof action.payload !== 'number') {
      throw new Error('Invalid parameter');
    }
    yield delay(1000);
    yield put(counterActions.incrementByAmount(action.payload));
    yield put(counterActions.incrementByAmountAsyncSuccess());
  } catch (error) {
    yield put(counterActions.incrementByAmountAsyncFailure());
  }
}

export function* watchCounterSagas(): Generator<ForkEffect, void> {
  yield takeEvery(counterActions.incrementAsync, watchIncrementAsync);
  yield takeEvery(counterActions.decrementAsync, watchDecrementAsync);
  yield takeEvery(
    counterActions.incrementByAmountAsync,
    watchIncrementByAmountAsync
  );
}

const counterSagas = watchCounterSagas;

export default counterSagas;
