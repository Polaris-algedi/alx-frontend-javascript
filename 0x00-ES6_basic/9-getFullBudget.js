/* ES6 method properties */
import getBudgetObject from './7-getBudgetObject';

export default function getFullBudgetObject(income, gdp, capita) {
  const budget = getBudgetObject(income, gdp, capita);

  const fullBudget = {
    ...budget,
    getIncomeInDollars(income) { // ES6 method property syntax
      return `$${income}`;
    },
    getIncomeInEuros(income) { // ES6 method property syntax
      return `${income} euros`;
    },
  };

  return fullBudget;
}
