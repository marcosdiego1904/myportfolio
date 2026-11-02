import type { Metadata } from "next"
import Link from "next/link"
import { LegalPage, LegalSection } from "@/components/legal-page"

export const metadata: Metadata = {
  title: "Privacy Policy - Marcos Barzola",
  description:
    "How the AI voice receptionist service collects, uses and protects information, including call recordings and SMS text messages.",
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
}

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" effectiveDate="November 2, 2026">
      <LegalSection id="who-we-are" title="1. Who we are and how to contact us">
        <p>
          This Privacy Policy explains how [LEGAL BUSINESS NAME] (&quot;we&quot;, &quot;us&quot;) handles information.
          We run an AI voice receptionist for small service businesses in the Harrisburg, Pennsylvania area. It answers
          calls a business owner cannot pick up, in English or Spanish.
        </p>
        <p>You can contact us at:</p>
        <ul>
          <li>[LEGAL BUSINESS NAME]</li>
          <li>Address: [BUSINESS ADDRESS]</li>
          <li>Email: [CONTACT EMAIL]</li>
          <li>Phone: [CONTACT PHONE]</li>
        </ul>
      </LegalSection>

      <LegalSection id="information-we-collect" title="2. Information we collect">
        <p>
          <strong>a) From callers during AI-answered calls.</strong> We collect what the caller chooses to give us. This
          can include:
        </p>
        <ul>
          <li>Name</li>
          <li>Phone number</li>
          <li>Address</li>
          <li>The service requested</li>
          <li>Preferred day for a visit</li>
          <li>The content of the call, including a recording and a transcript</li>
        </ul>
        <p>
          <strong>b) From business owners who sign up.</strong> When a business owner signs up for the service, we
          collect:
        </p>
        <ul>
          <li>Name</li>
          <li>Business name</li>
          <li>Phone number</li>
          <li>Email address</li>
          <li>Calendar email address</li>
          <li>Phone carrier</li>
        </ul>
        <p>
          <strong>c) From visitors to this website.</strong> This website uses Vercel Web Analytics to count visits. It
          collects basic usage data, such as the pages viewed, the referring website, browser, device type and
          country. It does not use cookies. If you book a call through the scheduling link on this site, that booking is
          handled by Calendly under its own privacy policy.
        </p>
      </LegalSection>

      <LegalSection id="how-we-use-it" title="3. How we use information">
        <p>We use the information we collect to:</p>
        <ul>
          <li>Answer calls on behalf of the business the caller is trying to reach</li>
          <li>Book visits on the business owner&apos;s calendar</li>
          <li>Send the business owner a text message summary of each call</li>
          <li>Improve call quality</li>
          <li>Meet legal requirements</li>
        </ul>
      </LegalSection>

      <LegalSection id="call-recording" title="4. Call recording notice">
        <p>Calls answered by the AI receptionist may be recorded and transcribed.</p>
        <p>
          At the start of every call, the assistant tells the caller that it is an AI and that the call may be
          recorded.
        </p>
        <p>We keep call recordings and transcripts for [RECORDING RETENTION PERIOD].</p>
      </LegalSection>

      <LegalSection id="sharing" title="5. Who we share information with">
        <p>We share information only with:</p>
        <ul>
          <li>The business the caller was trying to reach.</li>
          <li>
            The service providers we use to run the service. They process data on our behalf: Retell AI (voice agent),
            Twilio (text messages), Cal.com and Google Calendar (scheduling), Google Sheets (call log), and our website
            hosting provider.
          </li>
        </ul>
        <p>
          <strong>We do not sell personal information.</strong>
        </p>
      </LegalSection>

      <LegalSection id="sms" title="6. SMS / Text Messaging">
        <p>
          <strong>What the texts are.</strong> After each call, we send a text message summary of the call to the
          business owner who signed up for the AI receptionist. Only business owners receive these text messages.
          Callers do not receive text messages from us.
        </p>
        <p>
          <strong>Message frequency.</strong> Message frequency varies with the number of calls the business receives.
        </p>
        <p>
          <strong>Cost.</strong> Message and data rates may apply.
        </p>
        <p>
          <strong>How to stop.</strong> Reply STOP to any message to stop receiving text messages.
        </p>
        <p>
          <strong>How to get help.</strong> Reply HELP to any message, or contact us at [CONTACT EMAIL] or [CONTACT
          PHONE].
        </p>
        <p>
          <strong>
            Mobile opt-in data and phone numbers will not be shared with third parties or affiliates for marketing
            purposes.
          </strong>
        </p>
        <p>
          See the <Link href="/terms#sms-terms">SMS Terms</Link> in our Terms of Service for more details.
        </p>
      </LegalSection>

      <LegalSection id="retention-security" title="7. Data retention and security">
        <p>
          We keep call recordings and transcripts for [RECORDING RETENTION PERIOD]. We keep other information only as
          long as we need it to provide the service or to meet legal requirements.
        </p>
        <p>
          We use reasonable measures to protect information. No method of storage or transmission is completely
          secure, so we cannot guarantee absolute security.
        </p>
      </LegalSection>

      <LegalSection id="your-choices" title="8. Your choices and requests">
        <p>
          You can ask us to access or delete information we hold about you. Email us at [CONTACT EMAIL] and tell us
          what you are asking for. We may need to confirm your identity before we act on your request.
        </p>
      </LegalSection>

      <LegalSection id="changes" title="9. Changes to this policy">
        <p>
          We may update this Privacy Policy from time to time. When we do, we will update the effective date at the top
          of this page.
        </p>
      </LegalSection>
    </LegalPage>
  )
}
