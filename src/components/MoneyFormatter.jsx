const formatter = Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

export default function MoneyFormatter({ children: value }) {
  return <>{formatter.format(value)}</>;
}
