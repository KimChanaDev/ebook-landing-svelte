import { json } from '@sveltejs/kit';
import sgMail from '@sendgrid/mail';
import {
	SENDGRID_API_KEY,
	STRIPE_API_KEY,
	STRIPE_WEBHOOK_SINGING_SECRET,
	SEND_EMAIL_FROM
} from '$env/static/private';
import Stripe from 'stripe';

sgMail.setApiKey(SENDGRID_API_KEY);
const stripe = new Stripe(STRIPE_API_KEY);
const PDF_URL = 'https://pdfobject.com/pdf/sample.pdf';

export async function POST({ request }) {
	const stripeRequestBody = await request.text(); // Get the raw body
	const stripeSignature = request.headers.get('stripe-signature') || '';
	let stripeEvent: Stripe.Event;
	try {
		stripeEvent = stripe.webhooks.constructEvent(
			stripeRequestBody,
			stripeSignature,
			STRIPE_WEBHOOK_SINGING_SECRET
		);
	} catch {
		return json({ error: 'Webhook signature verification failed' }, { status: 400 });
	}
	const pdfRes = await fetch(PDF_URL);
	const pdfBuffer = await pdfRes.arrayBuffer();
	const base64Pdf = Buffer.from(pdfBuffer).toString('base64');

	const customerEmail = (stripeEvent.data.object as never)['customer_details']['email'];
	const customerName = (stripeEvent.data.object as never)['customer_details']['name'];
	const message = {
		to: customerEmail,
		from: SEND_EMAIL_FROM,
		subject: 'Purchase Confirmation - Complete Spain Relocation Guide',
		html: `
			<h1>Thank you for your purchase, ${customerName}!</h1>
			<p>We appreciate your business and are excited to provide you with the Complete Spain Relocation Guide.</p>
			<p>Best regard.</p>
		`,
		attachments: [
			{
				content: base64Pdf,
				filename: 'Complete_Spain_Relocation_Guide.pdf',
				type: 'application/pdf',
				disposition: 'attachment'
			}
		]
	};

	await sgMail.send(message);
	return json({ response: 'Email sent' });
}
