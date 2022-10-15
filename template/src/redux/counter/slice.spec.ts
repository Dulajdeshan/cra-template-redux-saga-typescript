import { counterReducer, counterActions, ICounterSlice } from './slice';

describe('counter reducer', () => {
  const initialState: ICounterSlice = {
    value: 3,
  };
  it('should handle initial state', () => {
    expect(counterReducer(undefined, { type: 'unknown' })).toEqual({
      value: 0,
    });
  });

  it('should handle increment', () => {
    const actual = counterReducer(initialState, counterActions.increment());
    expect(actual.value).toEqual(4);
  });

  it('should handle decrement', () => {
    const actual = counterReducer(initialState, counterActions.decrement());
    expect(actual.value).toEqual(2);
  });

  it('should handle incrementByAmount', () => {
    const actual = counterReducer(
      initialState,
      counterActions.incrementByAmount(2)
    );
    expect(actual.value).toEqual(5);
  });
});
