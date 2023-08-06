import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Output from "./Output";

describe("Output component", () => {
  test('renders "Hello world" on screen', () => {
    render(<Output />);
    const outputElement = screen.getByText("Hello world", { exact: false });

    //assert
    expect(outputElement).toBeInTheDocument();
  });

  test('should not render "I am showing" when button is not clicked', () => {
    render(<Output />);
    const outputElement = screen.queryByText("I am showing");

    expect(outputElement).toBeNull();
  });

  test('renders "I am showing" when button is clicked', () => {
    render(<Output />);
    const buttonElement = screen.getByRole("button");
    //click button
    userEvent.click(buttonElement);

    const outputElement = screen.getByText("I am showing");
    expect(outputElement).toBeInTheDocument();
  });
});
