/* @jsx createElement */
import { createElement, render } from "./react";

function Title() {
  return <h1>React 잘 만들기</h1>;
}

const vdom = (
  <p>
    <Title></Title>
    <ul>
      <li style="color:red">첫 번째 아이템</li>
      <li style="color:green">두 번째 아이템</li>
      <li style="color:blue">세 번째 아이템</li>
    </ul>
  </p>
);

render(vdom, document.querySelector("#root"));
