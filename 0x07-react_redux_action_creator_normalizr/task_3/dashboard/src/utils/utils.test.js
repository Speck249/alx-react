import { getFullYear, getFooterCopy, getLatestNotification } from './utils.js';

test('Function returns current gregorian year', () => {
  const testCase = new Date().getFullYear();
  expect(testCase).toBe(2023);
});

test('Function returns string based on condition', () => {
  const testCase = getFooterCopy(true);
  const testCase2 = getFooterCopy(false);
  expect(testCase).toBe('Holberton School');
  expect(testCase2).toBe('Holberton School main dashboard');
});

test('Function returns string', () => {
  const testCase = getLatestNotification();
  expect(testCase).toBe('<strong>Urgent requirement</strong> - complete by EOD');
});
