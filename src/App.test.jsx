import { describe, test } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App.jsx";

describe("App tests", () => {
  test("Should display hello world", () => {
    render(<App />);
    screen.getByText("hello world");
  });
});
