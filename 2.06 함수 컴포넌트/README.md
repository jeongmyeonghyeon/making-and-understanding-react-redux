##### Part 2. React 만들기

##### 06. 함수 컴포넌트

```
1. 사용자 컴포넌트
2. 대문자 함수의 약속
3. 전달된 함수 처리
```

**지금까지의 작업**

(1) DOM API로 UI를 다루기가 여러모로 까다롭다보니까 그것을 포기하고 DOM과 굉장히 유사한&우리에게 필요한 DOM과 유사한 간단한 객체를 만들어서 UI를 만들었음. <br />
(2) 하지만, DOM을 아예 안쓸수는 없으니까 앞서 만든 객체를 DOM으로 만드는 간단한 함수를 만듬. <br />
(3) 하지만, 객체 리터럴로 UI를 만드는것 또한 개발자에게 너무 불편한 일. 그래서 createElement를 제공함. <br />
(4) 하지만 그렇다고 하더라도 😅, createElement 라는 함수를 제공해줬다고 해서 이걸 계속 반복적으로 호출해서 사용할 수는 없는 일. 그래서 jsx라는 문법을 만들어서 babel-plugin을 통해 제공함.  (transpiler를 통해 html을 markup하듯이 코딩을 하면, 이를 createElement 함수 호출로 바꿔주는 역할을 하는 plugin) <br />

결과적으로, html태그를 마크업 하면 'createElement'라고 하는 함수한테 이 태그를 문자열로 전달하고, 문자열로 전달된 것을 내부적으로는 'createElement'라고 하는 DOM API를 이용해서 실제 DOM으로 만드는 작업일 뿐인 것.

---

**함수 컴포넌트를 직접 만들기에 앞서 바벨에서의 컴포넌트 처리방식 확인**

```javascript
// js
const Hello = () => <h1>Hello</h1>;

const app = (
  <p>
    <Hello></Hello>
  </p>
);
```

```javascript
// babel
"use strict";

const Hello = () => /*#__PURE__*/ React.createElement("h1", null, "Hello");

const app = /*#__PURE__*/ React.createElement(
  "p",
  null,
  /*#__PURE__*/ React.createElement(
    Hello /* <<<<<<<< 자바스크립트 값(함수) */,
    null
  )
);
```

> "jsx 문법의 태그에 이름이 대문자로 시작되면,
> 이것을 문자열로 취급하지 않고, 자바스크립트 값으로 취급할거고
> 그 값은 반드시 함수여야 되고
> 그 함수는 jsx를 return하는 즉, 그 안에서 return 되는 것은 createElement의 return 결과값이여야 한다."
> 는 약속을 내부적으로 갖고 있고 그렇게 동작되도록 디자인되어 있음. (아주 간단한(!) 아이디어. 규칙을 만든것 뿐이다~)

**만약 Hello를 hello로 넘긴다면?**

```javascript
// babel
"use strict";

const Hello = () => /*#__PURE__*/ React.createElement("h1", null, "Hello");

const app = /*#__PURE__*/ React.createElement(
  "p",
  null,
  /*#__PURE__*/ React.createElement("hello", null) /* <<<<<<<< 문자열 */
);
```

---

이렇게 React의 기저에 깔려있는 매커니즘의 핵심을 잘 이해하고 있다면,
훨씬 더 좋은 'React' 코드를 생산할 수 있을 것.
또한, 'React'가 가지고 있는 여러 가지 제약사항들이나 이런 부분들이 왜 생겼는지 충분히 이해하고 있다면 훨씬 더 좋은 '코드'를 만들어 낼수 있을 것!
