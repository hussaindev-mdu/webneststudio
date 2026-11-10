// ============================================================================
//  ALL EDITABLE CONTENT LIVES HERE. Search for "REPLACE" to find placeholders.
// ============================================================================

export const brand = {
  name: 'WebNestStudio',
  tagline: 'Websites that bring you customers',
  owner: 'Hussain',
  city: 'Your City', // REPLACE
  niche: 'businesses',
  whatsappNumber: '919566831055', // country code + number, digits only (no + or spaces)
  whatsappDisplay: '+91 95668 31055',
  email: 'hussaindev07@gmail.com',
  instagram: 'https://www.instagram.com/webneststudio_live/',
  facebook: 'https://www.facebook.com/people/Webneststudio/61596043514901/',
}

// Formspree: create a form at https://formspree.io and paste its ID (the part after /f/)
export const formspreeId = 'mvkknwbz'

export const defaultWhatsAppMessage =
  "Hi WebNestStudio, I'm interested in a website for my business"

export const nav = [
  { label: 'Project Demo', href: '/portfolio/' },
  { label: 'Services', href: '#services', menu: true },
  { label: 'Pricing', href: '/pricing/' },
  { label: 'Process', href: '#process' },
  { label: 'About', href: '#about' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact Us', href: '/contact/' },
]

export const hero = {
  // {niche} and {city} are filled in automatically from `brand`
  headline: 'Affordable Website Development for Businesses Across India, Delivered in 6 Working Days',
  deliveryNote: 'Delivery: 6 working days after receiving the advance payment and all required customer content and materials.',
  subtext:
    'We design fast, mobile-friendly websites that help local customers find you on Google, trust your business and contact you in one tap.',
  eyebrow: 'Websites starting from ₹5,999',
  label: 'Affordable Website Development',
  primaryCta: 'Get a Free Quote',
  proposalLine: 'Tell us about your business. Get a website proposal on WhatsApp.',
  secondaryCta: 'Chat on WhatsApp',
  badges: ['6-working-day delivery', 'Mobile-first', 'No hidden fees'],
}

export const problems = {
  title: 'Why Businesses Need a Professional Website',
  subtitle: 'Most local businesses lose customers online for the same three reasons.',
  items: [
    {
      icon: 'search',
      title: "Customers can't find you on Google",
      text: 'No website or a weak one means people searching nearby end up at your competitor instead.',
    },
    {
      icon: 'smartphone',
      title: 'Your old site looks outdated on mobile',
      text: 'Most visitors use phones. A slow or broken mobile site makes them leave within seconds.',
    },
    {
      icon: 'calendar',
      title: 'No easy way to book or contact you',
      text: 'If calling or messaging takes effort, people give up. We add one-tap WhatsApp, call and booking.',
    },
  ],
}

export const portfolio = {
  title: 'Recent work',
  subtitle: 'Sample projects showing the style and quality you can expect.',
  cta: 'View Live Demo',
  projects: [
    // REPLACE names, descriptions, images (public/images/*) and demo links with your own
    { name: 'CarePlus', category: 'Clinic', image: '/images/careplus.jpg', description: 'Clinic services, doctor information, appointment enquiry and WhatsApp contact.', link: 'https://hussaindev-mdu.github.io/demo-clinic/', label: 'Demo', cta: 'View Demo', alt: 'CarePlus Medical Centre demo clinic website homepage with a Book Appointment button', service: { href: '/clinic-website-design/', text: 'Clinic website design' } },
    { name: 'Saffron & Spice', category: 'Restaurant', image: '/images/restaurant.jpg', description: 'Restaurant menu, gallery, reservation enquiry and WhatsApp contact.', link: 'https://hussaindev-mdu.github.io/demo-restaurant/', label: 'Demo', cta: 'View Demo', alt: 'Saffron & Spice demo restaurant website homepage with a Book a Table button over a dining room photo', service: { href: '/restaurant-website-design/', text: 'Restaurant website design' } },
    { name: 'Playfix Tailoring', category: 'Tailoring', image: '/images/playfix.jpg', description: 'Tailoring services, gallery and consultation form with email enquiries.', link: 'https://playfixmdu.in/', label: 'Client Project', cta: 'Visit Website', alt: 'Playfix Tailoring website homepage with a Book Consultation button and tailoring photos' },
  ],
}

export const pricing = {
  title: 'Simple, honest pricing',
  subtitle: 'One-time website development fee. No surprise costs.',
  cta: 'Get Started',
  offer: 'WebNestStudio Launching Offer',
  finePrint: '* One-time website development fee. Domain, hosting and renewal charges are separate where applicable. Delivery: 6 working days after receiving the advance payment and all required customer content and materials.',
  packages: [
    {
      name: 'Basic',
      originalPrice: '₹9,999',
      price: '₹5,999',
      period: 'one-time fee',
      description: 'A simple, professional website to get you online.',
      features: ['1–5 pages', 'Mobile-friendly design', 'WhatsApp button', 'Google Maps', '6-working-day delivery', 'No contact form or 3D animations'],
      previewNote: 'No contact form or 3D animations', // always shown in the home-page preview
      popular: false,
    },
    {
      name: 'Starter',
      originalPrice: '₹15,999',
      price: '₹9,999',
      period: 'one-time fee',
      description: 'Everything in Basic, plus a contact form and 3D animations.',
      features: ['Everything in Basic', 'Contact form', '3D animations', '1–5 pages', '6-working-day delivery', 'Need an admin panel to manage your content? Additional charges apply'],
      previewNote: 'Need an admin panel to manage your content? Additional charges apply', // always shown in the home-page preview
      popular: true,
    },
    {
      name: 'Maintenance',
      nameNote: 'optional',
      badge: '12 Months FREE',
      price: '₹375',
      period: 'per month, billed yearly (₹4,500)',
      description: '12 months of free maintenance from the website launch date. After that, the plan is optional: continue for less, or manage your website yourself.',
      highlight: '12 months of free maintenance from the website launch date.',
      features: ['₹375/month when billed yearly (₹4,500/year)', '₹500/month when billed every 6 months (₹3,000)', 'Bug fixes for your delivered website', 'Minor text updates', 'Minor image updates', 'Response to requests within 3 business days', 'Website backups are not included'],
      popular: false,
    },
  ],
}

export const process = {
  title: 'How it works',
  subtitle: 'A simple four-step process, no technical knowledge needed.',
  steps: [
    { title: 'Free call', text: 'We talk about your business, customers and goals. No charge, no pressure.' },
    { title: 'Design demo', text: 'We send you a design preview of your homepage so you can see it before we go further.' },
    { title: 'Revisions', text: 'You tell us what to change and we revise it. Revisions are unlimited within the originally agreed project scope.' },
    { title: 'Go live', text: 'We launch your website, connect your domain and show you how it works.' },
  ],
  note: '25% advance, 75% after you approve',
}

export const testimonials = {
  title: 'What clients say',
  subtitle: '',
  items: [
    // PLACEHOLDER – REPLACE every item below with real client feedback before launch
    { placeholder: true, name: 'PLACEHOLDER – Client Name', role: 'Clinic owner, Your City', quote: 'PLACEHOLDER – Replace with a real testimonial from a happy client about the quality and speed of your work.' },
    { placeholder: true, name: 'PLACEHOLDER – Client Name', role: 'Restaurant owner, Your City', quote: 'PLACEHOLDER – Replace with a real testimonial. Mention results such as more calls or bookings.' },
    { placeholder: true, name: 'PLACEHOLDER – Client Name', role: 'Salon owner, Your City', quote: 'PLACEHOLDER – Replace with a real testimonial about how easy you were to work with.' },
  ],
}

export const about = {
  title: 'About WebNestStudio: Who Builds Your Website',
  photo: '', // REPLACE – e.g. '/images/me.jpg' (put the file in public/images). Empty shows the logo.
  bio: [
    "I'm Hussain, Founder of WebNestStudio. With 7 years of website development experience, I personally work on creating modern, responsive websites for businesses. My work uses React, JavaScript and Node.js.",
    'WebNestStudio is an independently run web development studio serving businesses online across India. You communicate directly with the person building your website.',
  ],
  reasons: [
    { icon: 'tag', title: 'Fixed packages', text: 'Website packages from ₹5,999, with a fixed one-time development fee.' },
    { icon: 'eye', title: 'Design preview first', text: 'We send a homepage design preview before we go further.' },
    { icon: 'message', title: 'Direct on WhatsApp', text: 'You talk to the person building your site, not a support queue.' },
    { icon: 'wrench', title: '12 months free maintenance', text: '12 months of free maintenance from the website launch date. After that, you can continue with the maintenance plan.' },
  ],
  links: [
    { label: 'View Our Projects', href: '/portfolio/' },
    { label: 'Explore Website Packages', href: '/pricing/' },
  ],
}

export const faq = {
  title: 'Frequently asked questions',
  items: [
    { q: 'How long does it take?', a: 'We deliver your website in 6 working days after receiving the advance payment and all required customer content and materials. If content, approvals or feedback are delayed, the timeline extends by the number of days of the delay.' },
    { q: 'How does payment work?', a: 'You pay 25% advance to start and the remaining 75% after you approve the final website. You can pay by UPI or bank transfer.' },
    { q: 'Are domain and hosting included in the price?', a: 'No. The package price is a one-time fee for designing and building your website. You do need a domain and hosting, and we handle the setup for you. A domain typically costs around ₹800–1,200 per year, and hosting can be free or low-cost depending on the setup. Domain, hosting and renewal charges are separate where applicable. You own your domain and your content, and we will guide you on the best options.' },
    { q: 'How many revisions do I get?', a: 'You get unlimited revisions within the originally agreed project scope, including changes to the agreed design, text, colours and layout. New pages, features, major functionality and scope changes are charged separately.' },
    { q: 'Who owns the website?', a: 'You do. Once the final payment is made, the design, content, domain and hosting accounts are all yours.' },
  { q: 'What does the maintenance plan include?', a: 'Free maintenance covers bug fixes related to your delivered website, minor text updates and minor image updates, and we aim to respond to maintenance requests within 3 business days. Website backups are not included in the packages or the free maintenance, so you arrange your own. Every website includes 12 months of free maintenance from the website launch date. After that it costs ₹375 per month billed yearly (₹4,500), or ₹500 per month billed every 6 months (₹3,000).' },
  ],
}

export const contact = {
  title: 'Get a free quote',
  subtitle: "Tell us about your business and we'll reply to new enquiries within 24 hours.",
  guidance: "To get an accurate quote, tell us what your business does, how many pages you need and whether you'd like a contact form. A rough idea is fine.",
  privacyNote: 'We use your details only to respond to your enquiry.',
  successMessage: "Thank you! Your message has been sent. We'll get back to you within 24 hours.",
  errorMessage: "Sorry, the form isn't working right now. Please message us on WhatsApp instead.",
}

export const footer = {
  links: [
    { label: 'Project Demo', href: '/portfolio/' },
    { label: 'Pricing', href: '/pricing/' },
    { label: 'Process', href: '#process' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '/contact/' },
  ],
}

// ---- helpers (no need to edit) ----
export const whatsappLink = (message = defaultWhatsAppMessage) =>
  `https://wa.me/${brand.whatsappNumber}?text=${encodeURIComponent(message)}`
