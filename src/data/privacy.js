import { brand } from './content'

// Privacy Policy copy. Update `updated`/`updatedISO` whenever the text or the site's data practices change.
export const privacy = {
  slug: 'privacy-policy',
  nav: 'Privacy Policy',
  title: 'Privacy Policy | WebNestStudio',
  description: 'How WebNestStudio collects, uses and shares your information, including contact form submissions (Formspree) and website analytics (Google Analytics).',
  h1: 'Privacy Policy',
  updated: '11 November 2026',
  updatedISO: '2026-11-11',
  sections: [
    {
      heading: 'Introduction',
      paras: [
        `${brand.name} is an independently run web development studio by ${brand.owner}, serving businesses online across India. This policy explains what information we collect through webneststudio.live, how we use it and which third-party services are involved.`,
      ],
    },
    {
      heading: 'Information We Collect',
      paras: ['When you send us an enquiry through the contact form, we collect the details you choose to enter:'],
      bullets: ['Name', 'Business name', 'Phone number', 'Email address (optional)', 'The message you write'],
      after: ['Please do not include payment details or other sensitive information in your message. Our analytics tool also collects general website usage information, described under Website Analytics below.'],
    },
    {
      heading: 'How We Use Your Information',
      paras: ['We use the details you send us to:'],
      bullets: ['Respond to your website enquiry', 'Discuss your website requirements and provide quotations', 'Communicate with you about services you have requested'],
    },
    {
      heading: 'Contact Form Processing: Formspree',
      paras: [
        'Our contact form uses Formspree, a third-party form service. When you submit the form, your details are sent to Formspree for processing and storage, and delivered to us.',
        "We currently use Formspree's Free plan. Its published plan information states that submission history is available for 30 days.",
        "Formspree is a separate company. Its own privacy policy and terms also apply to your submission. We do not control Formspree's systems, or its retention and deletion processes.",
      ],
      links: [
        { label: 'Formspree Privacy Policy', href: 'https://formspree.io/legal/privacy-policy/' },
        { label: 'Formspree Terms of Service', href: 'https://formspree.io/legal/terms-of-service/' },
      ],
    },
    {
      heading: 'Website Analytics: Google Analytics',
      paras: [
        'We use Google Analytics 4, a third-party service provided by Google, to understand how visitors use the website, such as which pages are viewed, and to improve it. It collects usage and device information as described in Google\'s own privacy information.',
        'You can review how Google handles this information and the controls available to you, including the Google Analytics opt-out browser add-on.',
      ],
      links: [
        { label: "Google's Privacy Policy", href: 'https://policies.google.com/privacy' },
        { label: 'Google Analytics opt-out add-on', href: 'https://tools.google.com/dlpage/gaoptout' },
      ],
    },
    {
      heading: 'Cookies and Local Storage',
      paras: [
        'Google Analytics may use cookies or similar technologies to recognise a browser and measure visits.',
        "The website also stores your light or dark theme choice in your browser's local storage, so the site remembers your preference. This stays in your own browser.",
        "You can control or delete cookies and local storage in your browser's settings.",
      ],
    },
    {
      heading: 'Data Sharing',
      paras: [
        'To run the website and handle your enquiry, information is processed by these third-party services:',
      ],
      bullets: [
        'Formspree, which receives contact form submissions',
        'Google Analytics, which receives website usage information',
        'Google Fonts, which serves the website\'s fonts, so your browser requests them from Google\'s servers',
      ],
      after: [
        'If you contact us by WhatsApp or email, those services handle your message under their own policies. These third parties operate under their own terms, and we cannot control their practices.',
      ],
    },
    {
      heading: 'Data Security',
      paras: [
        'We take reasonable care with the information we receive and rely on established third-party services to process form submissions. However, no method of transmission or storage is completely secure, so we cannot guarantee absolute security.',
      ],
    },
    {
      heading: 'Data Retention and Deletion',
      paras: [
        "Formspree's Free plan publishes a 30-day submission history. Actual processing and deletion of form submissions are subject to Formspree's policies, which we do not control.",
        'Enquiries delivered to us are held in our own email and messaging accounts so that we can follow up with you.',
        'If you would like help with your enquiry information, contact us using the details below. We will do what we reasonably can for information we hold, but we cannot promise deletion from third-party systems we do not control.',
      ],
    },
    {
      heading: 'Your Privacy Rights',
      paras: [
        'You are welcome to contact us with questions or requests about your personal information, for example to ask what enquiry information we hold or to ask us to correct it. We will review each request and respond as reasonably as we can. Privacy laws that apply to you may give you additional rights.',
      ],
    },
    {
      heading: 'Third-Party Links',
      paras: [
        'This website links to other websites and services, such as our project demos, client websites and WhatsApp. Those sites have their own privacy policies, and we are not responsible for their content or practices.',
      ],
    },
    {
      heading: 'Changes to This Policy',
      paras: ["We may update this policy when our website practices change. The \"Last updated\" date at the top shows when it was last revised."],
    },
  ],
}
