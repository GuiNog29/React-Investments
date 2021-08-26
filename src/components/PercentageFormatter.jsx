export default function PercentageFormatter({ children: value }) {
  let formattedValue = value > 0 ? '+' : '';
  formattedValue += value.toFixed(2).replace('.', ',') + '%';

  return <>{formattedValue}</>;
}
