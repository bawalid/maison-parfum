export const getPriceParts = (value) => ({
  amount: Number(value || 0).toLocaleString(),
  currency: "DT",
});
