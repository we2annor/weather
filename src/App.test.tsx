import React from "react";
import { render } from "@testing-library/react";
import Navigation from "./components/navigation";

test("renders learn react link", () => {
  const { getByText } = render(<Navigation />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
