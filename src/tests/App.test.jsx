import matchers from "@testing-library/jest-dom/matchers";
import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "../App.jsx";

expect.extend(matchers);

describe("Loan applications dashboard view", () => {
  test("displays a hello world title", () => {
    render(<App />);
    expect(screen.getByText("hello world")).toBeInTheDocument();
  });

  test("displays the first loan application data", () => {
    render(<App />);
    expect(screen.getByText("Alice Jones")).toBeInTheDocument();
  });
});
