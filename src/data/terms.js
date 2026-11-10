import { brand } from './content'

// Terms & Conditions copy. Update `updated`/`updatedISO` whenever the text changes.
export const terms = {
  slug: 'terms-and-conditions',
  nav: 'Terms & Conditions',
  title: 'Terms & Conditions | WebNestStudio',
  description: 'Terms and conditions for WebNestStudio website development packages: payments, delivery, revisions, ownership, maintenance, cancellations and refunds.',
  h1: 'Terms & Conditions',
  updated: '11 November 2026',
  updatedISO: '2026-11-11',
  contactIntro: `For questions about these terms or your project, contact ${brand.name}:`,
  sections: [
    {
      heading: 'Introduction',
      paras: [
        `These terms apply to all ${brand.name} website development packages. ${brand.name} is independently run by ${brand.owner} and serves businesses online across India.`,
        'A separate written agreement for an individual project may override specific terms in this document.',
      ],
    },
    {
      heading: 'Services and Packages',
      paras: [
        'Our services are based on the package you select and the project scope we agree. The features and deliverables of your package should be clearly identified before work begins.',
        'Additional work outside the agreed scope may incur additional charges, which we will quote before starting.',
      ],
    },
    {
      heading: 'Pricing and Payments',
      bullets: [
        '25% advance payment before development begins.',
        'The remaining 75% is payable after you review and approve the completed website.',
        'We accept UPI and bank transfer.',
        'Domain registration and hosting are charged separately.',
        'Third-party integration charges are separate.',
        `${brand.name} is currently not registered for GST, and GST is not charged on our prices.`,
      ],
    },
    {
      heading: 'Project Delivery Timeline',
      paras: [
        'Our delivery time is 6 working days after receiving the advance payment and all required customer content and materials.',
        'If you delay providing content, images, approvals or feedback, the delivery timeline extends automatically by the number of days of the delay.',
      ],
    },
    {
      heading: 'Revisions and Scope',
      paras: [
        'Revisions are unlimited within the originally agreed project scope. Changes to the agreed design, text, colours and layout are included.',
        'New pages, features, integrations or major functionality outside the original scope are quoted separately.',
      ],
    },
    {
      heading: 'Customer Responsibilities',
      paras: ['To build your website, you need to provide:'],
      bullets: ['Your logo and brand assets', 'Website text and business information', 'Images and videos', 'Contact details and business address'],
      after: [
        'You must have the necessary rights and permissions for all materials you supply.',
        'We provide basic assistance with logo selection, image sourcing and visual assets. This does not include complete brand identity design, professional photography, custom illustrations or paid stock assets, unless separately agreed.',
      ],
    },
    {
      heading: 'Responsive Design and Browser Compatibility',
      paras: [
        'Websites are designed for mobile, tablet and desktop screens. We target compatibility with commonly used modern browsers.',
        'Outdated browsers and unsupported devices are not guaranteed.',
      ],
    },
    {
      heading: 'Domain, Hosting and SSL',
      paras: [
        'Domain and hosting costs are separate from website development fees. You are responsible for applicable renewals and ongoing charges from your providers.',
        "SSL setup is included where supported by the selected hosting provider. SSL availability, renewal and charges are subject to the hosting provider's terms.",
      ],
    },
    {
      heading: 'Third-Party Integrations',
      paras: [
        'Payment gateways, booking systems, external APIs and other third-party integrations are always charged separately, and their costs must be agreed before implementation.',
        'Third-party subscription and usage charges are paid by you. Third-party services remain subject to their own terms and availability.',
      ],
    },
    {
      heading: 'Website Ownership and Intellectual Property',
      paras: [
        'You own your domain. After full payment, you receive ownership of your website source code and project-specific content, and you may maintain, modify or migrate your website.',
        "Third-party assets, fonts, libraries and services remain subject to their respective licences and terms. We do not claim ownership of third-party licensed materials.",
      ],
    },
    {
      heading: 'Cancellation and Refunds by Customer',
      paras: [
        'If you cancel after paying the advance, the refund is calculated based on the work completed. Reasonable non-recoverable costs incurred for your project may be deducted. We will tell you how the amount was calculated.',
      ],
    },
    {
      heading: 'Cancellation or Delay by WebNestStudio',
      paras: [
        `If ${brand.name} cannot complete a project because of unforeseen circumstances, we will communicate with you, and we will discuss a revised delivery date or an appropriate refund.`,
        'If the project cannot proceed, any refund will fairly account for the payments received and the work already completed.',
      ],
    },
    {
      heading: 'Free Maintenance and Support',
      paras: [
        '12 months of free maintenance from the website launch date. It includes:',
      ],
      bullets: [
        'Bug fixes related to the delivered website, covered throughout the 12 months',
        'Minor text updates',
        'Minor image replacements or updates',
      ],
      after: [
        'Issues caused by unauthorised modifications, changes made by you, hosting problems or third-party service failures are excluded.',
        'Maintenance does not include new pages, new features, major layout changes or redesigns. These are quoted separately.',
        'You can contact us by phone, WhatsApp or email. Our target response time is within 3 business days. This is a target for acknowledging and responding to your request, not a guarantee that the issue will be resolved within three days.',
      ],
    },
    {
      heading: 'Maintenance After 12 Months',
      paras: [
        'After the first 12 months, an optional maintenance plan is available at ₹375 per month, billed yearly (₹4,500), or ₹500 per month billed every 6 months (₹3,000), as shown on our pricing page.',
        'You may instead manage your website independently. There is no obligation to continue maintenance with us.',
      ],
    },
    {
      heading: 'Website Backups',
      paras: [
        'Backup services are not included in the standard package or the free maintenance. You are responsible for arranging your own backups through your hosting provider or another service.',
      ],
    },
    {
      heading: 'Payment Confirmation',
      paras: ['Please share your payment confirmation with us after each UPI or bank transfer.'],
    },
    {
      heading: 'Limitation of Responsibility',
      paras: [
        'We take reasonable care with the websites we deliver. Third-party services, hosting providers and external platforms are outside our direct control, so we cannot guarantee their uptime, security or availability, or that a website will work on every browser and device.',
        'We are not responsible for interruptions or losses caused by those third parties. Nothing in these terms limits any rights you may have under applicable law.',
      ],
    },
    {
      heading: 'Changes to These Terms',
      paras: [
        'We may update these terms from time to time. The "Last updated" date at the top shows when they were last revised.',
        'A written agreement for a specific project may contain different terms, which will apply to that project.',
      ],
    },
  ],
}
