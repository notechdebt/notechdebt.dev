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
