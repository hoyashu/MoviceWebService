import Greetings from '../component/test/Greetings';
import Container from '../component/container';
import Button from '../component/button/button';

import logo from '../logo.svg';

function Login() {
  const alarm = () => {};

  const onClick = () => {};

  return (
    <div className="App">
      <Greetings name="Hello" onClick={onClick} mark="mark" optional="optional" />

      <Container>This is Container.</Container>

      <Button width={100} onClick={alarm}>
        <div>This is Button</div>
      </Button>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default Login;
