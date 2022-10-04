import React, { useState } from 'react';
import { createContainer } from 'unstated-next';

// 전역으로 사용될 것
function useCounter(initialState = 0) {
  const [count, setCount] = useState(initialState);
  const decrement = () => setCount(count - 1);
  const increment = () => setCount(count + 1);
  return { count, decrement, increment };
}

// 이 createContainer메서드는 컨텍스트를 초기화하는 데 사용되며, 상태가 전역적으로 공유될 Hook을 인수로 사용합니다.
const Counter = createContainer(useCounter);
// Counter == {Provider, useContainer}

function CounterDisplay() {
  const counter = Counter.useContainer();
  return (
    <div>
      <button type="button" onClick={counter.decrement}>
        -
      </button>
      <span>{counter.count}</span>
      <button type="button" onClick={counter.increment}>
        +
      </button>
    </div>
  );
}

function Test() {
  return (
    // app.tsx
    <Counter.Provider>
      <CounterDisplay />
      <Counter.Provider initialState={2}>
        <div>
          <div>
            <CounterDisplay />
          </div>
        </div>
      </Counter.Provider>
    </Counter.Provider>
  );
}
export default Test;
