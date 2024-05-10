import React from "react";

import { render, screen, fireEvent } from "@testing-library/react";

import Counter from "../Counter";

describe("Counter", () => {
  test("의 처음 초기 값은 0이다.", () => {
    render(<Counter />);
    const counter = screen.getByText(/0/i);
    expect(counter).toBeInTheDocument();
  });

  test("의 - 버튼을 클릭하면 1 감소한다.", () => {
    render(<Counter />);
    const minus = screen.getByText(/-/i);
    fireEvent.click(minus);
    const counter = screen.getByText(/-1/i);
    expect(counter).toBeInTheDocument();
  });

  test("의 + 버튼을 클릭하면 1 증가한다.", () => {
    render(<Counter />);
    const plus = screen.getByText(/\+/i);
    fireEvent.click(plus);
    const counter = screen.getByText(/1/i);
    expect(counter).toBeInTheDocument();
  });

  test("의 최대값은 10이다.", () => {
    render(<Counter />);
    const plus = screen.getByText(/\+/i);
    for (let i = 0; i < 11; i++) {
      fireEvent.click(plus);
    }
    const counter = screen.getByText(/10/i);
    expect(counter).toBeInTheDocument();
  });

  test("의 최소값은 -10이다.", () => {
    render(<Counter />);
    const minus = screen.getByText(/-/i);
    for (let i = 0; i < 11; i++) {
      fireEvent.click(minus);
    }
    const counter = screen.getByText(/-10/i);
    expect(counter).toBeInTheDocument();
  });
});
