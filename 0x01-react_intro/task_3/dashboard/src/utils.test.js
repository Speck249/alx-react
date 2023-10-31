import { getFullYear, getFooterCopy, getLatestNotification } from './utils.js';

test('getFullYear function returns current Gregorian year', () => {
  const currentYear = new Date().getFullYear();
  const output = getFullYear();
  expect(output).toBe(currentYear);
});

test('getFooterCopy function returns string based on condition', () => {
  expect(getFooterCopy(true)).toBe("Holberton School");
  expect(getFooterCopy(false)).toBe("Holberton School main dashboard");
});

test('getLatestNotification function returns a string', () => {
  expect(getLatestNotification()).toBe("<strong>Urgent requirement</strong> - complete by EOD");
});
