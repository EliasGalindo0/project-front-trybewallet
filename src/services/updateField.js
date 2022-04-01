const upField = (totalFields) => {
  const resultField = totalFields.reduce((acc, item) => (
    acc + item.value * item.exchangeRates[item.currency].ask), 0);
  return resultField;
};
export default upField;
