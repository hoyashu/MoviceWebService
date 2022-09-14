import React from 'react';

type GreetingsProps = {
    name: string;
    mark: string;
    optional: string;
    onClick: () => void; // 아무것도 리턴하지 않는다는 함수를 의미합니다.
};

function Greetings({
  name, mark, optional, onClick,
}: GreetingsProps) {
  return (
    <div>
      Hello,
      {' '}
      {name}
      {' '}
      {mark}
      {optional && <p>{optional}</p>}
      <div>
        <button type="button" onClick={() => onClick()}>Click Me</button>
      </div>
    </div>
  );
}

export default Greetings;
