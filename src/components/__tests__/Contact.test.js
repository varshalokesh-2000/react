import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us page component test", () => {
  test("should load contact us component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");
    //Assetion
    expect(heading).toBeInTheDocument();
  });

  test("should load button inside Contact component", () => {
    render(<Contact />);

    const button = screen.getByText("Submit");
    //   screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  it("should load input inside Contact component", () => {
    render(<Contact />);

    const input = screen.getByPlaceholderText("Name");
    expect(input).toBeInTheDocument();
  });

  it("should load 2 inputs inside Contact component", () => {
    render(<Contact />);

    //Querying
    const inputs = screen.getAllByRole("textbox");
    //console will log the react elements - virtual dom
    console.log(inputs);
    expect(inputs).toHaveLength(2);
  });
});
