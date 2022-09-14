import { Link } from 'react-router-dom';
import Container from '../component/container';
import Button from '../component/button/button';

function Login() {
  const alarm = () => {
    console.log('hello');
  };

  return (
    <div className="App">
      <Container>This is Container.</Container>
      <form action="#">
        <fieldset>
          <legend>로그인 정보</legend>
          <ul>
            <li>
              <label htmlFor="id">
                아이디
                <input type="text" id="id" />
              </label>
            </li>
            <li>
              <label htmlFor="pw">
                비밀번호
                <input type="password" id="pw" />
              </label>
            </li>
          </ul>
        </fieldset>
      </form>
      <Button width={100} onClick={alarm}>
        <div>This is Button</div>
      </Button>
      <Link to="/">
        <div>메인으로</div>
      </Link>
    </div>
  );
}

export default Login;
