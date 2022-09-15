##### Part 3. Redux 만들기

##### 04. 그럴듯 하게 모양 내기

```
1. 파일분리
2. 네이밍 교정
3. actionCreator
4. action 추가
```

actionCreator의 '호출 지연' → 'Curry'.

```
export const actionCreator = (type) => (payload) => ({ type, payload });
```

> payload가 없을 때는 없이. action 객체를 만들어줄 수 있게 curry 사용.
> 별거 아닌데 redux를 어렵게 느끼는 요인 가운데 하나. 😅
