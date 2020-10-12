import React from "react";
//import React from "react";
import { shallow } from "enzyme";

//import { mount } from "enzyme";
//import { render } from "@testing-library/react";
import App from "./App";

describe("first react component test with enzyme", () => {
  it("renders without crashing", () => {
    shallow(<App />);
  });
});

//const wrapper = mount(<App />);
// test("renders learn react link", () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText("");
//   expect(linkElement).toBeInTheDocument();
// });
