import React, { useRef, useState } from "react";

const JusticeserverSite = () => {
  const overviewRef = useRef<HTMLDivElement | null>(null);
  const purposeRef = useRef<HTMLDivElement | null>(null);
  const whyRef = useRef<HTMLDivElement | null>(null);
  const helpRef = useRef<HTMLDivElement | null>(null);
  const faqRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);

  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [demoForm, setDemoForm] = useState({
    name: "",
    org: "",
    email: "",
    role: "",
    message: "",
  });
  const [demoSubmitted, setDemoSubmitted] = useState(false);
  const [openFaqId, setOpenFaqId] = useState<number | null>(null);
  const [faqCategory, setFaqCategory] = useState<string>("all");

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
      setMobileNavOpen(false);
    }
  };

  const handleDemoChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setDemoForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleDemoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!demoForm.name || !demoForm.org || !demoForm.email) return;

    const recipients = ["kkyle@techbridge.org", "rrose@techbridge.org"];
    const subject = "Justiceserver website inquiry";
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

  const faqItems = [
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
      a: "Justiceserver® is a Salesforce®-based legal case management system designed by Techbridge® for nonprofit legal service organizations. It streamlines client intake, case management, and pro bono coordination while being completely customizable to the unique workflows and requirements of each organization.",
    },
    {
      id: 3,
      category: "intake",
      q: "How does Justiceserver support intake management?",
      a: "A structured workflow walks staff through conflict and duplicate checks, immigration status/citizenship eligibility, financial eligibility, and capturing client and matter information. The conflict and duplicate check stage uses advanced matching logic to prevent conflicts of interest and duplicate entries before they are created. Built-in tools ensure consistent determinations against income and asset thresholds, reducing errors and improving compliance, while demographics, matter/intake data, and other information required for funders, equity reporting, and internal analysis are captured in one place.",
    },
    {
      id: 4,
      category: "case",
      q: "What does Justiceserver provide for case management and timekeeping?",
      a: "Case workflows can be tailored to each program, ensuring that staff capture the information relevant to their practice area. Time can be logged via stopwatch, start/end entries, batch entry, or simple hour totals—accommodating different work styles. This includes support for timesheets, approvals, grant/funding code billing, leave tracking, and more, with timekeeping components that can also be customized to capture additional information unique to an LSO’s requirements.",
    },
    {
      id: 5,
      category: "reporting",
      q: "How does Justiceserver handle reporting and dashboards?",
      a: "Justiceserver leverages Salesforce’s state-of-the-art reporting and dashboard tools to give organizations real-time visibility into caseloads, performance, and outcomes. Reports can be customized for staff, leadership, and funders, with a no-code, drag & drop user interface and data visualization in real-time using easy-to-read charts.",
    },
    {
      id: 6,
      category: "intake",
      q: "What clinic management capabilities are included?",
      a: "Justiceserver includes dedicated functionality to organize and track legal clinic schedules and outcomes. Organizations can register clients by calendar or search for open availability, and it supports volunteers to self-register and manage their own clinic commitments.",
    },
    {
      id: 7,
      category: "case",
      q: "How are other services beyond legal representation tracked?",
      a: "Justiceserver captures and reports on non-legal services provided—such as workshops, referrals, or pro se assistance—ensuring a complete view of organizational impact and helping connect the value of those services to the overall mission.",
    },
    {
      id: 8,
      category: "case",
      q: "How does Justiceserver support referrals and pro bono engagement?",
      a: "Built-in referral tools allow LSOs to log, manage, and transfer cases between organizations in collaborative networks, ensuring continuity of client service. LSOs can extend Justiceserver with a standalone Pro Bono Portal add-on where attorneys not on Justiceserver can browse or receive case opportunities and track their pro bono work, and the portal supports sharing cases with partner organizations outside Justiceserver, broadening the reach of volunteer engagement.",
    },
    {
      id: 9,
      category: "platform",
      q: "What are Justiceserver’s key differentiators from a technical standpoint?",
      a: "Justiceserver is built on Salesforce, benefiting from enterprise-grade security, scalability, and continuous innovation through three major platform releases each year. It combines a strong technical foundation with practical integrations LSOs rely on, using Lightning App Builder, Salesforce Flows, and an adaptable data model so that administrators can tailor layouts, fields, workflows, and automations without extensive development resources.",
    },
    {
      id: 10,
      category: "ai",
      q: "How does Justiceserver approach AI?",
      a: "Justiceserver is positioned to leverage Salesforce’s rapidly advancing AI ecosystem, including tools like Prompt Builder, Agentforce®, and the Einstein Trust Layer. These capabilities, available with additional licensing and configuration, enable LSOs to summarize notes, generate case overviews, suggest next steps, or support intake and routing, while keeping sensitive client data secure and private.",
    },
    {
      id: 11,
      category: "intake",
      q: "How does Justiceserver support centralized intake and multi-agency collaboration?",
      a: "Justiceserver is designed to support collaboration across multiple organizations. A single system can collect intakes across multiple agencies and route them to the appropriate one using eligibility and assignment criteria to determine intelligent routing paths and support a 'no wrong door' approach, with coordinated referrals and data sharing controls.",
    },
    {
      id: 12,
      category: "community",
      q: "What opportunities exist for community engagement around Justiceserver?",
      a: "Justiceserver is not just software - it is a collaborative community. A yearly Justiceserver Conference, free monthly office hours, and community forums provide training, roadmap sessions, and peer sharing, with recordings and notes archived on the Justiceserver Information Board for ongoing reference.",
    },
  ];

  const faqCategoryOptions = [
    { id: "all", label: "All topics" },
    { id: "intake", label: "Intake & eligibility" },
    { id: "case", label: "Case management & time" },
    { id: "reporting", label: "Reporting & funders" },
    { id: "ai", label: "AI & future" },
    { id: "platform", label: "Product & platform" },
    { id: "community", label: "Community & collaboration" },
  ];

  const filteredFaqs =
    faqCategory === "all"
      ? faqItems
      : faqItems.filter((item) => item.category === faqCategory);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 lg:px-6">
          <button
            className="flex items-center"
            onClick={() => scrollToSection(overviewRef)}
          >
            <img
              src="https://techbridge.org/wp-content/uploads/2025/02/Techbridge-Justiceserver-Primary.svg"
              alt="Justiceserver by Techbridge"
              className="h-8 w-auto"
            />
          </button>

          <nav className="hidden items-center gap-6 text-sm text-slate-800 md:flex">
            <button
              onClick={() => scrollToSection(purposeRef)}
              className="transition hover:text-cyan-700"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection(whyRef)}
              className="transition hover:text-cyan-700"
            >
              Why Justiceserver
            </button>
            <button
              onClick={() => scrollToSection(helpRef)}
              className="transition hover:text-cyan-700"
            >
              How Justiceserver helps
            </button>
            <button
              onClick={() => scrollToSection(faqRef)}
              className="transition hover:text-cyan-700"
            >
              FAQs
            </button>
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <button
              onClick={() => scrollToSection(contactRef)}
              className="rounded-full bg-cyan-700 px-4 py-1.5 text-xs font-semibold text-white shadow-sm transition hover:bg-cyan-800"
            >
              Talk to our team
            </button>
          </div>

          <button
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
                onClick={() => scrollToSection(purposeRef)}
                className="rounded-lg px-2 py-1 text-left hover:bg-slate-100"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection(whyRef)}
                className="rounded-lg px-2 py-1 text-left hover:bg-slate-100"
              >
                Why Justiceserver
              </button>
              <button
                onClick={() => scrollToSection(helpRef)}
                className="rounded-lg px-2 py-1 text-left hover:bg-slate-100"
              >
                How Justiceserver helps
              </button>
              <button
                onClick={() => scrollToSection(faqRef)}
                className="rounded-lg px-2 py-1 text-left hover:bg-slate-100"
              >
                FAQs
              </button>
              <div className="mt-2">
                <button
                  onClick={() => scrollToSection(contactRef)}
                  className="w-full rounded-lg bg-cyan-700 px-3 py-1.5 text-xs font-semibold text-white hover:bg-cyan-800"
                >
                  Talk to our team
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      <main className="mx-auto max-w-6xl px-4 pb-16 pt-8 lg:px-6 lg:pt-12">
        {/* HERO + SNAPSHOT */}
        <section ref={overviewRef} className="space-y-6 lg:space-y-8">
          <div className="max-w-5xl">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-cyan-50 px-3 py-1 text-[11px] font-medium text-cyan-700 ring-1 ring-cyan-100">
                <span className="inline-flex h-1.5 w-1.5 rounded-full bg-cyan-500" />
                Nonprofit legal case management on Salesforce
              </div>
              <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                Justiceserver® by Techbridge®
              </h1>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-700">
                Justiceserver® is a Salesforce®-powered legal case management
                system from Techbridge® with a design philosophy rooted in the
                real needs of legal service organizations. The result is a system
                that is scalable, secure, highly customizable, and capable of
                growing alongside each program’s mission and progressing with the
                future of AI technology—without the limitations of closed,
                proprietary systems that force LSOs to compromise.
              </p>
            </div>
          </div>

          {/* At a glance */}
          <div className="mt-6">
            <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">
              At a glance
            </h2>
            <p className="mt-2 max-w-3xl text-sm text-slate-700">
              A quick summary of how Justiceserver brings intake, case
              management, reporting, and collaboration together on Salesforce.
            </p>
            <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-4 text-[13px] shadow-sm">
              <div className="flex items-center justify-between text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                <span>Key highlights</span>
                <span className="rounded-full bg-cyan-50 px-2 py-0.5 text-[9px] font-medium normal-case text-cyan-700">
                  Built on Salesforce
                </span>
              </div>
              <ul className="mt-3 ml-4 list-disc space-y-1 text-[12px] text-slate-700">
                <li>Modern intake, case management, and reporting in one system.</li>
                <li>Configurable workflows and data for each practice area.</li>
                <li>Real-time dashboards for staff, leadership, and funders.</li>
                <li>
                  Support for clinics, other services, referrals, and pro bono
                  work.
                </li>
                <li>Positioned to leverage Salesforce’s native AI capabilities.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section
          ref={purposeRef}
          className="mt-16 scroll-mt-24 border-t border-slate-200 pt-10"
        >
          <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">
            Features
          </h2>
          <p className="mt-2 max-w-3xl text-sm text-slate-700">
            Justiceserver gives legal nonprofits a flexible, modern, and
            comprehensive system for managing client services end-to-end—from
            intake through case closure.
          </p>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <article className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm text-[13px]">
              <div className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-cyan-50 text-[10px] font-semibold text-cyan-700">
                1
              </div>
              <h3 className="mt-2 text-sm font-semibold text-slate-900">
                Intake management
              </h3>
              <ul className="mt-2 ml-4 list-disc space-y-2 text-slate-700">
                <li>
                  Guided intake that walks staff through conflict and duplicate
                  checks, immigration status or citizenship eligibility, financial
                  eligibility, and key client and matter details.
                </li>
                <li>
                  Financial eligibility tools that apply income and asset
                  thresholds consistently and support compliance.
                </li>
                <li>
                  Comprehensive data collection for demographics, matter details,
                  and information needed for funders, equity reporting, and
                  analysis.
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

            <article className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm text-[13px]">
              <div className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-cyan-50 text-[10px] font-semibold text-cyan-700">
                2
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
                  batch entry, and simple hour totals, with support for timesheets,
                  approvals, and funding code billing.
                </li>
                <li>
                  Funding code guidance using wizards and reporting that shows how
                  resources are allocated across grants and funding sources.
                </li>
                <li>
                  Outcome and benefits tracking to measure services provided and
                  impact achieved.
                </li>
              </ul>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm text-[13px]">
              <div className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-cyan-50 text-[10px] font-semibold text-cyan-700">
                3
              </div>
              <h3 className="mt-2 text-sm font-semibold text-slate-900">
                Reporting and dashboards
              </h3>
              <p className="mt-2 text-slate-700">
                Justiceserver uses Salesforce reporting and dashboards to give
                real-time visibility into caseloads, performance, and outcomes.
              </p>
              <ul className="mt-2 ml-4 list-disc space-y-1 text-[12px] text-slate-700">
                <li>Reports tailored for staff, leadership, and funders.</li>
                <li>Drag-and-drop, no-code report building.</li>
                <li>Visual charts and dashboards updated in real time.</li>
              </ul>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm text-[13px]">
              <div className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-cyan-50 text-[10px] font-semibold text-cyan-700">
                4
              </div>
              <h3 className="mt-2 text-sm font-semibold text-slate-900">
                Clinic management
              </h3>
              <ul className="mt-2 ml-4 list-disc space-y-1 text-[12px] text-slate-700">
                <li>
                  Tools to organize and track clinic calendars and outcomes.
                </li>
                <li>Register clients by calendar or search for open appointments.</li>
                <li>
                  Support for volunteers to self-register and manage commitments.
                </li>
              </ul>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm text-[13px]">
              <div className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-cyan-50 text-[10px] font-semibold text-cyan-700">
                5
              </div>
              <h3 className="mt-2 text-sm font-semibold text-slate-900">
                Other services
              </h3>
              <p className="mt-2 text-slate-700">
                Track and report on non-legal services such as workshops,
                referrals, or pro se assistance, so you can see the full impact
                of your work beyond traditional representation.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm text-[13px]">
              <div className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-cyan-50 text-[10px] font-semibold text-cyan-700">
                6
              </div>
              <h3 className="mt-2 text-sm font-semibold text-slate-900">
                Referrals and pro bono engagement
              </h3>
              <p className="mt-2 text-slate-700">
                Referral tools help LSOs log, manage, and transfer cases between
                organizations, keeping client services connected across a network.
              </p>
              <p className="mt-2 text-slate-700">
                A Pro Bono Portal add-on lets LSOs share opportunities with
                attorneys and partner organizations who are not in their internal
                system, and track pro bono work in one place.
              </p>
            </article>
          </div>
        </section>

        {/* WHY JUSTICESERVER */}
        <section
          ref={whyRef}
          className="mt-16 scroll-mt-24 border-t border-slate-200 pt-10"
        >
          <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">
            Why Justiceserver
          </h2>
          <p className="mt-2 max-w-3xl text-sm text-slate-700">
            Justiceserver combines a proven platform with the flexibility,
            integrations, AI readiness, and community support legal nonprofits
            need.
          </p>

          <div className="mt-6 grid gap-6 text-[13px] md:grid-cols-2">
            <article className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="flex items-center gap-2">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-cyan-50 text-base">
                  🛡️
                </span>
                <h3 className="text-sm font-semibold text-slate-900">
                  Built on Salesforce for scale, security, and reliability
                </h3>
              </div>
              <p className="mt-2 text-slate-700">
                Justiceserver benefits from Salesforce’s enterprise-grade
                security, giving organizations confidence that sensitive client
                data is protected. The Salesforce cloud infrastructure supports
                everything from a single-office legal aid program to statewide
                networks, with strong performance and high uptime.
              </p>
              <p className="mt-2 text-slate-700">
                Salesforce delivers three major releases each year, and
                Techbridge keeps Justiceserver aligned so you benefit from both
                platform innovations and community-driven enhancements.
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
              <p className="mt-2 text-slate-700">
                Many systems require every team to work the same way. Justiceserver
                is built so different practices can each have their own data
                points, workflows, and outcomes while leadership still sees the
                big picture.
              </p>
              <ul className="mt-2 ml-4 list-disc space-y-1 text-[12px] text-slate-700">
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
              <p className="mt-2 text-slate-700">
                Justiceserver is designed for openness and integration, becoming
                the hub of your technology ecosystem.
              </p>
              <p className="mt-2 text-[13px] font-medium text-slate-700">
                How you connect
              </p>
              <ul className="mt-1 ml-4 list-disc space-y-1 text-[12px] text-slate-700">
                <li>Salesforce AppExchange apps and connectors.</li>
                <li>Middleware tools like Zapier, Workato, or Tray.</li>
                <li>Custom APIs for tailored integrations.</li>
              </ul>
              <p className="mt-2 text-[12px] font-medium text-slate-700">
                Common integrations
              </p>
              <ul className="mt-1 ml-4 list-disc space-y-1 text-[12px] text-slate-700">
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
              <p className="mt-2 text-slate-700">
                Justiceserver is positioned to use Salesforce’s AI ecosystem where
                it makes sense for your organization, with additional licensing
                and configuration.
              </p>
              <ul className="mt-2 ml-4 list-disc space-y-1 text-[12px] text-slate-700">
                <li>
                  Prompt Builder to summarize notes, generate case overviews, or
                  draft communications.
                </li>
                <li>
                  Agentforce to route intakes, generate tasks, or suggest next
                  steps within your workflows.
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
              <ul className="mt-2 ml-4 list-disc space-y-2 text-[13px] text-slate-700">
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
              <p className="mt-2 text-slate-700">
                Justiceserver can serve as a shared intake and triage hub across
                multiple organizations, supporting a "no wrong door" approach.
              </p>
              <ul className="mt-2 ml-4 list-disc space-y-1 text-[12px] text-slate-700">
                <li>
                  Central intake that routes matters to the right organization
                  based on eligibility and assignment criteria.
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
              <p className="mt-2 text-slate-700">
                Data sharing controls let organizations decide what to share, with
                whom, and under what conditions, balancing collaboration with
                confidentiality.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="flex items-center gap-2">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-cyan-50 text-base">
                  🤝
                </span>
                <h3 className="text-sm font-semibold text-slate-900">
                  Backed by a learning community
                </h3>
              </div>
              <p className="mt-2 text-slate-700">
                Justiceserver is supported by an active community of users and
                Techbridge experts.
              </p>
              <ul className="mt-2 ml-4 list-disc space-y-1 text-[12px] text-slate-700">
                <li>Annual user conference with trainings and roadmap sessions.</li>
                <li>Free monthly office hours featuring demos and Q&A.</li>
                <li>
                  Space for LSOs to share creative solutions and best practices
                  with peers.
                </li>
                <li>
                  Recordings and notes available for ongoing reference, plus
                  community forums for everyday questions.
                </li>
              </ul>
            </article>
          </div>
        </section>

        {/* PROBLEMS WE HELP YOU SOLVE + COMPARISON */}
        <section
          ref={helpRef}
          className="mt-16 scroll-mt-24 border-t border-slate-200 pt-10"
        >
          <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">
            Problems we help you solve
          </h2>
          <p className="mt-2 max-w-3xl text-sm text-slate-700">
            Justiceserver is designed to standardize and streamline intake and
            case management, make reporting easier, and support clinics, other
            services, and coordinated referrals.
          </p>

          <div className="mt-6 grid gap-4 text-[13px] md:grid-cols-3">
            <article className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-cyan-50 text-[10px] font-semibold text-cyan-700">
                A
              </div>
              <h3 className="mt-2 text-sm font-semibold text-slate-900">
                Streamlined intake and case management
              </h3>
              <ul className="mt-2 ml-4 list-disc space-y-1 text-[12px] text-slate-700">
                <li>
                  End-to-end intake and case management workflows that support
                  higher volume without sacrificing quality.
                </li>
                <li>
                  Flexibility to adjust processes and data collection as funder or
                  internal needs change.
                </li>
                <li>
                  Less time spent on data entry and corrections and more time
                  focused on clients.
                </li>
              </ul>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-cyan-50 text-[10px] font-semibold text-cyan-700">
                B
              </div>
              <h3 className="mt-2 text-sm font-semibold text-slate-900">
                Reporting and funder accountability
              </h3>
              <ul className="mt-2 ml-4 list-disc space-y-1 text-[12px] text-slate-700">
                <li>
                  Relational data and flexible reporting tools that make it easier
                  to pull the right information together.
                </li>
                <li>
                  No-code reports and visual charts that support leadership and
                  funders.
                </li>
                <li>
                  Real-time data that supports faster decision-making and
                  responsiveness.
                </li>
              </ul>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-cyan-50 text-[10px] font-semibold text-cyan-700">
                C
              </div>
              <h3 className="mt-2 text-sm font-semibold text-slate-900">
                Coordinated services, clinics, and pro bono
              </h3>
              <ul className="mt-2 ml-4 list-disc space-y-1 text-[12px] text-slate-700">
                <li>
                  Dedicated tools to organize clinics, track outcomes, and support
                  volunteer participation.
                </li>
                <li>
                  Tracking of other services and referrals in the same system to
                  show a 360-degree view of each client’s interactions.
                </li>
                <li>
                  Referral tools and the Pro Bono Portal add-on that support
                  coordinated services across organizations and with volunteer
                  attorneys.
                </li>
              </ul>
            </article>
          </div>

          {/* Justiceserver vs. other systems */}
          <div className="mt-8 rounded-2xl border border-cyan-200 bg-white p-4 text-[12px] shadow-md">
            <div className="flex items-center justify-between gap-3">
              <div>
                <h3 className="text-sm font-semibold text-slate-900 sm:text-base">
                  How Justiceserver compares
                </h3>
                <p className="mt-1 max-w-xl text-[12px] text-slate-700">
                  A high-level look at how Justiceserver’s Salesforce foundation
                  and product approach differ from many other case management
                  systems used by legal service organizations.
                </p>
              </div>
              <span className="hidden rounded-full bg-cyan-50 px-3 py-1 text-[10px] font-medium text-cyan-800 md:inline-flex">
                Justiceserver advantage
              </span>
            </div>

            <div className="mt-3 overflow-x-auto">
              <table className="min-w-full border-collapse text-left">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50">
                    <th className="px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-600">
                      Area
                    </th>
                    <th className="px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-cyan-800">
                      Justiceserver (on Salesforce)
                    </th>
                    <th className="px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-600">
                      Most other case management systems
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 align-top">
                  <tr className="bg-cyan-50/40">
                    <td className="px-3 py-2 font-medium text-slate-800">
                      Platform &amp; ecosystem
                    </td>
                    <td className="px-3 py-2 text-slate-800">
                      Built natively on the Salesforce platform with
                      enterprise-grade security, performance, and access to a broad
                      ecosystem of apps, connectors, and AI tools.
                    </td>
                    <td className="px-3 py-2 text-slate-700">
                      Often rely on proprietary or single-vendor stacks with more
                      limited extension options and varying release cycles.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 font-medium text-slate-800">
                      Configuration &amp; flexibility
                    </td>
                    <td className="px-3 py-2 text-slate-800">
                      Configurable data model, page layouts, and low-code
                      automations that administrators can adapt as programs,
                      funders, and reporting needs change.
                    </td>
                    <td className="px-3 py-2 text-slate-700">
                      More rigid modules where larger changes often require vendor
                      work or custom development, making it harder to evolve
                      quickly.
                    </td>
                  </tr>
                  <tr className="bg-cyan-50/40">
                    <td className="px-3 py-2 font-medium text-slate-800">
                      Intake &amp; case workflows
                    </td>
                    <td className="px-3 py-2 text-slate-800">
                      Guided intake, configurable eligibility rules, and case
                      workflows that can be tuned for each practice area while
                      still rolling up to organization-wide reporting.
                    </td>
                    <td className="px-3 py-2 text-slate-700">
                      Standardized intake and case forms that are harder to adapt
                      when practices, eligibility standards, or funder requirements
                      change.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 font-medium text-slate-800">
                      Reporting &amp; funders
                    </td>
                    <td className="px-3 py-2 text-slate-800">
                      Salesforce reports and dashboards that support relational
                      data, ad-hoc questions, and funder-specific views without
                      custom development.
                    </td>
                    <td className="px-3 py-2 text-slate-700">
                      Predefined reports with limited ability to easily build new
                      cross-cutting views for leadership, funders, or equity-focused
                      analysis.
                    </td>
                  </tr>
                  <tr className="bg-cyan-50/40">
                    <td className="px-3 py-2 font-medium text-slate-800">
                      Clinics, other services &amp; referrals
                    </td>
                    <td className="px-3 py-2 text-slate-800">
                      Dedicated tools for clinics, non-legal services, and
                      cross-organization referrals, plus an optional Pro Bono Portal
                      add-on to engage volunteer attorneys.
                    </td>
                    <td className="px-3 py-2 text-slate-700">
                      Core case management may be strong, but clinics, workshops,
                      and referrals are often handled in separate tools or
                      spreadsheets.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 font-medium text-slate-800">
                      AI &amp; future readiness
                    </td>
                    <td className="px-3 py-2 text-slate-800">
                      Positioned to use Salesforce AI services such as Prompt
                      Builder, Agentforce, and the Einstein Trust Layer so LSOs can
                      adopt AI when and where it makes sense.
                    </td>
                    <td className="px-3 py-2 text-slate-700">
                      May require separate AI tools or custom integrations, with
                      less alignment between AI features and the core case
                      management platform.
                    </td>
                  </tr>
                  <tr className="bg-cyan-50/40">
                    <td className="px-3 py-2 font-medium text-slate-800">
                      Collaboration &amp; community
                    </td>
                    <td className="px-3 py-2 text-slate-800">
                      Supported by a learning community with a shared product
                      roadmap, annual user conference, and regular office hours
                      where LSOs shape future enhancements together.
                    </td>
                    <td className="px-3 py-2 text-slate-700">
                      Typically focus on individual deployments, with fewer
                      structured opportunities to co-design improvements across
                      multiple organizations.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* CLIENT BASE / SOCIAL PROOF */}
        <section className="mt-16 scroll-mt-24 border-t border-slate-200 pt-10">
          <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">
            Organizations using Justiceserver today
          </h2>
          <p className="mt-2 max-w-3xl text-sm text-slate-700">
            Today, nearly 100 legal aid and partner organizations rely on
            Justiceserver to manage intake, casework, clinics, and pro bono
            programs, reflecting a broad cross-section of legal service
            organizations and justice-focused nonprofits.
          </p>

          <div className="mt-6 grid gap-4 text-[13px] md:grid-cols-3">
            <article className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                Scale
              </div>
              <p className="mt-1 text-2xl font-semibold text-slate-900">
                Nearly 100 organizations
              </p>
              <p className="mt-2 text-slate-700">
                Active Justiceserver clients include legal aid programs, statewide
                organizations, and specialized advocacy groups using Salesforce to
                support their missions.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                Diversity of programs
              </div>
              <p className="mt-1 text-2xl font-semibold text-slate-900">
                Broad mix of LSOs
              </p>
              <p className="mt-2 text-slate-700">
                The Justiceserver community spans housing, family, immigration,
                consumer, elder law, medical-legal partnerships, and other justice
                initiatives.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                Community
              </div>
              <p className="mt-1 text-2xl font-semibold text-slate-900">
                Shared learning
              </p>
              <p className="mt-2 text-slate-700">
                Justiceserver clients participate in a learning community with a
                shared roadmap, user conference, and office hours where
                organizations learn from one another.
              </p>
            </article>
          </div>
        </section>

        {/* FAQS WITH FILTER CHIPS */}
        <section
          ref={faqRef}
          className="mt-16 scroll-mt-24 border-t border-slate-200 pt-10"
        >
          <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">
            Frequently asked questions
          </h2>
          <p className="mt-2 max-w-3xl text-sm text-slate-700">
            Explore how Justiceserver supports your programs, reporting, and
            technology roadmap.
          </p>

          <div className="mt-4 flex flex-wrap gap-2 text-[11px]">
            {faqCategoryOptions.map((option) => (
              <button
                key={option.id}
                type="button"
                onClick={() => setFaqCategory(option.id)}
                className={
                  "rounded-full border px-3 py-1 transition " +
                  (faqCategory === option.id
                    ? "border-cyan-600 bg-cyan-50 text-cyan-800"
                    : "border-slate-200 bg-white text-slate-600 hover:border-cyan-400 hover:text-cyan-700")
                }
              >
                {option.label}
              </button>
            ))}
          </div>

          <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-4 text-[13px] shadow-sm">
            <div className="divide-y divide-slate-200">
              {filteredFaqs.map((item) => (
                <div key={item.id} className="py-3">
                  <button
                    onClick={() =>
                      setOpenFaqId((current) =>
                        current === item.id ? null : item.id
                      )
                    }
                    className="flex w-full items-center justify-between gap-4 text-left"
                  >
                    <span className="text-[13px] font-medium text-slate-900">
                      {item.q}
                    </span>
                    <span className="text-lg text-slate-400">
                      {openFaqId === item.id ? "−" : "+"}
                    </span>
                  </button>
                  {openFaqId === item.id && (
                    <p className="mt-2 text-[12px] text-slate-700">{item.a}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section
          ref={contactRef}
          id="contact"
          className="mt-16 scroll-mt-24 border-t border-slate-200 pt-10"
        >
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:items-start">
            <div>
              <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">
                Start a Justiceserver conversation
              </h2>
              <p className="mt-1 max-w-2xl text-sm text-slate-700">
                Share a few details so the Techbridge and Justiceserver team can
                tailor the discussion to your organization.
              </p>

              <form
                onSubmit={handleDemoSubmit}
                className="mt-4 space-y-3 text-[13px]"
              >
                <div className="grid gap-3 sm:grid-cols-2">
                  <div>
                    <label className="text-[11px] font-medium text-slate-800">
                      Your name
                      <span className="ml-0.5 text-cyan-700">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={demoForm.name}
                      onChange={handleDemoChange}
                      required
                      className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs text-slate-900 placeholder:text-slate-400 focus:border-cyan-500 focus:outline-none"
                      placeholder="First and last name"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-medium text-slate-800">
                      Organization name
                      <span className="ml-0.5 text-cyan-700">*</span>
                    </label>
                    <input
                      type="text"
                      name="org"
                      value={demoForm.org}
                      onChange={handleDemoChange}
                      required
                      className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs text-slate-900 placeholder:text-slate-400 focus:border-cyan-500 focus:outline-none"
                      placeholder="Legal aid organization name"
                    />
                  </div>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div>
                    <label className="text-[11px] font-medium text-slate-800">
                      Work email
                      <span className="ml-0.5 text-cyan-700">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={demoForm.email}
                      onChange={handleDemoChange}
                      required
                      className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs text-slate-900 placeholder:text-slate-400 focus:border-cyan-500 focus:outline-none"
                      placeholder="you@organization.org"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-medium text-slate-800">
                      Your role
                    </label>
                    <input
                      type="text"
                      name="role"
                      value={demoForm.role}
                      onChange={handleDemoChange}
                      className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs text-slate-900 placeholder:text-slate-400 focus:border-cyan-500 focus:outline-none"
                      placeholder="e.g., Executive Director, IT Director, Managing Attorney"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-[11px] font-medium text-slate-800">
                    What are you hoping Justiceserver can help with?
                  </label>
                  <textarea
                    name="message"
                    value={demoForm.message}
                    onChange={handleDemoChange}
                    rows={4}
                    className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs text-slate-900 placeholder:text-slate-400 focus:border-cyan-500 focus:outline-none"
                    placeholder="For example: replacing a legacy case management system, centralizing intake, improving reporting for funders, or exploring AI use cases."
                  />
                </div>
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <button
                    type="submit"
                    className="w-full rounded-full bg-cyan-700 px-4 py-2 text-xs font-semibold text-white shadow-sm hover:bg-cyan-800 sm:w-auto"
                  >
                    Submit
                  </button>
                  <p className="text-[11px] text-slate-500">
                    In a live website, this form would send details to the
                    Techbridge and Justiceserver team for follow-up.
                  </p>
                </div>
              </form>

              {demoSubmitted && (
                <div className="mt-4 rounded-xl border border-cyan-200 bg-cyan-50 p-3 text-[12px] text-slate-800">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-cyan-700">
                    FORM SUBMISSION (DEMO)
                  </div>
                  <p className="mt-1">
                    Thanks, {demoForm.name || "there"}. On a production site,
                    someone from Techbridge would reach out to schedule time and
                    learn more about your LSO.
                  </p>
                </div>
              )}
            </div>

            <div className="space-y-4 rounded-2xl border border-slate-200 bg-white p-4 text-[13px] shadow-sm">
              <div>
                <div className="flex items-center gap-2">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-cyan-50 text-xs">
                    📋
                  </span>
                  <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                    What we’ll cover
                  </div>
                </div>
                <ul className="mt-2 ml-4 list-disc space-y-1 text-slate-700">
                  <li>Your current intake, case management, and reporting setup</li>
                  <li>Where Justiceserver and Salesforce could simplify work</li>
                  <li>How Justiceserver’s features map to your programs</li>
                  <li>Questions about integrations, AI, and the Pro Bono Portal</li>
                </ul>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-cyan-50 text-xs">
                    👥
                  </span>
                  <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                    Who should join
                  </div>
                </div>
                <ul className="mt-2 ml-4 list-disc space-y-1 text-slate-700">
                  <li>Program and practice leaders</li>
                  <li>Operations, data, or IT staff</li>
                  <li>Executive leadership and funder champions</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white py-8 text-[12px] text-slate-500">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 lg:flex-row lg:justify-between lg:px-6">
          <div className="max-w-sm">
            <div className="flex items-center">
              <img
                src="https://techbridge.org/wp-content/uploads/2025/02/Techbridge-Justiceserver-Primary.svg"
                alt="Justiceserver by Techbridge"
                className="h-7 w-auto"
              />
            </div>
            <p className="mt-3 text-[12px] text-slate-600">
              Justiceserver is a Salesforce-powered legal case management system
              from Techbridge, designed for nonprofit legal service organizations
              and built to grow alongside your programs.
            </p>
          </div>

          <div className="grid flex-1 gap-6 min-[480px]:grid-cols-2 md:grid-cols-3">
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                Product
              </div>
              <ul className="mt-2 space-y-1">
                <li>
                  <button
                    onClick={() => scrollToSection(purposeRef)}
                    className="hover:text-cyan-700"
                  >
                    Features
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection(whyRef)}
                    className="hover:text-cyan-700"
                  >
                    Why Justiceserver
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                Learn more
              </div>
              <ul className="mt-2 space-y-1">
                <li>
                  <button
                    onClick={() => scrollToSection(faqRef)}
                    className="hover:text-cyan-700"
                  >
                    FAQs
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection(contactRef)}
                    className="hover:text-cyan-700"
                  >
                    Talk to our team
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                Company
              </div>
              <ul className="mt-2 space-y-1">
                <li>
                  <a
                    href="https://techbridge.org/who-we-are/"
                    className="text-slate-500 hover:text-cyan-700"
                  >
                    About Techbridge
                  </a>
                </li>
                <li>
                  <a
                    href="https://techbridge.org/careers/"
                    className="text-slate-500 hover:text-cyan-700"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="https://techbridge.org/contact/"
                    className="text-slate-500 hover:text-cyan-700"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-6 flex max-w-6xl flex-col items-start justify-between gap-3 border-t border-slate-200 px-4 pt-4 text-[11px] text-slate-500 lg:flex-row lg:px-6">
          <div>
            © {new Date().getFullYear()} Techbridge. Justiceserver is a product
            of Techbridge.
          </div>
          <div className="flex flex-wrap gap-3">
            <span className="cursor-pointer hover:text-cyan-700">Privacy</span>
            <span className="cursor-pointer hover:text-cyan-700">Terms</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default JusticeserverSite;
