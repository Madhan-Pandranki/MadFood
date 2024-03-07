import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us Page Test Cases", () => {
  // beforeAll(() => {
  //   console.log("Before All");
  // });
  // beforeEach(() => {
  //   console.log("Before Each");
  // });

  // afterAll(() => {
  //   console.log("After All");
  // });
  // afterEach(() => {
  //   console.log("After Each");
  // });

  test("Should load Contact us page", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    //Assertion
    expect(heading).toBeInTheDocument();
  });

  it("Should load button inside Contact us page", () => {
    render(<Contact />);

    const button = screen.getByRole("button");

    //Assertion
    expect(button).toBeInTheDocument();
  });

  it("Should load input name inside Contact us page", () => {
    render(<Contact />);

    const inputName = screen.getByPlaceholderText("Name");

    //Assertion
    expect(inputName).toBeInTheDocument();
  });

  test("Should load 2 input boxes inside Contact us page", () => {
    render(<Contact />);

    //Querying
    const inputBoxes = screen.getAllByRole("textbox");
    //   console.log(inputBoxes.length);

    //Assertion
    expect(inputBoxes.length).toBe(2);
  });
});
