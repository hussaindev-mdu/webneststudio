import LegalPage from './LegalPage'
import { terms } from '../data/terms'

export default function TermsPage() {
  return <LegalPage doc={terms} contactIntro={terms.contactIntro} showPhone />
}
