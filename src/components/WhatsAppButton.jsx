import { whatsappLink } from '../data/content'
import { WhatsAppIcon } from './Icons'

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-4 right-4 z-50 flex h-12 w-12 sm:bottom-5 sm:right-5 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-[#15803D] text-white shadow-lg transition hover:scale-105 hover:bg-[#166534]"
    >
      <WhatsAppIcon width={30} height={30} />
    </a>
  )
}
