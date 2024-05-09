import { render, screen, fireEvent } from "@testing-library/react";
import ShowBox from "../ShowBox";

describe("ShowBox", () => {
  test("의 처음 초기 값은 빈 문자열이다.", () => {
    render(<ShowBox />);
    const pElement = screen.getByRole("paragraph");
    expect(pElement).toBeInTheDocument();
    expect(pElement).toHaveTextContent("");
  });

  test("의 Input에 값을 입력하면 p 태그에 텍스트가 출력된다.", () => {
    render(<ShowBox />);
    const pElement = screen.getByRole("paragraph");
    const inputElement = screen.getByRole("textbox");

    fireEvent.change(inputElement, { target: { value: "Hello, World!" } });

    expect(pElement).toHaveTextContent("Hello, World!");
  });
});
