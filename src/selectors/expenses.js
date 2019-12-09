import moment from "moment";

// get visible expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses
    .filter(expense => {
      const createdAtMoment = moment(expense.createdAt);
      const endDateMoment = moment(expense.endDate);
      const startDateMatch = startDate
        ? startDate.isSameOrBefore(createdAtMoment, "day")
        : true; // check for start date
      const endDateMatch = endDate
        ? endDate.isSameOrAfter(endDateMoment, "day")
        : true;

      // figure out if expense.description has the text variable string inside of it
      // includes
      // convert both string to lowercase
      const textMatch = expense.description
        .toLowerCase()
        .includes(text.toLowerCase());

      return startDateMatch && endDateMatch && textMatch;
    })
    .sort((a, b) => {
      if (sortBy == "date") {
        return a.createdAt < b.createdAt ? 1 : -1; // most recent expense first
      }

      if (sortBy === "amount") {
        return a.amount < b.amount ? 1 : -1;
      }
    });
};

export default getVisibleExpenses;
