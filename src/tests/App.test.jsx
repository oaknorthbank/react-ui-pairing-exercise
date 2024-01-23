import "@testing-library/jest-dom/vitest";
import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "../App.jsx";

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
