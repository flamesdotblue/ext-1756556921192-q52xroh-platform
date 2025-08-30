import Spline from '@splinetool/react-spline';
import { Rocket, ArrowRight } from 'lucide-react';

export default function HeroCover() {
  return (
    <section className="relative h-[70vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/IKzHtP5ThSO83edK/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/20 via-slate-950/40 to-slate-950" />

      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl rounded-2xl bg-slate-900/40 p-6 backdrop-blur-md ring-1 ring-white/10">
            <div className="flex items-center gap-3 text-sm text-teal-300/90">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-teal-500/20 ring-1 ring-teal-400/30"><Rocket size={16} /></span>
              <span className="font-medium">Personal Finance, reimagined</span>
            </div>
            <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
              Your money at a glance
            </h1>
            <p className="mt-3 max-w-xl text-slate-300">
              A calm, modern dashboard to track balances, spending and trends — designed to look as good as it feels.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-b from-teal-400 to-teal-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-teal-600/30 transition hover:brightness-110">
                Connect accounts
                <ArrowRight className="transition-transform group-hover:translate-x-0.5" size={16} />
              </button>
              <button className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 backdrop-blur-md transition hover:bg-white/10">Explore demo</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
