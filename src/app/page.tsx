export default function Home() {
  return (
    <div className="font-sans min-h-screen bg-white dark:bg-black text-slate-800 dark:text-slate-200">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-24 px-8">
        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-6">
          Orkestra
        </h1>
        <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-10 max-w-3xl">
          The Agent Platform that makes building, orchestrating, and deploying AI
          workflows effortless. Focus on your agent logic—we handle the rest.
        </p>
        <div className="flex gap-4 flex-col sm:flex-row">
          <a
            className="bg-slate-900 hover:bg-slate-800 text-white font-semibold py-3 px-8 rounded-lg transition-transform transform hover:scale-105"
            href="#get-started"
          >
            Get Started with SDK
          </a>
          <a
            className="bg-transparent border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900 font-semibold py-3 px-8 rounded-lg transition-colors"
            href="#features"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="py-20 px-8 bg-slate-50 dark:bg-slate-950"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-slate-900 dark:text-white mb-16">
            Everything you need. Nothing you don&apos;t.
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              title="Simple Agents"
              description="Write agents as simple functions with typed inputs and outputs. Built-in retries and tool access make it easy."
            />
            <FeatureCard
              title="Flexible Orchestration"
              description="Chain agents into workflows with sequential, parallel, and fallback patterns. Share state and set policies effortlessly."
            />
            <FeatureCard
              title="One-Click Deployment"
              description="Deploy agents as microservices with a single command. Get a REST API for your workflows instantly."
            />
            <FeatureCard
              title="Built-in Observability"
              description="Traces, logs, and metrics come standard. Monitor performance and debug with ease."
            />
            <FeatureCard
              title="Secure & Governed"
              description="Built-in security features like PII redaction, secrets management, and policy controls."
            />
            <FeatureCard
              title="No-Code Builder"
              description="Drag-and-drop interface for non-developers, backed by the same powerful engine."
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 px-8 bg-white dark:bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-8">
            How It Works
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-12">
            Build AI agents, orchestrate them into powerful workflows, and
            deploy with minimal effort. Orkestra abstracts away the complexity
            so you can focus on innovation.
          </p>
          <div className="grid md:grid-cols-4 gap-8 text-left md:text-center">
            <HowItWorksStep
              num="1"
              title="Write"
              description="Define your agent as a simple function with typed I/O."
            />
            <HowItWorksStep
              num="2"
              title="Chain"
              description="Connect agents into playbooks for complex workflows."
            />
            <HowItWorksStep
              num="3"
              title="Deploy"
              description="One command turns your agents into a scalable API."
            />
            <HowItWorksStep
              num="4"
              title="Monitor"
              description="Get built-in traces, logs, and metrics for full visibility."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        id="get-started"
        className="py-20 px-8 bg-slate-900 text-white text-center"
      >
        <h2 className="text-4xl font-bold mb-6">
          Ready to Build Amazing AI Workflows?
        </h2>
        <p className="text-xl text-slate-400 mb-8">
          Join thousands of developers using Orkestra to power their AI
          applications.
        </p>
        <a
          className="bg-white text-slate-900 hover:bg-slate-200 font-semibold py-3 px-8 rounded-lg transition-transform transform hover:scale-105"
          href="#"
        >
          Start with the SDK
        </a>
      </section>

      {/* Footer */}
      <footer className="py-8 px-8 bg-white dark:bg-black border-t border-slate-100 dark:border-slate-900">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-slate-500">
          <p>&copy; 2025 Orkestra. Built for AI innovators.</p>
          <div className="flex gap-6">
            <a
              href="https://docs.orkestration.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-800 dark:hover:text-slate-200 transition-colors"
            >
              Docs
            </a>
            <a
              href="#"
              className="hover:text-slate-800 dark:hover:text-slate-200 transition-colors"
            >
              GitHub
            </a>
            <a
              href="#"
              className="hover:text-slate-800 dark:hover:text-slate-200 transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Added for componentization and cleaner code
const FeatureCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <div className="bg-white dark:bg-slate-900/50 p-6 rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-lg transition-shadow">
    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
      {title}
    </h3>
    <p className="text-slate-600 dark:text-slate-400">{description}</p>
  </div>
);

const HowItWorksStep = ({
  num,
  title,
  description,
}: {
  num: string;
  title: string;
  description: string;
}) => (
  <div>
    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-3">
      <span className="bg-slate-100 dark:bg-slate-900 text-slate-500 dark:text-slate-400 rounded-full h-8 w-8 flex items-center justify-center font-mono text-sm">
        {num}
      </span>
      {title}
    </h3>
    <p className="text-slate-600 dark:text-slate-400">{description}</p>
  </div>
);