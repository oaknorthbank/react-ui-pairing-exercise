import { describe, test } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App.jsx";

describe("Loan applications dashboard view", () => {
  test("displays a hello world title", () => {
    render(<App />);
    screen.getByText("hello world");
  });

  test("displays the first loan application data", () => {
    render(<App />);
    screen.getByText("Alice Jones");
  });
});
