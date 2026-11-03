import type { Metadata } from "next"
import Link from "next/link"
import { LegalPage, LegalSection } from "@/components/legal-page"

export const metadata: Metadata = {
  title: "Terms of Service - Marcos Barzola",
  description:
    "Terms of Service for the AI voice receptionist service, including SMS terms for call-summary text notifications.",
  alternates: { canonical: "/terms" },
  robots: { index: true, follow: true },
}

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Service" effectiveDate="November 2, 2026">
      <LegalSection id="about" title="1. About the service">
        <p>
          Marcos Diego Barzola (&quot;we&quot;, &quot;us&quot;) provides an AI voice receptionist for small service
          businesses in the Harrisburg, Pennsylvania area. It answers calls a business owner cannot pick up, in English
          or Spanish.
        </p>
        <p>
          The assistant only receives calls. It never makes outbound calls. It collects the information the caller
          chooses to give and can book a visit on the business owner&apos;s calendar. After each call, a text message
          summary is sent to the business owner.
        </p>
        <p>
          The service is for businesses. By using it, you confirm that you are using it on behalf of a business and that
          you have authority to agree to these Terms for that business.
        </p>
      </LegalSection>

      <LegalSection id="owner-responsibilities" title="2. Responsibilities of the business owner">
        <p>As a business owner using the service, you agree to:</p>
        <ul>
          <li>Provide accurate information about yourself and your business.</li>
          <li>Review the information the assistant collects and check that it is correct.</li>
          <li>Set up and keep your phone call forwarding settings so calls reach the assistant.</li>
        </ul>
      </LegalSection>

      <LegalSection id="ai-limits" title="3. AI assistant limits">
        <ul>
          <li>The assistant is an AI and it can make mistakes.</li>
          <li>The assistant does not give exact price quotes.</li>
          <li>
            The assistant is not for emergencies. Callers with an emergency should hang up and call 911 or the right
            emergency service.
          </li>
        </ul>
      </LegalSection>

      <LegalSection id="recording" title="4. Call recording and disclosure">
        <p>
          At the start of every call, the assistant tells the caller that it is an AI and that the call may be
          recorded. Calls may be recorded and transcribed. See our <Link href="/privacy">Privacy Policy</Link> for how we
          handle recordings and transcripts.
        </p>
      </LegalSection>

      <LegalSection id="acceptable-use" title="5. Acceptable use">
        <p>You agree not to use the service to:</p>
        <ul>
          <li>Break any law or regulation.</li>
          <li>Harass, threaten, deceive or harm anyone.</li>
          <li>Send spam or unwanted messages.</li>
          <li>Interfere with or try to gain unauthorized access to the service or its systems.</li>
        </ul>
        <p>We may suspend or end access to the service if it is used in a way that breaks these Terms.</p>
      </LegalSection>

      <LegalSection id="sms-terms" title="6. SMS Terms">
        <ul>
          <li>
            <strong>Program:</strong> Call-summary text notifications for business owners who sign up for the AI
            receptionist.
          </li>
          <li>
            <strong>How to opt in:</strong> The business owner checks an unchecked box in the sign-up form to agree to
            receive these texts.
          </li>
          <li>
            <strong>Frequency:</strong> Message frequency varies with the number of calls received.
          </li>
          <li>
            <strong>Cost:</strong> Message and data rates may apply.
          </li>
          <li>
            <strong>Opt out:</strong> Reply STOP at any time. You will receive one confirmation message and no more
            texts.
          </li>
          <li>
            <strong>Help:</strong> Reply HELP or contact marcosbarzola@devbymarcos.com.
          </li>
          <li>Carriers are not liable for delayed or undelivered messages.</li>
          <li>
            <strong>Privacy:</strong> See our <Link href="/privacy#sms">Privacy Policy</Link>.
          </li>
        </ul>
      </LegalSection>

      <LegalSection id="payment" title="7. Payment, term and cancellation">
        <p>Payment, the length of service and cancellation are covered in your written service agreement with us.</p>
      </LegalSection>

      <LegalSection id="disclaimer" title="8. Disclaimer and limitation of liability">
        <p>
          The service is provided &quot;as is&quot; and &quot;as available&quot;, without warranties of any kind, to
          the extent allowed by law. We do not promise that the service will be uninterrupted or error-free.
        </p>
        <p>
          To the extent allowed by law, we are not liable for any indirect, incidental, special or consequential
          damages, or for lost profits, lost revenue or lost business, arising from the use of the service.
        </p>
      </LegalSection>

      <LegalSection id="governing-law" title="9. Governing law">
        <p>These Terms are governed by the laws of the Commonwealth of Pennsylvania.</p>
      </LegalSection>

      <LegalSection id="contact" title="10. Contact">
        <p>Questions about these Terms? Contact us at:</p>
        <ul>
          <li>Marcos Diego Barzola</li>
          <li>Address: 4591 Larch Dr</li>
          <li>Email: marcosbarzola@devbymarcos.com</li>
          <li>Phone: (717) 440-5297</li>
        </ul>
      </LegalSection>
    </LegalPage>
  )
}
