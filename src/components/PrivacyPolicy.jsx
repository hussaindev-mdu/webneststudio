import LegalPage from './LegalPage'
import { privacy } from '../data/privacy'

export default function PrivacyPolicy() {
  return <LegalPage doc={privacy} contactIntro="For questions about this policy or your enquiry information, contact WebNestStudio:" />
}
