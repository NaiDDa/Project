# Technical Challenge Project

![TS](https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![Next JS](https://img.shields.io/badge/Next-black?style=flat-square&logo=next.js&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-black?style=flat-square&logoColor=white)
![Emotion](https://img.shields.io/badge/Styled-Emotion-pink?style=flat-square&logoColor=white)
[![made-for-VSCode](https://img.shields.io/badge/Made%20for-VSCode-007ACC.svg)](https://code.visualstudio.com/)

- 요청서 목록 페이지에서 요처 리스트가 보여지고, <br />
- 목록 페이지에서는 `필터링`에 따른 `검색`이 가능하고, <br />
- 상단 중인 요청 토글 클릭시 `상담중`인 목록만 보여진다. <br />
- 목록 페이지에 `필터링` 조건과 `상담중` 조건에 따라 교집합, 여집합, 차집합이 가능하다. <br />

## :clock3: Project Period

2021.10.7 ~ 2021.10.10 (총 4일)

## :hammer: Installation

```javascript
yarn install
```

## :bell: Usage

```javascript
yarn dev
```

If you run server ` json-server ./db.json --port 4000`

If you enter `yarn dev`

your browser open `http://localhost:3000/`

## :폴더 구조

```
└── pages
    └── main
└── public
    └── images
└── src
    └──  components
         ├── commons
             ├── boardCard
             ├── dropDown-1
             ├── dropDown-2
             ├── filterdData
             ├── layout
             └── navigation

     └──  units
          └── mainPage
```

- `pages`는 디렉토리의 파일로부터 export 된 React 컴포넌트입니다.
- `src`의 경우 `components`와 `units`으로 나뉜다.
- `components`의 경우 재사용 가능한 컴포넌트들로 구성 되어있다.
- `boardCard`에는 요청서 UI가 구성 돼있다.
- `dropDown-1`,`dropDown-1`에는 필털링 체크 박스 목록이 구성
- `filterdData`에는 필터링 된 요청서 리스트가 최종적으로 그려진다.
- `layout`에는 상단 고정된 header가 구성
- `navigation`에는 반응형 작업시 펼처지는 햄버거 메뉴가 구성
- `units`에는 `container`/`presenter` 패턴 사용한 소스코드
- `mainPage`에는 `components`안에 컴포넌들을 사용해서 구현했다.

## Preview

#### 1-1. 요청 목록/요청 목록 체크박스 필터링

![필터링](https://user-images.githubusercontent.com/86825253/142915444-65f801bd-a4af-4f17-b9b5-b72f2d146cd6.gif)

#### 1-2. 요청 목록 상담중 토글 필터링

![토글](https://user-images.githubusercontent.com/86825253/142915429-8f5cb5af-c508-409c-b4cc-814a33fdde70.gif)

#### 2-1. 요청 목록 필터링 여집합

![여집합](https://user-images.githubusercontent.com/86825253/142915403-825d74a3-ae1d-49b5-89ef-048576660fef.gif)

#### 3-1. 모바일 환경

![모바일](https://user-images.githubusercontent.com/86825253/142915366-c2f7c0ef-f301-4869-bbb6-903897ee3532.gif)

#### 3-2. 모바일 환경 햄버거 메뉴

![햄버거 메뉴](https://user-images.githubusercontent.com/86825253/142915465-a301e012-e060-468d-8dc2-48258562d05b.gif)

## Thchnical Skills

- 메인 라이브러리: React
- 메인 언어 및 문법: Typescript, RxJS, Javascript ES6+, JSX
- 사용한 패키지: <br/>
  `axios`(API를 연동하기 위해서 사용)
  `emotion/styled`(CSS in js 라이브러리로 사용 <br/>
  스타일을 입힌 것을 component로 만들어서 어느 곳에서든 재사용이 가능, <br/>
  자바스크립트에서 쓰이는 상수, props, 함수 공유가능 하기 때문에)

## 후기

- 과제를 진행하면서 가장 아쉬웠던/어려웠던 부분<br/>
  - 코드를 치다보니 어느새 100줄이 넘어가고 최대한 70줄 이상 되면 컴포넌트를 따로 빼려고 노력 헀다.<br/>
  - 타입을 공부중이라 타입을 잡는데 생각을 많이 했다.<br/>
  - 반응형은 처음이라 아직 반복적인 작업을 통해서 구현했다.<br/>
- 아직 더 추가 하고싶은 기능 <br/>
  - 쉽게 반응형을 해주기 위한 전역 설정 <br/>
  - useCallback,useMemo를 이용한 최적화 작업 <br/>
