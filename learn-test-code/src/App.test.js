import { render, screen } from '@testing-library/react';
import App from './App';


test("the counter starts at 0", () => {
  render(<App />);
  const counterElement = screen.getByTestId("counter");

  expect(counterElement).toHaveTextContent("0");
})


test('minus button has correct text', () => {
  render(<App />);
  const minusButton = screen.getByTestId("minus-button");

  expect(minusButton).toHaveTextContent("-");
})

test('plus button has correct text', () => {
  render(<App />);
  const plusButton = screen.getByTestId("plus-button");

  expect(plusButton).toHaveTextContent("+");
})

