##### Part 4. 미들웨어 만들기

##### 03. 로거 미들웨어

```
1. logger
2. 로그 디자인
3. groupCollapsed
```

```javascript
console.groupCollapsed("action logger => ", action.type);
console.log("current state: ", currentState);
console.log("action payload:", action.payload);
console.groupEnd();
```
