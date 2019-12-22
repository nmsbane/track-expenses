const selectExpensesTotal = expenses => {
  const onlyAmounts = expenses.map(expense => {
    return expense.amount;
  });
  const totalAmount = onlyAmounts.reduce((sum, amount) => {
    return sum + amount;
  }, 0);
  return totalAmount;
};

export default selectExpensesTotal;
