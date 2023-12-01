# 기존에 동작하는 코드의 테스트코드를 작성해보기

모듈 추가 설치 - RTL, jest-dom

```shell
npm i @testing-libarary/react @testing-libarary/jest-dom -D
```

---

jest.config.js

```js
export default {
  testMatch: [
    "**/__tests__/**/*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)",
  ],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
};
```

> The error below may be caused by using the wrong test environment, see https://jestjs.io/docs/configuration#testenvironment-string.
> Consider using the "jsdom" test environment.

```shell
npm i jest-enviroment-jsdom -D
```

jest.config.js

```diff
export default {
  testMatch: [
    "**/__tests__/**/*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)",
  ],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
+  testEnvironment: "jsdom",
};
```
