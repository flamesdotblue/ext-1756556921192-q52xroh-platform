import { Wallet, TrendingUp, TrendingDown, PieChart } from 'lucide-react';

function StatCard({ title, value, delta, icon: Icon, accent = 'teal' }) {
  const sign = delta > 0 ? '+' : delta < 0 ? '' : '';
  const deltaColor = delta > 0 ? 'text-teal-300' : delta < 0 ? 'text-rose-300' : 'text-slate-300';
  const ring = accent === 'teal' ? 'ring-teal-400/30 bg-teal-500/20' : accent === 'rose' ? 'ring-rose-400/30 bg-rose-500/20' : 'ring-indigo-400/30 bg-indigo-500/20';

  return (
    <div className="group rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900/60 to-slate-900/30 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-xl">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-wider text-slate-400">{title}</p>
          <p className="mt-2 text-2xl font-semibold tabular-nums">{value}</p>
          {typeof delta === 'number' && (
            <p className={`mt-1 text-xs ${deltaColor}`}>{sign}{(delta * 100).toFixed(1)}% this month</p>
          )}
        </div>
        <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${ring} ring-1`}>
          <Icon size={18} />
        </div>
      </div>
    </div>
  );
}

export default function SummaryCards({ summary }) {
  const { balance, income, expenses, savingsRate } = summary;

  return (
    <>
      <StatCard
        title="Total Balance"
        value={`$${balance.toLocaleString(undefined, { minimumFractionDigits: 2 })}`}
        delta={0.024}
        icon={Wallet}
        accent="teal"
      />
      <StatCard
        title="Income"
        value={`$${income.toLocaleString(undefined, { minimumFractionDigits: 2 })}`}
        delta={0.061}
        icon={TrendingUp}
        accent="indigo"
      />
      <StatCard
        title="Expenses"
        value={`$${expenses.toLocaleString(undefined, { minimumFractionDigits: 2 })}`}
        delta={-0.035}
        icon={TrendingDown}
        accent="rose"
      />
      <div className="group rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900/60 to-slate-900/30 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-xl">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-wider text-slate-400">Savings rate</p>
            <p className="mt-2 text-2xl font-semibold tabular-nums">{(savingsRate * 100).toFixed(0)}%</p>
            <p className="mt-1 text-xs text-slate-300">Goal: 30%</p>
          </div>
          <div className="relative h-14 w-14">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-teal-500 to-indigo-500 opacity-20" />
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background: `conic-gradient(#14b8a6 ${Math.min(100, Math.max(0, savingsRate * 100))}%, rgba(255,255,255,0.08) 0)`,
              }}
            />
            <div className="absolute inset-1 rounded-full bg-slate-900/80 backdrop-blur" />
            <div className="absolute inset-0 flex items-center justify-center text-sm font-semibold">{(savingsRate * 100).toFixed(0)}%</div>
          </div>
        </div>
      </div>
    </>
  );
}
