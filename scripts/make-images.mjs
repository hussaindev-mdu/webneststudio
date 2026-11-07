// Generates lightweight SVG mockup placeholders into public/images.
// Replace these with real screenshots (WebP/JPG, ~1200px wide) any time.
import { writeFileSync } from 'node:fs'
const projects = [
  ['clinic', '#0E7490', '#CFFAFE', 'Smile Dental Care'],
  ['restaurant', '#B45309', '#FEF3C7', 'Spice Garden'],
  ['salon', '#9D174D', '#FCE7F3', 'Glow Beauty Salon'],
  ['fitness', '#166534', '#DCFCE7', 'IronFit Gym'],
]
const browser = (c, l, name) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 560" role="img" aria-label="${name} website mockup">
<rect width="800" height="560" fill="#EEF2F6"/>
<rect x="40" y="40" width="720" height="480" rx="16" fill="#fff" stroke="#D0D5DD"/>
<rect x="40" y="40" width="720" height="40" rx="16" fill="#F2F4F7"/><rect x="40" y="64" width="720" height="16" fill="#F2F4F7"/>
<circle cx="64" cy="60" r="6" fill="#F87171"/><circle cx="84" cy="60" r="6" fill="#FBBF24"/><circle cx="104" cy="60" r="6" fill="#4ADE80"/>
<rect x="140" y="50" width="400" height="20" rx="10" fill="#fff"/>
<rect x="40" y="80" width="720" height="50" fill="#fff"/><rect x="64" y="98" width="90" height="14" rx="4" fill="${c}"/>
<rect x="520" y="100" width="40" height="10" rx="5" fill="#CBD5E1"/><rect x="580" y="100" width="40" height="10" rx="5" fill="#CBD5E1"/><rect x="640" y="94" width="96" height="22" rx="11" fill="${c}"/>
<rect x="40" y="130" width="720" height="210" fill="${l}"/>
<rect x="72" y="166" width="300" height="22" rx="6" fill="${c}"/><rect x="72" y="200" width="240" height="22" rx="6" fill="${c}" opacity=".7"/>
<rect x="72" y="244" width="340" height="10" rx="5" fill="${c}" opacity=".35"/><rect x="72" y="262" width="290" height="10" rx="5" fill="${c}" opacity=".35"/>
<rect x="72" y="292" width="120" height="30" rx="15" fill="${c}"/>
<rect x="480" y="156" width="240" height="160" rx="16" fill="${c}" opacity=".85"/><circle cx="600" cy="236" r="40" fill="#fff" opacity=".35"/>
<rect x="72" y="370" width="200" height="120" rx="12" fill="${l}"/><rect x="300" y="370" width="200" height="120" rx="12" fill="${l}"/><rect x="528" y="370" width="200" height="120" rx="12" fill="${l}"/>
<circle cx="100" cy="400" r="12" fill="${c}"/><circle cx="328" cy="400" r="12" fill="${c}"/><circle cx="556" cy="400" r="12" fill="${c}"/>
</svg>`
for (const [id, c, l, n] of projects) writeFileSync(`public/images/${id}.svg`, browser(c, l, n))

// Hero: laptop + phone
writeFileSync('public/images/hero-devices.svg', `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" role="img" aria-label="Website shown on laptop and phone">
<ellipse cx="320" cy="440" rx="270" ry="18" fill="#0A2742" opacity=".12"/>
<rect x="70" y="50" width="450" height="290" rx="16" fill="#0A2742"/>
<rect x="84" y="64" width="422" height="262" rx="6" fill="#fff"/>
<rect x="84" y="64" width="422" height="34" fill="#F2F4F7"/><rect x="100" y="76" width="70" height="10" rx="4" fill="#0A2742"/><rect x="400" y="72" width="88" height="18" rx="9" fill="#C2410C"/>
<rect x="84" y="98" width="422" height="130" fill="#FFE7D6"/>
<rect x="108" y="122" width="190" height="16" rx="5" fill="#0A2742"/><rect x="108" y="146" width="150" height="16" rx="5" fill="#0A2742" opacity=".7"/>
<rect x="108" y="176" width="200" height="8" rx="4" fill="#0A2742" opacity=".3"/><rect x="108" y="194" width="90" height="22" rx="11" fill="#C2410C"/>
<rect x="350" y="112" width="130" height="102" rx="12" fill="#1F6FB2"/><circle cx="415" cy="163" r="26" fill="#fff" opacity=".35"/>
<rect x="104" y="244" width="120" height="66" rx="8" fill="#EEF5FB"/><rect x="236" y="244" width="120" height="66" rx="8" fill="#EEF5FB"/><rect x="368" y="244" width="120" height="66" rx="8" fill="#EEF5FB"/>
<path d="M30 348h530l-30 28H60z" fill="#C9D3DE"/><rect x="250" y="348" width="90" height="8" rx="4" fill="#98A6B5"/>
<rect x="430" y="150" width="150" height="290" rx="26" fill="#0A2742"/>
<rect x="440" y="164" width="130" height="262" rx="18" fill="#fff"/><rect x="487" y="170" width="36" height="6" rx="3" fill="#0A2742"/>
<rect x="448" y="186" width="114" height="76" rx="10" fill="#FFE7D6"/><rect x="456" y="198" width="70" height="9" rx="4" fill="#0A2742"/><rect x="456" y="214" width="50" height="9" rx="4" fill="#0A2742" opacity=".7"/><rect x="456" y="236" width="46" height="14" rx="7" fill="#C2410C"/>
<rect x="448" y="272" width="54" height="50" rx="8" fill="#EEF5FB"/><rect x="508" y="272" width="54" height="50" rx="8" fill="#EEF5FB"/>
<rect x="448" y="332" width="114" height="30" rx="15" fill="#16A34A"/><rect x="480" y="343" width="50" height="8" rx="4" fill="#fff"/>
</svg>`)
console.log('images written')
