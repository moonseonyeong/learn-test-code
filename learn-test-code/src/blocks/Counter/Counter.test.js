import { fireEvent, render, screen } from '@testing-library/react';
import Counter from './Counter';


test.skip("the counter starts at 0", () => {
  render(<Counter />);
  const counterElement = screen.getByTestId("counter");

  expect(counterElement).toHaveTextContent("0");
})


test.skip('minus button has correct text', () => {
  render(<Counter />);
  const minusButton = screen.getByTestId("minus-button");

  expect(minusButton).toHaveTextContent("-");
})

test.skip('plus button has correct text', () => {
  render(<Counter />);
  const plusButton = screen.getByTestId("plus-button");

  expect(plusButton).toHaveTextContent("+");
})


test.skip("When the + button is pressed, the counter changes to 1", () => {
  render(<Counter />);
  const plusButtonElement = screen.getByTestId("plus-button");

  fireEvent.click(plusButtonElement);

  const counterElement = screen.getByTestId("counter");
  expect(counterElement).toHaveTextContent("1");
})

test.skip("When the - button is pressed, the counter changes to -1", () => {
  render(<Counter />);
  const minusButtonElement = screen.getByTestId("minus-button");

  fireEvent.click(minusButtonElement);

  const counterElement = screen.getByTestId("counter");
  expect(counterElement).toHaveTextContent("-1");
})

test.skip("on/off button has blue color", () => {
  render(<Counter />);
  const buttonElement = screen.getByTestId("on/off-button");

  expect(buttonElement).toHaveStyle({ backgroundColor: "blue" });
})


test.skip('Prevent the -,+ button from being pressed when the on/off button is clicked', () => {
  render(<Counter />);
  const onOffButtonElement = screen.getByTestId("on/off-button");


  fireEvent.click(onOffButtonElement);
  const plusButtonElement = screen.getByTestId("plus-button");

  expect(plusButtonElement).toBeDisabled();
})