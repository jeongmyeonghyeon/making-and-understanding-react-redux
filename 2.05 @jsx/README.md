##### Part 2. React 만들기

##### 05. @jsx

```
1. createElement 숨기기
2. React가 없어요
3. 호환성 맞추기
4. 구조에 기인한 제약사항
```

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

-> Uncaught ReferenceError: React is not defined (...?)

webpack을 통해 개발 서버를 띄우고 빌드를 하는데,
이 프로젝트에서 설정해놓은 webpack의 설정에서는 js파일을 babel-loader에게 전달하게끔 되어있음. (babel: ES6 이상의 문법으로 만들어진 코드를 ES5나 특정타겟으로 migration 해주는 transpiler)

이 babel-loader의 preset으로 @babel/preset-react를 사용하고 있는데, react를 설치해서 진행하고 있는것은 아니기 때문에 React is not defined error...!

**babel의 결과물 - react의 createElement 함수를 사용하고 있음.**

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

---

**app.js 상단에 `/* @jsx createElement */ 주석 추가하기`**
(default 값 React.createElement가 그냥 createElement 함수로 변경 됨. 자유롭게 변경할 수 있음.)

```javascript
"use strict";

/* @jsx createElement */
const vdom2 = createElement(
  "p",
  null,
  createElement("h1", null, "React \uB9CC\uB4E4\uAE30"),
  createElement(
    "ul",
    null,
    createElement(
      "li",
      {
        style: "color:red",
      },
      "\uCCAB \uBC88\uC9F8 \uC544\uC774\uD15C"
    ),
    createElement(
      "li",
      {
        style: "color:green",
      },
      "\uB450 \uBC88\uC9F8 \uC544\uC774\uD15C"
    ),
    createElement(
      "li",
      {
        style: "color:blue",
      },
      "\uC138 \uBC88\uC9F8 \uC544\uC774\uD15C"
    )
  )
);
```

> 작동확인: Uncaught TypeError: Cannot convert undefined or null to object

react의 props는 없으면 null로 작동하게끔 하는데,
우리는 {} (빈객체)를 넣었기 때문에 에러가 발생함.

**만들어놓은 react.js에 방어코드 삽입**

```javascript
...
export function createElement(tag, props, ...children) {
  props = props || {};
  return { tag, props, children };
}
...
```

> Default parameter `props={}` 는 인자가 undefined일 때만 작동하므로 방어코드로 접근함.

이제 잘 동작~~😳😎👍🏻

---

`@jsx`가 별개 아니다...(?)

만들어 본 것과 같이 개발자가 작성하게 편하게 React에서 만든 createElement 헬퍼함수를 통해 markup 방식을 제공하여 코드를 작성할 수 있게 한것일 뿐...! (그래도 어썸~~)

---

createElement를 호출했을 때,
UI 구조를 파악하기도 힘들고 작성하기 힘든 단점을
markup이라는 형태를 취하면서
구조도 잘 파악이 되고 작성도 훨씬 쉬운 형태.
이 두 마리 토끼를 다 잡은 상황이 만들어짐!

---

babel이 새삼 놀라움. 변환기...

---

**(추가) 제약사항**

코드내에서 createElement를 사용하고 있지는 않지만,
import는 항상 해와야함...!
transpile에서는 에러가 안나겠지만,
변환된 결과물 파일에서는 createElement를 사용하고 있기 때문...!

이게 react에서 리액트 구문을 사용하고 있지 않아도 react를 import해와야 하는 구조적인 이유. 한계.

```javascript
import { createElement, render } from "./react";

const vdom = (
  <p>
    <h1>React 만들기</h1>
    ...
  </p>
);

render(vdom, document.querySelector("#root"));
```
