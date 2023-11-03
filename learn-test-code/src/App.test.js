import { fireEvent, render, screen } from '@testing-library/react';
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


test("When the + button is pressed, the counter changes to 1", () => {
  render(<App />);
  const plusButtonElement = screen.getByTestId("plus-button");

  fireEvent.click(plusButtonElement);

  const counterElement = screen.getByTestId("counter");
  expect(counterElement).toHaveTextContent("1");
})

test("When the - button is pressed, the counter changes to -1", () => {
  render(<App />);
  const minusButtonElement = screen.getByTestId("minus-button");

  fireEvent.click(minusButtonElement);

  const counterElement = screen.getByTestId("counter");
  expect(counterElement).toHaveTextContent("-1");
})