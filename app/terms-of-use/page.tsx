import { Metadata } from 'next'
import Header from '../components/Header'

export const metadata: Metadata = {
	title: 'Privacy Policy',
	description: 'Privacy policy of Berlin AI',
}

export default function PrivacyPolicy() {
	return (
		<main>
			<Header />
			<article className="p-20">
				<h1 className="pb-6 text-5xl font-bold text-primary">Terms of use</h1>
				<hr className="border-primary" />

				<h2 className="mt-14 text-xl text-neutral-100">
					Last updated: <time dateTime="2023-12-19">December 19, 2023</time>
				</h2>
				<p className="mt-6 text-neutral-200 text-lg">
					Welcome to Berlin AI! These Terms of Use outline the terms and conditions that govern your use of our
					artificial intelligence web application. By accessing or using our services, you agree to comply with and be
					bound by these terms.
				</p>

				<h2 className="mt-12 mb-4 text-neutral-100 text-2xl font-semibold">1. Acceptance of Terms</h2>
				<p className="text-lg text-neutral-200 mb-4">
					By using Berlin AI, you agree to these Terms of Use. If you do not agree with any part of these terms, please
					do not use our services.
				</p>

				<h2 className="mt-14 mb-4 text-neutral-100 text-2xl font-semibold">2. User Registration</h2>
				<p className="text-lg text-neutral-200 mb-4">
					To access certain features of our AI web application, you may be required to register for an account. You
					agree to provide accurate, current, and complete information during the registration process and to update
					such information to keep it accurate, current, and complete.
				</p>
				<p className="text-lg mb-4 text-neutral-200">
					You are responsible for maintaining the confidentiality of your account credentials and for all activities
					that occur under your account. Notify us immediately of any unauthorized use of your account or any other
					breach of security.
				</p>

				<h2 className="mt-14 mb-4 text-neutral-100 text-2xl font-semibold">3. Freemium Service</h2>
				<p className="text-lg text-neutral-200 mb-4">
					Berlin AI offers a freemium service that provides users with 8 free credits per month. Additional credits may
					be available through paid subscription plans.
				</p>

				<h2 className="mt-14 mb-4 text-neutral-100 text-2xl font-semibold">4. Code Generation</h2>
				<p className="text-lg text-neutral-200 mb-4">
					Our AI web application generates code based on the images you upload. You retain ownership of the original
					images, but by using our service, you grant us a non-exclusive, royalty-free license to use, reproduce, and
					modify the generated code for the purpose of providing and improving our services.
				</p>

				<h2 className="mt-14 mb-4 text-neutral-100 text-2xl font-semibold">5. Storage of Code Generations</h2>
				<p className="text-lg text-neutral-200 mb-4">
					Berlin AI stores the code generations you create using our service for future access and usage. We make
					efforts to secure and protect your stored data, as outlined in our Privacy Policy.
				</p>

				<h2 className="mt-14 mb-4 text-neutral-100 text-2xl font-semibold">6. Prohibited Activities</h2>
				<p className="text-lg text-neutral-200 mb-4">
					You agree not to engage in any of the following activities while using Berlin AI:
					<ul>
						<li>Violating any applicable laws or regulations.</li>
						<li>Uploading any content that is illegal, offensive, or violates the rights of others.</li>
						<li>Attempting to interfere with the proper functioning of the service.</li>
						<li>
							Reverse engineering, decompiling, disassembling, or attempting to derive the source code of the
							application.
						</li>
					</ul>
				</p>

				<h2 className="mt-14 mb-4 text-neutral-100 text-2xl font-semibold">7. Modification of Terms</h2>
				<p className="text-lg text-neutral-200 mb-4">
					We reserve the right to modify these Terms of Use at any time. Any changes will be effective immediately upon
					posting the updated terms on our website. Your continued use of our services after the posting of changes
					constitutes your acceptance of the modified terms.
				</p>

				<h2 className="mt-14 mb-4 text-neutral-100 text-2xl font-semibold">8. Termination of Service</h2>
				<p className="text-lg text-neutral-200 mb-4">
					We reserve the right to terminate or suspend your access to Berlin AI at any time, with or without cause, and
					with or without notice.
				</p>

				<h2 className="mt-14 mb-4 text-neutral-100 text-2xl font-semibold">9. Contact Information</h2>
				<p className="text-lg text-neutral-200 mb-4">
					If you have any questions, concerns, or feedback regarding these Terms of Use, please contact us at
					carlos.aldazosa@outlook.com.
				</p>

				<p className="mt-14 text-xl text-primary">Thank you for using Berlin AI!</p>
			</article>
		</main>
	)
}
