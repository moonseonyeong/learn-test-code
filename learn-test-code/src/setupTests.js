// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

import { server } from './mocks/server'

//모든 테스트 시작 전
beforeAll(() => server.listen())

//각 테스트가 끝날 때 마다 서버 리셋
afterEach(() => server.resetHandlers())

//모든 테스트가 끝난 후 서버 닫기
afterAll(() => server.close())
