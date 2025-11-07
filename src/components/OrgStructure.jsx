export default function OrgStructure() {
  return (
    <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
      <h2 className="text-xl md:text-2xl font-semibold tracking-tight">Organization Blueprint</h2>
      <div className="mt-4 grid md:grid-cols-3 gap-6 text-sm md:text-base text-gray-700">
        <div>
          <h3 className="font-semibold">Leadership</h3>
          <ul className="mt-2 space-y-1 list-disc list-inside">
            <li>CEO: Strategy, partnerships</li>
            <li>COO: Delivery, operations</li>
            <li>CTO: AI/automation architecture</li>
            <li>CRO: Growth, revenue systems</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold">Delivery Pods</h3>
          <ul className="mt-2 space-y-1 list-disc list-inside">
            <li>Automation Engineers</li>
            <li>Data/Prompt Designers</li>
            <li>Product Managers</li>
            <li>QA + Compliance</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold">Enablement</h3>
          <ul className="mt-2 space-y-1 list-disc list-inside">
            <li>Marketing + Content</li>
            <li>Sales Ops + Success</li>
            <li>Finance + Legal</li>
            <li>People Ops + Culture</li>
          </ul>
        </div>
      </div>
      <div className="mt-6 text-xs text-gray-500">
        Note: Start lean with founder + 2 contractors. Add pods as revenue grows.
      </div>
    </section>
  );
}
