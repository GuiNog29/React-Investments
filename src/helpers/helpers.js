const formatter = new Intl.DateTimeFormat('pt-BR', { month: 'short' });

export function helperGetMonthDescription(month) {
  const value = formatter.format(new Date(2020, month - 1));
  return value.substring(0, value.length - 1);
}
