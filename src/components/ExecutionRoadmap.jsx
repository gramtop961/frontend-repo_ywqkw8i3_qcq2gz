export default function ExecutionRoadmap() {
  const phases = [
    {
      title: "Month 1: Foundation",
      items: [
        "Define ICPs and offers (3 value ladders)",
        "Publish 12 authority posts + 4 shorts",
        "Set up CRM, pipeline, and booking",
        "Ship 1 free template lead magnet",
      ],
    },
    {
      title: "Month 2: Proof & Scale",
      items: [
        "Run 20 outbound conversations/week",
        "Close 3-5 pilot sprints at $1–3k",
        "Turn pilots into 1 case study/week",
        "Productize best-performing workflow",
      ],
    },
    {
      title: "Month 3: Profit",
      items: [
        "Upsell retainers ($1.5–5k/mo)",
        "Launch micro-SaaS MVP from pilot",
        "Automate delivery with templates",
        "Hire first part-time contractor",
      ],
    },
  ];

  return (
    <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
      <h2 className="text-xl md:text-2xl font-semibold tracking-tight">Zero-to-Profit Roadmap</h2>
      <div className="mt-4 grid md:grid-cols-3 gap-6">
        {phases.map((p) => (
          <div key={p.title} className="border border-gray-100 rounded-xl p-4">
            <h3 className="font-semibold">{p.title}</h3>
            <ul className="mt-2 space-y-2 text-sm text-gray-700 list-disc list-inside">
              {p.items.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
