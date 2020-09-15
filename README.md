# React - Memo

### React Concepts

1. [JSX](#jsx)
2. [Components](#components)
3. [Lifecycle](#lifecycle)
4. [Hooks](#hooks)
5. [Etc](#etc)



## JSX

React Application을 보다 쉽게 작성하기위해 고안된 javascript + XML (유사 HTML) 확장 문법이다.

>  JSX는 HTML보다는 JavaScript에 가깝기 때문에, 
>
> React DOM은 HTML 어트리뷰트 이름 대신 `camelCase` 프로퍼티 명명 규칙을 사용합니다.
>
> JSX에서 `class`는 [`className`](https://developer.mozilla.org/ko/docs/Web/API/Element/className)가 되고 tabindex는 [`tabIndex`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/tabIndex)가 됩니다.
>
> 출처: [React: JSX 소개](https://ko.reactjs.org/docs/introducing-jsx.html)



## Components

1. 클래스형 컴포넌트 생성 = **Stateful**
  - State를 가질 수 있다.
2. 함수형 컴포넌트 생성 = **Stateless**
   - State를 가질 수 없다. (**Hook** 사용시 예외)
3. HOC (Higher-Order-Components)
   - 컴포넌트 로직 재활용을 위해 사용한다



## State Vs Props

**State** : 함수 안에서의 지역 변수와 동일하다.

*Plain JS Function*

```js
const Foo = () => {
  let message = 'World!';
  
  console.log(`Hello ${message}`);
}
```

*React Component*

```javascript
class Foo extends React.Component {
  state = {
    message: 'World!'
  }

  render() {
    return <div>Hello {this.state.message}</div>;
  }
}
```

**Props** : 함수의 파라미터값과 동일하다.

*Plain JS Function*

```js
const Foo = (message) => {
  console.log(`Hello ${message}`);
}

Foo('World');
```

*React Component*

```javascript
class Foo extends React.Component {
  render() {
    return <div>Hello {this.props.message}</div>;
  }
}

<DummyComponent message="World" />
```



## Lifecycle

React의 컴포넌트는 생명주기(**Lifecycle**)를 가지며, 각각의 흐름에 따라 발생(호출)되는 이벤트들이 존재한다.

> 생명주기란? *생성(**Mounting**) / 사용(**Update**) / 소멸(**Unmounting**)* 각 단계별 일련의 과정을 말한다.



**Mounting**

- constructor
- static getDerivedStateFromProps(props, state)
- render()
- componentDidMount()

**Update**

- static getDerivedStateFromProps(props, state)
- shouldComponentUpdate(prevProps, nextProps)
- render()
- getSnapshotBeforeUpdate()
- componentDidUpdate()

**Unmounting**

- componentWillUnmount()

**Error**

- static getDerivedStateFromError(error)
- componentDidCatch(error, info)



### Lifecycle diagram



![[React Lifecycle Methods diagram](https://twitter.com/dan_abramov/status/981712092611989509).](https://pbs.twimg.com/media/DZ-97vzW4AAbcZj?format=jpg&name=large)

> Source: [React Lifecycle Methods diagram tweeted by Dan Abramov](https://twitter.com/dan_abramov/status/981712092611989509).



## Hooks

> 주의 : Hook은 함수안 최상위(Root)에서만 실행되어야한다.



###*기본 Hook*

1. [**state** , **setState**] = useState(**any**)
   - 클래스 컴포넌트의 `setState`  동작 방식과 상이함 (update objects를 자동으로 합치지 않는다)
2. useEffect(**callback**[, ...**deps**])

   - Life cycle 일부 (`componentDidMount`,`componentDidUpdate`, `componentWillUnmount`)를 대체할 수 있다.

   - 브라우저 [CRP](https://developer.mozilla.org/en-US/docs/Web/Performance/Critical_rendering_path) 흐름중 레이아웃 배치와 그리기를 완료한 **후** 발생

3. useContext(**context**)

   - useContext는 Context.Provider와 함께 사용



###*추가 Hook*

1. [**state**, **dispatch**] = useReducer(**reducer**, **initialArg**, **init**)
  
   - useState 상위호환 (Redux 패턴에 익숙해질 필요가 있다)
2. useCallback(**fn**, **deps**) 

  - 메모이제이션된 **콜백**을 반환 	
3. useMemo(**fn**,**deps**)

  - 메모이제이션된 **값**을 반환
4. useRef(**initialValue**) : 
  
   - React.createRef() 동일
5. useImperativeHandle(**ref**, **createHandle**, **[deps]**)
  - useImperativeHandle는 forwardRef와 함께 사용
6. useLayoutEffect()

   - DOM에서 레이아웃을 읽고 동기적인 리렌더링 필요시 사용
7. useDebugValue(value) 
8. CustomHooks 제작 및 사용 가능



## Etc

> 샘플 코드: sample/*

1. Assets
   - Image 사용 방식 : import / public
   - svg는 import 방식 선호
2. Styling

   - css 파일은 module로 사용시 파일명 .css => .module.css 변경 후 사용

   - sass 사용시 node-sass 설치 :  `yarn add node-sass` || `npm i node-sass --save`
3. Context
4. Ref
5. Code spliting
6. Re-usable UI
7. Forms
8. Validations
9. Authentication
10. DOM Plugins



## React Router

> 설치 :  `npm i --save react-router reat-router-dom` || `yarn add react-router react-router-dom`
>
> react-router는 샘플 코드 작성을 위해 설치했습니다. (실사용 X)



1. BrowserRouter / HashRouter / MemoryRouter / StaticRouter
2. Route
   - UI Rendering을 책임지며 컴포넌트를 표현하는 3가지 방식이 존재한다
     - render / component / children
   - Route path를 사용하지 않는 컴포넌트는 항상 표시한다.
3. Swtich
   - location과 일치하는 **첫번째** 라우트 컴포넌트를 표시한다
4. withRouter
   - 라우트 컴포넌트가 아닌 일반 컴포넌트에 math, location, history 전달
5. NavLink / Link
   - NavLink : location 일치 시 .active 제공 / activeClassName 프로퍼티로 커스컴 클래스 설정도 가능
6. Redirect



## Redux

> 설치 :  `npm i --save redux react-redux` || `yarn add redux react-redux`

> Redux DevTools : [github: Redux-DevTools](https://github.com/zalmoxisus/redux-devtools-extension)

1. Action
2. ActionCreator
3. Dispatch
4. Reducer
5. Store
6. Provider
7. Connect
8. mapStateToProps / mapDispatchToProps
9. middleware
   1. redux-thunk
   2. redux-saga

