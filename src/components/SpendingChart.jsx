import { useMemo } from 'react';

export default function SpendingChart({ title, data }) {
  const width = 900;
  const height = 320;
  const padding = 40;

  const { pathD, areaD, yTicks, xLabels, yMax } = useMemo(() => {
    const values = data.map((d) => d.value);
    const max = Math.max(...values) * 1.15;
    const min = 0;

    const xStep = (width - padding * 2) / (data.length - 1);
    const yScale = (v) => height - padding - ((v - min) / (max - min)) * (height - padding * 2);

    const points = data.map((d, i) => [padding + i * xStep, yScale(d.value)]);

    const path = points.map((p, i) => (i === 0 ? `M ${p[0]},${p[1]}` : `L ${p[0]},${p[1]}`)).join(' ');

    const area = `${path} L ${padding + (data.length - 1) * xStep},${height - padding} L ${padding},${height - padding} Z`;

    const ticks = 4;
    const yTicks = Array.from({ length: ticks + 1 }, (_, i) => Math.round((i * max) / ticks));
    const xLabels = data.map((d) => d.label);

    return { pathD: path, areaD: area, yTicks, xLabels, yMax: max };
  }, [data]);

  return (
    <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900/60 to-slate-900/30 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-xl">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-white/90">{title}</h2>
        <div className="flex items-center gap-2 text-xs text-slate-400">
          <span className="inline-flex h-2.5 w-2.5 rounded-full bg-teal-400/90 ring-2 ring-teal-300/30" />
          Monthly spending
        </div>
      </div>

      <div className="w-full overflow-x-auto">
        <svg width={width} height={height} className="min-w-full">
          <defs>
            <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#14b8a6" stopOpacity="0" />
            </linearGradient>
          </defs>

          <g>
            {yTicks.map((t, i) => {
              const y = padding + ((yMax - t) / yMax) * (height - padding * 2);
              return (
                <g key={i}>
                  <line x1={padding} y1={y} x2={width - padding} y2={y} stroke="rgba(255,255,255,0.06)" />
                  <text x={10} y={y + 4} fill="rgba(255,255,255,0.5)" fontSize="11">${t}</text>
                </g>
              );
            })}
          </g>

          <path d={areaD} fill="url(#grad)" />
          <path d={pathD} fill="none" stroke="#2dd4bf" strokeWidth="2.5" />

          {data.map((d, i) => {
            const x = padding + i * ((width - padding * 2) / (data.length - 1));
            const y = padding + ((yMax - d.value) / yMax) * (height - padding * 2);
            return <circle key={i} cx={x} cy={y} r={3} fill="#99f6e4" />;
          })}

          <g>
            {xLabels.map((l, i) => {
              const x = padding + i * ((width - padding * 2) / (xLabels.length - 1));
              return (
                <text key={i} x={x} y={height - 10} textAnchor="middle" fill="rgba(255,255,255,0.6)" fontSize="11">
                  {l}
                </text>
              );
            })}
          </g>
        </svg>
      </div>
    </div>
  );
}
