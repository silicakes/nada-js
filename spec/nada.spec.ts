import nada from '../src';
import fib from './utils';

test('it should contain nothing', () => {
  expect(Object.keys(nada).length).toBe(0);
});

test('it should contain nothing - asynchronously', (done: jest.DoneCallback) => {
  setTimeout(() => {
    expect(Object.keys(nada).length).toBe(0);
    done();
  }, 0);
});

test('it should not have side effects', () => {
  const nadaHelper = () => nada;
  nadaHelper();
  expect(fib(10)).toEqual(55);
});
