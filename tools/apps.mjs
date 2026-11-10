// notechdebt's Atlassian Marketplace apps: vendor-wide support, privacy and security pages, linked from
// the Marketplace partner profile and every app listing. build.mjs renders each page to /apps/<slug>/.
// Adding an app = one entry in APPS; every page's app table picks it up. Keep the texts in step with
// the app's Marketplace "Privacy and security" answers.
// Block types: ['p', text] · ['ul', [items]] · ['table', [header], [[row]...]] · ['apps', column keys].
// `html: true` marks text that contains links (written here, never user input).

export const VENDOR = 'notechdebt';
export const UPDATED = '10 November 2026';
export const SUPPORT_EMAIL = 'support@notechdebt.dev';
export const SECURITY_EMAIL = 'security@notechdebt.dev';

export const APPS = [
  {
    name: 'Pearl – Mermaid Diagrams for Confluence',
    product: 'Confluence Cloud',
    platform: 'Atlassian Forge, Runs on Atlassian',
    stores: 'Export images (PNG and SVG) of saved diagrams, with the page id and the dates they were saved and last used. Diagram code is saved by Confluence in your page.',
    where: 'Atlassian Forge storage for your Confluence site',
    kept: 'Replaced when a diagram is saved again; deleted after 12 months without being saved or exported',
    outside: 'Nothing',
    permissions: 'App storage; a read-only check of whether the current user can edit a page',
    unlicensed: 'Read-only: diagrams keep rendering and exporting; editing returns when the licence is active',
  },
];

// Column keys usable in an ['apps', [...]] block, with their headers.
export const APP_COLUMNS = {
  name: 'App', product: 'Product', platform: 'Runs on', stores: 'What it stores', where: 'Where',
  kept: 'Kept for', outside: 'Sent outside Atlassian', permissions: 'Permissions', unlicensed: 'Without an active licence',
};

const mail = (a) => `<a href="mailto:${a}">${a}</a>`;

export const pages = [
  {
    slug: 'pearl',
    name: 'Pearl',
    title: 'Pearl – Mermaid Diagrams for Confluence: Documentation | notechdebt',
    description: 'How to use Pearl in Confluence Cloud: insert and edit Mermaid diagrams, zoom and full screen, PDF and Word export, licensing, data and limits.',
    one: 'Pearl – Mermaid Diagrams for Confluence draws Mermaid diagrams as sharp vector graphics that fill the page, with a live editor, zoom, full screen and blur-free exports.',
    meta: 'Documentation for Pearl on Confluence Cloud.',
    sections: [
      { id: 'insert', label: '01 · GET STARTED', h2: 'Insert a diagram', blocks: [
        ['ul', [
          'In the Confluence editor, type /Mermaid or /Pearl and choose Pearl – Mermaid diagram',
          'Write Mermaid code, or paste it from any AI chat as-is: Markdown code fences are removed for you',
          'Select Save, or press Ctrl+Enter (Cmd+Enter on Mac); then publish the page as usual',
        ]],
        ['p', 'To change a diagram later, select it in the page editor and choose the pencil icon.'],
      ] },
      { id: 'edit', label: '02 · EDITOR', h2: 'Edit with a live preview', blocks: [
        ['p', 'The editor shows your code on one side and the diagram on the other, updating as you type. Mistakes show a readable error in place of the preview. Tab indents your code. Saving also creates the images Pearl uses for exports.'],
      ] },
      { id: 'view', label: '03 · VIEWING', h2: 'Zoom, pan and full screen', blocks: [
        ['ul', [
          'Diagrams fill the page width and follow Confluence\'s light or dark theme',
          'Zoom with Ctrl or Cmd + scroll, a trackpad pinch, or the toolbar that appears on hover; double-click zooms in, Shift + double-click zooms out',
          'Drag to pan once zoomed in; the keys + and − zoom, 0 fits, and the arrow keys pan',
          'Full screen opens the diagram over the page, where plain scrolling zooms; press Esc to close',
        ]],
      ] },
      { id: 'export', label: '04 · EXPORT', h2: 'PDF, Word and page history', blocks: [
        ['table', ['Export', 'What you get'], [
          ['PDF', 'The diagram as vector graphics: sharp when printed or zoomed'],
          ['Word', 'A high-resolution image of the diagram'],
          ['Page history', 'The same image, sized to the page'],
        ]],
        ['p', 'Exports use the images made when the diagram was last saved in Pearl\'s editor. If a diagram has never been saved there, PDF draws it live and Word shows its Mermaid code; open it in the editor and save once to fix that.'],
      ] },
      { id: 'types', label: '05 · DIAGRAM TYPES', h2: 'Supported diagrams', blocks: [
        ['p', 'Every Mermaid diagram type: flowchart, sequence, class, state, entity relationship, Gantt, pie, mindmap, user journey, Git graph, timeline, quadrant, XY chart, requirement, C4, Sankey, block, packet, kanban, architecture and radar.'],
      ] },
      { id: 'licence', label: '06 · LICENSING', h2: 'Without an active licence', blocks: [
        ['p', 'Diagrams stay visible and keep exporting, so no page ever breaks. Creating or changing diagrams needs an active Pearl subscription; editing returns as soon as it is active again.'],
      ] },
      { id: 'data', label: '07 · DATA', h2: 'Data and privacy', blocks: [
        ['p', 'Pearl runs on Atlassian\'s Forge platform and sends nothing outside Atlassian. Diagram code is saved by Confluence in your page. Export images of each saved diagram, with the page id and save dates, are kept in Forge storage for your site; these are the data in scope for data residency. Details: <a href="/apps/privacy/">privacy policy</a> and <a href="/apps/security/">security policy</a>.', { html: true }],
      ] },
      { id: 'limits', label: '08 · LIMITS', h2: 'Known limits', blocks: [
        ['ul', [
          'Public links to Confluence pages don\'t show diagrams: Confluence hides every app\'s macros there. Guests and anonymous visitors in public spaces do see them',
          'Diagram code can be up to 50,000 characters',
          'Very large diagrams are exported at a lower image resolution to stay within storage limits',
        ]],
        ['p', 'Questions or problems: <a href="/apps/support/">support</a>, answered 24/7.', { html: true }],
      ] },
    ],
  },
  {
    slug: 'support',
    name: 'Support',
    title: 'Support and Service Level Agreement for notechdebt Apps | notechdebt',
    description: 'How to get help with notechdebt\'s Atlassian Marketplace apps: requests accepted 24/7, first response within 4 hours for urgent issues.',
    one: 'Support for every notechdebt app on the Atlassian Marketplace. Requests are accepted 24/7, every day of the year, and answered by the architect who built the app.',
    sections: [
      { id: 'contact', label: '01 · CONTACT', h2: 'How to reach us', blocks: [
        ['p', `Email ${mail(SUPPORT_EMAIL)}. To get a fix fastest, include:`, { html: true }],
        ['ul', ['Which app, and a link to the page or work item where it happens', 'What you expected and what happened instead', 'Your browser, and whether it happens for other users too']],
        ['p', 'Support is in English. We never ask for your password or API tokens.'],
      ] },
      { id: 'sla', label: '02 · SERVICE LEVEL AGREEMENT', h2: 'Response times', blocks: [
        ['p', 'These times apply to every notechdebt app and run from when your request arrives, on any day including weekends and holidays.'],
        ['table', ['Priority', 'Meaning', 'First response within'], [
          ['Urgent', 'The app doesn\'t work for everyone on your site', '4 hours'],
          ['High', 'A feature is broken and there is no workaround', '12 hours'],
          ['Normal', 'A bug with a workaround, or a question', '24 hours'],
          ['Low', 'A feature request or a cosmetic issue', '3 days'],
        ]],
        ['p', 'A first response confirms the problem and the next step. Our apps run on Atlassian\'s cloud, so a fix reaches every customer at once.'],
      ] },
      { id: 'apps', label: '03 · WHAT\'S COVERED', h2: 'Apps covered', blocks: [
        ['p', 'Every app below, in its current release:'],
        ['apps', ['name', 'product', 'unlicensed']],
        ['p', 'Security issues are handled under the <a href="/apps/security/">security policy</a>, not this support process.', { html: true }],
      ] },
    ],
  },
  {
    slug: 'privacy',
    name: 'Privacy',
    title: 'Privacy Policy for notechdebt Apps | notechdebt',
    description: 'What data notechdebt\'s Atlassian Marketplace apps handle, app by app: your content stays in your Atlassian site, with no tracking and no cookies.',
    one: 'Our apps keep your content inside your Atlassian site, set no cookies and track nothing. Here is what each app handles, and the little data we receive ourselves.',
    sections: [
      { id: 'who', label: '01 · WHO WE ARE', h2: 'Who provides the apps', blocks: [
        ['p', `notechdebt, a company registered in Bulgaria ("we"), makes apps for the Atlassian Marketplace. This policy covers all of them. Contact: ${mail(SUPPORT_EMAIL)}.`, { html: true }],
      ] },
      { id: 'principles', label: '02 · PRINCIPLES', h2: 'How our apps treat your data', blocks: [
        ['ul', [
          'Your content stays in Atlassian\'s cloud with your site and follows your site\'s data residency settings',
          'No analytics, usage tracking or cookies, and nothing sold or shared',
          'We keep no copy of your content and do not view it; our technical logs hold only operational details such as timings and counts',
          'If an app ever needs to send data outside Atlassian, this page and the app\'s Marketplace listing will say so before it ships',
        ]],
      ] },
      { id: 'apps', label: '03 · APP BY APP', h2: 'What each app stores', blocks: [
        ['apps', ['name', 'stores', 'where', 'kept', 'outside']],
        ['p', 'If you uninstall an app, Atlassian\'s Forge data lifecycle applies to what it stored.'],
      ] },
      { id: 'receive', label: '04 · LICENSING AND SUPPORT', h2: 'Data we do receive', blocks: [
        ['p', 'As a Marketplace partner we receive licence information from Atlassian, such as your organization\'s name and the names and email addresses of its technical and billing contacts. If you contact our support, we receive what you send us, such as your name, email address and message. We use this only to manage licences and answer you, keep it for as long as needed for those purposes, and never sell it.'],
        ['p', 'Atlassian hosts its products, the Forge platform and the Marketplace; its own privacy policy covers its processing.'],
      ] },
      { id: 'rights', label: '05 · YOUR RIGHTS', h2: 'Your rights', blocks: [
        ['p', `Under the GDPR you can ask to access, correct or delete personal data we hold about you, or object to its use. Write to ${mail(SUPPORT_EMAIL)}. You can also complain to the Bulgarian Commission for Personal Data Protection. We will post changes to this policy here with a new date.`, { html: true }],
      ] },
    ],
  },
  {
    slug: 'security',
    name: 'Security',
    title: 'Security Policy for notechdebt Apps | notechdebt',
    description: 'How notechdebt\'s Atlassian Marketplace apps are secured: built on Atlassian Forge, least privilege, vulnerability reporting and fix times.',
    one: 'Our apps are built on Atlassian Forge and, wherever possible, run entirely on Atlassian\'s own infrastructure. Here is how they are protected, and how to report a problem.',
    sections: [
      { id: 'design', label: '01 · DESIGN', h2: 'How our apps are built', blocks: [
        ['ul', [
          'Built on Atlassian Forge; encryption in transit and at rest, tenant isolation and hosting security come from the platform',
          'Least privilege: each app requests only the permissions it needs, listed below',
          'User interfaces run under Atlassian\'s Content-Security-Policy, which blocks inline and injected scripts',
          'Actions on your content are checked against the current user\'s Confluence or Jira permissions',
        ]],
      ] },
      { id: 'apps', label: '02 · APP BY APP', h2: 'Platform and permissions', blocks: [
        ['apps', ['name', 'platform', 'permissions', 'outside']],
      ] },
      { id: 'development', label: '03 · DEVELOPMENT', h2: 'Secure development', blocks: [
        ['p', 'Every release passes unit tests, browser tests and a dependency vulnerability check before deployment. Releases with known critical or high-severity dependency issues are not shipped. Multi-factor authentication protects the source code, Atlassian and email accounts.'],
      ] },
      { id: 'report', label: '04 · REPORTING', h2: 'Report a vulnerability', blocks: [
        ['p', `Email ${mail(SECURITY_EMAIL)} with the app and the steps to reproduce. We acknowledge reports within 2 business days, and also accept reports that reach us through Atlassian's Marketplace security process.`, { html: true }],
        ['table', ['Severity (CVSS)', 'Fixed within'], [
          ['Critical (9.0 and above)', '10 days'],
          ['High (7.0–8.9)', '4 weeks'],
          ['Medium (4.0–6.9)', '12 weeks'],
          ['Low (below 4.0)', '25 weeks'],
        ]],
        ['p', 'Times run from when a report is confirmed.'],
      ] },
      { id: 'incidents', label: '05 · INCIDENTS', h2: 'If something goes wrong', blocks: [
        ['p', 'If a security incident affects customer data, we notify Atlassian and affected customers promptly, and publish what happened and what we changed.'],
      ] },
    ],
  },
];
