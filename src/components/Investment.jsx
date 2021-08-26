import MoneyFormatter from './MoneyFormatter';
import PercentageFormatter from './PercentageFormatter';

export default function Investment({ children: investmentData }) {
  const { investment, reports } = investmentData;
  const { description, initialValue, finalValue, totalPercent } = investment;

  const balance = finalValue - initialValue;

  const balanceColor = balance >= 0 ? 'text-green-600' : 'text-red-600';

  return (
    <div className="border m-2 p-2">
      <h2 className="text-center font-semibold text-lg">{description}</h2>

      <h3 className="text-center font-semibold text-md">
        Total Income: <span className={balanceColor}>
          <MoneyFormatter>{balance}</MoneyFormatter> (
            <PercentageFormatter>{totalPercent}</PercentageFormatter>
          )
        </span>
      </h3>
    </div>
  );
}
