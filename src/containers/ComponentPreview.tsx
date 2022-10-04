import ButtonFix from '../component/button/ButtonFix';
import ButtonVariable1 from '../component/button/ButtonVariable-1';
import ButtonVariable2 from '../component/button/ButtonVariable-2';

function ComponentPreview() {
  return (
    <div className="site-layout-content">
      <h1>Styled를 이용한 버튼</h1>
      <hr />
      <dl>
        <dt>
          <h3>고정 스타일링</h3>
        </dt>
        <dd>
          React로 작성된 버튼 컴포넌트를 스타일링
          <br />
          button HTML 엘리먼트에 원하는 스타일을 적용한 후 StyledButton 변수에 저장
        </dd>
      </dl>
      <ButtonFix>button</ButtonFix>
      <hr />
      <dl>
        <dt>
          <h3>유동적 스타일링</h3>
        </dt>
        <dd>
          React로 작성된 버튼 컴포넌트를 스타일링
          <br />
          button HTML 엘리먼트에 원하는 스타일을 적용한 후 StyledButton 변수에 저장
        </dd>
      </dl>

      <ButtonVariable1 backgroundColor="red" color="white">
        Custom
      </ButtonVariable1>
      <p>React 컴포넌트에 넘어온 props에 따라 다른 스타일을 적용할 수 있다</p>
      <br />

      <ButtonVariable1 backgroundColor="yellow">Custom</ButtonVariable1>
      <p>배경만 설정하고 글자색은 default사용</p>
      <br />

      <ButtonVariable1>default</ButtonVariable1>
      <p>default 사용</p>
      <br />

      <ButtonVariable2>default</ButtonVariable2>
      <ButtonVariable2 outline="dotted">dotted</ButtonVariable2>
      <ButtonVariable2 primary>primary</ButtonVariable2>
      <ButtonVariable2 danger>danger</ButtonVariable2>
      <ButtonVariable2 success>success</ButtonVariable2>
      <p>Styled Components에서 제공하는 css 함수를 사용해서 여러 개의 CSS 속성을 묶어서 정의할 수 있다.</p>
      <br />
    </div>
  );
}

export default ComponentPreview;
