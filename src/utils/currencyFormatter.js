// Currency formatting utilities for Brazilian Real

export const formatCurrency = (value) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
};

export const formatMiles = (miles) => {
  return new Intl.NumberFormat('pt-BR', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(miles);
};

export const calculateMilesValue = (miles) => {
  // Approximate value: 1 mile = R$ 0.02 (based on MaxMilhas reference)
  return miles * 0.02;
};

export const calculateTotalValue = (price, miles) => {
  return price + calculateMilesValue(miles);
};

