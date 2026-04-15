// src/pages/PrivacyPolicy.jsx
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

function PrivacyPolicy() {
  return (
    <div className="bg-slate-900 min-h-screen">
      {/* Hero */}
      <section className="bg-sky-50 text-slate-900">
        <div className="container mx-auto px-4 py-16 md:py-20">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl">
            Ape Champs Swim School is committed to protecting the privacy of our students, their families, and all users of our services.
          </p>
        </div>
      </section>

      {/* Body */}
      <section className="bg-white">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="max-w-4xl mx-auto bg-sky-50/70 border border-sky-100 rounded-3xl p-6 md:p-10 shadow-sm">
            <div className="mb-6">
              <p className="text-sm text-slate-600">
                <strong>Effective Date:</strong> April 15, 2026
              </p>
              <p className="text-sm text-slate-600">
                <strong>Last Updated:</strong> April 15, 2026
              </p>
            </div>

            <p className="text-slate-700 text-sm md:text-base leading-relaxed mb-6">
              Ape Champs Swim School ("we," "us," "our," or "ACSS") is committed to protecting the privacy of our students, their families, and all users of our mobile application and services. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our ACSS mobile application (the "App").
            </p>

            <p className="text-slate-700 text-sm md:text-base leading-relaxed mb-8">
              By using the App, you consent to the data practices described in this Privacy Policy. If you do not agree with the terms of this Privacy Policy, please do not use the App.
            </p>

            <div className="text-slate-700 space-y-8 text-sm md:text-base leading-relaxed">
              {/* Section 1 */}
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-4">
                  1. Information We Collect
                </h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-2">
                      1.1 Personal Information from Parents/Guardians
                    </h3>
                    <p className="mb-2">When you register an account and use our services, we collect:</p>
                    <ul className="space-y-1 ml-4">
                      <li>• <strong>Account Information:</strong> Username, password (securely hashed), name, and email address</li>
                      <li>• <strong>Contact Information:</strong> Phone numbers (parent/guardian, mother, father), emergency contact name and phone number</li>
                      <li>• <strong>Address Information:</strong> Street address, postal code, building name, and unit number</li>
                      <li>• <strong>Preferences:</strong> Preferred coach gender, notification preferences, profile picture</li>
                      <li>• <strong>Family Account Data:</strong> Family ID for linked accounts and family password (optional)</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-2">
                      1.2 Children's Personal Information
                    </h3>
                    <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-3">
                      <p className="text-amber-800 font-medium">
                        <strong>Important Notice:</strong> Our App collects information about children (swimmers/students) for the purpose of providing swimming lessons and tracking their progress. This information is provided and managed by parents or legal guardians.
                      </p>
                    </div>
                    <p className="mb-2">We collect the following information about children enrolled in our swim programs:</p>
                    <ul className="space-y-1 ml-4">
                      <li>• <strong>Basic Information:</strong> Name, gender, and date of birth</li>
                      <li>• <strong>Swimming Profile:</strong> Skill level, pool type preference, trial lesson results</li>
                      <li>• <strong>Health Information:</strong> Special needs flags and medical/health notes relevant to swimming safety</li>
                      <li>• <strong>Progress Data:</strong> Swimming skill achievements, badges, certificates, lesson attendance records</li>
                      <li>• <strong>Location Information:</strong> Lesson venue address for class scheduling</li>
                      <li>• <strong>Photos:</strong> Profile pictures (uploaded by parents/guardians)</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-2">
                      1.3 Coach and Staff Information
                    </h3>
                    <p className="mb-2">For our coaches and administrative staff, we collect:</p>
                    <ul className="space-y-1 ml-4">
                      <li>• Name, username, password, email, and phone number</li>
                      <li>• Role and supervisor assignments</li>
                      <li>• Availability schedules and timesheet records</li>
                      <li>• Profile pictures</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-2">
                      1.4 Payment Information
                    </h3>
                    <p className="mb-2">When you make payments through our App:</p>
                    <ul className="space-y-1 ml-4">
                      <li>• Invoice details (amounts, due dates, payment status)</li>
                      <li>• Payment history and receipts</li>
                      <li>• Payment proof uploads (for dispute resolution)</li>
                    </ul>
                    <div className="bg-sky-50 border border-sky-200 rounded-xl p-4 mt-3">
                      <p className="text-sky-800">
                        <strong>Note:</strong> We do not directly store credit card numbers or banking details. All payment processing is handled securely by our third-party payment processor, HitPay, in compliance with PCI DSS standards.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-2">
                      1.5 Automatically Collected Information
                    </h3>
                    <ul className="space-y-1 ml-4">
                      <li>• Device tokens for push notifications</li>
                      <li>• Usage data and notification delivery logs</li>
                      <li>• IP addresses for security and rate limiting purposes</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Section 2 */}
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-4">
                  2. How We Use Your Information
                </h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-2">
                      2.1 Swimming Lesson Services
                    </h3>
                    <ul className="space-y-1 ml-4">
                      <li>• Managing student enrollment and class scheduling</li>
                      <li>• Matching students with appropriate coaches and skill levels</li>
                      <li>• Tracking swimming progress and awarding achievements/certifications</li>
                      <li>• Coordinating makeup lessons and schedule changes</li>
                      <li>• Generating progress reports and certificates</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-2">
                      2.2 Communication
                    </h3>
                    <ul className="space-y-1 ml-4">
                      <li>• Sending lesson reminders and schedule notifications</li>
                      <li>• Delivering progress updates and achievement notifications</li>
                      <li>• Providing payment reminders and invoice notifications</li>
                      <li>• Sending lightning safety alerts and weather-related updates</li>
                      <li>• Notifying about makeup lesson availability</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-2">
                      2.3 Billing and Payments
                    </h3>
                    <ul className="space-y-1 ml-4">
                      <li>• Processing payments for swimming lessons and packages</li>
                      <li>• Generating invoices and receipts</li>
                      <li>• Managing credit balances and automatic renewals</li>
                      <li>• Sending payment reminders and overdue notices</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-2">
                      2.4 Safety and Operations
                    </h3>
                    <ul className="space-y-1 ml-4">
                      <li>• Monitoring weather conditions (lightning detection) to ensure swimmer safety</li>
                      <li>• Maintaining emergency contact information for urgent situations</li>
                      <li>• Managing health information to accommodate special needs during lessons</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-2">
                      2.5 Service Improvement
                    </h3>
                    <ul className="space-y-1 ml-4">
                      <li>• Analyzing lesson completion and attendance patterns</li>
                      <li>• Improving notification and communication systems</li>
                      <li>• Enhancing app features and user experience</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Section 3 */}
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-4">
                  3. Information Sharing and Disclosure
                </h2>
                <p className="mb-4">We share your information only as described below:</p>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-3">
                      3.1 Third-Party Service Providers
                    </h3>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm border-collapse border border-slate-300 rounded-lg">
                        <thead>
                          <tr className="bg-slate-100">
                            <th className="border border-slate-300 px-3 py-2 text-left font-semibold">Service Provider</th>
                            <th className="border border-slate-300 px-3 py-2 text-left font-semibold">Purpose</th>
                            <th className="border border-slate-300 px-3 py-2 text-left font-semibold">Data Shared</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-slate-300 px-3 py-2 font-medium">HitPay</td>
                            <td className="border border-slate-300 px-3 py-2">Payment processing</td>
                            <td className="border border-slate-300 px-3 py-2">Name, email, invoice amounts, payment details</td>
                          </tr>
                          <tr className="bg-slate-50">
                            <td className="border border-slate-300 px-3 py-2 font-medium">Brevo (Sendinblue)</td>
                            <td className="border border-slate-300 px-3 py-2">Email delivery</td>
                            <td className="border border-slate-300 px-3 py-2">Email address, notification content, attachments</td>
                          </tr>
                          <tr>
                            <td className="border border-slate-300 px-3 py-2 font-medium">Twilio</td>
                            <td className="border border-slate-300 px-3 py-2">SMS notifications</td>
                            <td className="border border-slate-300 px-3 py-2">Phone number, message content</td>
                          </tr>
                          <tr className="bg-slate-50">
                            <td className="border border-slate-300 px-3 py-2 font-medium">Firebase Cloud Messaging</td>
                            <td className="border border-slate-300 px-3 py-2">Push notifications</td>
                            <td className="border border-slate-300 px-3 py-2">Device tokens, notification content</td>
                          </tr>
                          <tr>
                            <td className="border border-slate-300 px-3 py-2 font-medium">OneMap (Singapore)</td>
                            <td className="border border-slate-300 px-3 py-2">Address lookup</td>
                            <td className="border border-slate-300 px-3 py-2">Search terms, postal codes, coordinates</td>
                          </tr>
                          <tr className="bg-slate-50">
                            <td className="border border-slate-300 px-3 py-2 font-medium">NEA (National Environment Agency)</td>
                            <td className="border border-slate-300 px-3 py-2">Lightning and weather data</td>
                            <td className="border border-slate-300 px-3 py-2">Location coordinates (for safety monitoring)</td>
                          </tr>
                          <tr>
                            <td className="border border-slate-300 px-3 py-2 font-medium">MongoDB Atlas</td>
                            <td className="border border-slate-300 px-3 py-2">Cloud database hosting</td>
                            <td className="border border-slate-300 px-3 py-2">All stored user data (encrypted)</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-2">
                      3.2 Within Our Organization
                    </h3>
                    <ul className="space-y-1 ml-4">
                      <li>• <strong>Coaches:</strong> Access student names, skill levels, lesson schedules, health notes, and progress data to conduct lessons safely and effectively</li>
                      <li>• <strong>Administrative Staff:</strong> Access necessary information for billing, scheduling, and customer support</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-2">
                      3.3 Legal Requirements
                    </h3>
                    <p>
                      We may disclose your information if required to do so by law or in response to valid requests by public authorities (e.g., court orders, government agencies).
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 4 */}
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-4">
                  4. Children's Privacy (COPPA & PDPA Compliance)
                </h2>
                <p className="mb-4">
                  Ape Champs Swim School is committed to protecting children's privacy. Our App is designed to be used by parents and guardians to manage their children's swimming lessons.
                </p>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-2">
                      4.1 Parental Consent
                    </h3>
                    <ul className="space-y-1 ml-4">
                      <li>• All information about children is collected from and managed by parents or legal guardians</li>
                      <li>• By registering your child for our services, you consent to the collection and use of your child's information as described in this Privacy Policy</li>
                      <li>• Children cannot create accounts or submit personal information directly</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-2">
                      4.2 Limited Collection
                    </h3>
                    <ul className="space-y-1 ml-4">
                      <li>• We collect only the information necessary to provide swimming lessons and track progress</li>
                      <li>• Health information is collected solely for safety purposes during swimming activities</li>
                      <li>• Photos are optional and uploaded only by parents/guardians</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-2">
                      4.3 Parental Rights
                    </h3>
                    <p className="mb-2">Parents and guardians have the right to:</p>
                    <ul className="space-y-1 ml-4">
                      <li>• Review their child's personal information collected by us</li>
                      <li>• Request corrections to their child's information</li>
                      <li>• Request deletion of their child's information</li>
                      <li>• Withdraw consent and opt out of further data collection</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-2">
                      4.4 No Third-Party Marketing
                    </h3>
                    <p className="mb-2">We do not:</p>
                    <ul className="space-y-1 ml-4">
                      <li>• Sell children's personal information to third parties</li>
                      <li>• Use children's information for targeted advertising</li>
                      <li>• Share children's information with third parties for marketing purposes</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Section 5 */}
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-4">
                  5. Data Security
                </h2>
                <p className="mb-4">
                  We implement appropriate technical and organizational measures to protect your personal information:
                </p>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-2">
                      5.1 Technical Safeguards
                    </h3>
                    <ul className="space-y-1 ml-4">
                      <li>• <strong>Password Security:</strong> All passwords are encrypted using bcrypt hashing with salt (industry-standard encryption)</li>
                      <li>• <strong>Data Encryption:</strong> Data is transmitted over HTTPS/TLS encrypted connections</li>
                      <li>• <strong>Authentication:</strong> Secure JWT (JSON Web Token) authentication with 7-day expiry</li>
                      <li>• <strong>Rate Limiting:</strong> Protection against brute-force attacks on login and registration</li>
                      <li>• <strong>HTTP Security Headers:</strong> Implementation of security headers via Helmet middleware</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-2">
                      5.2 Access Controls
                    </h3>
                    <ul className="space-y-1 ml-4">
                      <li>• Role-based access ensures staff only access information necessary for their duties</li>
                      <li>• Administrative access is restricted and permission-based</li>
                      <li>• Regular review of access permissions</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-2">
                      5.3 Data Storage
                    </h3>
                    <ul className="space-y-1 ml-4">
                      <li>• Data is stored on secure cloud servers (MongoDB Atlas) with industry-standard security measures</li>
                      <li>• Regular security updates and monitoring</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Section 6 */}
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-4">
                  6. Data Retention
                </h2>
                <p className="mb-4">
                  We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy:
                </p>
                <ul className="space-y-2 ml-4">
                  <li>• <strong>Active Accounts:</strong> Data is retained while your account is active and you are using our services</li>
                  <li>• <strong>Inactive Accounts:</strong> Data may be retained for up to 3 years after account inactivity for record-keeping purposes</li>
                  <li>• <strong>Payment Records:</strong> Retained for 7 years as required for accounting and tax purposes</li>
                  <li>• <strong>Achievement Records:</strong> Swimming certifications and achievements may be retained indefinitely for verification purposes</li>
                </ul>
                <p className="mt-4">
                  You may request earlier deletion of your data by contacting us (see Section 9).
                </p>
              </div>

              {/* Section 7 */}
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-4">
                  7. Your Rights Under Singapore PDPA
                </h2>
                <p className="mb-4">
                  Under the Singapore Personal Data Protection Act (PDPA), you have the following rights:
                </p>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-1">
                      7.1 Access Rights
                    </h3>
                    <p>
                      You may request access to your personal data that we hold and information about how it has been used or disclosed in the past year.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-1">
                      7.2 Correction Rights
                    </h3>
                    <p>
                      You may request correction of any errors or omissions in your personal data.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-1">
                      7.3 Withdrawal of Consent
                    </h3>
                    <p>
                      You may withdraw your consent for the collection, use, or disclosure of your personal data at any time by contacting us. Note that withdrawal may affect our ability to provide services to you.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-1">
                      7.4 Data Portability
                    </h3>
                    <p>
                      You may request a copy of your data in a commonly used format.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-1">
                      7.5 Deletion Rights
                    </h3>
                    <p>
                      You may request deletion of your personal data, subject to legal retention requirements.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 8 */}
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-4">
                  8. Notification Preferences
                </h2>
                <p className="mb-4">
                  You can manage your notification preferences directly in the App:
                </p>
                <ul className="space-y-1 ml-4">
                  <li>• Enable or disable email notifications</li>
                  <li>• Enable or disable SMS notifications</li>
                  <li>• Enable or disable push notifications</li>
                  <li>• Customize specific notification types (lesson reminders, payment reminders, makeup alerts, lightning alerts, progress updates)</li>
                </ul>
                <div className="bg-sky-50 border border-sky-200 rounded-xl p-4 mt-4">
                  <p className="text-sky-800">
                    <strong>Note:</strong> Certain critical notifications (e.g., lightning safety alerts, emergency communications) may still be sent regardless of preferences for safety reasons.
                  </p>
                </div>
              </div>

              {/* Section 9 */}
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-4">
                  9. Contact Us
                </h2>
                <p className="mb-4">
                  If you have any questions about this Privacy Policy, wish to exercise your rights, or have concerns about how we handle your data, please contact us:
                </p>
                <div className="bg-slate-100 rounded-xl p-4">
                  <p className="font-semibold text-slate-800 mb-2">Ape Champs Swim School</p>
                  <p className="text-slate-700">Data Protection Officer</p>
                  <ul className="mt-3 space-y-1 text-slate-700">
                    <li>📧 Email: <a href="mailto:privacy@apechampsswim.com.sg" className="text-cyan-600 hover:underline">privacy@apechampsswim.com.sg</a></li>
                    <li>📧 General Enquiries: <a href="mailto:hello@apechampsswim.com.sg" className="text-cyan-600 hover:underline">hello@apechampsswim.com.sg</a></li>
                    <li>🌐 Website: <a href="https://www.apechampsswim.com.sg" target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:underline">www.apechampsswim.com.sg</a></li>
                    <li>📍 Singapore</li>
                  </ul>
                </div>
                <p className="mt-4">
                  We aim to respond to all legitimate requests within 30 days.
                </p>
              </div>

              {/* Section 10 */}
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-4">
                  10. Changes to This Privacy Policy
                </h2>
                <p className="mb-4">
                  We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by:
                </p>
                <ul className="space-y-1 ml-4">
                  <li>• Posting the updated Privacy Policy in the App</li>
                  <li>• Updating the "Last Updated" date at the top of this policy</li>
                  <li>• Sending you a notification through the App or email for significant changes</li>
                </ul>
                <p className="mt-4">
                  We encourage you to review this Privacy Policy periodically for any changes.
                </p>
              </div>

              {/* Section 11 */}
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-4">
                  11. Third-Party Links
                </h2>
                <p>
                  Our App may contain links to third-party websites or services (e.g., payment processor pages). We are not responsible for the privacy practices of these third parties. We encourage you to read the privacy policies of any third-party services you access.
                </p>
              </div>

              {/* Section 12 */}
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-4">
                  12. International Data Transfers
                </h2>
                <p>
                  Your information may be transferred to and processed in countries other than Singapore where our service providers operate (e.g., cloud servers, email services). We ensure that appropriate safeguards are in place to protect your data in accordance with this Privacy Policy and applicable data protection laws.
                </p>
              </div>

              {/* Section 13 */}
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-4">
                  13. Consent
                </h2>
                <p className="mb-4">
                  By using the Ape Champs Swim School App, you consent to:
                </p>
                <ul className="space-y-1 ml-4">
                  <li>• The collection, use, and disclosure of your personal information as described in this Privacy Policy</li>
                  <li>• The collection, use, and disclosure of your child's personal information (if applicable) as described in this Privacy Policy</li>
                  <li>• Receiving communications from us regarding lessons, payments, and service updates</li>
                </ul>
              </div>

              {/* Closing */}
              <div className="pt-4 border-t border-slate-200">
                <p className="text-slate-700 mb-6">
                  <strong>Thank you for trusting Ape Champs Swim School with your family's swimming journey. We are committed to protecting your privacy while helping your children learn to swim safely and confidently. 🏊</strong>
                </p>
                <p className="text-sm text-slate-500 mb-6">
                  © 2026 Ape Swimming Pte Ltd (Ape Champs Swim School). All rights reserved.
                </p>
                <Link to="/FAQ">
                  <Button className="bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-full px-6 py-3 text-sm md:text-base">
                    Back to FAQ
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PrivacyPolicy;
