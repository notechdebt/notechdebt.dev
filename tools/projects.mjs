// Case studies. Each one becomes /work/<slug>/ when you run `node tools/build.mjs`.
// `title` and `description` are what Google shows in results: keep titles under ~60 characters
// and descriptions under ~155. `on` lists the architecture layers lit up on the page.
// The screenshot lives at /img/<slug>.webp (1280 wide) plus /img/<slug>-640.webp,
// and the social preview at /img/og/<slug>.png (make it with `node tools/og.mjs`).

export const projects = [
  {
    slug: 'propintel', name: 'PropIntel', tag: 'DATA + AI', kind: 'Product', url: 'https://propintel-c1cb9.web.app/',
    title: 'PropIntel: AI Real Estate Valuation Platform | Case Study',
    description: 'How PropIntel was built: market data and machine learning price estimates for agencies, investors and brokers in 26 cities.',
    alt: 'PropIntel real estate valuation dashboard with market data and AI price estimates',
    shot: [1280, 607],
    one: 'A real estate intelligence platform with market data and AI price estimates in 26 cities.',
    idea: 'A B2B tool for agencies, investors and brokers: valuations, comparisons and leads.',
    role: 'Product · Data · Frontend', year: '2024', time: '6 to 8 weeks', stack: 'React · Python · ML valuations',
    problem: 'Brokers priced properties by gut feeling and scattered listings. There was no quick, comparable way to see what a property is worth.',
    built: 'A platform with aggregated market data, a machine learning valuation model, comparison reports and export.',
    results: ['A valuation in minutes instead of hours of manual work', 'Coverage in 26 cities', 'Reports good enough to send straight to a client'],
    clean: ['Live and in use since 2024', 'Reports and data export, so nothing is locked inside the platform'],
    on: ['interface', 'api', 'ai', 'data']
  },
  {
    slug: 'freemytime', name: 'FreeMyTime', tag: 'SAAS', kind: 'Product', url: 'https://freemytime.vercel.app/',
    title: 'FreeMyTime: Free Online Booking App | Case Study',
    description: 'A self-serve booking app for service businesses, built in 2 to 3 weeks with Next.js and PostgreSQL. Share one link and clients book themselves.',
    alt: 'FreeMyTime public booking page where clients pick an appointment time',
    shot: [1280, 800],
    one: 'Free booking for any service business: freelancers, trainers, beauty, repairs.',
    idea: 'Product-led growth. A free tier, fully self-serve. Share a link and clients book themselves.',
    role: 'Product · Full-stack', year: '2024', time: '2 to 3 weeks', stack: 'Next.js · PostgreSQL · Auth',
    problem: "Small service businesses can't pay for booking tools, so they lose hours going back and forth with clients about appointment times.",
    built: 'A public booking link, calendar availability, email confirmations and time zones. No credit card needed to start.',
    results: ['Sign up and share your first link in minutes', 'Works the same for any kind of service', 'The free tier doubles as a growth channel'],
    clean: ['Live since 2024', 'Fully self-serve: people sign up and run it without any support'],
    on: ['interface', 'api', 'payments', 'data']
  },
  {
    slug: 'luminavera-3d', name: 'LuminaVera 3D Configurator', tag: '3D / WEBGL', kind: 'Product', url: 'https://luminavera-app-production.up.railway.app/',
    title: 'LuminaVera 3D: three.js Product Configurator | Case Study',
    description: 'A real-time 3D configurator for magnetic track lighting with live pricing and compatibility checks, running at 60 fps on a mid-range phone.',
    alt: 'LuminaVera 3D configurator showing a magnetic track lighting system with a live price',
    shot: [1280, 800],
    one: 'A real-time configurator for magnetic track lighting. Customers build the system in the browser and see the price as they go.',
    idea: 'An interactive 3D product instead of manual quotes by email.',
    role: 'Product · 3D · Frontend', year: '2025', time: '6 weeks', stack: 'React · three.js · GLTF / DRACO · Node · Railway',
    problem: "Magnetic lighting is sold in parts: track, connectors, lights, power. Customers gave up because they couldn't picture what they were ordering, and the team lost hours writing quotes by hand.",
    built: 'Drag to build the track, automatic compatibility checks, power validation, a live price and a parts list that goes straight to the cart. Devices without WebGL get a simple list instead.',
    results: ['6 weeks from brief to production', '0 manual quotes for configurations', '60 fps on a mid-range phone'],
    clean: ['Parts list goes straight into the existing cart, not into a second system', 'Devices without WebGL get a simple list instead, so no customer is left out'],
    on: ['interface', 'api', 'payments']
  },
  {
    slug: 'studio-botema-erp', name: 'Studio Botema ERP', tag: 'CUSTOM ERP', kind: 'Client work', url: 'https://frontend-brown-gamma-71.vercel.app/',
    title: 'Studio Botema ERP: Custom ERP for a Design Studio | Case Study',
    description: 'A custom ERP for orders, stock, projects and suppliers that replaced spreadsheets and email threads. Live in about 6 weeks with React, Node and PostgreSQL.',
    alt: 'Studio Botema ERP dashboard with supplier orders, stock and projects',
    shot: [1280, 607],
    one: 'An internal ERP for the studio: orders, stock, projects and suppliers in one place.',
    idea: 'Custom business software built around how the team really works, not an off-the-shelf box.',
    role: 'Product · Frontend · API', year: '2024', time: '5 to 6 weeks', stack: 'React · Node · PostgreSQL',
    problem: 'Work ran through spreadsheets and emails. Nobody on the team could see where a supplier order stood.',
    built: 'A tailored ERP with supplier orders, stock levels, project files, roles and permissions, and reports.',
    results: ['One source of truth for orders', 'Much less coordination over email', 'Live in about 6 weeks, now growing module by module'],
    clean: ['Extended module by module since launch in 2024', 'Roles and permissions built in from day one'],
    on: ['interface', 'api', 'data']
  },
  {
    slug: 'luminavera', name: 'LuminaVera', tag: 'E-COMMERCE', kind: 'Client work', url: 'https://luminavera.com/',
    title: 'LuminaVera: Headless E-commerce for EU and UK | Case Study',
    description: 'An own-brand lighting store with multi-currency checkout, rich structured data and category SEO, built with Next.js, headless commerce and Stripe.',
    alt: 'LuminaVera online lighting store home page',
    shot: [1280, 607],
    one: 'An own-brand lighting store selling directly to the EU and UK.',
    idea: 'A product catalog with direct sales, plus SEO around niche lighting categories.',
    role: 'Brand · Storefront · SEO', year: '2023', time: '1 to 2 weeks', stack: 'Next.js · Headless commerce · Stripe',
    problem: 'A new brand with no distribution needed to start selling online, directly, in several markets.',
    built: 'A fast headless storefront, clean product pages with rich structured data, multi-currency checkout and category SEO.',
    results: ['Direct sales with no marketplace commission', 'Niche categories indexed on Google', 'The catalog is managed without a developer'],
    clean: ['The catalog is managed without a developer', 'Live since 2023'],
    on: ['interface', 'api', 'payments', 'data']
  },
  {
    slug: 'studio-botema', name: 'Studio Botema', tag: 'BRAND SITE', kind: 'Client work', url: 'https://www.studiobotema.com/',
    title: 'Studio Botema: Designer Lighting Showroom Website | Case Study',
    description: 'A typography-led brand site for a boutique studio representing Lodes, Karimoku and Alphaluce, connected to the studio\'s own ERP.',
    alt: 'Studio Botema showroom website with designer lighting and furniture',
    shot: [1280, 800],
    one: 'A boutique studio for designer lighting, furniture and interiors: Lodes, Karimoku, Alphaluce.',
    idea: 'A premium showcase for the brands, with a project gallery that leads to the catalog and an inquiry.',
    role: 'Brand site', year: '2022', time: '1 to 2 weeks', stack: 'Next.js · CMS',
    problem: "The studio represented high-end brands with an outdated site that didn't match the level of the products.",
    built: 'A quiet, typography-led showcase, a gallery of finished projects, a catalog by brand and a clear path to send an inquiry.',
    results: ['A site that matches the brands it sells', 'Finished projects shown as references', 'Connected to the internal ERP for orders'],
    clean: ['Live since 2022', 'Connected to the internal ERP instead of running a second system'],
    on: ['interface', 'api', 'data']
  },
  {
    slug: 'advlili', name: 'AdvLili', tag: 'LAW FIRM · SEO', kind: 'Client work', url: 'https://advlili.com/',
    title: 'AdvLili: Law Firm SEO Website | Case Study',
    description: 'How a law firm site built on in-depth legal articles, FAQ schema and fast static pages reached #1 organic results and steady inquiries without ads.',
    alt: 'AdvLili law firm website with articles on specific legal cases',
    shot: [1280, 800],
    one: 'A law firm in Pazardzhik covering divorce, inheritance, property and valuations.',
    idea: 'Authority SEO: in-depth articles about specific legal cases instead of a generic brochure page.',
    role: 'Site · SEO · Content system', year: '2022', time: '1 week + content', stack: 'Next.js · MDX · Structured data',
    problem: 'The firm relied on referrals and was invisible on Google for the cases people actually search for.',
    built: 'Articles on specific legal cases, a clean semantic structure, FAQ schema, internal linking and fast static pages.',
    results: ['#1 organic result for several key searches', 'A steady flow of inquiries without ads', 'The firm adds new content itself, no developer needed'],
    clean: ['Live since 2022', 'The firm publishes new articles itself, no developer needed'],
    on: ['interface', 'api', 'data']
  }
];

export const LAYERS = [['interface', 'INTERFACE'], ['api', 'API · LOGIC'], ['ai', 'AI / LLM'], ['payments', 'PAYMENTS'], ['data', 'DATA']];
