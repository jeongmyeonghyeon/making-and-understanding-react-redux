/* @jsx createElement */
import { createElement, render, Component } from "./react";

class Title extends Component {
  render() {
    return <h1>{props.children}</h1>;
  }
}

function Title(props) {
  console.log("여기는 Title"); // 함수 컴포넌트가 자바스크립트 함수기 때문에 이렇게 자연스럽게(!) 자바스크립트를 쓸수 있음.
  return <h1>{props.children}</h1>;
}

function Item(props) {
  return <li style={`color: ${props.color}`}>{props.children}</li>;
}

const App = () => (
  <p>
    <Title>React 정말 잘 만들기</Title>
    <ul>
      <Item color="red">첫 번째 아이템 111</Item>
      <Item color="green">두 번째 아이템 222</Item>
      <Item color="blue">세 번째 아이템 333</Item>
    </ul>
  </p>
);

render(<App />, document.querySelector("#root"));
