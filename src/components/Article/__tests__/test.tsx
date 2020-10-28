import React from "react";
import { shallow } from "enzyme";
import Article from "../index";

describe("Article", () => {
    const wrapper = shallow(<Article />);

	it("should render", () => {
        expect(wrapper.find(".Article")).toHaveLength(1);
	});
});
