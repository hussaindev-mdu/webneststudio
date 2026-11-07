// ============================================================================
//  ALL EDITABLE CONTENT LIVES HERE. Search for "REPLACE" to find placeholders.
// ============================================================================

export const brand = {
  name: 'WebNestStudio',
  tagline: 'Websites that bring you customers',
  owner: 'Hussain',
  city: 'Your City', // REPLACE
  niche: 'clinics', // REPLACE e.g. "restaurants", "salons"
  whatsappNumber: '919566831055', // country code + number, digits only (no + or spaces)
  whatsappDisplay: '+91 95668 31055',
  email: 'hussaindev07@gmail.com',
  instagram: 'https://instagram.com/yourhandle', // REPLACE
  facebook: 'https://facebook.com/yourpage', // REPLACE
}

// Formspree: create a form at https://formspree.io and paste its ID (the part after /f/)
export const formspreeId = 'mvkknwbz'

export const defaultWhatsAppMessage =
  "Hi WebNestStudio, I'm interested in a website for my business"

export const nav = [
  { label: 'Work', href: '#portfolio' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Process', href: '#process' },
  { label: 'About', href: '#about' },
  { label: 'FAQ', href: '#faq' },
]

export const hero = {
  // {niche} and {city} are filled in automatically from `brand`
  headline: 'Professional websites for {niche} in {city}, ready in 6 days',
  subtext:
    'I design fast, mobile-friendly websites that help local customers find you on Google, trust your business and contact you in one tap.',
  primaryCta: 'See My Work',
  secondaryCta: 'Chat on WhatsApp',
  badges: ['6-day delivery', 'Mobile-first', 'No hidden fees'],
}

export const problems = {
  title: 'Sound familiar?',
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
      text: 'If calling or messaging takes effort, people give up. I add one-tap WhatsApp, call and booking.',
    },
  ],
}

export const portfolio = {
  title: 'Recent work',
  subtitle: 'Sample projects showing the style and quality you can expect.',
  cta: 'View Live Demo',
  projects: [
    // REPLACE names, descriptions, images (public/images/*) and demo links with your own
    { name: 'Smile Dental Care', category: 'Clinic', image: '/images/clinic.svg', description: 'Appointment-focused site with services, doctor profile and Google Maps.', link: 'https://example.com/demo-clinic' },
    { name: 'Spice Garden', category: 'Restaurant', image: '/images/restaurant.svg', description: 'Menu, photo gallery and one-tap table booking on WhatsApp.', link: 'https://example.com/demo-restaurant' },
    { name: 'Glow Beauty Salon', category: 'Salon', image: '/images/salon.svg', description: 'Service price list, before/after gallery and online enquiry form.', link: 'https://example.com/demo-salon' },
    { name: 'IronFit Gym', category: 'Fitness', image: '/images/fitness.svg', description: 'Membership plans, trainer profiles and free-trial sign-up.', link: 'https://example.com/demo-gym' },
  ],
}

export const pricing = {
  title: 'Simple, honest pricing',
  subtitle: 'One-time pricing for your website. No surprise costs.',
  cta: 'Get Started',
  packages: [
    {
      name: 'Starter',
      price: '₹9,999',
      period: 'one-time',
      description: 'A clean, professional online presence.',
      features: ['1–5 pages', 'Mobile-friendly design', 'Contact form', 'WhatsApp button', 'Google Maps', '6-day delivery'],
      popular: false,
    },
    {
      name: 'Business',
      price: '₹24,999',
      period: 'one-time',
      description: 'Everything you need to get found and get enquiries.',
      features: ['5–7 pages', 'Admin panel access (add, view, edit & delete content)', 'Basic SEO', 'Google Business Profile setup', 'Everything in Starter'],
      popular: true,
    },
    {
      name: 'Maintenance',
      price: '₹1,499',
      period: 'per month',
      description: 'Keep your site fresh, safe and up to date.',
      features: ['Content updates', 'Regular backups', 'Small changes', 'Priority WhatsApp support'],
      popular: false,
    },
  ],
}

export const process = {
  title: 'How it works',
  subtitle: 'A simple four-step process, no technical knowledge needed.',
  steps: [
    { title: 'Free call', text: 'We talk about your business, customers and goals. No charge, no pressure.' },
    { title: 'Design demo', text: 'I send you a design preview of your homepage so you can see it before we go further.' },
    { title: 'Revisions', text: 'You tell me what to change and I refine it until you love it.' },
    { title: 'Go live', text: 'I launch your website, connect your domain and show you how it works.' },
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
  title: 'Hi, I\'m {owner}',
  photo: '', // REPLACE – e.g. '/images/me.jpg' (put the file in public/images). Empty shows a placeholder.
  bio: [
    "I'm a freelance web designer helping small local businesses get online and get more customers. I work directly with you, so there are no agencies, no middlemen and no jargon.",
    'Every site I build is fast, easy to use on a phone and designed to turn visitors into enquiries.',
  ],
  reasons: [
    { icon: 'zap', title: 'Fast delivery', text: 'Most websites are live within 6 days.' },
    { icon: 'message', title: 'Direct communication', text: 'You talk to me on WhatsApp, not a support queue.' },
    { icon: 'shield', title: 'You own everything', text: 'Your domain, your content, your site.' },
  ],
}

export const faq = {
  title: 'Frequently asked questions',
  items: [
    { q: 'How long does it take?', a: 'Starter websites are ready in 6 days. Business websites with more pages usually take 7–10 days, depending on how quickly I receive your content and feedback.' },
    { q: 'How does payment work?', a: 'You pay 25% advance to start and the remaining 75% after you approve the final website. You can pay by UPI or bank transfer.' },
    { q: 'Do I need to buy a domain and hosting?', a: 'Yes, but I handle the setup for you. A domain typically costs around ₹800–1,200 per year and hosting can be free or low-cost. I will guide you on the best options.' },
    { q: 'How many revisions do I get?', a: 'You get unlimited small tweaks during the design stage and up to 3 rounds of major revisions, so the final result is exactly what you want.' },
    { q: 'Who owns the website?', a: 'You do. Once the final payment is made, the design, content, domain and hosting accounts are all yours.' },
    { q: 'What does the maintenance plan include?', a: 'Content and price updates, regular backups, security checks and small changes, for ₹1,499 per month. You can cancel any time.' },
  ],
}

export const contact = {
  title: 'Get a free quote',
  subtitle: "Tell me about your business and I'll reply within 24 hours, usually much sooner.",
  successMessage: "Thank you! Your message has been sent. I'll get back to you soon.",
  errorMessage: "Sorry, it looks like form submission isn't working right now. Please contact me on WhatsApp instead.",
}

export const footer = {
  links: [
    { label: 'Work', href: '#portfolio' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Process', href: '#process' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ],
}

// ---- helpers (no need to edit) ----
export const whatsappLink = (message = defaultWhatsAppMessage) =>
  `https://wa.me/${brand.whatsappNumber}?text=${encodeURIComponent(message)}`
