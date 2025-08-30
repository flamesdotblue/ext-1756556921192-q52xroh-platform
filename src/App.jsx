import { useMemo } from 'react';
import HeroCover from './components/HeroCover';
import SummaryCards from './components/SummaryCards';
import SpendingChart from './components/SpendingChart';
import TransactionsTable from './components/TransactionsTable';

export default function App() {
  const summary = useMemo(() => ({
    balance: 12480.32,
    income: 5820.0,
    expenses: 3412.55,
    savingsRate: 0.29,
  }), []);

  const chartData = useMemo(
    () => [
      { label: 'Jan', value: 2200 },
      { label: 'Feb', value: 1950 },
      { label: 'Mar', value: 2600 },
      { label: 'Apr', value: 2100 },
      { label: 'May', value: 3100 },
      { label: 'Jun', value: 2780 },
      { label: 'Jul', value: 3300 },
      { label: 'Aug', value: 2980 },
      { label: 'Sep', value: 3500 },
      { label: 'Oct', value: 3150 },
      { label: 'Nov', value: 3700 },
      { label: 'Dec', value: 3900 },
    ],
    []
  );

  const transactions = useMemo(
    () => [
      { id: 1, merchant: 'Star Coffee', category: 'Food & Drinks', amount: -8.75, date: '2025-08-21' },
      { id: 2, merchant: 'City Transit', category: 'Transport', amount: -2.5, date: '2025-08-20' },
      { id: 3, merchant: 'Acme Payroll', category: 'Income', amount: 2900, date: '2025-08-19' },
      { id: 4, merchant: 'Grocerly', category: 'Groceries', amount: -76.43, date: '2025-08-19' },
      { id: 5, merchant: 'Streamly', category: 'Subscriptions', amount: -12.99, date: '2025-08-18' },
      { id: 6, merchant: 'Home Rent', category: 'Housing', amount: -1200, date: '2025-08-01' },
    ],
    []
  );

  return (
    <div className="min-h-screen w-full bg-slate-950 text-white">
      <HeroCover />

      <main className="relative z-10 mx-auto -mt-24 max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <SummaryCards summary={summary} />
        </div>

        <section className="mt-8 grid grid-cols-1 gap-6 xl:grid-cols-3">
          <div className="xl:col-span-2">
            <SpendingChart title="Spending Trend" data={chartData} />
          </div>
          <div className="xl:col-span-1">
            <TransactionsTable transactions={transactions} />
          </div>
        </section>
      </main>
    </div>
  );
}
