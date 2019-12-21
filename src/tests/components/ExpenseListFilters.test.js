import React from "react";
import { shallow } from "enzyme";
import { ExpenseListFilters } from "../../components/ExpenseListFilters";
import { filters, altFilters } from "../fixtures/filters";
import moment from "moment";

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
  setTextFilter = jest.fn();
  sortByDate = jest.fn();
  sortByAmount = jest.fn();
  setStartDate = jest.fn();
  setEndDate = jest.fn();
  wrapper = shallow(
    <ExpenseListFilters
      filters={filters}
      setTextFilter={setTextFilter}
      sortByAmount={sortByAmount}
      sortByDate={sortByDate}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
    />
  );
});

test("should render ExpenseListFilters correctly", () => {
  expect(wrapper).toMatchSnapshot();
});

test("should render ExpenseListFilters with alt data correctly", () => {
  wrapper.setProps({
    filters: altFilters
  });
  expect(wrapper).toMatchSnapshot();
});

// should handle text change
test("should handle text change", () => {
  wrapper.find("input").simulate("change", { target: { value: "abcd" } });
  expect(setTextFilter).toHaveBeenLastCalledWith("abcd");
});

// should sortby date
test("should sorby date", () => {
  wrapper.setProps({
    filters: altFilters
  });
  wrapper.find("select").simulate("change", { target: { value: "date" } });
  expect(sortByDate).toHaveBeenCalled;
});

// should sortby amount
test("should sorby amount", () => {
  wrapper.find("select").simulate("change", { target: { value: "amount" } });
  expect(sortByAmount).toHaveBeenCalled;
});

// should handle date changes
test("should handle date changes", () => {
  const startDate = moment();
  const endDate = moment().add(1, "days");
  wrapper.find("DateRangePicker").prop("onDatesChange")({ startDate, endDate });
  expect(setStartDate).toHaveBeenLastCalledWith(startDate);
  expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

// should handle date focus changes
test("should handle date focus changes", () => {
  wrapper.find("DateRangePicker").prop("onFocusChange")("startDate");
  expect(wrapper.state("calendarFocused")).toBe("startDate");
  wrapper.find("DateRangePicker").prop("onFocusChange")(false);
  expect(wrapper.state("calendarFocused")).toBe(false);
});
