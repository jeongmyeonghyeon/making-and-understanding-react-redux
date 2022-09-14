/* @jsx createElement */
import { createElement, render } from "./react";

function Title(props) {
  return <h1>{props.children}</h1>;
}

const vdom = (
  <p>
    <Title>React 정말 잘 만들기</Title>
    <ul>
      <li style="color:red">첫 번째 아이템</li>
      <li style="color:green">두 번째 아이템</li>
      <li style="color:blue">세 번째 아이템</li>
    </ul>
  </p>
);

render(vdom, document.querySelector("#root"));
