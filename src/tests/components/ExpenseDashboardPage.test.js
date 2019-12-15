import { shallow } from "enzyme";
import React from "react";
import ExpenseDashboard from "../../components/ExpenseDashboardPage";

test("should render not found page", () => {
  const wrapper = shallow(<ExpenseDashboard />);
  expect(wrapper).toMatchSnapshot();
});
