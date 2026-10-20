/* NOOMO — i18n.js
   All interface texts for the four languages: EN | DE | PT | UA (code "uk").
   Default language: EN. A visitor's choice is stored in localStorage ("noomo-lang");
   ?lang=de / ?lang=pt / ?lang=uk in the URL forces a language.
   <html lang> is updated by the language switch in main.js.

   THIS FILE IS THE SOURCE THE SITE READS (it works both from GitHub Pages and from a
   local file:// open, where JSON cannot be fetched). assets/i18n/*.json are the same
   texts exported per language for translators — if you edit a JSON file, copy the
   change into this file too.
   Case-study texts (project titles, overviews) live in main.js, in the projects list. */
window.NOOMO_I18N = {
  DEFAULT: 'en',
  LANGS: [["en","EN","English"],["de","DE","Deutsch"],["pt","PT","Português"],["uk","UA","Українська"]],
  LOCALE: {"en":"en-GB","de":"de-DE","pt":"pt-PT","uk":"uk-UA"},
  I18N: {
    en: {
      "mc_eb": "Write to us",
      "mc_hint": "Opens with the subject and message filled in",
      "mc_app": "Mail app",
      "mc_copy": "Copy email",
      "mc_subj": "Subject",
      "su_p": "Project inquiry: something like {name}",
      "bo_p": "Hi NOOMO, I'd like a project similar to {name}. About my business: ",
      "su_y": "New project inquiry ({cat})",
      "bo_y": "Hi NOOMO, I'd like to discuss a new {cat} project. About my business: ",
      "su_g": "Inquiry from noomo.dk",
      "your_project": "Your project",
      "your_sub": "Let's build it together",
      "nav_work": "Work",
      "nav_services": "Services",
      "pkg": "Subscription",
      "nav_about": "About",
      "nav_contact": "Contact",
      "nav_book": "Free consultation",
      "cursor_more": "See more",
      "hero_eb": "Digital studio for B2B · Europe",
      "hero_eb2": "Shopify · Corporate sites · MVP apps",
      "hero_1": "Online stores.",
      "hero_2": "Websites & landing pages.",
      "hero_3": "Apps.",
      "hero_tag": "Shipped on time, on a fixed price.",
      "cta_free": "Book a free consultation",
      "why1_h": "Fixed-price packages",
      "why1_t": "You know the full cost before we start, no extras.",
      "why2_h": "Your own web studio, by subscription",
      "why2_t": "One monthly fee for site updates and small tasks.",
      "why3_h": "Pay in installments",
      "why3_t": "Split the project cost into 3 monthly payments.",
      "why4_h": "Launch in weeks, not months",
      "why4_t": "Clear timelines, and your new site goes live fast.",
      "work_h": "Selected work",
      "work_eb": "Live sites, apps and case studies",
      "live_website": "Live website",
      "case_study": "Case study",
      "view_proto": "View prototype ↗",
      "want_like": "I want something like this",
      "live_projects": "Live projects",
      "svc_h": "What we do",
      "svc_eb": "Three services and a free audit. Fixed scope, fixed price, support after launch.",
      "excl_vat": "excl. VAT",
      "view_details_arrow": "View details ↗",
      "audit_badge": "Bonus · Free",
      "audit_h": "Free consultation & website audit",
      "audit_t": "A 30-minute session with a senior designer. We review your current website or store and give you a short written audit: UX, speed and SEO quick wins, plus a recommended next step and fixed-price estimate.",
      "free": "€0",
      "min30": "30 minutes",
      "audit_cta": "Get a free audit",
      "pkg_eb": "Prices in EUR, excl. VAT. Every project starts with a free consultation and a fixed-price proposal.",
      "most_popular": "Most popular",
      "sub_title": "Your web studio",
      "total": "Total",
      "timeline": "Timeline",
      "get_quote": "Get a quote",
      "view_details": "View details",
      "sub_q": "What's Your web studio?",
      "sub_t": "One monthly subscription for any kind of work: updates, new pages and landing pages, banners and campaign graphics, design changes, SEO, product uploads and priority help. Minimum 3 months.",
      "about_h": "About NOOMO",
      "about_eb": "The studio",
      "stat1": "Specialists",
      "stat2": "Years in digital design",
      "stat3": "Fixed scope, fixed price",
      "mission_eb": "Our mission",
      "contact_h": "Let's talk about your project",
      "selected": "Selected",
      "f_service": "Service",
      "f_sub": "Subscription",
      "f_budget": "Budget range (EUR, excl. VAT)",
      "f_message": "Message",
      "sent_eb": "Request sent",
      "sent_msg": "Thanks, we'll reply within 24 hours.",
      "send_another": "Send another request",
      "f_time": "Preferred time",
      "slot_err": "Please pick a time slot.",
      "f_topic": "Topic (optional)",
      "call_eb": "Call requested",
      "call_another": "Request another call",
      "footer_copy": "© 2026 NOOMO",
      "close_x": "Close ✕",
      "who": "Who it's for",
      "included": "What's included",
      "how": "How it works",
      "addons": "Optional add-ons",
      "related": "Related work",
      "min3": "Minimum 3 months",
      "popup_quote": "Get a quote for this service",
      "close_esc": "Close · Esc",
      "like_eb": "I want something like",
      "send_req": "Send a request",
      "back_work": "← Back to work",
      "about_body": "NOOMO is a design-led digital studio headquartered in Aarhus, Denmark, with teams in Germany, Portugal, Tenerife (Spain) and Ukraine. We combine 15+ years of UI/UX and web design experience with an AI-augmented workflow, so you get senior-quality design and development, delivered faster and at a fixed price. We work with retailers, service companies and startups across Europe.",
      "mission": "We make professional digital products accessible to growing businesses: clear, fast and built to sell.",
      "mission_acc": 6,
      "mission2": "No bloated agency process. No templates passed off as custom work. Just a focused team that ships.",
      "contact_body": "Tell us what you need. The first consultation is free, and you get a clear proposal with a fixed price within 48 hours.",
      "ph_msg": "Tell us what you need",
      "ph_topic": "What would you like to talk about?",
      "err_pre": "The request didn't go through. Please try again, or email us at",
      "svc_word": "Service",
      "case_want": "Want a project like",
      "aria_top": "NOOMO — back to top",
      "aria_menu": "Menu",
      "aria_why": "Why NOOMO",
      "aria_filter": "Filter work by service",
      "aria_sub": "Your web studio",
      "aria_contact_opts": "Contact options",
      "aria_remove": "Remove selection",
      "aria_close": "Close",
      "aria_back": "Back to work",
      "lang_aria": "Language",
      "on_request": "Priced on request",
      "cta_live": "Visit live site ↗",
      "cta_play": "View on Google Play ↗",
      "aria_view_details": " — view details",
      "aria_open_case": "Open case study: ",
      "new_tab": " (opens in new tab)",
      "no_fee": "No monthly fee",
      "sub_fmt": "Your web studio: {name}",
      "tab_form": "Send a request",
      "tab_call": "Request a call",
      "submit": "Send request",
      "sending": "Sending…",
      "call_btn": "Request a call",
      "call_msg": "Thanks! We'll call you on {day} between {from} and {to}.",
      "like_msg": "I'd like something similar to {name}.",
      "f_day": "Preferred day",
      "day_ph": "Pick a date",
      "err_day": "Please pick a weekday (Mon–Fri).",
      "prev_month": "Previous month",
      "next_month": "Next month",
      "cat": {
        "web": "Corporate websites & landing pages",
        "ecom": "E-commerce",
        "apps": "MVP & apps"
      },
      "blk": {
        "challenge": "The challenge",
        "solution": "What we designed",
        "thinking": "Design thinking",
        "impact": "Impact",
        "role": "Our role",
        "note": "AI-augmented workflow"
      },
      "meta": {},
      "store": {},
      "sub_names": {
        "Not included": "No subscription",
        "Basic": "Start",
        "Growth": "Stable",
        "Pro": "Full Web Studio"
      },
      "plural": [
        "project",
        "projects"
      ],
      "ct": {
        "Email": "Email",
        "Phone": "Phone"
      },
      "svcOpts": {
        "ecom": "E-commerce",
        "web": "Corporate websites & landing pages",
        "apps": "MVP & app",
        "audit": "Free consultation & audit",
        "unsure": "Not sure"
      },
      "f": {
        "name": "Name",
        "name_ph": "Your name",
        "name_err": "Please add your name.",
        "company": "Company",
        "company_ph": "Company name",
        "email": "Email",
        "email_ph": "name@company.com",
        "email_err": "Please add a valid email.",
        "phone_opt": "Phone (optional)",
        "phone": "Phone",
        "phone_err": "Please add a phone number.",
        "email_opt": "Email (optional)",
        "email_err2": "Please check the email address."
      },
      "months": [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ],
      "wd": [
        "Mo",
        "Tu",
        "We",
        "Th",
        "Fr",
        "Sa",
        "Su"
      ],
      "care": {
        "Basic": [
          "Up to 10 work hours per month",
          "Small edits and improvements",
          "Text, image and design tweaks",
          "Async via Slack or email"
        ],
        "Growth": [
          "Up to 25 work hours per month",
          "Everything in Start",
          "Regular updates",
          "Design and development tasks",
          "Tasks in parallel"
        ],
        "Pro": [
          "Up to 48 work hours per month",
          "Everything in Stable",
          "Work on your other websites",
          "Any type of task",
          "Priority support"
        ]
      },
      "svc": {
        "ecom": {
          "title": "E-commerce",
          "pkgTitle": "E-commerce Store",
          "desc": "Online stores and grocery shops on Shopify, with product upload and ongoing support.",
          "priceSub": "Excl. VAT",
          "timeline": "4–6 weeks",
          "who": "Retailers, grocery and specialty shops that want to sell online or move off a slow platform. Best when you have a product range ready and need a store your team can run day to day.",
          "pkgItems": [
            "Shopify store setup and custom theme design",
            "Up to 50 products uploaded",
            "Payments (card, Apple Pay, Google Pay)",
            "Shipping and EU VAT settings",
            "Mobile-first design",
            "Basic SEO and analytics",
            "Training session"
          ],
          "includes": [
            "Shopify store setup and custom theme design",
            "Up to 50 products uploaded",
            "Payments (card, Apple Pay, Google Pay)",
            "Shipping and EU VAT settings",
            "Mobile-first design",
            "Basic SEO",
            "Analytics",
            "Training session"
          ],
          "steps": [
            [
              "Discovery",
              "We map your range, payments, shipping and VAT setup."
            ],
            [
              "Design",
              "A custom Shopify theme, designed mobile-first."
            ],
            [
              "Build",
              "Store setup, product upload, payments and analytics."
            ],
            [
              "Launch & support",
              "Training, go-live and optional Your web studio subscription."
            ]
          ],
          "addons": [
            "Extra 50 products",
            "Multilingual store",
            "Integrations (ERP, POS, accounting)",
            "Product photography / AI visuals"
          ]
        },
        "web": {
          "title": "Corporate websites & landing pages",
          "pkgTitle": "Corporate Website & Landing Page",
          "desc": "Company sites, landing pages and campaign sites that explain what you do and bring in leads.",
          "priceSub": "Excl. VAT · Landing page",
          "altPre": "Corporate site ",
          "timeline": "2–4 weeks",
          "who": "Service companies, B2B suppliers and marketing teams launching a campaign or a new offer. For businesses whose current site no longer explains what they do.",
          "pkgItems": [
            "UX structure and copy guidance",
            "Custom design",
            "Up to 6 pages (corporate) or 1 long-scroll page (landing)",
            "CMS",
            "Contact forms",
            "SEO setup",
            "Hosting setup and deploy"
          ],
          "steps": [
            [
              "Discovery",
              "Goals, audience and the pages you actually need."
            ],
            [
              "Structure & design",
              "Sitemap, copy guidance and a custom design."
            ],
            [
              "Build",
              "CMS, forms and SEO setup, tested on every screen."
            ],
            [
              "Launch & support",
              "Hosting, deploy and support after launch."
            ]
          ],
          "addons": [
            "Extra page",
            "Copywriting",
            "Multilingual"
          ]
        },
        "apps": {
          "title": "MVP apps & startups",
          "pkgTitle": "MVP App & Startup",
          "desc": "Clickable prototypes and launch-ready MVPs for founders who need to test, pitch or launch.",
          "priceSub": "Excl. VAT",
          "timeline": "From 14-day MVP sprint",
          "who": "Founders and innovation teams who need to test an idea with real users or show investors a working product. Also for companies adding a new digital service.",
          "pkgItems": [
            "Discovery workshop",
            "User flows",
            "Clickable prototype",
            "UI design system",
            "Front-end MVP build",
            "Investor-ready demo",
            "Handoff or ongoing development"
          ],
          "steps": [
            [
              "Discovery workshop",
              "The problem, the users and the smallest product worth building."
            ],
            [
              "Flows & prototype",
              "User flows and a clickable prototype to test early."
            ],
            [
              "Design & build",
              "A UI design system and a front-end MVP build."
            ],
            [
              "Demo & handoff",
              "An investor-ready demo, then handoff or ongoing development."
            ]
          ],
          "addons": [
            "Extra user flow",
            "Backend / database setup",
            "Ongoing development sprints"
          ]
        }
      },
      "cases": {},
      "boot_eb": "Loading studio",
      "hint_scroll": "Scroll to continue",
      "hint_hover": "Hover to preview",
      "hint_click": "Click to open",
      "boot_steps": [
        "Initialize grid",
        "Load brief",
        "Map structure",
        "Set type scale",
        "Draw wireframes",
        "Snap to grid",
        "Apply design system",
        "Wire interactions",
        "Run QA",
        "Ship to production"
      ],
      "menu": "Menu",
      "m_welcome": "Welcome to NOOMO",
      "m_type": "Type",
      "m_focus": "Focus",
      "m_loc": "Location",
      "m_loc_v": "Aarhus, Denmark (HQ)",
      "theme_aria": "Dark mode",
      "sb_title": "Subscription",
      "sb_sub": "Design & dev on demand",
      "sb_ps": "Per month · excl. VAT · pause or cancel anytime",
      "sb_tl": "48 h per task **",
      "sb_aria": "Subscription type",
      "sb_m1": "Solo",
      "sb_m2": "Team",
      "sb_solo": [
        "Unlimited tasks and edits per month",
        "1 active task at a time",
        "Each task delivered in 48 hours",
        "Async communication in Slack or email"
      ],
      "sb_team": [
        "Unlimited tasks and edits per month",
        "Up to 3 active tasks in parallel",
        "Designer, developer and project manager",
        "Async + weekly call with the project manager"
      ],
      "sb_n1": "* The next task starts as soon as the current one is delivered.",
      "sb_n2": "** For most tasks. Larger ones are split into 48-hour steps.",
      "sb_msg": "Hi NOOMO, I am interested in the {plan} subscription.",
      "sb_msg_pk": "Hi NOOMO, I am interested in the {plan} service.",
      "tiers": {
        "start": {
          "name": "Start",
          "sub": "Landing page or small site",
          "tl": "2–3 weeks",
          "items": [
            "Up to 3 pages",
            "Custom design",
            "CMS and contact form",
            "Basic SEO"
          ]
        },
        "stable": {
          "name": "Stable",
          "sub": "Online store or business site",
          "tl": "4–6 weeks",
          "items": [
            "Shopify store or up to 8 pages",
            "UX structure and custom design",
            "Payments, CMS and integrations",
            "SEO, analytics and 30 days support"
          ]
        },
        "full": {
          "name": "Full",
          "sub": "App, MVP or large platform",
          "tl": "From 6 weeks",
          "items": [
            "Discovery workshop and prototype",
            "UI design system",
            "Front-end build and handoff",
            "60 days support"
          ]
        }
      },
      "sb_slots": "Tasks at a time",
      "sb_d1": "One designer-developer works on one task at a time. Send as many as you like; they are done one after another.",
      "sb_d2": "A team works on up to 3 tasks in parallel, with a project manager keeping the queue and priorities.",
      "start_from": "Starting price",
      "b2b_h": "For business & agencies",
      "b2b_p": "For businesses and agencies on an ongoing basis: choose the Full Web Studio (€290/month, up to 48 hours), or let’s agree custom terms for larger volumes.",
      "b2b_items": [
        "White-label for agencies",
        "Dedicated team for your product",
        "NDA, contract and monthly invoicing",
        "Shared Slack, Jira or Linear",
        "Design system and code handoff",
        "Priority SLA and fixed contact person"
      ],
      "b2b_pl": "Recommended plan",
      "b2b_price": "Full Web Studio · €290/month",
      "b2b_ps": "Up to 48 hours · or custom terms",
      "b2b_cta": "Discuss collaboration",
      "b2b_msg": "Hi NOOMO, we are a company/agency and want to discuss an ongoing collaboration.",
      "subtiers": {
        "start": {
          "name": "Start",
          "desc": "For small edits and minor improvements to your site.",
          "tl": "48 h per task",
          "items": [
            "Unlimited revisions",
            "1 task at a time",
            "Pause or cancel anytime",
            "Async via Slack or email"
          ]
        },
        "stable": {
          "name": "Stable",
          "desc": "Regular updates, design and development tasks.",
          "tl": "48 h per task",
          "items": [
            "Unlimited revisions",
            "2 tasks in parallel",
            "Pause or cancel anytime",
            "Async via Slack or email"
          ]
        },
        "full": {
          "name": "Full Web Studio",
          "desc": "Your full web studio: improvements to your site, work on your other websites, any type of task.",
          "tl": "24–48 h per task",
          "items": [
            "Unlimited revisions",
            "3 tasks in parallel",
            "Pause or cancel anytime",
            "Async via Slack or email",
            "Priority support"
          ]
        }
      },
      "hero_trust": "Fixed prices · Pay in up to 3 installments · Your own web studio from €99/month",
      "sub_line": "Subscription for any kind of work",
      "sub_opt": "Optional add-on",
      "care_h": {
        "Basic": "Up to 10 h / month",
        "Growth": "Up to 25 h / month",
        "Pro": "Up to 48 h / month"
      },
      "studio_q": "Already have a website?",
      "studio_t": "Get your own web studio from {price}.",
      "studio_cta": "Choose a plan",
      "studio_msg": "Hi NOOMO, I already have a website and I'm interested in Your web studio subscription.",
      "inst_line": "or 3 × {price}/month",
      "inst_note": "Fixed price. Pay at once or in up to 3 monthly payments.",
      "f_pay": "Payment (optional)",
      "pay": {
        "full": "Full payment",
        "inst": "Installments (up to 3 months)"
      },
      "cta_services": "See services",
      "cta_studio": "Your own web studio from €99/month",
      "svc_note": "Fixed price. Pay at once or in up to 3 monthly payments.",
      "sb_hrs": "Up to {h} hours per month",
      "b2b_cta2": "Choose Full Web Studio",
      "loc_h": "Our locations",
      "loc_line": "Headquarters in Aarhus, Denmark · Teams in Germany, Portugal, Tenerife (Spain) and Ukraine",
      "locs": [
        {
          "n": "Denmark",
          "c": "Aarhus",
          "hq": true
        },
        {
          "n": "Germany"
        },
        {
          "n": "Portugal"
        },
        {
          "n": "Tenerife",
          "c": "Spain"
        },
        {
          "n": "Ukraine"
        }
      ],
      "svc_more": "View details →",
      "audit_b": [
        "UX, speed and SEO review",
        "Short written audit",
        "Fixed-price estimate"
      ]
    },
    de: {
      "mc_eb": "Schreiben Sie uns",
      "mc_hint": "Öffnet sich mit vorausgefülltem Betreff und Text",
      "mc_app": "Mail-App",
      "mc_copy": "E-Mail kopieren",
      "mc_subj": "Betreff",
      "su_p": "Projektanfrage: etwas wie {name}",
      "bo_p": "Hallo NOOMO, ich hätte gern ein Projekt ähnlich wie {name}. Zu meinem Unternehmen: ",
      "su_y": "Neue Projektanfrage ({cat})",
      "bo_y": "Hallo NOOMO, ich möchte ein neues Projekt im Bereich {cat} besprechen. Zu meinem Unternehmen: ",
      "su_g": "Anfrage über noomo.dk",
      "your_project": "Ihr Projekt",
      "your_sub": "Lassen Sie es uns gemeinsam umsetzen",
      "nav_work": "Projekte",
      "nav_services": "Leistungen",
      "pkg": "Abonnement",
      "nav_about": "Über uns",
      "nav_contact": "Kontakt",
      "nav_book": "Kostenlose Beratung",
      "cursor_more": "Mehr sehen",
      "hero_eb": "Digitalstudio für B2B · Europa",
      "hero_1": "Onlineshops.",
      "hero_2": "Websites & Landingpages.",
      "hero_3": "Apps.",
      "hero_tag": "Pünktlich geliefert, zum Festpreis.",
      "why1_h": "Pakete zum Festpreis",
      "why1_t": "Sie kennen die Gesamtkosten vor dem Start, ohne Aufpreise.",
      "why2_h": "Ihr eigenes Webstudio im Abonnement",
      "why2_t": "Eine Monatsgebühr für Updates und kleinere Aufgaben.",
      "why3_h": "Zahlung in Raten",
      "why3_t": "Teilen Sie die Projektkosten in 3 Monatsraten auf.",
      "why4_h": "Live in Wochen, nicht Monaten",
      "why4_t": "Klare Zeitpläne, und Ihre neue Website geht schnell live.",
      "work_h": "Ausgewählte Projekte",
      "work_eb": "Live-Websites, Apps und Fallstudien",
      "live_website": "Live-Website",
      "case_study": "Fallstudie",
      "view_proto": "Prototyp ansehen ↗",
      "want_like": "So etwas möchte ich auch",
      "live_projects": "Live-Projekte",
      "svc_h": "Leistungen",
      "svc_eb": "Drei Leistungen und ein kostenloses Audit. Fester Umfang, Festpreis, Support nach dem Launch.",
      "excl_vat": "zzgl. MwSt.",
      "view_details_arrow": "Details ansehen ↗",
      "audit_badge": "Bonus · Kostenlos",
      "audit_h": "Kostenlose Beratung & Website-Audit",
      "audit_t": "Ein 30-minütiges Gespräch mit einem Senior Designer. Wir prüfen Ihre aktuelle Website oder Ihren Shop und erstellen ein kurzes schriftliches Audit: schnelle Verbesserungen bei UX, Geschwindigkeit und SEO, dazu ein empfohlener nächster Schritt und ein Festpreisangebot.",
      "free": "0 €",
      "min30": "30 Minuten",
      "audit_cta": "Kostenloses Audit anfragen",
      "pkg_eb": "Preise in EUR, zzgl. MwSt. Jedes Projekt beginnt mit einer kostenlosen Beratung und einem Festpreisangebot.",
      "most_popular": "Am beliebtesten",
      "sub_title": "Ihr Webstudio",
      "timeline": "Zeitrahmen",
      "get_quote": "Angebot anfordern",
      "sub_t": "Ein monatliches Abonnement für alle Arten von Aufgaben: Updates, neue Seiten und Landingpages, Banner und Kampagnengrafiken, Designänderungen, SEO, Produktpflege und bevorzugter Support. Mindestlaufzeit 3 Monate.",
      "about_h": "Über NOOMO",
      "about_eb": "Das Studio",
      "stat1": "Spezialisten",
      "stat2": "Jahre im Digitaldesign",
      "stat3": "Fester Umfang, Festpreis",
      "mission_eb": "Unsere Mission",
      "contact_h": "Sprechen wir über Ihr Projekt",
      "selected": "Ausgewählt",
      "f_service": "Leistung",
      "f_sub": "Abonnement",
      "f_budget": "Budgetrahmen (EUR, zzgl. MwSt.)",
      "f_message": "Nachricht",
      "sent_eb": "Anfrage gesendet",
      "sent_msg": "Vielen Dank, wir melden uns innerhalb von 24 Stunden.",
      "send_another": "Weitere Anfrage senden",
      "f_time": "Bevorzugte Uhrzeit",
      "slot_err": "Bitte wählen Sie ein Zeitfenster.",
      "f_topic": "Thema (optional)",
      "call_eb": "Rückruf angefragt",
      "call_another": "Weiteren Rückruf anfragen",
      "footer_copy": "© 2026 NOOMO",
      "close_x": "Schließen ✕",
      "who": "Für wen",
      "included": "Leistungsumfang",
      "how": "So läuft es ab",
      "addons": "Optionale Extras",
      "related": "Ähnliche Projekte",
      "popup_quote": "Angebot für diese Leistung anfragen",
      "close_esc": "Schließen · Esc",
      "like_eb": "Ich möchte etwas wie",
      "send_req": "Anfrage senden",
      "back_work": "← Zurück zu den Projekten",
      "about_body": "NOOMO ist ein designorientiertes Digitalstudio mit Hauptsitz in Aarhus, Dänemark, und Teams in Deutschland, Portugal, auf Teneriffa (Spanien) und in der Ukraine. Wir verbinden über 15 Jahre Erfahrung in UI/UX und Webdesign mit einem KI-gestützten Workflow. So erhalten Sie Design und Entwicklung auf Senior-Niveau, schneller und zum Festpreis. Wir arbeiten mit Händlern, Dienstleistern und Startups in ganz Europa.",
      "mission": "Wir machen professionelle digitale Produkte für wachsende Unternehmen zugänglich: klar, schnell und gebaut, um zu verkaufen.",
      "mission_acc": 5,
      "mission2": "Kein aufgeblähter Agenturprozess. Keine Templates, die als Maßarbeit verkauft werden. Nur ein fokussiertes Team, das liefert.",
      "contact_body": "Sagen Sie uns, was Sie brauchen. Die erste Beratung ist kostenlos, und innerhalb von 48 Stunden erhalten Sie ein klares Angebot zum Festpreis.",
      "ph_msg": "Beschreiben Sie kurz, was Sie brauchen",
      "ph_topic": "Worüber möchten Sie sprechen?",
      "err_pre": "Die Anfrage konnte nicht gesendet werden. Bitte versuchen Sie es erneut oder schreiben Sie uns an",
      "svc_word": "Leistung",
      "case_want": "Sie möchten ein Projekt wie",
      "aria_top": "NOOMO — nach oben",
      "aria_menu": "Menü",
      "aria_why": "Warum NOOMO",
      "aria_filter": "Projekte nach Leistung filtern",
      "aria_sub": "Ihr Webstudio",
      "aria_contact_opts": "Kontaktmöglichkeiten",
      "aria_remove": "Auswahl entfernen",
      "aria_close": "Schließen",
      "aria_back": "Zurück zu den Projekten",
      "lang_aria": "Sprache",
      "on_request": "Preis auf Anfrage",
      "cta_live": "Live-Website ansehen ↗",
      "cta_play": "Bei Google Play ansehen ↗",
      "aria_view_details": " — Details ansehen",
      "aria_open_case": "Fallstudie öffnen: ",
      "new_tab": " (öffnet in neuem Tab)",
      "no_fee": "Keine Monatsgebühr",
      "sub_fmt": "Ihr Webstudio: {name}",
      "tab_form": "Anfrage senden",
      "tab_call": "Rückruf anfragen",
      "submit": "Anfrage senden",
      "sending": "Wird gesendet…",
      "call_btn": "Rückruf anfragen",
      "call_msg": "Vielen Dank! Wir rufen Sie am {day} zwischen {from} und {to} Uhr an.",
      "like_msg": "Ich hätte gern etwas Ähnliches wie {name}.",
      "f_day": "Bevorzugter Tag",
      "day_ph": "Datum wählen",
      "err_day": "Bitte wählen Sie einen Werktag (Mo–Fr).",
      "prev_month": "Vorheriger Monat",
      "next_month": "Nächster Monat",
      "cat": {
        "web": "Unternehmenswebsites & Landingpages",
        "ecom": "E-Commerce",
        "apps": "MVP & Apps"
      },
      "blk": {
        "challenge": "Die Herausforderung",
        "solution": "Was wir gestaltet haben",
        "thinking": "Designansatz",
        "impact": "Ergebnis",
        "role": "Unsere Rolle",
        "note": "KI-gestützter Workflow"
      },
      "meta": {
        "Role": "Rolle",
        "Year": "Jahr",
        "Scope": "Umfang",
        "Platform": "Plattform",
        "Status": "Status",
        "Client": "Kunde",
        "Industry": "Branche",
        "Duration": "Dauer",
        "Team": "Team",
        "Location": "Standort",
        "Type": "Typ"
      },
      "store": {
        "Visit live site": "Live-Website öffnen",
        "Open app on Google Play": "App bei Google Play öffnen",
        "Open interactive prototype": "Interaktiven Prototyp öffnen"
      },
      "sub_names": {
        "Not included": "Kein Abonnement",
        "Basic": "Start",
        "Growth": "Stable",
        "Pro": "Full Web Studio"
      },
      "plural": [
        "Projekt",
        "Projekte"
      ],
      "ct": {
        "Email": "E-Mail",
        "Phone": "Telefon"
      },
      "svcOpts": {
        "ecom": "E-Commerce",
        "web": "Unternehmenswebsites & Landingpages",
        "apps": "MVP & App",
        "audit": "Kostenlose Beratung & Audit",
        "unsure": "Noch unsicher"
      },
      "f": {
        "name": "Name",
        "name_ph": "Ihr Name",
        "name_err": "Bitte geben Sie Ihren Namen an.",
        "company": "Unternehmen",
        "company_ph": "Name des Unternehmens",
        "email": "E-Mail",
        "email_ph": "name@firma.de",
        "email_err": "Bitte geben Sie eine gültige E-Mail-Adresse an.",
        "phone_opt": "Telefon (optional)",
        "phone": "Telefon",
        "phone_err": "Bitte geben Sie eine Telefonnummer an.",
        "email_opt": "E-Mail (optional)",
        "email_err2": "Bitte prüfen Sie die E-Mail-Adresse."
      },
      "months": [
        "Januar",
        "Februar",
        "März",
        "April",
        "Mai",
        "Juni",
        "Juli",
        "August",
        "September",
        "Oktober",
        "November",
        "Dezember"
      ],
      "wd": [
        "Mo",
        "Di",
        "Mi",
        "Do",
        "Fr",
        "Sa",
        "So"
      ],
      "care": {
        "Basic": [
          "Bis zu 10 Arbeitsstunden pro Monat",
          "Kleine Änderungen und Verbesserungen",
          "Anpassungen an Texten, Bildern und Design",
          "Asynchron per Slack oder E-Mail"
        ],
        "Growth": [
          "Bis zu 25 Arbeitsstunden pro Monat",
          "Alles aus Start",
          "Regelmäßige Updates",
          "Design- und Entwicklungsaufgaben",
          "Parallele Aufgaben"
        ],
        "Pro": [
          "Bis zu 48 Arbeitsstunden pro Monat",
          "Alles aus Stable",
          "Arbeit an Ihren weiteren Websites",
          "Aufgaben jeder Art",
          "Bevorzugter Support"
        ]
      },
      "svc": {
        "ecom": {
          "title": "E-Commerce",
          "pkgTitle": "Onlineshop",
          "desc": "Onlineshops und Lebensmittelshops auf Shopify, inklusive Produktpflege und laufendem Support.",
          "priceSub": "Zzgl. MwSt.",
          "timeline": "4–6 Wochen",
          "who": "Händler, Lebensmittel- und Fachgeschäfte, die online verkaufen oder eine langsame Plattform verlassen möchten. Ideal, wenn Ihr Sortiment steht und Sie einen Shop brauchen, den Ihr Team im Alltag selbst führen kann.",
          "pkgItems": [
            "Shopify-Einrichtung und individuelles Theme-Design",
            "Bis zu 50 Produkte eingepflegt",
            "Zahlungen (Karte, Apple Pay, Google Pay)",
            "Versand- und EU-MwSt.-Einstellungen",
            "Mobile-first-Design",
            "Basis-SEO und Analytics",
            "Schulung"
          ],
          "includes": [
            "Shopify-Einrichtung und individuelles Theme-Design",
            "Bis zu 50 Produkte eingepflegt",
            "Zahlungen (Karte, Apple Pay, Google Pay)",
            "Versand- und EU-MwSt.-Einstellungen",
            "Mobile-first-Design",
            "Basis-SEO",
            "Analytics",
            "Schulung"
          ],
          "steps": [
            [
              "Analyse",
              "Wir erfassen Sortiment, Zahlungsarten, Versand und MwSt.-Einstellungen."
            ],
            [
              "Design",
              "Ein individuelles Shopify-Theme, mobile-first gestaltet."
            ],
            [
              "Umsetzung",
              "Shop-Einrichtung, Produktpflege, Zahlungen und Analytics."
            ],
            [
              "Launch & Support",
              "Schulung, Go-live und auf Wunsch ein Webstudio-Abonnement."
            ]
          ],
          "addons": [
            "Weitere 50 Produkte",
            "Mehrsprachiger Shop",
            "Integrationen (ERP, Kasse, Buchhaltung)",
            "Produktfotos / KI-Visuals"
          ]
        },
        "web": {
          "title": "Unternehmenswebsites & Landingpages",
          "pkgTitle": "Unternehmenswebsite & Landingpage",
          "desc": "Unternehmenswebsites, Landingpages und Kampagnenseiten, die klar zeigen, was Sie tun, und Anfragen bringen.",
          "priceSub": "Zzgl. MwSt. · Landingpage",
          "altPre": "Unternehmenswebsite ",
          "timeline": "2–4 Wochen",
          "who": "Dienstleister, B2B-Zulieferer und Marketingteams, die eine Kampagne oder ein neues Angebot starten. Für Unternehmen, deren aktuelle Website nicht mehr erklärt, was sie tun.",
          "pkgItems": [
            "UX-Struktur und Textberatung",
            "Individuelles Design",
            "Bis zu 6 Seiten (Unternehmenswebsite) oder 1 Long-Scroll-Seite (Landingpage)",
            "CMS",
            "Kontaktformulare",
            "SEO-Einrichtung",
            "Hosting-Einrichtung und Veröffentlichung"
          ],
          "steps": [
            [
              "Analyse",
              "Ziele, Zielgruppe und die Seiten, die Sie wirklich brauchen."
            ],
            [
              "Struktur & Design",
              "Sitemap, Textberatung und ein individuelles Design."
            ],
            [
              "Umsetzung",
              "CMS, Formulare und SEO, auf allen Bildschirmen getestet."
            ],
            [
              "Launch & Support",
              "Hosting, Veröffentlichung und Support nach dem Launch."
            ]
          ],
          "addons": [
            "Zusätzliche Seite",
            "Texterstellung",
            "Mehrsprachigkeit"
          ]
        },
        "apps": {
          "title": "MVP-Apps & Startups",
          "pkgTitle": "MVP-App & Startup",
          "desc": "Klickbare Prototypen und startklare MVPs für Gründer, die testen, pitchen oder launchen wollen.",
          "priceSub": "Zzgl. MwSt.",
          "timeline": "Ab 14-tägigem MVP-Sprint",
          "who": "Gründer und Innovationsteams, die eine Idee mit echten Nutzern testen oder Investoren ein funktionierendes Produkt zeigen möchten. Auch für Unternehmen, die einen neuen digitalen Service einführen.",
          "pkgItems": [
            "Discovery-Workshop",
            "User Flows",
            "Klickbarer Prototyp",
            "UI-Designsystem",
            "Frontend-Umsetzung des MVP",
            "Demo für Investoren",
            "Übergabe oder Weiterentwicklung"
          ],
          "steps": [
            [
              "Discovery-Workshop",
              "Das Problem, die Nutzer und das kleinste Produkt, das sich lohnt."
            ],
            [
              "Flows & Prototyp",
              "User Flows und ein klickbarer Prototyp für frühe Tests."
            ],
            [
              "Design & Umsetzung",
              "Ein UI-Designsystem und ein Frontend-MVP."
            ],
            [
              "Demo & Übergabe",
              "Eine investorenreife Demo, danach Übergabe oder Weiterentwicklung."
            ]
          ],
          "addons": [
            "Zusätzlicher User Flow",
            "Backend- / Datenbank-Einrichtung",
            "Laufende Entwicklungssprints"
          ]
        }
      },
      "boot_eb": "Studio wird geladen",
      "hint_scroll": "Scrollen Sie weiter",
      "hint_hover": "Für Vorschau darüberfahren",
      "hint_click": "Zum Öffnen klicken",
      "boot_steps": [
        "Raster initialisieren",
        "Briefing laden",
        "Struktur planen",
        "Typografie festlegen",
        "Wireframes zeichnen",
        "Am Raster ausrichten",
        "Designsystem anwenden",
        "Interaktionen verknüpfen",
        "QA durchführen",
        "Live schalten"
      ],
      "menu": "Menü",
      "m_welcome": "Willkommen bei NOOMO",
      "m_type": "Typ",
      "m_focus": "Fokus",
      "m_loc": "Standort",
      "m_loc_v": "Aarhus, Dänemark (HQ)",
      "theme_aria": "Dunkelmodus",
      "sb_ps": "Pro Monat · zzgl. MwSt. · jederzeit pausieren oder kündigen",
      "sb_msg": "Hallo NOOMO, ich interessiere mich für das Abonnement {plan}.",
      "sb_slots": "Aufgaben gleichzeitig",
      "start_from": "Einstiegspreis",
      "b2b_h": "Für Unternehmen & Agenturen",
      "b2b_p": "Für Unternehmen und Agenturen, die dauerhaft zusammenarbeiten möchten: Wählen Sie das Full Web Studio (290 €/Monat, bis zu 48 Stunden) oder wir vereinbaren individuelle Konditionen für größere Volumen.",
      "b2b_items": [
        "White-Label für Agenturen",
        "Festes Team für Ihr Produkt",
        "NDA, Vertrag und monatliche Abrechnung",
        "Gemeinsames Slack, Jira oder Linear",
        "Designsystem und Code-Übergabe",
        "Priorisierte SLA und fester Ansprechpartner"
      ],
      "b2b_pl": "Empfohlener Plan",
      "b2b_price": "Full Web Studio · 290 €/Monat",
      "b2b_ps": "Bis zu 48 Stunden · oder individuelle Konditionen",
      "b2b_cta": "Zusammenarbeit besprechen",
      "b2b_msg": "Hallo NOOMO, wir sind ein Unternehmen / eine Agentur und möchten eine dauerhafte Zusammenarbeit besprechen.",
      "subtiers": {
        "start": {
          "name": "Start",
          "desc": "Für kleine Änderungen und Verbesserungen an Ihrer Website.",
          "tl": "48 Std. pro Aufgabe",
          "items": [
            "Unbegrenzte Korrekturen",
            "1 Aufgabe gleichzeitig",
            "Jederzeit pausieren oder kündigen",
            "Asynchron per Slack oder E-Mail"
          ]
        },
        "stable": {
          "name": "Stable",
          "desc": "Regelmäßige Updates, Design- und Entwicklungsaufgaben.",
          "tl": "48 Std. pro Aufgabe",
          "items": [
            "Unbegrenzte Korrekturen",
            "2 Aufgaben parallel",
            "Jederzeit pausieren oder kündigen",
            "Asynchron per Slack oder E-Mail"
          ]
        },
        "full": {
          "name": "Full Web Studio",
          "desc": "Ihr komplettes Webstudio: Verbesserungen an Ihrer Website, Arbeit an Ihren weiteren Websites, Aufgaben jeder Art.",
          "tl": "24–48 Std. pro Aufgabe",
          "items": [
            "Unbegrenzte Korrekturen",
            "3 Aufgaben parallel",
            "Jederzeit pausieren oder kündigen",
            "Asynchron per Slack oder E-Mail",
            "Bevorzugter Support"
          ]
        }
      },
      "sub_line": "Abonnement für Aufgaben jeder Art",
      "sub_opt": "Optionales Extra",
      "care_h": {
        "Basic": "Bis zu 10 Std. / Monat",
        "Growth": "Bis zu 25 Std. / Monat",
        "Pro": "Bis zu 48 Std. / Monat"
      },
      "studio_q": "Sie haben bereits eine Website?",
      "studio_t": "Ihr eigenes Webstudio ab {price}.",
      "studio_cta": "Plan wählen",
      "studio_msg": "Hallo NOOMO, ich habe bereits eine Website und interessiere mich für ein Webstudio-Abonnement.",
      "inst_line": "oder 3 × {price}/Monat",
      "f_pay": "Zahlung (optional)",
      "pay": {
        "full": "Einmalzahlung",
        "inst": "Ratenzahlung (bis zu 3 Monate)"
      },
      "cta_services": "Leistungen ansehen",
      "cta_studio": "Ihr eigenes Webstudio ab 99 €/Monat",
      "svc_note": "Festpreis. Zahlung auf einmal oder in bis zu 3 Monatsraten.",
      "sb_hrs": "Bis zu {h} Stunden pro Monat",
      "b2b_cta2": "Full Web Studio wählen",
      "loc_h": "Unsere Standorte",
      "loc_line": "Hauptsitz in Aarhus, Dänemark · Teams in Deutschland, Portugal, auf Teneriffa (Spanien) und in der Ukraine",
      "locs": [
        {
          "n": "Dänemark",
          "c": "Aarhus",
          "hq": true
        },
        {
          "n": "Deutschland"
        },
        {
          "n": "Portugal"
        },
        {
          "n": "Teneriffa",
          "c": "Spanien"
        },
        {
          "n": "Ukraine"
        }
      ],
      "cases": {
        "Mintra": {
          "sub": "Schnelle psychische Entlastung und tägliche mentale Erholung",
          "desc": "Eine tägliche 5–10-Minuten-App für mentale Erholung: Angstlinderung, Schlaftracking, Affirmationen und Atemübungen, aufgebaut rund um die Funktion Brain Dump."
        },
        "Poshuk": {
          "sub": "Schnelle Fernunterstützung bei der Suche nach Vermissten in der Ukraine",
          "desc": "Ein geführter Ablauf in 3 Schritten, der versandfertige Anfragen und eine QR-Suchkarte erstellt, die jeder scannen und beantworten kann."
        },
        "Gym App": {
          "sub": "KI-Fitnesscoach und Plattform für persönliches Training",
          "desc": "Eine von Grund auf entwickelte iOS-Fitnessplattform im dunklen Look. Die KI erstellt persönliche 14-Tage-Trainingspläne passend zu Ziel und Fitnesslevel."
        },
        "iFranko": {
          "sub": "Redesign eines Apple-Onlineshops",
          "desc": "Ein komplettes Redesign des iFranko-Shops mit einem dunklen, produktorientierten System, dauerhafter Kategorienavigation und Produktseiten, die mit Bildern und den wichtigsten Daten beginnen."
        },
        "Swiss Insurance": {
          "desc": "Eine schnelle, intuitive KI-Oberfläche, die komplexe Altsystem-Logik und mehrstufige Formulare in einen klaren 2-Minuten-Ablauf verwandelt, ohne die Compliance zu verlieren."
        },
        "Interactive Social Game Up": {
          "desc": "Schnelles Onboarding und verständliche soziale Mechaniken, die Spieler in Sekunden in ein Live-Spiel bringen."
        },
        "Community App & Site for African Repatriates": {
          "head": "Community-App und Website für afrikanische Rückkehrer",
          "desc": "Eine Community-Plattform, die Dating, Freundschaft und Business-Networking in einem Ökosystem vereint, mit einem Profil für alle drei Zwecke."
        },
        "Sefer": {
          "sub": "Musik-Community für Talentsuche und Zusammenarbeit",
          "desc": "Eine Musik-Community rund um ein öffentliches Künstlerprofil, das als echtes Portfolio dient: Tracks, Credits, Stil und Verfügbarkeit an einem Ort."
        },
        "NxtShop": {
          "sub": "Beauty-App mit AR-Anprobe",
          "desc": "Eine Beauty-Shopping-App mit AR-Anprobe: Nutzer testen Make-up in Echtzeit am eigenen Gesicht, bevor sie kaufen."
        },
        "DPlab": {
          "sub": "Redesign der Website einer Digitalagentur, Vilnius",
          "desc": "Redesign der Website einer Digitalagentur in Vilnius: Design, Webentwicklung, Marketing und SEO."
        },
        "Defend & Carry": {
          "sub": "Onlineshop für taktische Ausrüstung und Optik",
          "desc": "Ein Onlineshop für Sportoptik, taktische und militärische Ausrüstung, Jagdbekleidung und Brillen."
        },
        "AGM Global Vision": {
          "sub": "E-Commerce-Plattform für Verteidigungstechnik",
          "desc": "Eine E-Commerce-Plattform für einen US-Anbieter von Wärmebild- und Nachtsichtgeräten sowie Verteidigungstechnik."
        },
        "Unifood": {
          "sub": "Redesign der Website unifood.dk",
          "desc": "Ein katalogorientiertes Redesign für Unifood Import A/S, einen dänischen Lebensmittelgroßhändler mit über 1.400 Produkten. Kunden finden ein Produkt mit zwei Klicks und senden ihre Abholbestellung."
        },
        "Kortical": {
          "sub": "Website-Redesign",
          "desc": "Wir haben die Startseite für AI Agents auf Desktop und Mobil neu gestaltet, dazu das mobile Menü, die 404-Seite und ein gemeinsames Designsystem."
        },
        "Laurie Handlers": {
          "sub": "Website-Redesign für eine Rednerin und Autorin zum Thema Intimität",
          "desc": "Ein dunkles, filmisches Redesign der Website einer internationalen Rednerin und Bestsellerautorin zu Intimität und Beziehungen."
        },
        "Subflow": {
          "sub": "Abo-App für Creator",
          "desc": "Eine mobile Plattform, auf der Creator Abonnements für ihre Inhalte, Kurse und Communitys verkaufen."
        },
        "Georg Jensen": {
          "sub": "Konzept für einen mobilen Shop",
          "desc": "Ein freies Konzept für einen mobilen Georg-Jensen-Shop, aufgebaut rund um handgefertigtes 18-Karat-Gold und zertifizierte, nachhaltige Diamanten."
        },
        "Ayvens": {
          "sub": "Konzept für eine Gebrauchtwagen-Seite",
          "desc": "Ein Produktseiten-Konzept für Ayvens-Gebrauchtwagen, das den gesamten Kauf in einem ruhigen Scroll abbildet."
        }
      },
      "svc_more": "Details ansehen →",
      "audit_b": [
        "Prüfung von UX, Tempo und SEO",
        "Kurzes schriftliches Audit",
        "Festpreisangebot"
      ]
    },
    pt: {
      "mc_eb": "Escreva-nos",
      "mc_hint": "Abre com o assunto e a mensagem já preenchidos",
      "mc_app": "App de email",
      "mc_copy": "Copiar email",
      "mc_subj": "Assunto",
      "su_p": "Pedido de projeto: algo como {name}",
      "bo_p": "Olá NOOMO, gostaria de um projeto semelhante a {name}. Sobre a minha empresa: ",
      "su_y": "Novo pedido de projeto ({cat})",
      "bo_y": "Olá NOOMO, gostaria de falar sobre um novo projeto de {cat}. Sobre a minha empresa: ",
      "su_g": "Pedido através de noomo.dk",
      "your_project": "O seu projeto",
      "your_sub": "Vamos construí-lo juntos",
      "nav_work": "Projetos",
      "nav_services": "Serviços",
      "pkg": "Subscrição",
      "nav_about": "Sobre nós",
      "nav_contact": "Contacto",
      "nav_book": "Consulta gratuita",
      "cursor_more": "Ver mais",
      "hero_eb": "Estúdio digital para B2B · Europa",
      "hero_1": "Lojas online.",
      "hero_2": "Sites & landing pages.",
      "hero_3": "Apps.",
      "hero_tag": "Entregue a tempo, a preço fixo.",
      "why1_h": "Pacotes a preço fixo",
      "why1_t": "Sabe o custo total antes de começarmos, sem extras.",
      "why2_h": "O seu estúdio web por subscrição",
      "why2_t": "Uma mensalidade para atualizações e pequenas tarefas.",
      "why3_h": "Pagamento em prestações",
      "why3_t": "Divida o custo do projeto em 3 pagamentos mensais.",
      "why4_h": "Lançamento em semanas, não meses",
      "why4_t": "Prazos claros, e o seu novo site fica online depressa.",
      "work_h": "Projetos selecionados",
      "work_eb": "Sites online, apps e casos de estudo",
      "live_website": "Site online",
      "case_study": "Caso de estudo",
      "view_proto": "Ver protótipo ↗",
      "want_like": "Quero algo assim",
      "live_projects": "Projetos online",
      "svc_h": "Serviços",
      "svc_eb": "Três serviços e uma auditoria gratuita. Âmbito fixo, preço fixo, apoio após o lançamento.",
      "excl_vat": "+ IVA",
      "view_details_arrow": "Ver detalhes ↗",
      "audit_badge": "Bónus · Grátis",
      "audit_h": "Consulta gratuita & auditoria do site",
      "audit_t": "Uma sessão de 30 minutos com um designer sénior. Analisamos o seu site ou loja atual e entregamos uma breve auditoria escrita: melhorias rápidas de UX, velocidade e SEO, com o próximo passo recomendado e uma proposta a preço fixo.",
      "free": "0 €",
      "min30": "30 minutos",
      "audit_cta": "Pedir auditoria gratuita",
      "pkg_eb": "Preços em EUR, + IVA. Cada projeto começa com uma consulta gratuita e uma proposta a preço fixo.",
      "most_popular": "Mais popular",
      "sub_title": "O seu estúdio web",
      "timeline": "Prazo",
      "get_quote": "Pedir orçamento",
      "sub_t": "Uma subscrição mensal para qualquer tipo de trabalho: atualizações, novas páginas e landing pages, banners e grafismo para campanhas, alterações de design, SEO, carregamento de produtos e apoio prioritário. Mínimo de 3 meses.",
      "about_h": "Sobre a NOOMO",
      "about_eb": "O estúdio",
      "stat1": "Especialistas",
      "stat2": "Anos em design digital",
      "stat3": "Âmbito fixo, preço fixo",
      "mission_eb": "A nossa missão",
      "contact_h": "Vamos falar sobre o seu projeto",
      "selected": "Selecionado",
      "f_service": "Serviço",
      "f_sub": "Subscrição",
      "f_budget": "Orçamento (EUR, + IVA)",
      "f_message": "Mensagem",
      "sent_eb": "Pedido enviado",
      "sent_msg": "Obrigado, respondemos no prazo de 24 horas.",
      "send_another": "Enviar outro pedido",
      "f_time": "Horário preferido",
      "slot_err": "Escolha um horário, por favor.",
      "f_topic": "Tema (opcional)",
      "call_eb": "Chamada pedida",
      "call_another": "Pedir outra chamada",
      "footer_copy": "© 2026 NOOMO",
      "close_x": "Fechar ✕",
      "who": "Para quem é",
      "included": "O que inclui",
      "how": "Como funciona",
      "addons": "Extras opcionais",
      "related": "Projetos relacionados",
      "popup_quote": "Pedir orçamento para este serviço",
      "close_esc": "Fechar · Esc",
      "like_eb": "Quero algo como",
      "send_req": "Enviar pedido",
      "back_work": "← Voltar aos projetos",
      "about_body": "A NOOMO é um estúdio digital orientado pelo design, com sede em Aarhus, na Dinamarca, e equipas na Alemanha, em Portugal, em Tenerife (Espanha) e na Ucrânia. Juntamos mais de 15 anos de experiência em UI/UX e web design a um processo apoiado por IA, para que tenha design e desenvolvimento de nível sénior, mais rápido e a preço fixo. Trabalhamos com retalhistas, empresas de serviços e startups em toda a Europa.",
      "mission": "Tornamos os produtos digitais profissionais acessíveis a empresas em crescimento: claros, rápidos e feitos para vender.",
      "mission_acc": 5,
      "mission2": "Sem processos de agência pesados. Sem templates vendidos como trabalho à medida. Apenas uma equipa focada que entrega.",
      "contact_body": "Diga-nos do que precisa. A primeira consulta é gratuita e recebe uma proposta clara a preço fixo no prazo de 48 horas.",
      "ph_msg": "Conte-nos do que precisa",
      "ph_topic": "Sobre o que gostaria de falar?",
      "err_pre": "Não foi possível enviar o pedido. Tente novamente ou escreva-nos para",
      "svc_word": "Serviço",
      "case_want": "Quer um projeto como",
      "aria_top": "NOOMO — voltar ao topo",
      "aria_menu": "Menu",
      "aria_why": "Porquê a NOOMO",
      "aria_filter": "Filtrar projetos por serviço",
      "aria_sub": "O seu estúdio web",
      "aria_contact_opts": "Opções de contacto",
      "aria_remove": "Remover seleção",
      "aria_close": "Fechar",
      "aria_back": "Voltar aos projetos",
      "lang_aria": "Idioma",
      "on_request": "Preço sob consulta",
      "cta_live": "Ver site online ↗",
      "cta_play": "Ver no Google Play ↗",
      "aria_view_details": " — ver detalhes",
      "aria_open_case": "Abrir caso de estudo: ",
      "new_tab": " (abre num novo separador)",
      "no_fee": "Sem mensalidade",
      "sub_fmt": "O seu estúdio web: {name}",
      "tab_form": "Enviar pedido",
      "tab_call": "Pedir chamada",
      "submit": "Enviar pedido",
      "sending": "A enviar…",
      "call_btn": "Pedir chamada",
      "call_msg": "Obrigado! Ligamos-lhe {day}, entre as {from} e as {to}.",
      "like_msg": "Gostaria de algo semelhante a {name}.",
      "f_day": "Dia preferido",
      "day_ph": "Escolha uma data",
      "err_day": "Escolha um dia útil (seg.–sex.).",
      "prev_month": "Mês anterior",
      "next_month": "Mês seguinte",
      "cat": {
        "web": "Sites institucionais & landing pages",
        "ecom": "E-commerce",
        "apps": "MVP & apps"
      },
      "blk": {
        "challenge": "O desafio",
        "solution": "O que desenhámos",
        "thinking": "Abordagem de design",
        "impact": "Impacto",
        "role": "O nosso papel",
        "note": "Processo apoiado por IA"
      },
      "meta": {
        "Role": "Função",
        "Year": "Ano",
        "Scope": "Âmbito",
        "Platform": "Plataforma",
        "Status": "Estado",
        "Client": "Cliente",
        "Industry": "Setor",
        "Duration": "Duração",
        "Team": "Equipa",
        "Location": "Localização",
        "Type": "Tipo"
      },
      "store": {
        "Visit live site": "Abrir site online",
        "Open app on Google Play": "Abrir app no Google Play",
        "Open interactive prototype": "Abrir protótipo interativo"
      },
      "sub_names": {
        "Not included": "Sem subscrição",
        "Basic": "Start",
        "Growth": "Stable",
        "Pro": "Full Web Studio"
      },
      "plural": [
        "projeto",
        "projetos"
      ],
      "ct": {
        "Email": "Email",
        "Phone": "Telefone"
      },
      "svcOpts": {
        "ecom": "E-commerce",
        "web": "Sites institucionais & landing pages",
        "apps": "MVP & app",
        "audit": "Consulta gratuita & auditoria",
        "unsure": "Ainda não sei"
      },
      "f": {
        "name": "Nome",
        "name_ph": "O seu nome",
        "name_err": "Indique o seu nome, por favor.",
        "company": "Empresa",
        "company_ph": "Nome da empresa",
        "email": "Email",
        "email_ph": "nome@empresa.pt",
        "email_err": "Indique um email válido, por favor.",
        "phone_opt": "Telefone (opcional)",
        "phone": "Telefone",
        "phone_err": "Indique um número de telefone, por favor.",
        "email_opt": "Email (opcional)",
        "email_err2": "Verifique o endereço de email, por favor."
      },
      "months": [
        "janeiro",
        "fevereiro",
        "março",
        "abril",
        "maio",
        "junho",
        "julho",
        "agosto",
        "setembro",
        "outubro",
        "novembro",
        "dezembro"
      ],
      "wd": [
        "Seg",
        "Ter",
        "Qua",
        "Qui",
        "Sex",
        "Sáb",
        "Dom"
      ],
      "care": {
        "Basic": [
          "Até 10 horas de trabalho por mês",
          "Pequenas alterações e melhorias",
          "Ajustes de texto, imagem e design",
          "Assíncrono via Slack ou email"
        ],
        "Growth": [
          "Até 25 horas de trabalho por mês",
          "Tudo do Start",
          "Atualizações regulares",
          "Tarefas de design e desenvolvimento",
          "Tarefas em paralelo"
        ],
        "Pro": [
          "Até 48 horas de trabalho por mês",
          "Tudo do Stable",
          "Trabalho nos seus outros sites",
          "Qualquer tipo de tarefa",
          "Apoio prioritário"
        ]
      },
      "svc": {
        "ecom": {
          "title": "E-commerce",
          "pkgTitle": "Loja online",
          "desc": "Lojas online e mercearias em Shopify, com carregamento de produtos e apoio contínuo.",
          "priceSub": "+ IVA",
          "timeline": "4–6 semanas",
          "who": "Retalhistas, mercearias e lojas especializadas que querem vender online ou sair de uma plataforma lenta. Ideal quando já tem o catálogo pronto e precisa de uma loja que a sua equipa consiga gerir no dia a dia.",
          "pkgItems": [
            "Configuração Shopify e tema personalizado",
            "Até 50 produtos carregados",
            "Pagamentos (cartão, Apple Pay, Google Pay)",
            "Configuração de envios e IVA da UE",
            "Design mobile-first",
            "SEO básico e analytics",
            "Sessão de formação"
          ],
          "includes": [
            "Configuração Shopify e tema personalizado",
            "Até 50 produtos carregados",
            "Pagamentos (cartão, Apple Pay, Google Pay)",
            "Configuração de envios e IVA da UE",
            "Design mobile-first",
            "SEO básico",
            "Analytics",
            "Sessão de formação"
          ],
          "steps": [
            [
              "Análise",
              "Mapeamos o catálogo, pagamentos, envios e configuração do IVA."
            ],
            [
              "Design",
              "Um tema Shopify personalizado, pensado mobile-first."
            ],
            [
              "Desenvolvimento",
              "Configuração da loja, produtos, pagamentos e analytics."
            ],
            [
              "Lançamento & apoio",
              "Formação, lançamento e, se quiser, a subscrição do seu estúdio web."
            ]
          ],
          "addons": [
            "Mais 50 produtos",
            "Loja multilíngue",
            "Integrações (ERP, POS, contabilidade)",
            "Fotografia de produto / visuais com IA"
          ]
        },
        "web": {
          "title": "Sites institucionais & landing pages",
          "pkgTitle": "Site institucional & landing page",
          "desc": "Sites de empresa, landing pages e sites de campanha que explicam o que faz e trazem contactos.",
          "priceSub": "+ IVA · Landing page",
          "altPre": "Site institucional ",
          "timeline": "2–4 semanas",
          "who": "Empresas de serviços, fornecedores B2B e equipas de marketing a lançar uma campanha ou uma nova oferta. Para empresas cujo site atual já não explica o que fazem.",
          "pkgItems": [
            "Estrutura UX e orientação de textos",
            "Design personalizado",
            "Até 6 páginas (institucional) ou 1 página longa (landing)",
            "CMS",
            "Formulários de contacto",
            "Configuração de SEO",
            "Configuração de alojamento e publicação"
          ],
          "steps": [
            [
              "Análise",
              "Objetivos, público e as páginas de que realmente precisa."
            ],
            [
              "Estrutura & design",
              "Mapa do site, orientação de textos e um design personalizado."
            ],
            [
              "Desenvolvimento",
              "CMS, formulários e SEO, testados em todos os ecrãs."
            ],
            [
              "Lançamento & apoio",
              "Alojamento, publicação e apoio após o lançamento."
            ]
          ],
          "addons": [
            "Página extra",
            "Copywriting",
            "Multilíngue"
          ]
        },
        "apps": {
          "title": "Apps MVP & startups",
          "pkgTitle": "App MVP & startup",
          "desc": "Protótipos clicáveis e MVPs prontos a lançar para fundadores que precisam de testar, apresentar ou lançar.",
          "priceSub": "+ IVA",
          "timeline": "A partir de um sprint MVP de 14 dias",
          "who": "Fundadores e equipas de inovação que precisam de testar uma ideia com utilizadores reais ou mostrar um produto funcional a investidores. Também para empresas que lançam um novo serviço digital.",
          "pkgItems": [
            "Workshop de discovery",
            "User flows",
            "Protótipo clicável",
            "Design system de UI",
            "Desenvolvimento front-end do MVP",
            "Demo para investidores",
            "Entrega ou desenvolvimento contínuo"
          ],
          "steps": [
            [
              "Workshop de discovery",
              "O problema, os utilizadores e o menor produto que vale a pena construir."
            ],
            [
              "Flows & protótipo",
              "User flows e um protótipo clicável para testar cedo."
            ],
            [
              "Design & desenvolvimento",
              "Um design system de UI e um MVP front-end."
            ],
            [
              "Demo & entrega",
              "Uma demo pronta para investidores e, depois, entrega ou desenvolvimento contínuo."
            ]
          ],
          "addons": [
            "User flow extra",
            "Configuração de backend / base de dados",
            "Sprints de desenvolvimento contínuo"
          ]
        }
      },
      "boot_eb": "A carregar o estúdio",
      "hint_scroll": "Deslize para continuar",
      "hint_hover": "Passe o cursor para pré-visualizar",
      "hint_click": "Clique para abrir",
      "boot_steps": [
        "Iniciar grelha",
        "Carregar briefing",
        "Mapear estrutura",
        "Definir tipografia",
        "Desenhar wireframes",
        "Alinhar à grelha",
        "Aplicar design system",
        "Ligar interações",
        "Executar QA",
        "Publicar"
      ],
      "menu": "Menu",
      "m_welcome": "Bem-vindo à NOOMO",
      "m_type": "Tipo",
      "m_focus": "Foco",
      "m_loc": "Localização",
      "m_loc_v": "Aarhus, Dinamarca (sede)",
      "theme_aria": "Modo escuro",
      "sb_ps": "Por mês · + IVA · pause ou cancele quando quiser",
      "sb_msg": "Olá NOOMO, tenho interesse na subscrição {plan}.",
      "sb_slots": "Tarefas em simultâneo",
      "start_from": "Preço inicial",
      "b2b_h": "Para empresas & agências",
      "b2b_p": "Para empresas e agências que querem trabalhar connosco de forma contínua: escolha o Full Web Studio (290 €/mês, até 48 horas) ou acordamos condições à medida para volumes maiores.",
      "b2b_items": [
        "White-label para agências",
        "Equipa dedicada ao seu produto",
        "NDA, contrato e faturação mensal",
        "Slack, Jira ou Linear partilhados",
        "Design system e entrega de código",
        "SLA prioritário e contacto fixo"
      ],
      "b2b_pl": "Plano recomendado",
      "b2b_price": "Full Web Studio · 290 €/mês",
      "b2b_ps": "Até 48 horas · ou condições à medida",
      "b2b_cta": "Falar sobre colaboração",
      "b2b_msg": "Olá NOOMO, somos uma empresa/agência e gostaríamos de falar sobre uma colaboração contínua.",
      "subtiers": {
        "start": {
          "name": "Start",
          "desc": "Para pequenas alterações e melhorias no seu site.",
          "tl": "48 h por tarefa",
          "items": [
            "Revisões ilimitadas",
            "1 tarefa de cada vez",
            "Pause ou cancele quando quiser",
            "Assíncrono via Slack ou email"
          ]
        },
        "stable": {
          "name": "Stable",
          "desc": "Atualizações regulares, tarefas de design e desenvolvimento.",
          "tl": "48 h por tarefa",
          "items": [
            "Revisões ilimitadas",
            "2 tarefas em paralelo",
            "Pause ou cancele quando quiser",
            "Assíncrono via Slack ou email"
          ]
        },
        "full": {
          "name": "Full Web Studio",
          "desc": "O seu estúdio web completo: melhorias no seu site, trabalho nos seus outros sites, qualquer tipo de tarefa.",
          "tl": "24–48 h por tarefa",
          "items": [
            "Revisões ilimitadas",
            "3 tarefas em paralelo",
            "Pause ou cancele quando quiser",
            "Assíncrono via Slack ou email",
            "Apoio prioritário"
          ]
        }
      },
      "sub_line": "Subscrição para qualquer tipo de trabalho",
      "sub_opt": "Extra opcional",
      "care_h": {
        "Basic": "Até 10 h / mês",
        "Growth": "Até 25 h / mês",
        "Pro": "Até 48 h / mês"
      },
      "studio_q": "Já tem um site?",
      "studio_t": "O seu próprio estúdio web desde {price}.",
      "studio_cta": "Escolher plano",
      "studio_msg": "Olá NOOMO, já tenho um site e tenho interesse na subscrição do estúdio web.",
      "inst_line": "ou 3 × {price}/mês",
      "f_pay": "Pagamento (opcional)",
      "pay": {
        "full": "Pagamento único",
        "inst": "Em prestações (até 3 meses)"
      },
      "cta_services": "Ver serviços",
      "cta_studio": "O seu próprio estúdio web desde 99 €/mês",
      "svc_note": "Preço fixo. Pague de uma vez ou em até 3 pagamentos mensais.",
      "sb_hrs": "Até {h} horas por mês",
      "b2b_cta2": "Escolher Full Web Studio",
      "loc_h": "As nossas localizações",
      "loc_line": "Sede em Aarhus, Dinamarca · Equipas na Alemanha, em Portugal, em Tenerife (Espanha) e na Ucrânia",
      "locs": [
        {
          "n": "Dinamarca",
          "c": "Aarhus",
          "hq": true
        },
        {
          "n": "Alemanha"
        },
        {
          "n": "Portugal"
        },
        {
          "n": "Tenerife",
          "c": "Espanha"
        },
        {
          "n": "Ucrânia"
        }
      ],
      "cases": {
        "Mintra": {
          "sub": "Alívio psicológico rápido e recuperação mental diária",
          "desc": "Uma app diária de 5–10 minutos para recuperação mental: alívio da ansiedade, registo do sono, afirmações e exercícios de respiração, construída em torno da funcionalidade Brain Dump."
        },
        "Poshuk": {
          "sub": "Apoio remoto e rápido na procura de pessoas desaparecidas na Ucrânia",
          "desc": "Um fluxo guiado em 3 passos que gera pedidos prontos a enviar e um cartão de busca com QR que qualquer pessoa pode ler e responder."
        },
        "Gym App": {
          "sub": "Treinador de fitness com IA e plataforma de treino personalizado",
          "desc": "Uma plataforma de fitness para iOS com estética escura, criada de raiz. A IA cria planos de treino personalizados de 14 dias, adaptados ao objetivo e ao nível de cada utilizador."
        },
        "iFranko": {
          "sub": "Redesign de uma loja online Apple",
          "desc": "Um redesign completo da loja iFranko com um sistema escuro centrado no produto, navegação por categorias sempre visível e páginas de produto que começam pelas imagens e pelas características principais."
        },
        "Swiss Insurance": {
          "desc": "Uma interface com IA, rápida e intuitiva, que transformou lógica antiga complexa e formulários de vários passos num fluxo claro de 2 minutos, sem perder conformidade."
        },
        "Interactive Social Game Up": {
          "desc": "Onboarding rápido e mecânicas sociais claras que levam os jogadores a um jogo ao vivo em segundos."
        },
        "Community App & Site for African Repatriates": {
          "head": "App e site de comunidade para africanos que regressam a casa",
          "desc": "Uma plataforma de comunidade que junta encontros, amizade e networking profissional num só ecossistema, com um único perfil para os três objetivos."
        },
        "Sefer": {
          "sub": "Comunidade musical para descobrir talento e colaborar",
          "desc": "Uma comunidade musical construída em torno de um perfil público de artista que funciona como portefólio real: faixas, créditos, estilo e disponibilidade num só lugar."
        },
        "NxtShop": {
          "sub": "App de beleza com prova em AR",
          "desc": "Uma app de compras de beleza com prova em AR: os utilizadores testam maquilhagem no próprio rosto, em tempo real, antes de comprar."
        },
        "DPlab": {
          "sub": "Redesign do site de uma agência digital, Vilnius",
          "desc": "Redesign do site de uma agência digital em Vilnius: design, desenvolvimento web, marketing e SEO."
        },
        "Defend & Carry": {
          "sub": "Loja online de equipamento tático e ótica",
          "desc": "Uma loja online de ótica desportiva, equipamento tático e militar, vestuário de caça e óculos."
        },
        "AGM Global Vision": {
          "sub": "Plataforma de e-commerce para equipamento de defesa",
          "desc": "Uma plataforma de e-commerce para um fornecedor norte-americano de câmaras térmicas, visão noturna e equipamento de defesa."
        },
        "Unifood": {
          "sub": "Redesign do site unifood.dk",
          "desc": "Um redesign centrado no catálogo para a Unifood Import A/S, um importador grossista dinamarquês com mais de 1.400 produtos. O cliente encontra um produto em dois cliques e envia a encomenda para levantamento."
        },
        "Kortical": {
          "sub": "Redesign do site",
          "desc": "Redesenhámos a página principal de AI Agents para desktop e mobile, o menu mobile, a página 404 e um design system partilhado."
        },
        "Laurie Handlers": {
          "sub": "Redesign do site de uma oradora e autora sobre intimidade",
          "desc": "Um redesign escuro e cinematográfico do site de uma oradora internacional e autora de bestsellers sobre intimidade e relações."
        },
        "Subflow": {
          "sub": "App de subscrições para criadores",
          "desc": "Uma plataforma mobile onde os criadores vendem subscrições dos seus conteúdos, cursos e comunidades."
        },
        "Georg Jensen": {
          "sub": "Conceito de loja mobile",
          "desc": "Um conceito pessoal de loja mobile da Georg Jensen, construído em torno do ouro de 18 quilates feito à mão e de diamantes certificados e sustentáveis."
        },
        "Ayvens": {
          "sub": "Conceito de página de carro usado",
          "desc": "Um conceito de página de produto para carros usados da Ayvens que reúne toda a compra num único scroll tranquilo."
        }
      },
      "svc_more": "Ver detalhes →",
      "audit_b": [
        "Análise de UX, velocidade e SEO",
        "Breve auditoria escrita",
        "Proposta a preço fixo"
      ]
    },
    uk: {
      "mc_eb": "Напишіть нам",
      "mc_hint": "Відкриється із заповненими темою та текстом",
      "mc_app": "Поштовий застосунок",
      "mc_copy": "Скопіювати email",
      "mc_subj": "Тема",
      "su_p": "Запит на проєкт: щось подібне до {name}",
      "bo_p": "Вітаю, NOOMO! Хочу проєкт, схожий на {name}. Про мій бізнес: ",
      "su_y": "Запит на новий проєкт ({cat})",
      "bo_y": "Вітаю, NOOMO! Хочу обговорити новий проєкт ({cat}). Про мій бізнес: ",
      "su_g": "Запит із noomo.dk",
      "your_project": "Ваш проєкт",
      "your_sub": "Створімо його разом",
      "nav_work": "Роботи",
      "nav_services": "Послуги",
      "pkg": "Підписка",
      "nav_about": "Про нас",
      "nav_contact": "Контакти",
      "nav_book": "Безкоштовна консультація",
      "cursor_more": "Детальніше",
      "hero_eb": "Цифрова студія для B2B · Європа",
      "hero_eb2": "Shopify · Корпоративні сайти · MVP-застосунки",
      "hero_1": "Онлайн-магазини.",
      "hero_2": "Сайти та лендинги.",
      "hero_3": "Застосунки.",
      "hero_tag": "Вчасно та за фіксованою ціною.",
      "cta_free": "Безкоштовна консультація",
      "why1_h": "Пакети з фіксованою ціною",
      "why1_t": "Ви знаєте повну вартість до старту, без жодних доплат.",
      "why2_h": "Власна вебстудія за підпискою",
      "why2_t": "Одна щомісячна оплата за оновлення та дрібні задачі.",
      "why3_h": "Оплата частинами",
      "why3_t": "Розділіть вартість проєкту на 3 щомісячні платежі.",
      "why4_h": "Запуск за тижні, а не місяці",
      "why4_t": "Чіткі терміни, і ваш новий сайт запрацює дуже швидко.",
      "work_h": "Вибрані роботи",
      "work_eb": "Живі сайти, застосунки та кейси",
      "live_website": "Живий сайт",
      "case_study": "Кейс",
      "view_proto": "Дивитися прототип ↗",
      "want_like": "Хочу так само",
      "live_projects": "Живі проєкти",
      "svc_h": "Що ми робимо",
      "svc_eb": "Три послуги та безкоштовний аудит. Фіксований обсяг, фіксована ціна, підтримка після запуску.",
      "excl_vat": "без ПДВ",
      "view_details_arrow": "Детальніше ↗",
      "audit_badge": "Бонус · Безкоштовно",
      "audit_h": "Безкоштовна консультація й аудит сайту",
      "audit_t": "30-хвилинна сесія із senior-дизайнером. Ми переглянемо ваш сайт чи магазин і надамо короткий письмовий аудит: швидкі покращення UX, швидкості та SEO, а також рекомендований наступний крок і оцінку за фіксованою ціною.",
      "free": "€0",
      "min30": "30 хвилин",
      "audit_cta": "Отримати безкоштовний аудит",
      "pkg_eb": "Ціни в EUR без ПДВ. Кожен проєкт починається з безкоштовної консультації та пропозиції з фіксованою ціною.",
      "most_popular": "Найпопулярніший",
      "sub_title": "Ваша вебстудія",
      "total": "Разом",
      "timeline": "Терміни",
      "get_quote": "Отримати пропозицію",
      "view_details": "Детальніше",
      "sub_q": "Що таке «Ваша вебстудія»?",
      "sub_t": "Одна щомісячна підписка на будь-яку роботу: оновлення, нові сторінки й лендинги, банери та графіка для кампаній, зміни дизайну, SEO, додавання товарів і пріоритетна допомога. Мінімум 3 місяці.",
      "about_h": "Про NOOMO",
      "about_eb": "Студія",
      "stat1": "Фахівців",
      "stat2": "Років у цифровому дизайні",
      "stat3": "Фіксований обсяг, фіксована ціна",
      "mission_eb": "Наша місія",
      "contact_h": "Обговорімо ваш проєкт",
      "selected": "Обрано",
      "f_service": "Послуга",
      "f_sub": "Підписка",
      "f_budget": "Бюджет (EUR, без ПДВ)",
      "f_message": "Повідомлення",
      "sent_eb": "Запит надіслано",
      "sent_msg": "Дякуємо! Відповімо протягом 24 годин.",
      "send_another": "Надіслати ще один запит",
      "f_time": "Зручний час",
      "slot_err": "Оберіть, будь ласка, часовий проміжок.",
      "f_topic": "Тема (за бажанням)",
      "call_eb": "Дзвінок замовлено",
      "call_another": "Замовити ще один дзвінок",
      "footer_copy": "© 2026 NOOMO",
      "close_x": "Закрити ✕",
      "who": "Для кого",
      "included": "Що входить",
      "how": "Як ми працюємо",
      "addons": "Додаткові опції",
      "related": "Схожі роботи",
      "min3": "Мінімум 3 місяці",
      "popup_quote": "Отримати пропозицію на цю послугу",
      "close_esc": "Закрити · Esc",
      "like_eb": "Хочу щось подібне до",
      "send_req": "Надіслати запит",
      "back_work": "← Назад до робіт",
      "about_body": "NOOMO — дизайн-орієнтована цифрова студія з головним офісом в Орхусі, Данія, та командами в Німеччині, Португалії, на Тенерифе (Іспанія) й в Україні. Ми поєднуємо понад 15 років досвіду в UI/UX і вебдизайні з робочим процесом на основі AI, тож ви отримуєте дизайн і розробку рівня senior — швидше й за фіксованою ціною. Працюємо з ритейлерами, сервісними компаніями та стартапами по всій Європі.",
      "mission": "Ми робимо професійні цифрові продукти доступними для бізнесу, що зростає: зрозумілими, швидкими й створеними, щоб продавати.",
      "mission_acc": 6,
      "mission2": "Без громіздких агентських процесів. Без шаблонів під виглядом індивідуальної роботи. Лише сфокусована команда, яка доводить справу до кінця.",
      "contact_body": "Розкажіть, що вам потрібно. Перша консультація безкоштовна, а чітку пропозицію з фіксованою ціною ви отримаєте протягом 48 годин.",
      "ph_msg": "Розкажіть, що вам потрібно",
      "ph_topic": "Про що хочете поговорити?",
      "err_pre": "Запит не надіслано. Спробуйте ще раз або напишіть нам на",
      "svc_word": "Послуга",
      "case_want": "Хочете проєкт, як",
      "aria_top": "NOOMO — на початок",
      "aria_menu": "Меню",
      "aria_why": "Чому NOOMO",
      "aria_filter": "Фільтр робіт за послугою",
      "aria_sub": "Ваша вебстудія",
      "aria_contact_opts": "Способи зв'язку",
      "aria_remove": "Прибрати вибір",
      "aria_close": "Закрити",
      "aria_back": "Назад до робіт",
      "lang_aria": "Мова",
      "on_request": "Ціна за запитом",
      "cta_live": "Відкрити сайт ↗",
      "cta_play": "Відкрити в Google Play ↗",
      "aria_view_details": " — детальніше",
      "aria_open_case": "Відкрити кейс: ",
      "new_tab": " (відкривається в новій вкладці)",
      "no_fee": "Без щомісячної оплати",
      "sub_fmt": "Ваша вебстудія: {name}",
      "tab_form": "Надіслати запит",
      "tab_call": "Замовити дзвінок",
      "submit": "Надіслати запит",
      "sending": "Надсилаємо…",
      "call_btn": "Замовити дзвінок",
      "call_msg": "Дякуємо! Зателефонуємо вам {day} з {from} до {to}.",
      "like_msg": "Хочу щось подібне до {name}.",
      "f_day": "Бажаний день",
      "day_ph": "Оберіть дату",
      "err_day": "Оберіть, будь ласка, робочий день (пн–пт).",
      "prev_month": "Попередній місяць",
      "next_month": "Наступний місяць",
      "cat": {
        "web": "Корпоративні сайти та лендинги",
        "ecom": "E-commerce",
        "apps": "MVP та застосунки"
      },
      "blk": {
        "challenge": "Завдання",
        "solution": "Що ми створили",
        "thinking": "Дизайн-мислення",
        "impact": "Результат",
        "role": "Наша роль",
        "note": "Робочий процес з AI"
      },
      "meta": {
        "Role": "Роль",
        "Year": "Рік",
        "Scope": "Обсяг",
        "Platform": "Платформа",
        "Status": "Статус",
        "Client": "Клієнт",
        "Industry": "Галузь",
        "Duration": "Тривалість",
        "Team": "Команда",
        "Location": "Локація",
        "Type": "Тип"
      },
      "store": {
        "Visit live site": "Відкрити сайт",
        "Open app on Google Play": "Відкрити в Google Play",
        "Open interactive prototype": "Відкрити інтерактивний прототип"
      },
      "sub_names": {
        "Not included": "Без підписки",
        "Basic": "Start",
        "Growth": "Stable",
        "Pro": "Full Web Studio"
      },
      "plural": [
        "проєкт",
        "проєкти",
        "проєктів"
      ],
      "ct": {
        "Email": "Email",
        "Phone": "Телефон"
      },
      "svcOpts": {
        "ecom": "Інтернет-магазин",
        "web": "Корпоративні сайти та лендинги",
        "apps": "MVP і застосунок",
        "audit": "Безкоштовна консультація й аудит",
        "unsure": "Ще не знаю"
      },
      "f": {
        "name": "Ім'я",
        "name_ph": "Ваше ім'я",
        "name_err": "Вкажіть, будь ласка, ім'я.",
        "company": "Компанія",
        "company_ph": "Назва компанії",
        "email": "Email",
        "email_ph": "name@company.com",
        "email_err": "Вкажіть, будь ласка, коректний email.",
        "phone_opt": "Телефон (за бажанням)",
        "phone": "Телефон",
        "phone_err": "Вкажіть, будь ласка, номер телефону.",
        "email_opt": "Email (за бажанням)",
        "email_err2": "Перевірте, будь ласка, адресу email."
      },
      "months": [
        "Січень",
        "Лютий",
        "Березень",
        "Квітень",
        "Травень",
        "Червень",
        "Липень",
        "Серпень",
        "Вересень",
        "Жовтень",
        "Листопад",
        "Грудень"
      ],
      "wd": [
        "Пн",
        "Вт",
        "Ср",
        "Чт",
        "Пт",
        "Сб",
        "Нд"
      ],
      "care": {
        "Basic": [
          "До 10 робочих годин на місяць",
          "Дрібні правки й доопрацювання",
          "Зміни текстів, зображень і дизайну",
          "Асинхронно в Slack або email"
        ],
        "Growth": [
          "До 25 робочих годин на місяць",
          "Усе зі Start",
          "Регулярні оновлення",
          "Задачі з дизайну та розробки",
          "Задачі паралельно"
        ],
        "Pro": [
          "До 48 робочих годин на місяць",
          "Усе зі Stable",
          "Роботи над іншими вашими сайтами",
          "Будь-які види задач",
          "Пріоритетна підтримка"
        ]
      },
      "svc": {
        "ecom": {
          "title": "Інтернет-магазини",
          "pkgTitle": "Інтернет-магазин",
          "desc": "Інтернет-магазини та продуктові магазини на Shopify з додаванням товарів і постійною підтримкою.",
          "priceSub": "Без ПДВ",
          "timeline": "4–6 тижнів",
          "who": "Ритейлери, продуктові та спеціалізовані магазини, які хочуть продавати онлайн або піти з повільної платформи. Найкраще підходить, коли асортимент готовий і потрібен магазин, яким ваша команда зможе керувати щодня.",
          "pkgItems": [
            "Налаштування магазину Shopify та індивідуальний дизайн теми",
            "До 50 товарів",
            "Оплата (картка, Apple Pay, Google Pay)",
            "Налаштування доставки та ПДВ ЄС",
            "Mobile-first дизайн",
            "Базове SEO та аналітика",
            "Навчальна сесія"
          ],
          "includes": [
            "Налаштування магазину Shopify та індивідуальний дизайн теми",
            "До 50 товарів",
            "Оплата (картка, Apple Pay, Google Pay)",
            "Налаштування доставки та ПДВ ЄС",
            "Mobile-first дизайн",
            "Базове SEO",
            "Аналітика",
            "Навчальна сесія"
          ],
          "steps": [
            [
              "Дослідження",
              "Аналізуємо асортимент, оплату, доставку та налаштування ПДВ."
            ],
            [
              "Дизайн",
              "Індивідуальна тема Shopify, спроєктована mobile-first."
            ],
            [
              "Розробка",
              "Налаштування магазину, додавання товарів, оплати й аналітики."
            ],
            [
              "Запуск і підтримка",
              "Навчання, запуск і підписка «Ваша вебстудія» за бажанням."
            ]
          ],
          "addons": [
            "Ще 50 товарів",
            "Багатомовний магазин",
            "Інтеграції (ERP, POS, бухгалтерія)",
            "Фото товарів / AI-візуали"
          ]
        },
        "web": {
          "title": "Корпоративні сайти та лендинги",
          "pkgTitle": "Корпоративний сайт і лендинг",
          "desc": "Сайти компаній і лендинги, які пояснюють, чим ви займаєтеся, і приводять ліди.",
          "priceSub": "Без ПДВ · Лендинг",
          "altPre": "Корпоративний сайт ",
          "timeline": "2–4 тижні",
          "who": "Сервісні компанії, B2B-постачальники та маркетингові команди, які запускають кампанію чи нову пропозицію. Для бізнесу, чий нинішній сайт уже не пояснює, чим він займається.",
          "pkgItems": [
            "UX-структура та рекомендації щодо текстів",
            "Індивідуальний дизайн",
            "До 6 сторінок (корпоративний) або 1 довга сторінка (лендинг)",
            "CMS",
            "Контактні форми",
            "Налаштування SEO",
            "Налаштування хостингу та публікація"
          ],
          "steps": [
            [
              "Дослідження",
              "Цілі, аудиторія та сторінки, які справді потрібні."
            ],
            [
              "Структура і дизайн",
              "Карта сайту, рекомендації щодо текстів та індивідуальний дизайн."
            ],
            [
              "Розробка",
              "CMS, форми та SEO, протестовані на всіх екранах."
            ],
            [
              "Запуск і підтримка",
              "Хостинг, публікація та підтримка після запуску."
            ]
          ],
          "addons": [
            "Додаткова сторінка",
            "Копірайтинг",
            "Багатомовність"
          ]
        },
        "apps": {
          "title": "MVP-застосунки та стартапи",
          "pkgTitle": "MVP-застосунок для стартапу",
          "desc": "Клікабельні прототипи та готові до запуску MVP для засновників, яким треба протестувати, презентувати чи запустити ідею.",
          "priceSub": "Без ПДВ",
          "timeline": "Від 14-денного MVP-спринту",
          "who": "Засновники та інноваційні команди, яким потрібно перевірити ідею на реальних користувачах або показати інвесторам робочий продукт. Також для компаній, що запускають новий цифровий сервіс.",
          "pkgItems": [
            "Discovery-воркшоп",
            "User flows",
            "Клікабельний прототип",
            "UI-дизайн-система",
            "Front-end розробка MVP",
            "Демо для інвесторів",
            "Передача проєкту або подальша розробка"
          ],
          "steps": [
            [
              "Discovery-воркшоп",
              "Проблема, користувачі та найменший продукт, який варто створити."
            ],
            [
              "Флоу і прототип",
              "User flows і клікабельний прототип для ранніх тестів."
            ],
            [
              "Дизайн і розробка",
              "UI-дизайн-система та front-end MVP."
            ],
            [
              "Демо і передача",
              "Демо для інвесторів, далі передача або подальша розробка."
            ]
          ],
          "addons": [
            "Додатковий user flow",
            "Налаштування бекенду та бази даних",
            "Подальші спринти розробки"
          ]
        }
      },
      "cases": {
        "Mintra": {
          "sub": "Швидке психологічне полегшення та щоденне ментальне відновлення",
          "desc": "Щоденний застосунок на 5–10 хвилин для ментального відновлення: зняття тривоги, відстеження сну, афірмації та дихальні вправи, побудований навколо функції Brain Dump."
        },
        "Poshuk": {
          "sub": "Швидка дистанційна допомога в пошуку зниклих безвісти в Україні",
          "desc": "Один покроковий сценарій із 3 кроків, що формує готові до надсилання запити та QR-картку пошуку, яку будь-хто може відсканувати й відгукнутися."
        },
        "Gym App": {
          "sub": "AI-фітнес-коуч і платформа персональних тренувань",
          "desc": "Фітнес-платформа для iOS у темній естетиці, створена з нуля. AI формує персональні 14-денні плани тренувань під ціль і рівень користувача."
        },
        "iFranko": {
          "sub": "Редизайн інтернет-магазину Apple",
          "desc": "Повний редизайн магазину iFranko з темною, продуктово-орієнтованою системою, постійною навігацією за категоріями та сторінками товарів, що починаються з фото й ключових характеристик."
        },
        "Swiss Insurance": {
          "desc": "Швидкий та інтуїтивний AI-інтерфейс, що перетворив складну застарілу логіку й багатокрокові форми на зрозумілий 2-хвилинний сценарій без втрати відповідності вимогам."
        },
        "Interactive Social Game Up": {
          "desc": "Швидкий онбординг і зрозумілі соціальні механіки, що приводять гравців у live-гру за лічені секунди."
        },
        "Community App & Site for African Repatriates": {
          "head": "Застосунок і сайт спільноти для африканців, які повертаються додому",
          "desc": "Платформа спільноти, що поєднує знайомства, дружбу та бізнес-нетворкінг в одній екосистемі, де один профіль працює для всіх трьох цілей."
        },
        "Sefer": {
          "sub": "Музична спільнота для пошуку талантів і співпраці",
          "desc": "Музична спільнота, побудована навколо публічного профілю артиста, що працює як справжнє портфоліо: треки, кредити, стиль і доступність в одному місці."
        },
        "NxtShop": {
          "sub": "Б'юті-застосунок з AR-приміркою",
          "desc": "Застосунок для купівлі косметики з AR-приміркою: користувачі тестують макіяж на власному обличчі в реальному часі ще до покупки."
        },
        "DPlab": {
          "sub": "Редизайн сайту діджитал-агенції, Вільнюс",
          "desc": "Редизайн сайту діджитал-агенції у Вільнюсі: дизайн, веброзробка, маркетинг і SEO."
        },
        "Defend & Carry": {
          "sub": "Інтернет-магазин тактичного спорядження й оптики",
          "desc": "Інтернет-магазин спортивної оптики, тактичного й військового спорядження, мисливського екіпірування та окулярів."
        },
        "AGM Global Vision": {
          "sub": "E-commerce платформа для оборонного обладнання",
          "desc": "E-commerce платформа для американського постачальника тепловізорів, приладів нічного бачення та оборонного обладнання."
        },
        "Unifood": {
          "sub": "Редизайн сайту unifood.dk",
          "desc": "Редизайн сайту з фокусом на каталог для Unifood Import A/S — данського гуртового імпортера продуктів із понад 1 400 товарами. Клієнт знаходить товар у два кліки й надсилає замовлення на самовивіз."
        },
        "Kortical": {
          "sub": "Редизайн сайту",
          "desc": "Ми переробили головну сторінку AI Agents для десктопу й мобільних, а також мобільне меню, сторінку 404 і спільну дизайн-систему."
        },
        "Laurie Handlers": {
          "sub": "Редизайн сайту спікерки та авторки книжок про інтимність",
          "desc": "Темний, кінематографічний редизайн сайту міжнародної спікерки й авторки бестселерів про інтимність і стосунки."
        },
        "Subflow": {
          "sub": "Застосунок підписок для авторів",
          "desc": "Мобільна платформа, де автори продають підписки на свій контент, курси та спільноти."
        },
        "Georg Jensen": {
          "sub": "Концепт мобільного магазину",
          "desc": "Особистий концепт мобільного магазину Georg Jensen, побудований навколо фірмового золота 18 карат ручної роботи та сертифікованих екологічних діамантів."
        },
        "Ayvens": {
          "sub": "Концепт сторінки вживаного авто",
          "desc": "Концепт сторінки товару для вживаних авто Ayvens, що вміщує всю покупку в один спокійний скрол."
        }
      },
      "boot_eb": "Завантаження студії",
      "hint_scroll": "Гортайте далі",
      "hint_hover": "Наведіть для перегляду",
      "hint_click": "Натисніть, щоб відкрити",
      "boot_steps": [
        "Ініціалізація сітки",
        "Завантаження брифу",
        "Структура сторінок",
        "Типографічна шкала",
        "Вайрфрейми",
        "Привʼязка до сітки",
        "Дизайн-система",
        "Взаємодії",
        "Тестування",
        "Запуск"
      ],
      "menu": "Меню",
      "m_welcome": "Вітаємо в NOOMO",
      "m_type": "Тип",
      "m_focus": "Фокус",
      "m_loc": "Локація",
      "m_loc_v": "Орхус, Данія (HQ)",
      "theme_aria": "Темна тема",
      "sb_title": "Підписка",
      "sb_sub": "Дизайн і розробка за запитом",
      "sb_ps": "На місяць · без ПДВ · пауза чи скасування будь-коли",
      "sb_tl": "48 год на задачу **",
      "sb_aria": "Тип підписки",
      "sb_m1": "Соло",
      "sb_m2": "Команда",
      "sb_solo": [
        "Безліміт задач і правок на місяць",
        "1 активна задача за раз",
        "Кожна задача — за 48 годин",
        "Асинхронне спілкування в Slack або email"
      ],
      "sb_team": [
        "Безліміт задач і правок на місяць",
        "До 3 активних задач паралельно",
        "Дизайнер, розробник і проджект-менеджер",
        "Асинхронно + щотижневий дзвінок з менеджером"
      ],
      "sb_n1": "* Наступна задача стартує, щойно поточна здана.",
      "sb_n2": "** Для більшості задач. Великі ділимо на етапи по 48 годин.",
      "sb_msg": "Привіт, NOOMO! Мене цікавить підписка «{plan}».",
      "sb_msg_pk": "Привіт, NOOMO! Мене цікавить послуга {plan}.",
      "tiers": {
        "start": {
          "name": "Start",
          "sub": "Лендинг або невеликий сайт",
          "tl": "2–3 тижні",
          "items": [
            "До 3 сторінок",
            "Індивідуальний дизайн",
            "CMS і форма зв’язку",
            "Базове SEO"
          ]
        },
        "stable": {
          "name": "Stable",
          "sub": "Інтернет-магазин або сайт компанії",
          "tl": "4–6 тижнів",
          "items": [
            "Магазин на Shopify або до 8 сторінок",
            "UX-структура та індивідуальний дизайн",
            "Оплата, CMS та інтеграції",
            "SEO, аналітика і 30 днів підтримки"
          ]
        },
        "full": {
          "name": "Full",
          "sub": "Застосунок, MVP або велика платформа",
          "tl": "Від 6 тижнів",
          "items": [
            "Discovery-воркшоп і прототип",
            "UI-дизайн-система",
            "Front-end і передача",
            "60 днів підтримки"
          ]
        }
      },
      "sb_slots": "Задач одночасно",
      "sb_d1": "Один дизайнер-розробник працює над однією задачею за раз. Надсилайте скільки завгодно — виконуємо по черзі.",
      "sb_d2": "Команда веде до 3 задач паралельно, а проджект-менеджер керує чергою та пріоритетами.",
      "start_from": "Стартова ціна",
      "b2b_h": "Для бізнесу та агенцій",
      "b2b_p": "Для бізнесу та агенцій на постійній основі: оберіть Full Web Studio (€290/міс., до 48 годин) або домовимося про індивідуальні умови для більших обсягів.",
      "b2b_items": [
        "White-label для агенцій",
        "Виділена команда для вашого продукту",
        "NDA, договір і щомісячні рахунки",
        "Спільний Slack, Jira або Linear",
        "Дизайн-система і передача коду",
        "Пріоритетний SLA і постійний контакт"
      ],
      "b2b_pl": "Рекомендований план",
      "b2b_price": "Full Web Studio · €290/міс.",
      "b2b_ps": "До 48 годин · або індивідуальні умови",
      "b2b_cta": "Обговорити співпрацю",
      "b2b_msg": "Привіт, NOOMO! Ми компанія/агенція і хочемо обговорити постійну співпрацю.",
      "subtiers": {
        "start": {
          "name": "Start",
          "desc": "Для дрібних правок і невеликих доопрацювань сайту.",
          "tl": "48 год на задачу",
          "items": [
            "Безліміт правок",
            "1 задача за раз",
            "Пауза чи скасування будь-коли",
            "Асинхронно в Slack або email"
          ]
        },
        "stable": {
          "name": "Stable",
          "desc": "Регулярні оновлення, дизайн і задачі з розробки.",
          "tl": "48 год на задачу",
          "items": [
            "Безліміт правок",
            "2 задачі паралельно",
            "Пауза чи скасування будь-коли",
            "Асинхронно в Slack або email"
          ]
        },
        "full": {
          "name": "Full Web Studio",
          "desc": "Ваша повноцінна вебстудія: доопрацювання сайту, роботи над іншими вашими сайтами, будь-які види задач.",
          "tl": "24–48 год на задачу",
          "items": [
            "Безліміт правок",
            "3 задачі паралельно",
            "Пауза чи скасування будь-коли",
            "Асинхронно в Slack або email",
            "Пріоритетна підтримка"
          ]
        }
      },
      "hero_trust": "Фіксовані ціни · Оплата частинами до 3 платежів · Власна вебстудія від €99/міс.",
      "sub_line": "Підписка на будь-яку роботу",
      "sub_opt": "Опція за бажанням",
      "care_h": {
        "Basic": "До 10 год / міс.",
        "Growth": "До 25 год / міс.",
        "Pro": "До 48 год / міс."
      },
      "studio_q": "Вже маєте сайт?",
      "studio_t": "Отримайте власну вебстудію від {price}",
      "studio_cta": "Обрати план",
      "studio_msg": "Вітаю, NOOMO! У мене вже є сайт, і мене цікавить підписка «Ваша вебстудія».",
      "inst_line": "або 3 × {price}/міс.",
      "inst_note": "Фіксована ціна. Оплата одразу або до 3 щомісячних платежів.",
      "f_pay": "Оплата (за бажанням)",
      "pay": {
        "full": "Повна оплата",
        "inst": "Частинами (до 3 місяців)"
      },
      "cta_services": "Дивитися послуги",
      "cta_studio": "Власна вебстудія від €99/міс.",
      "svc_note": "Фіксована ціна. Оплата одразу або до 3 щомісячних платежів.",
      "sb_hrs": "До {h} годин на місяць",
      "b2b_cta2": "Обрати Full Web Studio",
      "loc_h": "Наші локації",
      "loc_line": "Головний офіс в Орхусі, Данія · Команди в Німеччині, Португалії, на Тенерифе (Іспанія) та в Україні",
      "locs": [
        {
          "n": "Данія",
          "c": "Орхус",
          "hq": true
        },
        {
          "n": "Німеччина"
        },
        {
          "n": "Португалія"
        },
        {
          "n": "Тенерифе",
          "c": "Іспанія"
        },
        {
          "n": "Україна"
        }
      ],
      "svc_more": "Детальніше →",
      "audit_b": [
        "Огляд UX, швидкості та SEO",
        "Короткий письмовий аудит",
        "Оцінка за фіксованою ціною"
      ]
    }
  }
};
