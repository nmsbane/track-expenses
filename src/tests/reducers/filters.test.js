import filtersReducer from "../../reducers/filters";
import moment from "moment";

test("should setup default filter values", () => {
  const state = filtersReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual({
    text: "",
    sortBy: "date",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month") // show expenses only in the current month
  });
});

test("should set sort by to amount", () => {
  const state = filtersReducer(undefined, { type: "SORT_BY_AMOUNT" });
  expect(state.sortBy).toBe("amount");
});

test("should set sort by to date", () => {
  const currentState = {
    text: "",
    sortBy: "amount",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month")
  };

  const action = { type: "SORT_BY_DATE" };
  const state = filtersReducer(currentState, action);
  expect(state.sortBy).toBe("date");
});

// should set text filter
test("should set text filter", () => {
  const action = { type: "SET_TEXT_FILTER", text: "abcd" };
  const state = filtersReducer(undefined, action);
  expect(state.text).toBe("abcd");
});

// should set start date filter
test("should set start date filter", () => {
  const action = { type: "SET_START_DATE", date: moment(0) };
  const state = filtersReducer(undefined, action);
  expect(state.startDate).toEqual(moment(0));
});

// should set end date filter
test("should set end date filter", () => {
  const action = { type: "SET_END_DATE", date: moment(0) };
  const state = filtersReducer(undefined, action);
  expect(state.endDate).toEqual(moment(0));
});
