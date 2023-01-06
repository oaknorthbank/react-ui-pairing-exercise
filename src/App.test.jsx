import { describe, test } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App.jsx";

describe("Loan applications dashboard view", () => {
  test("displays a hello world title", () => {
    render(<App />);
    screen.getByText("hello world");
  });

  test("displays header of the Loan Application Dashboard", () => {
    render(<App />);
    screen.getByText("Client Details");
    screen.getByText("Address");
    screen.getByText("Type");
    screen.getByText("All in rate");
    screen.getByText("Loan amount");
    screen.getByText("Created on");
    screen.getByText("Status");
  });

  test("displays details of first application", () => {
    render(<App />);
    screen.getByText("Alice Jones");
    screen.getByText("17 Fore St, Somerset, TA21 8AA");
    screen.getAllByText("Residential");
    screen.getAllByText("7.2%");
    screen.getAllByText("£500,000.00");
    screen.getByText("2022-11-15T10:29:22.508871");
    screen.getAllByText("Incomplete");
  });

  test("displays details of second application", () => {
    render(<App />);
    screen.getByText("Daffy Duck");
    screen.getByText("65 Rowlands Rd, West Sussex, BN11 3JN");
    screen.getByText("Commercial");
    screen.getByText("5.4%");
    screen.getByText("£870,000.00");
    screen.getByText("2022-11-15T09:27:27.986370");
    screen.getByText("Submitted");
  });
});
