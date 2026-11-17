import { Link, useLocation } from 'react-router-dom'
import { brand } from '../data/content'

// SemmAI logo: "SAi" inside a laptop, with a gold spark as the dot of the i.
// Master files (SVG/PNG, light + dark): logo/semmai/. Geometry is in an 848 x 489 box.
const LIGHT = { ink: '#101C3D', ai: '#2563EB', spark: '#F59E0B' }
const DARK = { ink: '#FFFFFF', ai: '#6B8EF5', spark: '#FBBF24' }
const SPARK = 'M557 139C563.5 157.1 565.9 159.5 584 166C565.9 172.5 563.5 174.9 557 193C550.5 174.9 548.1 172.5 530 166C548.1 159.5 550.5 157.1 557 139Z'

// `gap` is the background colour: it separates the A from the S and cuts the laptop's notch.
function Mark({ c, gap }) {
  return (
    <>
      <rect x="64" y="12" width="720" height="400" rx="36" fill="none" stroke={c.ink} strokeWidth="24" />
      <path d="M0 437H848L804 489H44Z" fill={c.ink} />
      <rect x="360" y="438" width="128" height="15" rx="7.5" fill={gap} />
      <path d="M338.7 336.0Q314.3 336.0 291.8 329.6Q269.2 323.2 255.0 312.9L273.5 268.6Q286.9 277.8 304.4 283.6Q321.9 289.4 339.1 289.4Q350.9 289.4 357.9 287.2Q364.9 285.0 368.1 281.2Q371.4 277.3 371.4 272.2Q371.4 265.0 365.3 260.8Q359.1 256.6 349.1 253.8Q339.1 251.1 327.1 248.4Q315.1 245.7 303.0 241.5Q290.9 237.3 280.9 230.5Q270.8 223.7 264.7 212.5Q258.6 201.4 258.6 184.4Q258.6 165.6 268.3 150.1Q278.1 134.6 297.6 125.3Q317.2 116.0 346.7 116.0Q366.0 116.0 384.9 120.6Q403.8 125.3 418.6 134.5L401.4 178.7Q387.2 170.6 373.2 166.6Q359.3 162.6 346.2 162.6Q334.6 162.6 327.5 165.2Q320.4 167.8 317.3 172.0Q314.2 176.2 314.2 181.5Q314.2 188.4 320.3 192.5Q326.5 196.6 336.5 199.2Q346.5 201.8 358.6 204.5Q370.7 207.1 382.7 211.3Q394.7 215.4 404.7 222.2Q414.7 228.9 420.9 240.0Q427.0 251.0 427.0 267.6Q427.0 286.2 417.2 301.7Q407.4 317.2 387.9 326.6Q368.4 336.0 338.7 336.0Z" fill={c.ink} />
      <path d="M379 332L452 164H484L530 332H494L484 301H430L416 332ZM463.7 222L477 270H442.9Z" fill={c.ai} fillRule="evenodd" stroke={gap} strokeWidth="9" paintOrder="stroke" />
      <rect x="535" y="215" width="43" height="117" fill={c.ai} />
      <path d={SPARK} fill={c.spark} />
    </>
  )
}

// onDark: always use the dark-background colours (e.g. the navy footer). Otherwise follow the site theme.
export function LogoMark({ className = 'h-10 w-auto', onDark = false, gap }) {
  return (
    <svg className={className} viewBox="0 0 848 489" role="img" aria-label={brand.name}>
      {onDark ? (
        <Mark c={DARK} gap={gap || '#0A2742'} />
      ) : (
        <>
          <g className="dark:hidden"><Mark c={LIGHT} gap={gap || 'rgb(var(--c-surface))'} /></g>
          <g className="hidden dark:inline"><Mark c={DARK} gap={gap || 'rgb(var(--c-surface))'} /></g>
        </>
      )}
    </svg>
  )
}

// The written name "SemmAI" as a vector wordmark (Outfit ExtraBold outlines; the spark is the dot of the i).
// Size it with a height class, e.g. className="h-7". Master files: logo/semmai/semmai-wordmark*.svg
const WM_LIGHT = { ink: '#101C3D', ai: '#2563EB', spark: '#F59E0B' }
const WM_DARK = { ink: '#FFFFFF', ai: '#6B8EF5', spark: '#FBBF24' }
const WM = {
  ink: 'M223.7 438.4Q205.3 438.4 191.8 432.7Q178.2 427.0 167.0 415.0L190.5 391.5Q198.0 399.5 206.8 403.7Q215.6 408.0 226.4 408.0Q235.8 408.0 240.8 404.8Q245.9 401.6 245.9 396.0Q245.9 390.7 242.2 387.4Q238.4 384.0 232.3 381.4Q226.2 378.9 218.8 376.4Q211.5 374.0 204.2 370.6Q196.9 367.2 190.8 362.2Q184.7 357.3 180.9 349.8Q177.2 342.3 177.2 331.2Q177.2 317.3 183.9 307.3Q190.6 297.2 202.7 291.9Q214.7 286.6 230.6 286.6Q246.6 286.6 260.1 292.0Q273.6 297.3 282.3 306.8L258.7 330.3Q252.0 323.6 245.2 320.3Q238.4 317.0 230.1 317.0Q222.6 317.0 218.2 319.7Q213.8 322.3 213.8 327.4Q213.8 332.3 217.5 335.4Q221.3 338.6 227.4 341.0Q233.5 343.4 240.9 345.9Q248.2 348.3 255.5 351.7Q262.8 355.0 268.9 360.2Q275.0 365.4 278.8 373.2Q282.5 381.1 282.5 392.4Q282.5 414.2 267.0 426.3Q251.5 438.4 223.7 438.4ZM344.7 438.4Q327.6 438.4 314.5 431.6Q301.4 424.9 294.0 412.9Q286.6 400.8 286.6 385.3Q286.6 370.0 293.8 358.0Q301.0 346.1 313.6 339.1Q326.2 332.2 341.9 332.2Q357.3 332.2 369.2 338.7Q381.0 345.2 387.7 356.7Q394.5 368.3 394.5 383.0Q394.5 386.0 394.2 389.2Q393.9 392.4 392.9 396.6L303.5 397.1V373.7L378.6 373.3L362.3 383.4Q362.2 374.9 360.0 369.4Q357.7 363.8 353.4 361.0Q349.0 358.1 342.4 358.1Q335.5 358.1 330.5 361.4Q325.5 364.7 322.8 370.7Q320.2 376.8 320.2 385.3Q320.2 394.0 323.0 400.1Q325.9 406.1 331.3 409.2Q336.8 412.4 344.6 412.4Q352.0 412.4 357.7 409.9Q363.5 407.4 368.0 402.3L386.9 421.0Q379.3 429.7 368.7 434.0Q358.0 438.4 344.7 438.4ZM402.7 436.0V334.6H438.9V436.0ZM466.4 436.0V377.3Q466.4 370.9 462.5 367.3Q458.6 363.7 452.7 363.7Q448.7 363.7 445.5 365.3Q442.4 367.0 440.6 370.0Q438.9 373.0 438.9 377.3L424.8 371.7Q424.8 359.5 430.2 350.8Q435.6 342.0 444.7 337.3Q453.8 332.5 465.3 332.5Q475.7 332.5 484.2 337.4Q492.6 342.3 497.6 351.0Q502.5 359.6 502.5 371.6V436.0ZM530.0 436.0V377.3Q530.0 370.9 526.1 367.3Q522.2 363.7 516.4 363.7Q512.4 363.7 509.2 365.3Q506.0 367.0 504.3 370.0Q502.5 373.0 502.5 377.3L481.4 376.2Q481.7 362.7 487.4 352.9Q493.1 343.1 502.9 337.8Q512.7 332.5 525.1 332.5Q537.0 332.5 546.3 337.6Q555.5 342.6 560.8 352.0Q566.2 361.4 566.2 374.5V436.0ZM579.5 436.0V334.6H615.7V436.0ZM643.1 436.0V377.3Q643.1 370.9 639.3 367.3Q635.4 363.7 629.5 363.7Q625.5 363.7 622.3 365.3Q619.1 367.0 617.4 370.0Q615.7 373.0 615.7 377.3L601.6 371.7Q601.6 359.5 607.0 350.8Q612.4 342.0 621.5 337.3Q630.6 332.5 642.1 332.5Q652.5 332.5 660.9 337.4Q669.4 342.3 674.3 351.0Q679.3 359.6 679.3 371.6V436.0ZM706.8 436.0V377.3Q706.8 370.9 702.9 367.3Q699.0 363.7 693.2 363.7Q689.2 363.7 686.0 365.3Q682.8 367.0 681.1 370.0Q679.3 373.0 679.3 377.3L658.2 376.2Q658.5 362.7 664.2 352.9Q669.8 343.1 679.7 337.8Q689.5 332.5 701.9 332.5Q713.8 332.5 723.0 337.6Q732.3 342.6 737.6 352.0Q743.0 361.4 743.0 374.5V436.0Z',
  ai: 'M748.0 436.0 805.1 289.0H840.9L897.4 436.0H858.6L816.1 312.5H829.5L786.0 436.0ZM782.7 410.3V380.9H863.8V410.3ZM904.7 436.0V334.6H940.8V436.0Z',
  spark: 'M922.7 246.5C931.6 271.3 935.0 274.6 959.7 283.5C935.0 292.4 931.6 295.7 922.7 320.5C913.9 295.7 910.5 292.4 885.7 283.5C910.5 274.6 913.9 271.3 922.7 246.5Z',
}

function WordmarkPaths({ c }) {
  return (
    <>
      <path d={WM.ink} fill={c.ink} />
      <path d={WM.ai} fill={c.ai} />
      <path d={WM.spark} fill={c.spark} />
    </>
  )
}

export function Wordmark({ light = false, className = '' }) {
  return (
    <svg viewBox="160 240 810 205" role="img" aria-label={brand.name} className={`w-auto ${className}`}>
      {light ? (
        <WordmarkPaths c={WM_DARK} />
      ) : (
        <>
          <g className="dark:hidden"><WordmarkPaths c={WM_LIGHT} /></g>
          <g className="hidden dark:inline"><WordmarkPaths c={WM_DARK} /></g>
        </>
      )}
    </svg>
  )
}

// Laptop mark + the written name beside it.
export default function Logo({ light = false, small = false }) {
  const home = useLocation().pathname === '/'
  const Tag = home ? 'a' : Link
  const target = home ? { href: '#top' } : { to: '/' }
  return (
    <Tag {...target} className="flex items-center gap-2.5" aria-label={`${brand.name} home`}>
      <LogoMark onDark={light} className={`${small ? 'h-9' : 'h-11'} w-auto transition-all`} />
      <Wordmark light={light} className={`${small ? 'h-7' : 'h-8'} transition-all`} />
    </Tag>
  )
}
