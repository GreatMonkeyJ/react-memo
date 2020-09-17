# React - Memo

### React Concepts

1. [JSX](#jsx)
2. [Components](#components)
3. [Lifecycle](#lifecycle)
4. [Hooks](#hooks)
5. [React Router](#react-router)
6. [Redux](#redux)
7. [Deployment](#deployment)
8. [Etc](#etc)



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

클래스형 컴포넌트 생성 = **Stateful**

- State를 가질 수 있다.

함수형 컴포넌트 생성 = **Stateless**

- State를 가질 수 없다. (**Hook** 사용시 예외)

HOC (Higher-Order-Components)

- 컴포넌트 로직 재활용을 위해 사용한다



## State Vs Props

**State** : 함수 안에서의 지역 변수와 동일하다. (**변경가능**)

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

**Props** : 함수의 파라미터값과 동일하다. (**변경불가**)

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



## React Router

> 설치 :  `npm i --save react-router reat-router-dom` / `yarn add react-router react-router-dom`
>
> react-router (실사용 X)



**BrowserRouter** : localhost:3000/about

**HashRouter** : localhost:3000/#/about

**Route**

- UI Rendering을 책임지며 컴포넌트를 표현하는 3가지 방식이 존재한다.
  - render / component / children
- Route path를 사용하지 않는 컴포넌트는 **항상** 표시된다.

**Swtich** : location과 일치하는 **첫번째** 라우트 컴포넌트를 표시한다.

**withRouter** : 라우트 컴포넌트가 아닌 일반 컴포넌트에 math, location, history 정보를 전달한다.

**NavLink / Link** : NavLink : location 일치 시 .active 클래스를 제공 및 activeClassName 프로퍼티로 커스텀 클래를 설정할 수 있다.

**Redirect** : 페이지 전환에 사용되며 변경된 location값은 이전 history 스택을 덮어쓴다.



## Redux

> 설치 :  `npm i --save redux react-redux` / `yarn add redux react-redux`



**Redux Flow** : Action => Dispatch => Reducer => Store  => View 순환

**Provider** : React <=> Redux 연결

**Connect** : Redux Store <=> Component 연결 (mapStateToProps / mapDispatchToProps)

**ApplyMiddleware** : Store => Middleware 연결

**middleware** : 리덕스는 비동기 통신을 지원하지 않는다. 아래 2가지는 대표적인 비동기 통신을 위한 미들웨어이다.

1. redux-thunk (Thunk 패턴 기반 미들웨어)
   - `npm i --save redux-thunk` /`yarn add redux-thunk`

2. redux-saga (Generator 함수 기반 미들웨어)

   - `npm i --save redux-saga` /`yarn add redux-saga`



## Deployment



**404: Page Not Found** 

Client-Routing 적용된 SPA는 단일 페이지(index.html)만 존재하는 특성상 주소창에 url을 직접 입력하거나 새로고침등으로 

페이지 접속이 이루어지면 해당 페이지를 찾지 못한다. Fallback 설정이 필수이며 설정 방식은 배포 서버 환경에 따라 상이하다.

- Live-server :
  - Vscode extentions 설치 시 : 환경설정 => 404 검색 => index.html 추가
- Netlify :
  - => `&& echo ‘/* /index.html 200’ | cat >build/_redirects`



## Etc



**Assets**

- Image 사용 방식 : import / public / require
- svg는 import 방식 선호

**Styling**

- css 파일은 module로 사용시 파일명 .css => .module.css 변경 후 사용

- sass 사용시 node-sass 설치 필요 :  `npm i node-sass --save` / `yarn add node-sass` 



**Memo** 프로젝트 추가 및 적용 예정

**Code spliting**  / Re-usable UI / Forms / **Validations** / **Authentication** / **DOM Plugins**