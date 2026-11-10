// Bilingual (English + Tamil) copy for /website-development-tamil-nadu/.
// Both languages are always rendered, so search engines get both in the prerendered HTML.
// Keep the two objects in the same shape and keep every commitment (prices, delivery, maintenance,
// ownership, online-only) identical in meaning. The wording follows src/data/content.js and terms.js.

export const tnCities = ['Chennai', 'Madurai', 'Coimbatore', 'Tiruchirappalli', 'Salem']
// portfolio entries below look up their link in content.js `portfolio.projects` by `key` (= project name)

// the pre-filled WhatsApp message (shared by both languages)
export const tnWhatsAppMessage = "Hi WebNestStudio, I'd like a website for my business in Tamil Nadu."

export const en = {
  id: 'english',
  lang: 'en-IN',
  hero: {
    h1: 'Affordable Website Development for Businesses in Tamil Nadu',
    intro:
      'WebNestStudio is an independently run, online-only website development studio. We build fast, mobile-friendly websites for restaurants, clinics, shops and other local businesses across Tamil Nadu, including Chennai, Madurai, Coimbatore, Trichy and Salem.',
    note: 'We work entirely online. We do not have offices or branches in these cities. We talk about your project on WhatsApp and calls, and we deliver your website online.',
    quote: 'Get a Free Quote',
    whatsapp: 'Chat on WhatsApp',
    switchLabel: 'Language',
  },
  why: {
    heading: 'Why a professional website matters for small businesses',
    paras: [
      'Customers search on Google and Google Maps before they call or visit. A clear website tells them what you offer, where to find you and how to contact you, even when your shop or clinic is closed.',
      'A website you own also keeps your content, domain and customer enquiries in your hands, instead of depending only on a social media page.',
    ],
    bullets: [
      'A clear place for people searching online to learn about your business',
      'Services, photos, prices and opening hours together in one place',
      'One-tap WhatsApp, call and Google Maps buttons',
      'A professional first impression next to your competitors',
    ],
  },
  services: {
    heading: 'Website development for local businesses',
    intro: 'Every kind of business needs something slightly different. Here is what we build for the businesses we work with most.',
    items: [
      { title: 'Restaurants', text: 'Menu, photo gallery, table enquiry and WhatsApp contact, designed to read well on phones.', link: { slug: 'restaurant-website-design', text: 'Restaurant website design' } },
      { title: 'Clinics and healthcare businesses', text: 'Services, doctor information, appointment enquiry and clear contact details so patients know how to reach you.', link: { slug: 'clinic-website-design', text: 'Clinic website design' } },
      { title: 'Retail shops and small businesses', text: 'Product or service pages, shop location, opening hours and one-tap WhatsApp and call buttons.', link: { slug: 'business-website-design', text: 'Business website design' } },
      { title: 'Real estate businesses', text: 'Property showcase pages within your package’s page limit, photo galleries, location maps and WhatsApp enquiries.', link: { slug: 'real-estate-website-design', text: 'Real estate website design' } },
      { title: 'Other local businesses', text: 'Salons, tailors, tutors and other local service businesses that want customers to find and contact them online.', link: { slug: 'website-development', text: 'Website development across India' } },
    ],
    linkSuffix: '',
  },
  areas: {
    heading: 'Areas we serve in Tamil Nadu',
    intro:
      'We provide website development services online to businesses across Tamil Nadu, including these five cities. Everything happens remotely, so where your business is located does not limit who we can work with.',
    cities: [
      { name: 'Chennai', text: 'Website development in Chennai for local businesses, provided online.' },
      { name: 'Madurai', text: 'Website development in Madurai for shops, clinics and service businesses, provided online.' },
      { name: 'Coimbatore', text: 'Website development in Coimbatore for small and growing businesses, provided online.' },
      { name: 'Trichy (Tiruchirappalli)', text: 'Website development in Trichy for restaurants, retailers and local services, provided online.' },
      { name: 'Salem', text: 'Website development in Salem for small businesses, provided online.' },
    ],
    note: 'WebNestStudio is online-only. We do not operate physical offices or branches in these cities.',
  },
  whyUs: {
    heading: 'Why choose WebNestStudio',
    items: [
      { title: 'Direct communication with the founder', text: 'You talk directly with Hussain, Founder of WebNestStudio, the person building your website.' },
      { title: '7 years of experience', text: '7 years of website development experience.' },
      { title: 'React, JavaScript and Node.js', text: 'Your website is built by someone with hands-on experience in React, JavaScript and Node.js.' },
      { title: 'Fixed website packages', text: 'Fixed, one-time website packages, so you know the development fee before we start.' },
      { title: 'You own your website', text: 'You own your domain. After full payment, you receive ownership of your website source code and project-specific content.' },
      { title: 'Responsive design', text: 'A responsive design that works on phones, tablets and computers.' },
    ],
  },
  pricing: {
    heading: 'Website packages and pricing',
    intro: 'Two fixed packages, each a one-time website development fee.',
    popular: 'Most Popular',
    cta: 'Ask about this package',
    packages: [
      { name: 'Basic', price: '₹5,999', text: 'A simple, professional website to get you online.', features: ['1–5 pages', 'Mobile-friendly design', 'WhatsApp button', 'Google Maps', 'No contact form or 3D animations'] },
      { name: 'Starter', price: '₹9,999', popular: true, text: 'Everything in Basic, plus a contact form and 3D animations.', features: ['Everything in Basic', 'Contact form', '3D animations', '1–5 pages', 'Need an admin panel to manage your content? Additional charges apply'] },
    ],
    notes: [
      'Domain and hosting are separate. The package price covers designing and building your website only. Renewal charges are separate where applicable.',
      'Payment: 25% advance to start, and the remaining 75% after you approve the final website.',
    ],
    moreLink: { href: '/pricing/', text: 'See full website development pricing' },
  },
  delivery: {
    heading: 'Delivery time',
    paras: [
      'We deliver your website in six working days after we receive the advance payment and all required customer content and materials (for example your text, photos and logo).',
      'If content, approvals or feedback are delayed, the timeline extends by the number of days of the delay.',
    ],
  },
  maintenance: {
    heading: 'Free maintenance for 12 months',
    paras: ['Every website includes 12 months of free maintenance from the website launch date. Free maintenance covers only the agreed scope:'],
    bullets: ['Bug fixes for your delivered website', 'Minor text updates', 'Minor image updates'],
    after: [
      'Website backups are not included. Requests outside this scope, such as new pages or features, are charged separately.',
      'After the first 12 months, maintenance is optional. Details are on our pricing page.',
    ],
    link: { href: '/pricing/', text: 'Pricing and maintenance details' },
  },
  portfolio: {
    heading: 'Our work',
    intro: 'Open these examples on your phone to see the style and quality you can expect. Two are demo websites we built to show our work. One is a real client project.',
    projects: [
      { key: 'CarePlus', name: 'CarePlus Medical Centre', category: 'Clinic', label: 'Demo', cta: 'View the demo' },
      { key: 'Saffron & Spice', name: 'Saffron & Spice', category: 'Restaurant', label: 'Demo', cta: 'View the demo' },
      { key: 'Playfix Tailoring', name: 'Playfix Tailoring', category: 'Tailoring', label: 'Client project', cta: 'Visit the website' },
    ],
    more: { href: '/portfolio/', text: 'See the full website design portfolio' },
  },
  faq: {
    heading: 'Website development in Tamil Nadu: common questions',
    items: [
      { q: 'Do you have an office in Tamil Nadu?', a: 'No. WebNestStudio is an independently run, online-only studio. We work with businesses in Chennai, Madurai, Coimbatore, Trichy, Salem and across Tamil Nadu through WhatsApp, calls and email, and we deliver your website online.' },
      { q: 'How much does a website cost?', a: 'The Basic package is ₹5,999 and the Starter package is ₹9,999. Both are one-time website development fees. Domain and hosting are separate. Payment is 25% advance to start and the remaining 75% after you approve the final website.' },
      { q: 'How long does it take to build my website?', a: 'We deliver in six working days after we receive the advance payment and all required customer content and materials. If content, approvals or feedback are delayed, the timeline extends by the number of days of the delay.' },
      { q: 'Are domain and hosting included in the price?', a: 'No. Domain and hosting are separate, along with their renewal charges where applicable. The package price covers designing and building your website.' },
      { q: 'Who owns the website?', a: 'You own your domain. After full payment, you receive ownership of your website source code and project-specific content. Third-party fonts, libraries and services stay under their own licences.' },
      { q: 'What does the free maintenance include?', a: 'Every website includes 12 months of free maintenance from the website launch date. It covers bug fixes for your delivered website, minor text updates and minor image updates. Website backups are not included, and requests outside this scope are charged separately.' },
    ],
  },
  cta: {
    heading: 'Ready to get your business online?',
    text: 'Tell us about your business in Tamil Nadu and we will send you a website proposal. You can message us on WhatsApp or use the contact form.',
    quote: 'Contact form',
    whatsapp: 'Chat on WhatsApp',
  },
}

export const ta = {
  id: 'tamil',
  lang: 'ta',
  hero: {
    h1: 'தமிழ்நாட்டில் உள்ள வணிகங்களுக்கான மலிவான இணையதள உருவாக்கம்',
    intro:
      'WebNestStudio என்பது சுயாதீனமாக நடத்தப்படும், முழுவதும் ஆன்லைனில் மட்டுமே செயல்படும் இணையதள உருவாக்க நிறுவனம். சென்னை, மதுரை, கோயம்புத்தூர், திருச்சி, சேலம் உட்பட தமிழ்நாடு முழுவதும் உள்ள உணவகங்கள், மருத்துவமனைகள், கடைகள் மற்றும் பிற உள்ளூர் வணிகங்களுக்கு வேகமான, மொபைலுக்கு ஏற்ற இணையதளங்களை உருவாக்குகிறோம்.',
    note: 'நாங்கள் முழுவதும் ஆன்லைனில் மட்டுமே செயல்படுகிறோம். இந்த நகரங்களில் எங்களுக்கு அலுவலகங்களோ கிளைகளோ இல்லை. உங்கள் திட்டத்தைப் பற்றி WhatsApp மற்றும் அழைப்புகள் மூலம் பேசுகிறோம்; இணையதளத்தை ஆன்லைனிலேயே வழங்குகிறோம்.',
    quote: 'இலவச மதிப்பீட்டைப் பெறுங்கள்',
    whatsapp: 'WhatsApp-ல் பேசுங்கள்',
    switchLabel: 'மொழி',
  },
  why: {
    heading: 'சிறு வணிகங்களுக்கு தொழில்முறை இணையதளம் ஏன் முக்கியம்',
    paras: [
      'வாடிக்கையாளர்கள் அழைப்பதற்கு அல்லது நேரில் வருவதற்கு முன் Google மற்றும் Google Maps-ல் தேடுகிறார்கள். தெளிவான இணையதளம், நீங்கள் என்ன வழங்குகிறீர்கள், எங்கே இருக்கிறீர்கள், எப்படித் தொடர்பு கொள்வது என்பதை உங்கள் கடை அல்லது கிளினிக் மூடியிருக்கும் நேரத்திலும் தெரிவிக்கும்.',
      'உங்களுக்குச் சொந்தமான இணையதளம் இருந்தால், சமூக ஊடகப் பக்கத்தை மட்டுமே நம்பியிருக்காமல், உங்கள் உள்ளடக்கம், டொமைன் மற்றும் வாடிக்கையாளர் விசாரணைகள் உங்கள் கையிலேயே இருக்கும்.',
    ],
    bullets: [
      'ஆன்லைனில் தேடுபவர்கள் உங்கள் வணிகத்தைப் பற்றி அறிந்துகொள்ள ஒரு தெளிவான இடம்',
      'சேவைகள், புகைப்படங்கள், விலைகள், திறந்திருக்கும் நேரங்கள் அனைத்தும் ஒரே இடத்தில்',
      'ஒரே தொடுதலில் WhatsApp, அழைப்பு மற்றும் Google Maps பொத்தான்கள்',
      'போட்டியாளர்களுக்கு இணையாக ஒரு தொழில்முறை முதல் தோற்றம்',
    ],
  },
  services: {
    heading: 'உள்ளூர் வணிகங்களுக்கான இணையதள உருவாக்கம்',
    intro: 'ஒவ்வொரு வணிகத்திற்கும் தேவைகள் சற்று வேறுபடும். நாங்கள் அதிகமாகப் பணியாற்றும் வணிகங்களுக்கு என்ன உருவாக்குகிறோம் என்பது இதோ.',
    items: [
      { title: 'உணவகங்கள்', text: 'மெனு, புகைப்படத் தொகுப்பு, மேசை முன்பதிவு விசாரணை மற்றும் WhatsApp தொடர்பு. மொபைலில் படிக்க எளிதாக வடிவமைக்கப்படும்.', link: { slug: 'restaurant-website-design', text: 'உணவக இணையதள வடிவமைப்பு' } },
      { title: 'மருத்துவமனைகள் மற்றும் சுகாதார வணிகங்கள்', text: 'சேவைகள், மருத்துவர் தகவல்கள், சந்திப்பு முன்பதிவு விசாரணை மற்றும் நோயாளிகள் உங்களைத் தொடர்பு கொள்ள உதவும் தெளிவான விவரங்கள்.', link: { slug: 'clinic-website-design', text: 'கிளினிக் இணையதள வடிவமைப்பு' } },
      { title: 'சில்லறை கடைகள் மற்றும் சிறு வணிகங்கள்', text: 'பொருட்கள் அல்லது சேவைகளுக்கான பக்கங்கள், கடை இருப்பிடம், திறந்திருக்கும் நேரம், ஒரே தொடுதலில் WhatsApp மற்றும் அழைப்பு பொத்தான்கள்.', link: { slug: 'business-website-design', text: 'வணிக இணையதள வடிவமைப்பு' } },
      { title: 'ரியல் எஸ்டேட் வணிகங்கள்', text: 'உங்கள் தொகுப்பின் பக்க வரம்புக்குள் சொத்துக் காட்சிப் பக்கங்கள், புகைப்படத் தொகுப்புகள், இருப்பிட வரைபடங்கள் மற்றும் WhatsApp விசாரணைகள்.', link: { slug: 'real-estate-website-design', text: 'ரியல் எஸ்டேட் இணையதள வடிவமைப்பு' } },
      { title: 'பிற உள்ளூர் வணிகங்கள்', text: 'அழகு நிலையங்கள், தையல்காரர்கள், டியூஷன் ஆசிரியர்கள் மற்றும் வாடிக்கையாளர்கள் ஆன்லைனில் தங்களைக் கண்டுபிடித்துத் தொடர்பு கொள்ள வேண்டும் என்று விரும்பும் பிற உள்ளூர் சேவை வணிகங்கள்.', link: { slug: 'website-development', text: 'இந்தியா முழுவதும் இணையதள உருவாக்கம்' } },
    ],
    linkSuffix: ' (ஆங்கிலப் பக்கம்)',
  },
  areas: {
    heading: 'தமிழ்நாட்டில் நாங்கள் சேவை வழங்கும் பகுதிகள்',
    intro:
      'இந்த ஐந்து நகரங்கள் உட்பட தமிழ்நாடு முழுவதும் உள்ள வணிகங்களுக்கு இணையதள உருவாக்கச் சேவைகளை ஆன்லைனில் வழங்குகிறோம். அனைத்தும் தொலைவிலிருந்தே நடைபெறுவதால், உங்கள் வணிகம் எங்கே இருக்கிறது என்பது எங்களுடன் இணைந்து பணியாற்றுவதற்குத் தடையாக இருக்காது.',
    cities: [
      { name: 'சென்னை', text: 'சென்னையில் உள்ள உள்ளூர் வணிகங்களுக்கான இணையதள உருவாக்கம், ஆன்லைனில் வழங்கப்படுகிறது.' },
      { name: 'மதுரை', text: 'மதுரையில் உள்ள கடைகள், கிளினிக்குகள் மற்றும் சேவை வணிகங்களுக்கான இணையதள உருவாக்கம், ஆன்லைனில் வழங்கப்படுகிறது.' },
      { name: 'கோயம்புத்தூர்', text: 'கோயம்புத்தூரில் உள்ள சிறிய மற்றும் வளர்ந்து வரும் வணிகங்களுக்கான இணையதள உருவாக்கம், ஆன்லைனில் வழங்கப்படுகிறது.' },
      { name: 'திருச்சி (திருச்சிராப்பள்ளி)', text: 'திருச்சியில் உள்ள உணவகங்கள், சில்லறை வணிகங்கள் மற்றும் உள்ளூர் சேவைகளுக்கான இணையதள உருவாக்கம், ஆன்லைனில் வழங்கப்படுகிறது.' },
      { name: 'சேலம்', text: 'சேலத்தில் உள்ள சிறு வணிகங்களுக்கான இணையதள உருவாக்கம், ஆன்லைனில் வழங்கப்படுகிறது.' },
    ],
    note: 'WebNestStudio ஆன்லைனில் மட்டுமே செயல்படுகிறது. இந்த நகரங்களில் நாங்கள் நேரடி அலுவலகங்களையோ கிளைகளையோ நடத்தவில்லை.',
  },
  whyUs: {
    heading: 'WebNestStudio-வை ஏன் தேர்ந்தெடுக்க வேண்டும்',
    items: [
      { title: 'நிறுவனருடன் நேரடித் தொடர்பு', text: 'WebNestStudio-வின் நிறுவனர் ஹுசைனுடன் நேரடியாகப் பேசலாம். உங்கள் இணையதளத்தை உருவாக்குபவரும் அவரே.' },
      { title: '7 ஆண்டுகள் அனுபவம்', text: 'இணையதள உருவாக்கத்தில் 7 ஆண்டுகள் அனுபவம்.' },
      { title: 'React, JavaScript மற்றும் Node.js', text: 'React, JavaScript மற்றும் Node.js தொழில்நுட்பங்களில் நேரடி அனுபவம் உள்ளவர் உங்கள் இணையதளத்தை உருவாக்குகிறார்.' },
      { title: 'நிலையான இணையதளத் தொகுப்புகள்', text: 'ஒருமுறை செலுத்தும் நிலையான இணையதளத் தொகுப்புகள். தொடங்குவதற்கு முன்பே மேம்பாட்டுக் கட்டணம் உங்களுக்குத் தெரியும்.' },
      { title: 'இணையதளம் உங்களுக்கே சொந்தம்', text: 'டொமைன் உங்களுக்கே சொந்தம். முழுத் தொகையையும் செலுத்திய பிறகு, உங்கள் இணையதளத்தின் மூலக் குறியீடு (source code) மற்றும் திட்டத்திற்கான உள்ளடக்கத்தின் உரிமை உங்களுக்கு வழங்கப்படும்.' },
      { title: 'ரெஸ்பான்சிவ் வடிவமைப்பு', text: 'மொபைல், டேப்லெட், கணினி என அனைத்திலும் சரியாகத் தெரியும் ரெஸ்பான்சிவ் வடிவமைப்பு.' },
    ],
  },
  pricing: {
    heading: 'இணையதளத் தொகுப்புகளும் விலையும்',
    intro: 'இரண்டு நிலையான தொகுப்புகள். ஒவ்வொன்றும் ஒருமுறை செலுத்தும் இணையதள மேம்பாட்டுக் கட்டணம்.',
    popular: 'அதிகம் தேர்ந்தெடுக்கப்படுவது',
    cta: 'இந்தத் தொகுப்பைப் பற்றி கேளுங்கள்',
    packages: [
      { name: 'Basic', price: '₹5,999', text: 'ஆன்லைனில் வருவதற்கான எளிமையான, தொழில்முறை இணையதளம்.', features: ['1–5 பக்கங்கள்', 'மொபைலுக்கு ஏற்ற வடிவமைப்பு', 'WhatsApp பொத்தான்', 'Google Maps', 'தொடர்பு படிவம் மற்றும் 3D அனிமேஷன்கள் இல்லை'] },
      { name: 'Starter', price: '₹9,999', popular: true, text: 'Basic-ல் உள்ள அனைத்தும், கூடுதலாக தொடர்பு படிவம் மற்றும் 3D அனிமேஷன்கள்.', features: ['Basic-ல் உள்ள அனைத்தும்', 'தொடர்பு படிவம்', '3D அனிமேஷன்கள்', '1–5 பக்கங்கள்', 'உள்ளடக்கத்தை நிர்வகிக்க அட்மின் பேனல் தேவையா? கூடுதல் கட்டணம் பொருந்தும்'] },
    ],
    notes: [
      'டொமைன் மற்றும் ஹோஸ்டிங் தனியாகக் கணக்கிடப்படும். தொகுப்பு விலை உங்கள் இணையதளத்தை வடிவமைத்து உருவாக்குவதற்கு மட்டுமே. புதுப்பித்தல் கட்டணங்களும் பொருந்தும் இடங்களில் தனியாகும்.',
      'கட்டணம்: தொடங்குவதற்கு 25% முன்பணம்; இறுதி இணையதளத்தை நீங்கள் ஒப்புக்கொண்ட பிறகு மீதமுள்ள 75%.',
    ],
    moreLink: { href: '/pricing/', text: 'முழு விலைப் பட்டியல் (ஆங்கிலப் பக்கம்)' },
  },
  delivery: {
    heading: 'வழங்கும் காலம்',
    paras: [
      'முன்பணத்தையும், தேவையான அனைத்து வாடிக்கையாளர் உள்ளடக்கங்கள் மற்றும் பொருட்களையும் (உதாரணமாக உங்கள் உரை, புகைப்படங்கள், லோகோ) நாங்கள் பெற்ற பிறகு, ஆறு வேலை நாட்களில் உங்கள் இணையதளத்தை வழங்குகிறோம்.',
      'உள்ளடக்கம், ஒப்புதல்கள் அல்லது கருத்துகள் தாமதமானால், தாமதமான நாட்களின் எண்ணிக்கைக்கு ஏற்ப காலக்கெடு நீளும்.',
    ],
  },
  maintenance: {
    heading: '12 மாதங்களுக்கு இலவசப் பராமரிப்பு',
    paras: ['ஒவ்வொரு இணையதளத்திற்கும், இணையதளம் தொடங்கப்பட்ட (launch) தேதியிலிருந்து 12 மாதங்களுக்கு இலவசப் பராமரிப்பு உண்டு. இலவசப் பராமரிப்பு ஒப்புக்கொள்ளப்பட்ட வரம்பிற்குள் மட்டுமே:'],
    bullets: ['நாங்கள் வழங்கிய இணையதளத்தில் உள்ள பிழைகளைச் சரிசெய்தல் (bug fixes)', 'உரையில் சிறிய மாற்றங்கள்', 'படங்களில் சிறிய மாற்றங்கள்'],
    after: [
      'இணையதளக் காப்புப்பிரதிகள் (backups) சேர்க்கப்படவில்லை. இந்த வரம்பிற்கு வெளியே உள்ள கோரிக்கைகள், உதாரணமாக புதிய பக்கங்கள் அல்லது வசதிகள், தனிக் கட்டணத்தில் செய்யப்படும்.',
      'முதல் 12 மாதங்களுக்குப் பிறகு பராமரிப்பு விருப்பத்தின் அடிப்படையிலானது. விவரங்கள் எங்கள் விலைப் பக்கத்தில் உள்ளன.',
    ],
    link: { href: '/pricing/', text: 'விலை மற்றும் பராமரிப்பு விவரங்கள் (ஆங்கிலப் பக்கம்)' },
  },
  portfolio: {
    heading: 'எங்கள் பணிகள்',
    intro: 'நீங்கள் எதிர்பார்க்கக்கூடிய வடிவமைப்பு மற்றும் தரத்தைப் பார்க்க, இவற்றை உங்கள் மொபைலில் திறந்து பாருங்கள். இவற்றில் இரண்டு, எங்கள் பணியைக் காட்டுவதற்காக உருவாக்கப்பட்ட டெமோ இணையதளங்கள். ஒன்று உண்மையான வாடிக்கையாளர் திட்டம்.',
    projects: [
      { key: 'CarePlus', name: 'CarePlus Medical Centre', category: 'கிளினிக்', label: 'டெமோ', cta: 'டெமோவைப் பார்க்க' },
      { key: 'Saffron & Spice', name: 'Saffron & Spice', category: 'உணவகம்', label: 'டெமோ', cta: 'டெமோவைப் பார்க்க' },
      { key: 'Playfix Tailoring', name: 'Playfix Tailoring', category: 'தையல்', label: 'வாடிக்கையாளர் திட்டம்', cta: 'இணையதளத்தைப் பார்வையிட' },
    ],
    more: { href: '/portfolio/', text: 'முழு இணையதள வடிவமைப்புத் தொகுப்பு (ஆங்கிலப் பக்கம்)' },
  },
  faq: {
    heading: 'தமிழ்நாட்டில் இணையதள உருவாக்கம்: அடிக்கடி கேட்கப்படும் கேள்விகள்',
    items: [
      { q: 'தமிழ்நாட்டில் உங்களுக்கு அலுவலகம் உள்ளதா?', a: 'இல்லை. WebNestStudio சுயாதீனமாக நடத்தப்படும், ஆன்லைனில் மட்டுமே செயல்படும் நிறுவனம். சென்னை, மதுரை, கோயம்புத்தூர், திருச்சி, சேலம் மற்றும் தமிழ்நாடு முழுவதும் உள்ள வணிகங்களுடன் WhatsApp, அழைப்புகள் மற்றும் மின்னஞ்சல் மூலம் பணியாற்றி, இணையதளத்தை ஆன்லைனிலேயே வழங்குகிறோம்.' },
      { q: 'ஒரு இணையதளத்திற்கு எவ்வளவு செலவாகும்?', a: 'Basic தொகுப்பு ₹5,999, Starter தொகுப்பு ₹9,999. இரண்டும் ஒருமுறை செலுத்தும் இணையதள மேம்பாட்டுக் கட்டணங்கள். டொமைன் மற்றும் ஹோஸ்டிங் தனியாகக் கணக்கிடப்படும். தொடங்குவதற்கு 25% முன்பணம், இறுதி இணையதளத்தை நீங்கள் ஒப்புக்கொண்ட பிறகு மீதமுள்ள 75% செலுத்த வேண்டும்.' },
      { q: 'என் இணையதளத்தை உருவாக்க எவ்வளவு நேரமாகும்?', a: 'முன்பணத்தையும், தேவையான அனைத்து வாடிக்கையாளர் உள்ளடக்கங்கள் மற்றும் பொருட்களையும் பெற்ற பிறகு, ஆறு வேலை நாட்களில் வழங்குகிறோம். உள்ளடக்கம், ஒப்புதல்கள் அல்லது கருத்துகள் தாமதமானால், தாமதமான நாட்களின் எண்ணிக்கைக்கு ஏற்ப காலக்கெடு நீளும்.' },
      { q: 'டொமைன் மற்றும் ஹோஸ்டிங் விலையில் சேர்க்கப்பட்டுள்ளதா?', a: 'இல்லை. டொமைன் மற்றும் ஹோஸ்டிங், பொருந்தும் இடங்களில் அவற்றின் புதுப்பித்தல் கட்டணங்களுடன் சேர்த்து, தனியாகக் கணக்கிடப்படும். தொகுப்பு விலை உங்கள் இணையதளத்தை வடிவமைத்து உருவாக்குவதற்கு மட்டுமே.' },
      { q: 'இணையதளம் யாருக்குச் சொந்தம்?', a: 'டொமைன் உங்களுக்கே சொந்தம். முழுத் தொகையையும் செலுத்திய பிறகு, உங்கள் இணையதளத்தின் மூலக் குறியீடு மற்றும் திட்டத்திற்கான உள்ளடக்கத்தின் உரிமை உங்களுக்கு வழங்கப்படும். மூன்றாம் தரப்பு எழுத்துருக்கள் (fonts), லைப்ரரிகள் மற்றும் சேவைகள் அவற்றின் சொந்த உரிமங்களுக்கு உட்பட்டவை.' },
      { q: 'இலவசப் பராமரிப்பில் என்ன அடங்கும்?', a: 'ஒவ்வொரு இணையதளத்திற்கும், இணையதளம் தொடங்கப்பட்ட தேதியிலிருந்து 12 மாதங்களுக்கு இலவசப் பராமரிப்பு உண்டு. நாங்கள் வழங்கிய இணையதளத்தில் உள்ள பிழைகளைச் சரிசெய்தல், உரையில் மற்றும் படங்களில் சிறிய மாற்றங்கள் இதில் அடங்கும். இணையதளக் காப்புப்பிரதிகள் சேர்க்கப்படவில்லை; இந்த வரம்பிற்கு வெளியே உள்ள கோரிக்கைகள் தனிக் கட்டணத்தில் செய்யப்படும்.' },
    ],
  },
  cta: {
    heading: 'உங்கள் வணிகத்தை ஆன்லைனில் கொண்டு வரத் தயாரா?',
    text: 'தமிழ்நாட்டில் உள்ள உங்கள் வணிகத்தைப் பற்றி எங்களிடம் சொல்லுங்கள்; இணையதளத் திட்ட முன்மொழிவை அனுப்புவோம். WhatsApp-ல் செய்தி அனுப்பலாம் அல்லது தொடர்புப் படிவத்தைப் பயன்படுத்தலாம்.',
    quote: 'தொடர்புப் படிவம்',
    whatsapp: 'WhatsApp-ல் பேசுங்கள்',
  },
}
