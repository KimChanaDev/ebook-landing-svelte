# 📚 Ebook Landing Page

This is small practice project, landing page for ebook sales built with SvelteKit, featuring Stripe payment integration and email notifications via SendGrid.

## ✨ Features

- 💳 **Stripe Integration** - Secure payment processing
- 📧 **Email Notifications** - Automated purchase confirmations via SendGrid

## 🛠️ Tech Stack

- **Framework:** [SvelteKit](https://kit.svelte.dev/) (v5)
- **Language:** TypeScript
- **Styling:** CSS
- **Payment:** [Stripe](https://stripe.com/)
- **Email:** [SendGrid](https://sendgrid.com/)
- **Build Tool:** Vite
- **Linting:** ESLint + Prettier
- **Deploy:** [Vercel](https://vercel.com/)

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v24.7.0 or higher)
- npm, pnpm, or yarn package manager

You'll also need:

- A [Stripe](https://stripe.com/) account with API keys
- A [SendGrid](https://sendgrid.com/) account with API key

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/KimChanaDev/ebook-landing-svelte.git
cd ebook-landing-svelte
```

### 2. Install dependencies

```bash
npm install
# or
pnpm install
# or
yarn install
```

### 3. Set up environment variables

Create a `.env` file in the root directory and add your API keys:

```env
PUBLIC_FRONTEND_URL=http://localhost:5173

# SendGrid
SEND_EMAIL_FROM=your_verified_sender_email
SENDGRID_API_KEY=SG.xxx(your_sendgrid_api_key)

# Stripe
PRICE_ID=price_xxx(your_price_id)
PUBLIC_STRIPE_KEY=pk_test_xxx(your_stripe_publishable_key)
STRIPE_API_KEY=sk_test_xxx(your_stripe_secret_key)
STRIPE_WEBHOOK_SINGING_SECRET=whsec_xxx(your_stribe_webhook_singing_secret)
```

### 4. Run the development server

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## 🎨 Components

### Main Components

- **HeroSection** - Landing page hero with CTA
- **AuthorSection** - Author bio and credentials
- **ChapterPreview** - Preview of ebook chapters
- **FaqSection** - Frequently asked questions
- **FaqItem** - Individual FAQ accordion item
- **Button** - Reusable button component

## 💳 Payment Flow

1. User clicks buy button
2. Request sent to `/api/checkout` endpoint
3. Stripe Checkout Session created
4. User redirected to Stripe payment page
5. After successful payment, redirected to `/checkout/success`
6. If failed or canceled, redirected to `/checkout/failure`
7. Purchase confirmation email sent via SendGrid
8. User receives ebook download link

## 🚀 Deploy to Vercel

1. Push the project to github
2. Login vercel with github account
3. Deploy with environment variables
4. Edit fronend url env with domain name from vercel
5. Redeploy
