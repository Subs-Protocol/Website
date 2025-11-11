import React from 'react';
import { Helmet } from 'react-helmet';

const TelegramUseCase = () => {
  return (
    <>
      <Helmet>
        <title>Subs Protocol for Telegram - Crypto Subscription Bot Solutions</title>
        <meta name="description" content="Implement crypto subscriptions in your Telegram bot with Subs Protocol. Create premium features, content access, and recurring payments for your Telegram community." />
        <meta name="keywords" content="telegram crypto bot, telegram subscriptions, crypto payments telegram, telegram premium features, web3 telegram" />
        <link rel="canonical" href="https://subsprotocol.com/use-cases/telegram" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Subs Protocol for Telegram - Crypto Subscription Bot Solutions" />
        <meta property="og:description" content="Implement crypto subscriptions in your Telegram bot with Subs Protocol. Create premium features, content access, and recurring payments for your Telegram community." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://subsprotocol.com/use-cases/telegram" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Subs Protocol for Telegram - Crypto Subscription Bot Solutions",
            "description": "Implement crypto subscriptions in your Telegram bot with Subs Protocol.",
            "url": "https://subsprotocol.com/use-cases/telegram",
            "publisher": {
              "@type": "Organization",
              "name": "Subs Protocol",
              "logo": {
                "@type": "ImageObject",
                "url": "https://subsprotocol.com/log.png"
              }
            }
          })}
        </script>
      </Helmet>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Crypto Subscriptions for Telegram Bots</h1>
        
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Monetize Your Telegram Bot</h2>
          <p className="text-lg mb-6">
            Subs Protocol makes it easy to implement crypto subscriptions in your Telegram bot. 
            Create premium features, gated content, and recurring payments for your community 
            members with just a few lines of code.
          </p>
          <img 
            src="/images/telegram-bot.png" 
            alt="Telegram bot with crypto subscription features" 
            className="rounded-lg shadow-lg mb-6"
          />
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Features for Telegram Bot Developers</h2>
          <ul className="list-disc pl-6 space-y-4">
            <li>Simple bot integration with our API</li>
            <li>Automated subscription management</li>
            <li>Multiple subscription tiers support</li>
            <li>Secure payment processing</li>
            <li>Real-time subscription status updates</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Implementation Guide</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">1. Create Your Bot</h3>
              <p>Set up your Telegram bot using BotFather</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">2. Integrate Subs Protocol</h3>
              <p>Add our API to handle subscriptions</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">3. Launch Premium Features</h3>
              <p>Start offering subscription-based content</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Code Example</h2>
          <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
            <code>{`
// Example of integrating Subs Protocol with a Telegram bot
const { SubsProtocol } = require('@subsprotocol/sdk');

const bot = new SubsProtocol({
  apiKey: 'your-api-key',
  telegramBotToken: 'your-bot-token'
});

// Handle subscription creation
bot.on('subscription:created', async (subscription) => {
  await bot.sendMessage(subscription.userId, 
    'Welcome to our premium features! 🎉');
});
            `}</code>
          </pre>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Start Building Today</h2>
          <p className="text-lg mb-6">
            Join the growing community of Telegram bot developers using Subs Protocol 
            to monetize their bots with crypto subscriptions. Get started with our 
            comprehensive documentation and support.
          </p>
          <a 
            href="/docs/telegram-integration" 
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            View Documentation
          </a>
        </section>
      </main>
    </>
  );
};

export default TelegramUseCase; 