| Feature | Functional Component | Class Component |
|--------|------------------------|------------------|
| **Definition** | A JavaScript function that returns JSX. | A ES6 class that extends `React.Component` and includes a `render()` method. |
| **Syntax** | `const MyComponent = () => { return <h1>Hello</h1>; }` | `class MyComponent extends React.Component { render() { return <h1>Hello</h1>; } }` |
| **State Management** | Uses **Hooks** (e.g., `useState`) to manage state. | Uses `this.state` and `this.setState()` to manage state. |
| **Lifecycle Methods** | Uses **Effect Hook** (`useEffect`) to mimic lifecycle behavior. | Has lifecycle methods like `componentDidMount`, `componentDidUpdate`,`componentDidUnmount`. |
| **Props** | Accessed directly as function parameters: `(props)` | Accessed via `this.props`. |
| **Binding `this`** | Not required — no `this` context. | Required for event handlers unless using arrow functions. |
| **Performance** | Generally lighter and faster. | Slightly heavier due to class instantiation. |
| **Reusability & Logic Sharing** | Achieved via **Custom Hooks**. | Achieved via HOCs or Render Props. |
| **Error Boundaries** | ❌ Cannot define error boundaries. | ✅ Can define error boundaries. |
| **Refs** | Uses `useRef` or `useImperativeHandle`. | Uses `React.createRef()` or callback refs. |
| **Conciseness** | More concise and readable. | More boilerplate code. |
| **Best Practice (Modern)** | ✅ **Preferred** — modern standard. | ⚠️ Legacy — not recommended for new code. |