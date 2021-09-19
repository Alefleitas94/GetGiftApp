import React from "react";
import { GifGridItem } from "../../components/GifGridItem";
import { shallow } from "enzyme";

describe("Pruebas en <GifGridItem />", () => {
  test("should to show correctly component", () => {
    const wrapper = shallow(<GifGridItem />)
    expect( wrapper ).toMatchSnapshot();
  });
});
