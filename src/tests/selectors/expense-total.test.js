import selectExpensesTotal from "../../selectors/expense-total";
import expenses from "../fixtures/expenses";

test("should return 0 if no expenses", () => {
  const result = selectExpensesTotal([]);
  expect(result).toBe(0);
});

test("should correctly add up the 1 expense", () => {
  const result = selectExpensesTotal([expenses[0]]);
  expect(result).toBe(195);
});

test("should add up multiple expenses", () => {
  const result = selectExpensesTotal(expenses);
  expect(result).toBe(114195);
});
