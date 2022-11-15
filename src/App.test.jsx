import { describe, test } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App.jsx";

describe("Dashboard view", () => {
  test("Should display hello world title", () => {
    render(<App />);
    screen.getByText("hello world");
  });

  test("Should display the first loan application data", () => {
    render(<App />);
    screen.getByText("Alice Jones");
  });
});
