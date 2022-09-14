##### Part 2. React 만들기

##### 05. @jsx

더 쓰기 편한 방식으로... <br />
개발자들이 사용하기 편한 방식? → 함수 호출, markup, ...

```javascript
const vdom2 = (
  <p>
    <h1>React 만들기</h1>
    <ul>
      <li style="color:red">첫 번째 아이템</li>
      <li style="color:green">두 번째 아이템</li>
      <li style="color:blue">세 번째 아이템</li>
    </ul>
  </p>
);

render(vdom2, document.querySelector("#root"));
```

-> React is not defined (...?)

webpack을 통해 개발 서버를 띄우고 빌드를 하는데,
이 프로젝트에서 설정해놓은 webpack의 설정에서는 js파일을 babel-loader에게 전달하게끔 되어있음. (babel: ES6 이상의 문법으로 만들어진 코드를 ES5나 특정타겟으로 migration 해주는 transpiler)

이 babel-loader의 preset으로 @babel/preset-react를 사용하고 있는데, react를 설치해서 진행하고 있는것은 아니기 때문에 not defined error...!

**babel의 결과물**

```javascript
"use strict";

const vdom2 = /*#__PURE__*/ React.createElement(
  "p",
  null,
  /*#__PURE__*/ React.createElement("h1", null, "React \uB9CC\uB4E4\uAE30"),
  /*#__PURE__*/ React.createElement(
    "ul",
    null,
    /*#__PURE__*/ React.createElement(
      "li",
      {
        style: "color:red",
      },
      "\uCCAB \uBC88\uC9F8 \uC544\uC774\uD15C"
    ),
    /*#__PURE__*/ React.createElement(
      "li",
      {
        style: "color:green",
      },
      "\uB450 \uBC88\uC9F8 \uC544\uC774\uD15C"
    ),
    /*#__PURE__*/ React.createElement(
      "li",
      {
        style: "color:blue",
      },
      "\uC138 \uBC88\uC9F8 \uC544\uC774\uD15C"
    )
  )
);
```

react의 createElement 함수를 사용하고 있음.
