const menuButton = document.querySelector("[data-menu-button]");
const mobileNav = document.querySelector("[data-mobile-nav]");
const languageButtons = document.querySelectorAll("[data-lang-switch]");

const translations = {
  de: {
    "meta.title": "BlueToe — App-Entwicklung aus Hamburg",
    "nav.services": "Leistungen",
    "nav.process": "Prozess",
    "nav.packages": "Pakete",
    "nav.technology": "Technologie",
    "nav.projects": "Projekte",
    "nav.contact": "Kontakt",
    "cta.start": "Projekt starten",
    "cta.start.arrow": "Projekt starten →",
    "hero.title": "Apps, die sich<br /><span>besonders anfühlen.</span>",
    "hero.copy": "BlueToe ist ein Premium-Studio für App-Entwicklung aus Hamburg. Wir entwickeln intuitive, leistungsstarke Apps und Web-Apps für Unternehmen, Gründer und Marken.",
    "hero.status": "Build Status",
    "phone.greeting": "Guten Morgen,<br />Alex!",
    "phone.metric": "Projektbudget",
    "phone.actions": "Schnellzugriff",
    "phone.action1": "Plan",
    "phone.action2": "Design",
    "phone.action4": "Mehr",
    "phone.activity": "Projektstatus",
    "phone.item1": "UX-Konzept",
    "phone.item2": "API Setup",
    "phone.item3": "Launch Check",
    "phone.done": "Fertig",
    "phone.ready": "Bereit",
    "agency.title": "Nicht noch eine<br />App-Agentur.",
    "hero.success": "Erfolgreich",
    "hero.verified": "Verifiziert",
    "agency.copy": "Wir sind Produktpartner. Wir denken tief mit, hinterfragen Ideen und entwickeln digitale Produkte, die echte Probleme lösen und wachsen können.",
    "agency.point1": "Strategische<br />Partnerschaft",
    "agency.point2": "Nutzerzentriertes<br />Design",
    "agency.point3": "Agile<br />Umsetzung",
    "agency.point4": "Skalierbare<br />Lösungen",
    "services.title": "Was wir bauen",
    "services.mobile.copy": "iOS- und Android-Apps, entwickelt für Performance, klare Nutzung und Freude im Alltag.",
    "services.web.copy": "Leistungsstarke, responsive Web-Apps für Kunden, Teams und digitale Geschäftsmodelle.",
    "services.backend.title": "Backend Systeme",
    "services.backend.copy": "Robuste, sichere und skalierbare Backend-Architekturen für echte Produktlogik.",
    "services.integrations.title": "Integrationen",
    "services.integrations.copy": "Saubere Anbindung von APIs, Zahlungsdiensten, Datenbanken und externen Tools.",
    "process.title": "Unser Prozess",
    "process.discover.title": "Verstehen",
    "process.discover.copy": "Wir klären Ziele, Nutzer, Anforderungen und Herausforderungen.",
    "process.define.title": "Strukturieren",
    "process.define.copy": "Wir formen Strategie, MVP-Umfang und Produktlogik.",
    "process.design.copy": "Wir gestalten intuitive Interfaces, die sofort verständlich sind.",
    "process.develop.title": "Entwickeln",
    "process.develop.copy": "Wir bauen sauberen, skalierbaren und zuverlässigen Code.",
    "process.launch.copy": "Wir veröffentlichen, begleiten und helfen bei der Weiterentwicklung.",
    "tech.title": "Technologie",
    "tech.copy": "Moderne Tools. Bewährte Frameworks.<br /><b>Gebaut für Geschwindigkeit, Qualität und Skalierung.</b>",
    "project.title": "Projektarten",
    "project.mvp.copy": "Ideen validieren und den Launch beschleunigen.",
    "project.enterprise.title": "Unternehmens-Apps",
    "project.enterprise.copy": "Abläufe vereinfachen und Teams produktiver machen.",
    "project.consumer.title": "Consumer Apps",
    "project.consumer.copy": "Nutzer begeistern und Marken digital erweitern.",
    "project.modernization.title": "Modernisierung",
    "project.modernization.copy": "Bestehende Produkte verbessern, migrieren und zukunftsfähig machen.",
    "models.title": "Zusammenarbeit",
    "models.fixed.copy": "Klarer Umfang, Zeitplan und definierte Ergebnisse.",
    "models.tm.copy": "Flexibel und anpassbar bei wachsendem Bedarf.",
    "models.team.title": "Dediziertes Team",
    "models.team.copy": "Ihr erweitertes Produktteam, fokussiert auf Ihr Projekt.",
    "packages.title": "Pakete",
    "packages.headline": "Der richtige<br />Startpunkt.",
    "packages.copy": "Ob erste Idee, klickbarer Prototyp oder vollständige App-Entwicklung — BlueToe bietet klare Projektmodelle für unterschiedliche Phasen digitaler Produktentwicklung.",
    "package.concept.kicker": "01 / Strategie",
    "package.concept.copy": "Für frühe App-Ideen, die Struktur, Produktlogik und eine realistische Roadmap brauchen.",
    "package.concept.li1": "Produkt- und Zielgruppenanalyse",
    "package.concept.li2": "MVP-Struktur",
    "package.concept.li3": "Feature-Priorisierung",
    "package.concept.li4": "Technische Einschätzung",
    "package.concept.li5": "Budget- und Zeitplanung",
    "package.prototype.kicker": "02 / Prototyp",
    "package.prototype.title": "Design Prototyp",
    "package.prototype.copy": "Für Apps, die vor der Entwicklung sichtbar, testbar und präsentierbar werden sollen.",
    "package.prototype.li4": "Zentrale App-Screens",
    "package.prototype.li5": "Klickbarer Prototyp",
    "package.prototype.li6": "Design-System-Basis",
    "package.build.copy": "Für Kunden, die eine erste professionelle App-Version entwickeln und veröffentlichen möchten.",
    "package.build.li1": "App-Entwicklung",
    "package.build.li2": "Backend-Grundstruktur",
    "package.build.li4": "Nutzerkonten",
    "package.build.li5": "Kernfunktionen",
    "package.build.li6": "Testing und Launch-Vorbereitung",
    "package.more.full": "für umfangreiche Produkt- und Plattformprojekte",
    "package.more.rescue": "für bestehende Apps, die verbessert oder launchfähig gemacht werden müssen",
    "package.more.partner": "für langfristige Weiterentwicklung nach dem Launch",
    "package.note": "Full App Development, App Rescue und langfristige Product Partnerships auf Anfrage.",
    "faq.headline": "Vor dem Projekt.",
    "faq.q1": "Nimmt BlueToe Kundenprojekte an?",
    "faq.a1": "Ja. BlueToe entwickelt Apps, Web-Apps und digitale Produktlösungen für Unternehmen, Gründer und Marken.",
    "faq.q2": "Können wir mit einer frühen Idee starten?",
    "faq.a2": "Ja. Wir helfen dabei, Umfang, Produktlogik, UX, MVP-Roadmap und technische Machbarkeit vor der Entwicklung zu klären.",
    "faq.q3": "Begleitet BlueToe auch den Launch?",
    "faq.a3": "Ja. Wir unterstützen TestFlight, App Store, Google Play, Web-Deployment, Analytics und Übergabe.",
    "contact.form.title": "Projektformular",
    "form.name": "Name",
    "form.company": "Unternehmen",
    "form.reply": "Antwort an",
    "form.project": "Projektart",
    "form.timeline": "Zeitrahmen",
    "form.message": "Nachricht",
    "form.select": "Auswählen",
    "form.timeline.1": "1-3 Monate",
    "form.timeline.2": "3-6 Monate",
    "form.timeline.open": "Offen",
    "form.submit": "Anfrage vorbereiten →",
    "form.note": "Keine öffentliche E-Mail-Adresse. Ihre Anfrage wird lokal vorbereitet.",
    "form.name.placeholder": "Ihr Name",
    "form.company.placeholder": "Optional",
    "form.reply.placeholder": "Antwortadresse",
    "form.message.placeholder": "Was soll die App leisten?",
    "final.title": "Bereit für<br />Ihre App?",
    "final.copy": "Lassen Sie uns eine App entwickeln, die Ihre Nutzer gern verwenden und die Ihr Geschäft voranbringt.",
    "footer.rights": "© 2026 BlueToe. Alle Rechte vorbehalten."
  },
  en: {
    "meta.title": "BlueToe — App Development from Hamburg",
    "nav.services": "Services",
    "nav.process": "Process",
    "nav.packages": "Packages",
    "nav.technology": "Technology",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "cta.start": "Start a project",
    "cta.start.arrow": "Start a project →",
    "hero.title": "Apps that feel<br /><span>less ordinary.</span>",
    "hero.copy": "BlueToe is a premium app development studio from Hamburg. We build intuitive, high-performance mobile apps and web apps for companies, founders and brands.",
    "hero.status": "Build Status",
    "phone.greeting": "Good morning,<br />Alex!",
    "phone.metric": "Project budget",
    "phone.actions": "Quick actions",
    "phone.action1": "Plan",
    "phone.action2": "Design",
    "phone.action4": "More",
    "phone.activity": "Project status",
    "phone.item1": "UX Concept",
    "phone.item2": "API Setup",
    "phone.item3": "Launch Check",
    "phone.done": "Done",
    "phone.ready": "Ready",
    "agency.title": "Not another<br />app agency.",
    "hero.success": "Success",
    "hero.verified": "Verified",
    "agency.copy": "We are product partners. We dive deep, challenge ideas and build digital products that solve real problems and scale.",
    "agency.point1": "Strategic<br />Partnership",
    "agency.point2": "User-First<br />Design",
    "agency.point3": "Agile<br />Execution",
    "agency.point4": "Scalable<br />Solutions",
    "services.title": "What we build",
    "services.mobile.copy": "iOS and Android apps built for performance, clear usage and everyday delight.",
    "services.web.copy": "Powerful, responsive web apps for customers, teams and digital business models.",
    "services.backend.title": "Backend Systems",
    "services.backend.copy": "Robust, secure and scalable backend architectures for real product logic.",
    "services.integrations.title": "Integrations",
    "services.integrations.copy": "Clean integrations with APIs, payment providers, databases and external tools.",
    "process.title": "Our process",
    "process.discover.title": "Discover",
    "process.discover.copy": "We understand goals, users, requirements and challenges.",
    "process.define.title": "Define",
    "process.define.copy": "We shape strategy, MVP scope and product logic.",
    "process.design.copy": "We design intuitive interfaces that feel immediately clear.",
    "process.develop.title": "Develop",
    "process.develop.copy": "We build clean, scalable and reliable code.",
    "process.launch.copy": "We ship, support and help you grow.",
    "tech.title": "Technology stack",
    "tech.copy": "Modern tools. Proven frameworks.<br /><b>Built for speed, quality, and scale.</b>",
    "project.title": "Project types",
    "project.mvp.copy": "Validate ideas and accelerate launch.",
    "project.enterprise.title": "Enterprise Apps",
    "project.enterprise.copy": "Streamline operations and empower teams.",
    "project.consumer.title": "Consumer Apps",
    "project.consumer.copy": "Delight users and grow your brand.",
    "project.modernization.title": "Modernization",
    "project.modernization.copy": "Upgrade, migrate and future-proof existing products.",
    "models.title": "Engagement models",
    "models.fixed.copy": "Clear scope, timeline and deliverables.",
    "models.tm.copy": "Flexible and adaptive to evolving needs.",
    "models.team.title": "Dedicated Team",
    "models.team.copy": "Your extended product team, focused on your project.",
    "packages.title": "Project Models",
    "packages.headline": "Choose the right<br />starting point.",
    "packages.copy": "Whether early idea, clickable prototype or full app development — BlueToe offers clear project models for different phases of digital product development.",
    "package.concept.kicker": "01 / Strategy",
    "package.concept.copy": "For early app ideas that need structure, product logic and a realistic roadmap.",
    "package.concept.li1": "Product and target group analysis",
    "package.concept.li2": "MVP structure",
    "package.concept.li3": "Feature prioritization",
    "package.concept.li4": "Technical assessment",
    "package.concept.li5": "Budget and timeline planning",
    "package.prototype.kicker": "02 / Prototype",
    "package.prototype.title": "Design Prototype",
    "package.prototype.copy": "For apps that should become visible, testable and presentable before development starts.",
    "package.prototype.li4": "Core app screens",
    "package.prototype.li5": "Clickable prototype",
    "package.prototype.li6": "Design system foundation",
    "package.build.copy": "For clients who want to develop and launch a first professional app version.",
    "package.build.li1": "App development",
    "package.build.li2": "Backend foundation",
    "package.build.li4": "User accounts",
    "package.build.li5": "Core features",
    "package.build.li6": "Testing and launch preparation",
    "package.more.full": "for extensive product and platform projects",
    "package.more.rescue": "for existing apps that need improvement or launch readiness",
    "package.more.partner": "for long-term product development after launch",
    "package.note": "Full App Development, App Rescue and long-term Product Partnerships on request.",
    "faq.headline": "Before we build.",
    "faq.q1": "Do you take client projects?",
    "faq.a1": "Yes. BlueToe develops apps, web apps and digital product solutions for companies, founders and brands.",
    "faq.q2": "Can we start from an early idea?",
    "faq.a2": "Yes. We help define scope, product logic, UX, MVP roadmap and technical feasibility before development starts.",
    "faq.q3": "Do you handle launch?",
    "faq.a3": "Yes. We support TestFlight, App Store, Google Play, web deployment, analytics and handover.",
    "contact.form.title": "Project form",
    "form.name": "Name",
    "form.company": "Company",
    "form.reply": "Reply to",
    "form.project": "Project type",
    "form.timeline": "Timeline",
    "form.message": "Message",
    "form.select": "Select",
    "form.timeline.1": "1-3 months",
    "form.timeline.2": "3-6 months",
    "form.timeline.open": "Open",
    "form.submit": "Prepare request →",
    "form.note": "No public email address. Your request is prepared locally.",
    "form.name.placeholder": "Your name",
    "form.company.placeholder": "Optional",
    "form.reply.placeholder": "Reply address",
    "form.message.placeholder": "What should the app do?",
    "final.title": "Ready to build<br />your app?",
    "final.copy": "Let us create an app your users will love and your business can grow with.",
    "footer.rights": "© 2026 BlueToe. All rights reserved."
  }
};

const setLabelText = (label, text) => {
  const textNode = Array.from(label.childNodes).find((node) => node.nodeType === Node.TEXT_NODE);
  if (textNode) {
    textNode.textContent = text;
  } else {
    label.prepend(document.createTextNode(text));
  }
};

const setLanguage = (language) => {
  const dictionary = translations[language] || translations.de;
  document.documentElement.lang = language === "en" ? "en" : "de";
  document.title = dictionary["meta.title"];

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = dictionary[element.dataset.i18n];
    if (value) element.textContent = value;
  });

  document.querySelectorAll("[data-i18n-html]").forEach((element) => {
    const value = dictionary[element.dataset.i18nHtml];
    if (value) element.innerHTML = value;
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const value = dictionary[element.dataset.i18nPlaceholder];
    if (value) element.setAttribute("placeholder", value);
  });

  document.querySelectorAll("[data-i18n-label]").forEach((label) => {
    const value = dictionary[label.dataset.i18nLabel];
    if (value) setLabelText(label, value);
  });

  languageButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.langSwitch === language);
  });

  localStorage.setItem("bluetoe-language", language);
};

languageButtons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.langSwitch));
});

setLanguage(localStorage.getItem("bluetoe-language") || "de");

if (menuButton && mobileNav) {
  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!isOpen));
    mobileNav.classList.toggle("is-open", !isOpen);
    document.body.classList.toggle("menu-open", !isOpen);
  });

  mobileNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menuButton.setAttribute("aria-expanded", "false");
      mobileNav.classList.remove("is-open");
      document.body.classList.remove("menu-open");
    });
  });
}

const revealTargets = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14 }
  );

  revealTargets.forEach((target) => revealObserver.observe(target));
} else {
  revealTargets.forEach((target) => target.classList.add("is-visible"));
}

const contactForm = document.querySelector("[data-contact-form]");
const formNote = document.querySelector("[data-form-note]");

if (contactForm && formNote) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const language = localStorage.getItem("bluetoe-language") || "de";
    formNote.textContent = language === "en"
      ? "Thank you. The project request is prepared. Please connect the form to your preferred form backend in the live system."
      : "Danke. Die Projektanfrage ist vorbereitet. Bitte verbinden Sie das Formular im Live-System mit Ihrem bevorzugten Formular-Backend.";
    contactForm.reset();
  });
}
