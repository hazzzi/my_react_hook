## React Hook

- Hook은 class 안에서는 동작하지 않는다.

## useState

`const [count, setCount] = useState(0)`  
첫 번째 렌더링에만 딱 한번 사용된다.  
함수 컴포넌트 안에서 Hook으로 state를 사용할 수 있음  
this를 호출하지 않아도 된다  
`useState()`의 인자로 넘겨주는 값은 state의 초기 값  
2개의 아이템쌍이 들어있는 배열로 만들어짐 

`setCount` set으로 `count` 변수의 값을 갱신함

### 여러 state 변수 선언하기

```javascript
const [age, setAge] = useState(20);
const [todos, setTodos] = useState([{ text: 'learn hooks' }]);

function handleAgeClick() {
	// this.setState({ age: 30 })
	setAge(30);
}
```

## useEffect

- componentDidMount, componentDidUpdate, componentWillUnmount 와 같은 side effects를 수행한다
- 컴포넌트 내에서 여러개의 effect를 사용할 수 있다.
- 수행중인 작업을 기반으로 코드를 분할 가능
- 여러번 사용할 수 있다.

``` javascript
useEffect(() => {}) // componentDidMount
useEffect(() => {}, []) // componentDidMount, 첫 마운트시 한번만 실행
useEffect(() => {}, [variable]) // componentDidUpdate, variable이 업데이트 될때마다
useEffect(() => { return () => {} }) // componentWillUnmount
```

_예제_

- 다음 효과를 적용하기 전에 이전 효과를 정리함

```javascript
// Mount with { friend: { id: 100 } } props
ChatAPI.subscribeToFriendStatus(100, handleStatusChange); // Run first effect

// Update with { friend: { id: 200 } } props
ChatAPI.unsubscribeFromFriendStatus(100, handleStatusChange); // Clean up previous effect
ChatAPI.subscribeToFriendStatus(200, handleStatusChange); // Run next effect

// Update with { friend: { id: 300 } } props
ChatAPI.unsubscribeFromFriendStatus(200, handleStatusChange); // Clean up previous effect
ChatAPI.subscribeToFriendStatus(300, handleStatusChange); // Run next effect

// Unmount
ChatAPI.unsubscribeFromFriendStatus(300, handleStatusChange); // Clean up last effect
```

## Hook 사용 규칙

- 최상위 레벨에서만 호출해야함. 반복문, 조건문, 중첩된 함수 내에서 Hook 실행 X
- 함수 컴포넌트 내에서만 호출해야함. 일반 자바 스크립트 함수에서 호출하면 안됨
- 조건부로 effect를 실행하기 원하면 조건문을 hook 내부에 넣을 수 있음.
- 직접 작성한 custom Hook 내에서 호출 가능

## 나만의 Hook 만들기

여러 컴포넌트에서 사용할 수 있음  
이름이 `use`로 시작하고 안에서 다른 Hook을 호출  
`useSomething`의 형태

```javascript
function useMyHook() {}

function fun1() {
	useMyHook();
}

function fun2() {
	useMyHook();
}
```

## 다른 내장 Hook

### useContext

`const value = useContext(MyContext)`

- 컴포넌트를 중첩하지 않고도 React context를 구독할 수 있게해줌
- 전달하는 인자는 **context 객체 그 자체** 여야함  
  _예제_

```javascript
const themes = {
	light: {
		foreground: '#000000',
		background: '#eeeeee'
	},
	dark: {
		foreground: '#ffffff',
		background: '#222222'
	}
};

const ThemeContext = React.createContext(themes.light);

function ThemedButton() {
	const theme = useContext(ThemeContext);

	return (
		<button style={{ background: theme.background, color: theme.foreground }}>
			I am styled by theme context!
		</button>
	);
}
```

### useReducer

`const [state, dispatch] = useReducer(reducer, initialArg, init)`

- 복잡한 컴포넌트들의 state를 reducer로 관리하게 해줌
- `(state, action) => newSate` 형태로 받고 `dispatch`와 짝의 형태로 현재 state를 반환
- 초기 state를 지연 생성 가능, `init` 함수를 세 번째 인자로 전달함

```javascript
function init(initialCount) {
	return { count: initialCount };
}
function reducer(state, action) {
	switch (action.type) {
		case 'increment':
			return { count: state.count + 1 };
		case 'decrement':
			return { count: state.count - 1 };
		case 'reset':
			return init(action.payload);
		default:
			throw new Error();
	}
}
function example({initialcount}) {
  const [state, dispatch] = useReducer(reducer, initialCount, init);

  ...

  <button onClick={() => dispatch({ type: 'reset', payload: initialCount })}>
    Reset
  </button>;
}
```

### useCallback

- 메모이제이션된 콜백을 반환한다.
- `useCallback(fn, deps)`은 `useMemo(()=>fn, deps)`와 같다.

```javascript
const memoizedCallback = useCallback(() => {
	doSomething(a, b);
}, [a, b]);
```

### useMemo

`const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);`

- 메모이제이션된 값을 반환한다.
- 렌더링 중에 실행됨
- `useMemo`를 사용하지않고도 동작할 수 있도록 코드를 작성하고, 성능을 최적화 해야함.

### useRef

`const refContainer = useRef(initialValue);`

- `.current` 프로퍼티로 전달된 인자로 초기화된 변경 가능한 ref 객체를 반환

### useImperativeHandle

`useImperativeHandle(ref, createHandle, [deps])`

- `ref`를 사용할때 부모 컴포넌트에 노출되는 인스턴스 값을 사용자화 한다.
- `forwardRef`와 더불어 사용

### useLayoutEffect

- 모든 DOM 변경 후에 동기적으로 발생한다.
- 먼저 useEffect를 사용해 보고 문제가 있다면 사용하기를 권장

### useDebugValue

- 리액트 개발자 도구에서 사용자 Hook 레이블을 표시하는데 사용
- 커스텀 hook 이 공유된 라이브러리의 일부일때 유용하다.
- 두번째 파라미터로 포맷팅 함수를 전달할 수도 있다.

```javascript
// Show a label in DevTools next to this Hook
// e.g. "FriendStatus: Online"
useDebugValue(isOnline ? 'Online' : 'Offline');

useDebugValue(date, date => date.toDateString()); // 불필요한 toDateString 함수 호출 방지
```
