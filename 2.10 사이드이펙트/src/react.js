/* Hook 의사코드 */
const hooks = [];
let currentComponent = 0;

export class Component {
  constructor(props) {
    this.props = props;
  }
}

export function createDOM(node) {
  if (typeof node === "string") {
    return document.createTextNode(node);
  }

  const element = document.createElement(node.tag);

  node.props &&
    Object.entries(node.props).forEach(([name, value]) =>
      element.setAttribute(name, value)
    );

  node.children.map(createDOM).forEach(element.appendChild.bind(element));

  return element;
}

function makeProps(props, children) {
  return {
    ...props,
    children: children.length === 1 ? children[0] : children,
  };
}

function useState(initValue) {
  let position = currentComponent - 1;
  if (!hooks[position]) {
    hooks[position] = initValue;
  }

  const modifier = (nextValue) => {
    hooks[position] = nextValue;
  };

  return [hooks[position], modifier];
}

export function createElement(tag, props, ...children) {
  props = props || {};

  if (typeof tag === "function") {
    // 실제 리액트에서는 Symbol을 만들어 처리하고 있음.
    if (tag.prototype instanceof Component) {
      const instance = new tag(makeProps(props, children));
      return instance.render();
    } else {
      /* Hook 의사코드 */
      hooks[currentComponent] = null;
      currentComponent++;

      if (children.length > 0) {
        return tag(makeProps(props, children));
      } else {
        return tag(props);
      }
    }
  } else {
    return { tag, props, children };
  }
}

// export function render(vdom, container) {
//   container.appendChild(createDOM(vdom));
// }

export const render = (function () {
  let prevDom = null;

  return function (vdom, container) {
    if (prevDom === null) {
      prevDom = vdom;
    }

    /* diff 로직 */
    // 직접 해봐도 되고,
    // Awesome Open Source에서 virtual-dom library 찾아서 해봐도 됨.
    // (ex. snabbdom, https://github.com/snabbdom/snabbdom)
    /* // diff 로직 */

    container.appendChild(createDOM(vdom));
  };
})();
