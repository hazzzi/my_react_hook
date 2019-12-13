# React Hook
- Hook은 class 안에서는 동작하지 않는다.

# useState 선언 하기

const [count, setCount] = useState(0) : 첫 번째 렌더링에만 딱 한번 사용된다.

# 여러 state 변수 선언하기

const [age, setAge] = useState(20)
const [todos, setTodos] = useState([{text:'learn hooks'}])

# useEffect
- componentDidMount, componentDidUpdate, componentWillUnmount 와 같은 side effects를 수행한다
- 컴포넌트 내에서 여러개의 effect를 사용할 수 있다.

useEffect(() => {}) : componentDidMount
useEffect(() => {}, []) : componentDidMount, 첫 마운트시 한번만 실행
useEffect(() => {}, [variable]) : componentDidUpdate, variable이 업데이트 될때마다
useEffect(() => { return () => {} }) : componentWillUnmount 

# Hook 사용 규칙
- 최상위 레벨에서만 호출해야함. 반복문, 조건문, 중첩된 함수 내에서 Hook 실행 X
- 함수 컴포넌트 내에서만 호출해야함. 일반 자바 스크립트 함수에서 호출하면 안됨
** 직접 작성한 custom Hook 내에서 호출 가능

https://ko.reactjs.org/docs/hooks-overview.html / 나만의 hook 만들기 까지 정리.

