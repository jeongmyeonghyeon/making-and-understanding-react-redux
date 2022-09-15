import { createStore } from "./redux";

function worker(state = { count: 0 }, action) {
  // do something
  // return { ...state, count: state.count + 1 };
  switch (action.type) {
    case "increase":
      return { ...state, count: state.count + 1 };
    default:
      return { ...state };
  }
}

const store = createStore(worker);

store.subscribe(function () {
  console.log(store.getState());
});

store.send({ type: "increase" });
store.send({ type: "increase" });
