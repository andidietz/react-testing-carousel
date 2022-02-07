import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";


it("renders without crashing", function() {
  render(<Carousel />)
});

it("matches snapshot", function() {
  const {asFragment} = render(<Carousel />);
  expect(asFragment()).toMatchSnapshot();
});

it("works when you click on the forward button", function() {
  const { queryByTestId, queryByAltText } = render(<Carousel />);

  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).not.toBeInTheDocument();

  const forward = queryByTestId("forward");
  fireEvent.click(forward);

  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).not.toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).toBeInTheDocument();
});

it("works when you click on the backward button", function() {
  const { queryByTestId, queryByAltText } = render(<Carousel />);

  const forward = queryByTestId("forward");
  fireEvent.click(forward);

  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).toBeInTheDocument();

  const backward = queryByTestId("backward");
  fireEvent.click(backward);

  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).not.toBeInTheDocument();
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).toBeInTheDocument();
});

it("hides back button on first picture", function() {
    const {queryByTestId} = render(<Carousel />);
    const backward = queryByTestId("backward");
    const forward = queryByTestId("forward");

    expect(backward).not.toHaveClass("hidden");
    expect(forward).toBeInTheDocument();
  });

  it("hides forward button on last picture", function() {
    const {queryByTestId} = render(<Carousel />);
    const backward = queryByTestId("backward");
    const forward = queryByTestId("forward");

    fireEvent.click(forward);
    fireEvent.click(forward);

    expect(backward).toHaveClass("hidden");
    expect(forward).not.toBeInTheDocument();
  });