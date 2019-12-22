import React from "react";
import { ExpenseSummary } from "../../components/ExpenseSummary";
import { shallow } from "enzyme";

test("should render correct html for 1 expense", () => {
  const wrapper = shallow(
    <ExpenseSummary expensesCount={1} expensesTotal={25} />
  );
  expect(wrapper).toMatchSnapshot();
});

test("should render correct html for more than 1 expense", () => {
  const wrapper = shallow(
    <ExpenseSummary expensesCount={2} expensesTotal={250} />
  );
  expect(wrapper).toMatchSnapshot();
});
