import demo from '../app';

test('test demo', () => {
  const expected = 5;
  const received = demo(5);
  expect(received).toBe(expected);
});
