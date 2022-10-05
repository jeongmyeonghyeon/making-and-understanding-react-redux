### Part 2. React 만들기

## 08. virtual DOM

```
1. VDOM의 역할
2. VDOM의 마케팅 포인트
3. diff 구조 구현
4. VDOM 구현체
```

### VDOM의 역할

DOM 보다 훨씬 더 쉬운 구조물로 UI를 만들고 개발할 수 있게끔 중간에 DOM 처리는 React한테 맡기고,<br />
개발자한테는 JSX라고 하는 마치 DOM/html 태그와 비슷한 Component 베이스의 개발 방식을 만들어줄 수 있게 만든 환경. → Virtual DOM

- 직접 만든 react.js에서 Virtual DOM에 해당하는 코드...
  - createElement의 `return { tag, props, children }` 부분...
  - 이 객체의 특징은 '트리구조' 인것과 와 루트가 하나고 나머지 모두가 그 루트의 자식요소로서 만들어지는 단일 객체라는 것...! → react가 이 단일 객체로 real DOM을 만듬.(createDOM)

<br />

### VDOM 마케팅 포인트

리액트는 이 virtual DOM을 UI를 업데이트 하는 부분에 사용해 그 효율을 극대화했다. ('객체대 객체'를 비교해 'DOM대 DOM; 비교보다 비용을 굉장히 절약할 수 있다.)

<br />

### diff 구조 구현
  
ex. snabbdom [https://github.com/snabbdom/snabbdom](https://github.com/snabbdom/snabbdom)
