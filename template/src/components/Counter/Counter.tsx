import React from 'react';

interface ICounterProps {
  value?: number;
  onIncrement?: () => void;
  onDecrement?: () => void;
  onIncrementAsync?: () => void;
  onDecrementAsync?: () => void;
}
const Counter: React.FC<ICounterProps> = ({
  value,
  onIncrement,
  onDecrement,
  onIncrementAsync,
  onDecrementAsync,
}): JSX.Element => {
  return (
    <div>
      <button onClick={onIncrementAsync} className="button">
        Increment after 1 second
      </button>{' '}
      <button onClick={onDecrementAsync} className="button">
        Decrement after 1 second
      </button>{' '}
      <button onClick={onIncrement} className="button">
        + Increment
      </button>{' '}
      <button onClick={onDecrement} className="button">
        - Decrement
      </button>
      <hr />
      <div>Clicked: {value} times</div>
    </div>
  );
};

export default Counter;
