import '@testing-library/jest-dom';

const originalError = console.error;

console.error = (...args: unknown[]) => {
  const message = typeof args[0] === 'string' ? args[0] : '';
  if (message.includes('ReactDOMTestUtils.act')) {
    return;
  }
  originalError(...args);
};
