import { ShoppingCart, Coffee, Home, Car, Wifi, CreditCard, ArrowUpRight, ArrowDownRight } from 'lucide-react';

const categoryIcon = (cat) => {
  const map = {
    'Groceries': ShoppingCart,
    'Food & Drinks': Coffee,
    'Housing': Home,
    'Transport': Car,
    'Subscriptions': Wifi,
    'Income': CreditCard,
  };
  return map[cat] || CreditCard;
};

export default function TransactionsTable({ transactions }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900/60 to-slate-900/30 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-xl">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-white/90">Recent activity</h2>
        <button className="text-xs font-medium text-teal-300 hover:text-teal-200">View all</button>
      </div>
      <div className="overflow-hidden rounded-xl ring-1 ring-white/5">
        <table className="min-w-full divide-y divide-white/5">
          <thead>
            <tr className="text-left text-xs text-slate-400">
              <th className="px-4 py-3 font-medium">Merchant</th>
              <th className="px-4 py-3 font-medium">Category</th>
              <th className="px-4 py-3 font-medium">Date</th>
              <th className="px-4 py-3 text-right font-medium">Amount</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {transactions.map((t) => {
              const Icon = categoryIcon(t.category);
              const isIncome = t.amount > 0;
              return (
                <tr key={t.id} className="text-sm">
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10">
                        <Icon size={16} className="text-slate-200" />
                      </span>
                      <div>
                        <div className="font-medium text-white/90">{t.merchant}</div>
                        <div className="text-xs text-slate-400">{isIncome ? 'Incoming' : 'Card •••• 4242'}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-slate-300">{t.category}</td>
                  <td className="px-4 py-3 text-slate-400">{new Date(t.date).toLocaleDateString()}</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center justify-end gap-2 tabular-nums">
                      {isIncome ? (
                        <ArrowUpRight size={14} className="text-teal-300" />
                      ) : (
                        <ArrowDownRight size={14} className="text-rose-300" />
                      )}
                      <span className={isIncome ? 'text-teal-200' : 'text-rose-200'}>
                        {isIncome ? '+' : '-'}${Math.abs(t.amount).toLocaleString(undefined, { minimumFractionDigits: 2 })}
                      </span>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
