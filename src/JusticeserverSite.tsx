import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";

type TabId = "home" | "why" | "faq" | "contact";

type FaqCategory =
  | "intake"
  | "case"
  | "reporting"
  | "ai"
  | "platform"
  | "community";

type FaqCategoryFilter = "all" | FaqCategory;

interface FaqItem {
  id: number;
  category: FaqCategory;
  q: string;
  a: string;
}

interface DemoFormState {
  name: string;
  org: string;
  email: string;
  role: string;
  message: string;
}

interface FaqTabProps {
  faqCategory: FaqCategoryFilter;
  setFaqCategory: (id: FaqCategoryFilter) => void;
  openFaqId: number | null;
  setOpenFaqId: (id: number | null) => void;
}

interface ContactTabProps {
  demoForm: DemoFormState;
  demoSubmitted: boolean;
  handleDemoChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleDemoSubmit: (e: FormEvent) => void;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    id: 1,
    category: "platform",
    q: "What is Justiceserver?",
    a: "Justiceserver® is a Salesforce®-powered legal case management system from Techbridge® with a design philosophy rooted in the real needs of legal service organizations. The result is a system that is scalable, secure, highly customizable, and capable of growing alongside each program’s mission and progressing with the future of AI technology—without the limitations of closed, proprietary systems that force LSOs to compromise.",
  },
  {
    id: 2,
    category: "platform",
    q: "Who is Justiceserver designed for?",
    a: "Justiceserver® is a Salesforce®-based legal case management system designed by Techbridge® for nonprofit legal service organizations. It streamlines client intake, case management, and pro bono coordination while being customizable to the unique workflows and requirements of each organization.",
  },
  {
    id: 3,
    category: "intake",
    q: "How does Justiceserver support intake management?",
    a: "A structured workflow walks staff through conflict and duplicate checks, immigration status or citizenship eligibility, financial eligibility, and capturing client and matter information. Conflict and duplicate check logic uses advanced matching to prevent conflicts of interest and duplicate entries before they are created, while financial eligibility tools apply income and asset thresholds consistently and support compliance.",
  },
  {
    id: 4,
    category: "case",
    q: "What does Justiceserver provide for case management and timekeeping?",
    a: "Case workflows can be tailored to each program, ensuring that staff capture the information relevant to their practice area. Time can be logged via stopwatch, start/end entries, batch entry, or simple hour totals—with support for timesheets, approvals, grant and funding code billing, leave tracking, and configurable timekeeping fields.",
  },
  {
    id: 5,
    category: "reporting",
    q: "How does Justiceserver handle reporting and dashboards?",
    a: "Justiceserver leverages Salesforce reporting and dashboards to give organizations real-time visibility into caseloads, performance, and outcomes. Reports can be customized for staff, leadership, and funders, with a no-code, drag-and-drop interface and charts that stay up to date as data changes.",
  },
  {
    id: 6,
    category: "intake",
    q: "What clinic management capabilities are included?",
    a: "Justiceserver includes dedicated functionality to organize and track legal clinic schedules and outcomes. Organizations can register clients by calendar or search for open availability, and it supports volunteers to self-register and manage their clinic commitments.",
  },
  {
    id: 7,
    category: "case",
    q: "How are other services beyond legal representation tracked?",
    a: "Justiceserver captures and reports on non-legal services such as workshops, referrals, or pro se assistance, helping organizations show the full impact of their work beyond traditional representation.",
  },
  {
    id: 8,
    category: "case",
    q: "How does Justiceserver support referrals and pro bono engagement?",
    a: "Built-in referral tools allow LSOs to log, manage, and transfer cases between organizations in collaborative networks. A Pro Bono Portal add-on lets LSOs share cases with attorneys and partner organizations outside their internal system while keeping pro bono work connected back to Justiceserver.",
  },
  {
    id: 9,
    category: "platform",
    q: "What are Justiceserver’s key technical differentiators?",
    a: "Justiceserver is built on Salesforce, benefiting from enterprise-grade security, scalability, and three major platform releases each year. It combines this foundation with practical integrations LSOs rely on, using configurable page layouts, fields, and low-code automations so administrators can adapt the system without extensive development resources.",
  },
  {
    id: 10,
    category: "ai",
    q: "How does Justiceserver approach AI?",
    a: "Justiceserver is positioned to leverage Salesforce’s AI ecosystem, including tools like Prompt Builder, Agentforce®, and the Einstein Trust Layer (with additional licensing). These capabilities can be used to summarize notes, generate case overviews, suggest next steps, and support intake and routing while keeping client data secure.",
  },
  {
    id: 11,
    category: "intake",
    q: "How does Justiceserver support centralized intake and multi-agency collaboration?",
    a: 'Justiceserver can act as a shared intake and triage hub across multiple organizations. A single system can collect intakes across agencies and route them using eligibility and assignment criteria to support a "no wrong door" approach, with coordinated referrals and configurable data sharing.',
  },
  {
    id: 12,
    category: "community",
    q: "What opportunities exist for community engagement around Justiceserver?",
    a: "Justiceserver is a collaborative community as well as a product. A yearly Justiceserver conference, free monthly office hours, and community forums provide training, roadmap sessions, and peer sharing, with recordings and notes available for ongoing reference.",
  },
];

const FAQ_CATEGORY_OPTIONS: { id: FaqCategoryFilter; label: string }[] = [
  { id: "all", label: "All topics" },
  { id: "intake", label: "Intake & eligibility" },
  { id: "case", label: "Case management & time" },
  { id: "reporting", label: "Reporting & funders" },
  { id: "ai", label: "AI & future" },
  { id: "platform", label: "Product & platform" },
  { id: "community", label: "Community & collaboration" },
];

const HomeTab = () => {
  return (
    <section className="space-y-8 lg:space-y-10">
      <div className="max-w-5xl">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-cyan-50 px-3 py-1 text-xs font-medium text-cyan-700 ring-1 ring-cyan-100">
            <span className="inline-flex h-1.5 w-1.5 rounded-full bg-cyan-500" />
            Nonprofit legal case management on Salesforce
          </div>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Justiceserver® by Techbridge®
          </h1>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-700">
            Justiceserver® is a Salesforce®-powered legal case management system from
            Techbridge® with a design philosophy rooted in the real needs of legal
            service organizations. The result is a system that is scalable, secure,
            highly customizable, and capable of growing alongside each program’s
            mission and progressing with the future of AI technology—without the
            limitations of closed, proprietary systems that force LSOs to
            compromise.
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">
          At a glance
        </h2>
        <p className="mt-2 max-w-3xl text-sm text-slate-700">
          A quick summary of how Justiceserver brings intake, case management,
          reporting, and collaboration together on Salesforce.
        </p>
        <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-4 text-sm shadow-sm">
          <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
            <span>Key highlights</span>
            <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs font-medium normal-case text-slate-700">
              Built on Salesforce
            </span>
          </div>
          <ul className="mt-3 ml-4 list-disc space-y-1 text-sm text-slate-700">
            <li>Modern intake, case management, and reporting in one system.</li>
            <li>Configurable workflows and data for each practice area.</li>
            <li>Real-time dashboards for staff, leadership, and funders.</li>
            <li>Support for clinics, other services, referrals, and pro bono work.</li>
            <li>Positioned to leverage Salesforce’s native AI capabilities.</li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">
          Core capabilities
        </h2>
        <p className="mt-2 max-w-3xl text-sm text-slate-700">
          Justiceserver gives legal nonprofits a flexible, modern, and
          comprehensive system for managing client services end-to-end—from intake
          through case closure.
        </p>

        <div className="mt-4 grid gap-6 md:grid-cols-2">
          <article className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm text-sm">
            <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-cyan-50 text-base">
              🧭
            </div>
            <h3 className="mt-2 text-sm font-semibold text-slate-900">
              Intake management
            </h3>
            <ul className="mt-2 ml-4 list-disc space-y-2 text-slate-700">
              <li>
                Guided intake that walks staff through conflict and duplicate
                checks, eligibility, and key client and matter details.
              </li>
              <li>
                Financial eligibility tools that apply income and asset thresholds
                consistently and support compliance.
              </li>
              <li>
                Comprehensive data collection for demographics, matter details,
                and information needed for funders and analysis.
              </li>
              <li>
                Online intake options via configurable web forms from tools like
                FormAssembly or other third-party apps.
              </li>
              <li>
                Optional AI to score or prioritize intakes and summarize
                applicant information.
              </li>
            </ul>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm text-sm">
            <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-cyan-50 text-base">
              🗂️
            </div>
            <h3 className="mt-2 text-sm font-semibold text-slate-900">
              Case management
            </h3>
            <ul className="mt-2 ml-4 list-disc space-y-2 text-slate-700">
              <li>
                Customizable case workflows for each program so staff see the
                fields and steps that match their practice area.
              </li>
              <li>
                Flexible timekeeping, including stopwatch, start/end entries,
                batch entry, and simple hour totals.
              </li>
              <li>
                Funding code guidance using wizards and reporting that shows
                resources across grants.
              </li>
              <li>
                Outcome and benefits tracking to measure services provided and
                impact achieved.
              </li>
            </ul>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm text-sm">
            <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-cyan-50 text-base">
              📊
            </div>
            <h3 className="mt-2 text-sm font-semibold text-slate-900">
              Reporting and dashboards
            </h3>
            <p className="mt-2 text-sm text-slate-700">
              Justiceserver uses Salesforce reporting and dashboards to give
              real-time visibility into caseloads, performance, and outcomes.
            </p>
            <ul className="mt-2 ml-4 list-disc space-y-1 text-sm text-slate-700">
              <li>Reports tailored for staff, leadership, and funders.</li>
              <li>Drag-and-drop, no-code report building.</li>
              <li>Dashboards updated in real time as data changes.</li>
            </ul>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm text-sm">
            <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-cyan-50 text-base">
              🏛️
            </div>
            <h3 className="mt-2 text-sm font-semibold text-slate-900">
              Clinic management
            </h3>
            <ul className="mt-2 ml-4 list-disc space-y-1 text-sm text-slate-700">
              <li>Tools to organize and track clinic calendars and outcomes.</li>
              <li>Register clients by calendar or search for open appointments.</li>
              <li>Support for volunteers to self-register and manage commitments.</li>
            </ul>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm text-sm">
            <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-cyan-50 text-base">
              🧡
            </div>
            <h3 className="mt-2 text-sm font-semibold text-slate-900">
              Other services
            </h3>
            <p className="mt-2 text-sm text-slate-700">
              Track and report on non-legal services such as workshops,
              referrals, or pro se assistance, so you can see the full impact of
              your work beyond traditional representation.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm text-sm">
            <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-cyan-50 text-base">
              📤
            </div>
            <h3 className="mt-2 text-sm font-semibold text-slate-900">
              Referrals and pro bono engagement
            </h3>
            <p className="mt-2 text-sm text-slate-700">
              Referral tools help LSOs log, manage, and transfer cases between
              organizations, keeping client services connected across a network.
            </p>
            <p className="mt-2 text-sm text-slate-700">
              A Pro Bono Portal add-on lets LSOs share opportunities with
              attorneys and partner organizations and track pro bono work in one
              place.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

const WhyTab = () => {
  return (
    <section className="space-y-8">
      <div>
        <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">
          Why Justiceserver
        </h2>
        <p className="mt-2 max-w-3xl text-sm text-slate-700">
          Justiceserver combines a proven platform with the flexibility,
          integrations, AI readiness, and community support legal nonprofits
          need, and it is already in use across a growing community of legal
          service organizations.
        </p>
      </div>

      <div className="grid gap-6 text-sm md:grid-cols-2">
        <article className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-cyan-50 text-base">
              🛡️
            </span>
            <h3 className="text-sm font-semibold text-slate-900">
              Built on Salesforce for scale, security, and reliability
            </h3>
          </div>
          <p className="mt-2 text-sm text-slate-700">
            Justiceserver benefits from Salesforce’s enterprise-grade security
            and infrastructure, supporting organizations of different sizes while
            protecting sensitive client data.
          </p>
          <p className="mt-2 text-sm text-slate-700">
            Salesforce delivers three major releases each year, and Techbridge
            keeps Justiceserver aligned so you benefit from both platform
            innovations and community-driven enhancements.
          </p>
        </article>

        <article className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-cyan-50 text-base">
              ⚙️
            </span>
            <h3 className="text-sm font-semibold text-slate-900">
              Flexible and customizable for every practice
            </h3>
          </div>
          <p className="mt-2 text-sm text-slate-700">
            Many systems require every team to work the same way. Justiceserver
            is built so different practices can each have their own data points,
            workflows, and outcomes while leadership still sees the big picture.
          </p>
          <ul className="mt-2 ml-4 list-disc space-y-1 text-sm text-slate-700">
            <li>Page layouts tuned for each role.</li>
            <li>
              Low-code automations with Salesforce Flows to automate routine
              work.
            </li>
            <li>
              Adaptable structure so you can capture new information as needs
              change.
            </li>
          </ul>
        </article>

        <article className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-cyan-50 text-base">
              🔗
            </span>
            <h3 className="text-sm font-semibold text-slate-900">
              Connected to the tools you already use
            </h3>
          </div>
          <p className="mt-2 text-sm text-slate-700">
            Justiceserver is designed for openness and integration, becoming the
            hub of your technology ecosystem.
          </p>
          <p className="mt-2 text-sm font-medium text-slate-700">
            Common integrations include:
          </p>
          <ul className="mt-1 ml-4 list-disc space-y-1 text-sm text-slate-700">
            <li>Document assembly and automation tools.</li>
            <li>Email, calendaring, and productivity suites.</li>
            <li>SMS messaging and client communication platforms.</li>
            <li>Call center and hotline solutions.</li>
            <li>Online intake tools and form builders.</li>
            <li>Backup, data management, and analytics tools.</li>
          </ul>
        </article>

        <article className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-cyan-50 text-base">
              🤖
            </span>
            <h3 className="text-sm font-semibold text-slate-900">
              Ready to tap Salesforce AI responsibly
            </h3>
          </div>
          <p className="mt-2 text-sm text-slate-700">
            Justiceserver is positioned to use Salesforce’s AI ecosystem where it
            makes sense for your organization, with additional licensing and
            configuration.
          </p>
          <ul className="mt-2 ml-4 list-disc space-y-1 text-sm text-slate-700">
            <li>
              Prompt Builder to summarize notes, generate case overviews, or
              draft communications.
            </li>
            <li>
              Agentforce to route intakes, generate tasks, or suggest next steps
              within your workflows.
            </li>
            <li>
              Einstein Trust Layer to apply AI safeguards and protect sensitive
              client data.
            </li>
          </ul>
        </article>

        <article className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-cyan-50 text-base">
              📈
            </span>
            <h3 className="text-sm font-semibold text-slate-900">
              Always-improving, community-driven product
            </h3>
          </div>
          <ul className="mt-2 ml-4 list-disc space-y-2 text-sm text-slate-700">
            <li>
              Enhancements built for one client are often added to the core
              product and shared with others.
            </li>
            <li>
              A shared roadmap lets LSOs pool investment so no one organization
              carries the full cost of innovation.
            </li>
            <li>
              Users benefit from Salesforce platform innovation and a
              community-driven Justiceserver product roadmap.
            </li>
          </ul>
        </article>

        <article className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-cyan-50 text-base">
              🌐
            </span>
            <h3 className="text-sm font-semibold text-slate-900">
              Built for centralized intake and collaboration
            </h3>
          </div>
          <p className="mt-2 text-sm text-slate-700">
            Justiceserver can serve as a shared intake and triage hub across
            multiple organizations, supporting a "no wrong door" approach.
          </p>
          <ul className="mt-2 ml-4 list-disc space-y-1 text-sm text-slate-700">
            <li>
              Central intake that routes matters to the right organization based
              on eligibility and assignment criteria.
            </li>
            <li>
              Coordinated referrals so clients do not fall through the cracks
              when they move between agencies.
            </li>
            <li>
              Options to share data between Justiceserver instances, with
              external portals, or via custom APIs.
            </li>
          </ul>
        </article>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-4 text-sm shadow-md">
        <div className="flex items-center justify-between gap-3">
          <div>
            <h3 className="text-sm font-semibold text-slate-900 sm:text-base">
              How Justiceserver compares
            </h3>
            <p className="mt-1 max-w-xl text-sm text-slate-700">
              A high-level look at how Justiceserver’s Salesforce foundation and
              product approach differ from many other case management systems
              used by legal service organizations.
            </p>
          </div>
          <span className="hidden rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 md:inline-flex">
            Justiceserver advantage
          </span>
        </div>

        <div className="mt-3 overflow-x-auto">
          <table className="min-w-full border-collapse text-left">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-100">
                <th className="px-3 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate-600">
                  Area
                </th>
                <th className="px-3 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate-900">
                  Justiceserver (on Salesforce)
                </th>
                <th className="px-3 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate-600">
                  Most other case management systems
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 align-top">
              <tr className="bg-slate-50">
                <td className="px-3 py-2 font-medium text-slate-800">
                  Platform &amp; ecosystem
                </td>
                <td className="px-3 py-2 text-sm text-slate-800">
                  Built on Salesforce, with access to a broad ecosystem of
                  integrations, analytics, and AI tools, plus three major
                  platform releases each year.
                </td>
                <td className="px-3 py-2 text-sm text-slate-700">
                  Often based on proprietary platforms with more limited
                  integration options and slower release cycles.
                </td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-medium text-slate-800">
                  Flexibility &amp; customization
                </td>
                <td className="px-3 py-2 text-sm text-slate-800">
                  Configurable page layouts, fields, and low-code automations
                  that administrators can adapt as programs and reporting needs
                  evolve.
                </td>
                <td className="px-3 py-2 text-sm text-slate-700">
                  Customization often requires vendor development work or
                  complex change requests, slowing down improvements.
                </td>
              </tr>
              <tr className="bg-slate-50">
                <td className="px-3 py-2 font-medium text-slate-800">
                  Reporting &amp; analytics
                </td>
                <td className="px-3 py-2 text-sm text-slate-800">
                  Uses Salesforce’s reporting engine and dashboards so staff and
                  leadership can build and update reports without coding.
                </td>
                <td className="px-3 py-2 text-sm text-slate-700">
                  Reporting may be more rigid or require exports to other tools
                  for deeper analysis.
                </td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-medium text-slate-800">
                  AI readiness
                </td>
                <td className="px-3 py-2 text-sm text-slate-800">
                  Positioned to use Salesforce’s evolving AI capabilities,
                  including Prompt Builder, Agentforce, and Einstein Trust Layer
                  (with additional licensing).
                </td>
                <td className="px-3 py-2 text-sm text-slate-700">
                  AI features may be proprietary, harder to extend, or less
                  aligned with enterprise security and governance needs.
                </td>
              </tr>
              <tr className="bg-slate-50">
                <td className="px-3 py-2 font-medium text-slate-800">
                  Community &amp; roadmap
                </td>
                <td className="px-3 py-2 text-sm text-slate-800">
                  Community-driven enhancements, shared roadmap, and ongoing
                  opportunities to influence future development.
                </td>
                <td className="px-3 py-2 text-sm text-slate-700">
                  Roadmaps may be more vendor-driven with fewer opportunities for
                  collaborative input.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

const FaqTab = ({
  faqCategory,
  setFaqCategory,
  openFaqId,
  setOpenFaqId,
}: FaqTabProps) => {
  const filteredFaqs: FaqItem[] =
    faqCategory === "all"
      ? FAQ_ITEMS
      : FAQ_ITEMS.filter((item) => item.category === faqCategory);

  return (
    <section className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">
            Frequently asked questions
          </h2>
          <p className="mt-2 max-w-3xl text-sm text-slate-700">
            Explore common questions about Justiceserver’s capabilities,
            implementation, and community. For additional details, you can
            always start a conversation with the Techbridge team.
          </p>
        </div>
        <div className="flex flex-wrap gap-2 text-xs">
          {FAQ_CATEGORY_OPTIONS.map((opt) => (
            <button
              key={opt.id}
              type="button"
              onClick={() => setFaqCategory(opt.id)}
              className={`rounded-full border px-3 py-1 ${
                faqCategory === opt.id
                  ? "border-cyan-600 bg-cyan-50 text-cyan-800"
                  : "border-slate-200 bg-white text-slate-700"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-4 space-y-3">
        {filteredFaqs.map((item) => {
          const isOpen = openFaqId === item.id;
          return (
            <div
              key={item.id}
              className="rounded-2xl border border-slate-200 bg-white shadow-sm"
            >
              <button
                type="button"
                className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left"
                onClick={() => setOpenFaqId(isOpen ? null : item.id)}
              >
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                    {item.category === "intake" && "Intake & eligibility"}
                    {item.category === "case" && "Case management & time"}
                    {item.category === "reporting" && "Reporting & funders"}
                    {item.category === "ai" && "AI & future"}
                    {item.category === "platform" && "Product & platform"}
                    {item.category === "community" &&
                      "Community & collaboration"}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-slate-900">
                    {item.q}
                  </p>
                </div>
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-slate-200 text-xs text-slate-600">
                  {isOpen ? "−" : "+"}
                </span>
              </button>
              {isOpen && (
                <div className="border-t border-slate-100 px-4 py-3 text-sm text-slate-700">
                  {item.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

const ContactTab = ({
  demoForm,
  demoSubmitted,
  handleDemoChange,
  handleDemoSubmit,
}: ContactTabProps) => {
  return (
    <section className="space-y-6">
      <div className="max-w-3xl">
        <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">
          Talk to our team about Justiceserver
        </h2>
        <p className="mt-2 text-sm text-slate-700">
          Share a few details so the Techbridge and Justiceserver team can
          tailor the discussion to your organization.
        </p>
      </div>

      <div className="mt-4 grid gap-6 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
        <form
          onSubmit={handleDemoSubmit}
          className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
        >
          <div className="grid gap-3 sm:grid-cols-2">
            <div>
              <label className="text-xs font-medium text-slate-800">
                Your name
              </label>
              <input
                type="text"
                name="name"
                value={demoForm.name}
                onChange={handleDemoChange}
                className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs text-slate-900 placeholder:text-slate-400 focus:border-cyan-500 focus:outline-none"
                placeholder="Full name"
                required
              />
            </div>
            <div>
              <label className="text-xs font-medium text-slate-800">
                Organization
              </label>
              <input
                type="text"
                name="org"
                value={demoForm.org}
                onChange={handleDemoChange}
                className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs text-slate-900 placeholder:text-slate-400 focus:border-cyan-500 focus:outline-none"
                placeholder="Your organization name"
                required
              />
            </div>
            <div>
              <label className="text-xs font-medium text-slate-800">
                Work email
              </label>
              <input
                type="email"
                name="email"
                value={demoForm.email}
                onChange={handleDemoChange}
                className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs text-slate-900 placeholder:text-slate-400 focus:border-cyan-500 focus:outline-none"
                placeholder="name@organization.org"
                required
              />
            </div>
            <div>
              <label className="text-xs font-medium text-slate-800">
                Your role
              </label>
              <input
                type="text"
                name="role"
                value={demoForm.role}
                onChange={handleDemoChange}
                className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs text-slate-900 placeholder:text-slate-400 focus:border-cyan-500 focus:outline-none"
                placeholder="Your role"
              />
            </div>
          </div>

          <div className="mt-3">
            <label className="text-xs font-medium text-slate-800">
              How can we help?
            </label>
            <textarea
              name="message"
              value={demoForm.message}
              onChange={handleDemoChange}
              rows={4}
              className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs text-slate-900 placeholder:text-slate-400 focus:border-cyan-500 focus:outline-none"
              placeholder="For example: replacing a legacy case management system, centralizing intake, improving efficiency, or planning for AI on Salesforce."
            />
          </div>

          <div className="mt-4 flex items-center justify-between gap-3">
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-lg bg-cyan-700 px-4 py-2 text-xs font-semibold text-white shadow-sm hover:bg-cyan-800 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-1"
            >
              Open email to Techbridge
            </button>
            {demoSubmitted && (
              <p className="text-xs text-emerald-700">
                Email draft opened. If it did not appear, please check your email
                client settings.
              </p>
            )}
          </div>
        </form>

        <aside className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-xs text-slate-800 shadow-sm">
          <h3 className="text-sm font-semibold text-slate-900">What to expect</h3>
          <ul className="mt-2 ml-4 list-disc space-y-2 text-xs text-slate-700">
            <li>
              A member of the Techbridge Justiceserver team will review your
              note.
            </li>
            <li>
              You can expect a follow-up email to schedule time or request more
              detail.
            </li>
            <li>
              Conversations typically focus on your programs, caseload,
              technology landscape, and goals for Salesforce.
            </li>
          </ul>
          <p className="mt-3 max-w-xs text-xs leading-snug text-slate-600">
            This form opens an email draft to the Techbridge Justiceserver team
            with the details you provide so they can follow up directly.
          </p>
        </aside>
      </div>
    </section>
  );
};

const JusticeserverSite = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<TabId>("home");
  const [demoForm, setDemoForm] = useState<DemoFormState>({
    name: "",
    org: "",
    email: "",
    role: "",
    message: "",
  });
  const [demoSubmitted, setDemoSubmitted] = useState(false);
  const [openFaqId, setOpenFaqId] = useState<number | null>(null);
  const [faqCategory, setFaqCategory] = useState<FaqCategoryFilter>("all");

  const handleDemoChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setDemoForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleDemoSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!demoForm.name || !demoForm.org || !demoForm.email) return;

    const recipients = ["kkyle@techbridge.org", "rrose@techbridge.org"];
    const subject = "Justiceserver Inquiry";
    const bodyLines = [
      `Name: ${demoForm.name}`,
      `Organization: ${demoForm.org}`,
      `Email: ${demoForm.email}`,
      demoForm.role ? `Role: ${demoForm.role}` : "",
      "",
      "Message:",
      demoForm.message || "(no message provided)",
    ].filter(Boolean);

    const mailto = `mailto:${recipients.join(",")}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(bodyLines.join("\n"))}`;

    if (typeof window !== "undefined") {
      window.location.href = mailto;
    }

    setDemoSubmitted(true);
  };

  const setTab = (tab: TabId) => {
    setActiveTab(tab);
    setMobileNavOpen(false);
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 lg:px-6">
          <button
            className="flex items-center"
            onClick={() => setTab("home")}
            type="button"
          >
            <img
              src="https://techbridge.org/wp-content/uploads/2025/02/Techbridge-Justiceserver-Primary.svg"
              alt="Justiceserver by Techbridge"
              className="h-8 w-auto"
            />
          </button>

          <nav className="hidden items-center gap-6 text-sm text-slate-800 md:flex">
            <button
              type="button"
              onClick={() => setTab("home")}
              className={`transition hover:text-cyan-700 ${
                activeTab === "home" ? "text-cyan-700" : ""
              }`}
            >
              Justiceserver
            </button>
            <button
              type="button"
              onClick={() => setTab("why")}
              className={`transition hover:text-cyan-700 ${
                activeTab === "why" ? "text-cyan-700" : ""
              }`}
            >
              Why Justiceserver
            </button>
            <button
              type="button"
              onClick={() => setTab("faq")}
              className={`transition hover:text-cyan-700 ${
                activeTab === "faq" ? "text-cyan-700" : ""
              }`}
            >
              FAQs
            </button>
            <button
              type="button"
              onClick={() => setTab("contact")}
              className={`transition hover:text-cyan-700 ${
                activeTab === "contact" ? "text-cyan-700" : ""
              }`}
            >
              Talk to our team
            </button>
          </nav>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white p-2 text-slate-700 md:hidden"
            onClick={() => setMobileNavOpen((open) => !open)}
            aria-label="Toggle navigation"
          >
            <span className="h-0.5 w-4 bg-slate-800" />
          </button>
        </div>

        {mobileNavOpen && (
          <div className="border-t border-slate-200 bg-white px-4 pb-4 pt-2 text-sm text-slate-800 md:hidden">
            <div className="flex flex-col gap-2">
              <button
                type="button"
                onClick={() => setTab("home")}
                className="rounded-lg px-2 py-1 text-left hover:bg-slate-100"
              >
                Justiceserver
              </button>
              <button
                type="button"
                onClick={() => setTab("why")}
                className="rounded-lg px-2 py-1 text-left hover:bg-slate-100"
              >
                Why Justiceserver
              </button>
              <button
                type="button"
                onClick={() => setTab("faq")}
                className="rounded-lg px-2 py-1 text-left hover:bg-slate-100"
              >
                FAQs
              </button>
              <button
                type="button"
                onClick={() => setTab("contact")}
                className="rounded-lg px-2 py-1 text-left hover:bg-slate-100"
              >
                Talk to our team
              </button>
            </div>
          </div>
        )}
      </header>

      <main className="mx-auto max-w-6xl px-4 pb-16 pt-8 lg:px-6 lg:pt-12">
        {activeTab === "home" && <HomeTab />}
        {activeTab === "why" && <WhyTab />}
        {activeTab === "faq" && (
          <FaqTab
            faqCategory={faqCategory}
            setFaqCategory={setFaqCategory}
            openFaqId={openFaqId}
            setOpenFaqId={setOpenFaqId}
          />
        )}
        {activeTab === "contact" && (
          <ContactTab
            demoForm={demoForm}
            demoSubmitted={demoSubmitted}
            handleDemoChange={handleDemoChange}
            handleDemoSubmit={handleDemoSubmit}
          />
        )}
      </main>

      <footer className="border-t border-slate-200 bg-white py-4">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 text-xs text-slate-500 sm:flex-row lg:px-6">
          <div className="flex items-center gap-2">
            <img
              src="https://techbridge.org/wp-content/uploads/2025/02/Techbridge-Justiceserver-Primary.svg"
              alt="Techbridge"
              className="h-5 w-auto"
            />
            <span>
              © {new Date().getFullYear()} Techbridge. All rights reserved.
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="https://techbridge.org/who-we-are/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-700"
            >
              About Techbridge
            </a>
            <a
              href="https://techbridge.org/contact/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-700"
            >
              Contact Techbridge
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default JusticeserverSite;
