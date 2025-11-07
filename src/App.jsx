import BrandHero from './components/BrandHero';
import BusinessModel from './components/BusinessModel';
import OrgStructure from './components/OrgStructure';
import ExecutionRoadmap from './components/ExecutionRoadmap';

function Section({ children }) {
  return <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">{children}</div>;
}

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="sticky top-0 z-40 backdrop-blur border-b border-gray-200/70 bg-white/70">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 h-14 flex items-center justify-between">
          <div className="font-extrabold tracking-tight text-lg">Anna Corporation</div>
          <nav className="hidden sm:flex items-center gap-4 text-sm text-gray-700">
            <a href="#model" className="hover:text-gray-900">Model</a>
            <a href="#org" className="hover:text-gray-900">Structure</a>
            <a href="#roadmap" className="hover:text-gray-900">Roadmap</a>
          </nav>
        </div>
      </header>

      <main className="py-8 md:py-12 space-y-8 md:space-y-12">
        <Section>
          <BrandHero />
        </Section>

        <Section>
          <div id="model" className="scroll-mt-24">
            <BusinessModel />
          </div>
        </Section>

        <Section>
          <div id="org" className="scroll-mt-24">
            <OrgStructure />
          </div>
        </Section>

        <Section>
          <div id="roadmap" className="scroll-mt-24">
            <ExecutionRoadmap />
          </div>
        </Section>
      </main>

      <footer className="py-10 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Anna Corporation — Build once. Scale forever.
      </footer>
    </div>
  );
}
