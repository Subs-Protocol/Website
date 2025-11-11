import React from 'react';
import { Helmet } from 'react-helmet';

const SaaSUseCase = () => {
  return (
    <>
      <Helmet>
        <title>Subs Protocol for SaaS - Crypto Subscription Solutions</title>
        <meta name="description" content="Transform your SaaS business with Subs Protocol's crypto subscription solutions. Learn how to implement recurring crypto payments for your software services." />
        <meta name="keywords" content="crypto SaaS, web3 subscriptions, crypto payments SaaS, decentralized SaaS, subscription protocol" />
        <link rel="canonical" href="https://subsprotocol.com/use-cases/saas" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Subs Protocol for SaaS - Crypto Subscription Solutions" />
        <meta property="og:description" content="Transform your SaaS business with Subs Protocol's crypto subscription solutions. Learn how to implement recurring crypto payments for your software services." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://subsprotocol.com/use-cases/saas" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Subs Protocol for SaaS - Crypto Subscription Solutions",
            "description": "Transform your SaaS business with Subs Protocol's crypto subscription solutions.",
            "url": "https://subsprotocol.com/use-cases/saas",
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
        <h1 className="text-4xl font-bold mb-8">Crypto Subscriptions for SaaS Businesses</h1>
        
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Transform Your SaaS Revenue Model</h2>
          <p className="text-lg mb-6">
            Subs Protocol enables SaaS businesses to accept crypto payments for subscriptions, 
            providing a seamless experience for both businesses and their customers. Our 
            no-code solution makes it easy to implement recurring crypto payments in under 
            60 seconds.
          </p>
          <img 
            src="/images/saas-dashboard.png" 
            alt="Crypto subscription dashboard for SaaS businesses" 
            className="rounded-lg shadow-lg mb-6"
          />
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Key Benefits for SaaS Companies</h2>
          <ul className="list-disc pl-6 space-y-4">
            <li>No-code integration for quick implementation</li>
            <li>Support for multiple cryptocurrencies</li>
            <li>Automated recurring billing</li>
            <li>Transparent payment tracking</li>
            <li>Lower transaction fees compared to traditional payment processors</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">1. Connect Your Wallet</h3>
              <p>Link your crypto wallet to start accepting payments</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">2. Set Up Subscriptions</h3>
              <p>Configure your subscription plans and pricing</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">3. Start Accepting Payments</h3>
              <p>Share your payment link with customers</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Ready to Get Started?</h2>
          <p className="text-lg mb-6">
            Join the growing number of SaaS businesses using Subs Protocol for their 
            crypto subscription needs. Start accepting crypto payments today and stay 
            ahead of the curve in the Web3 revolution.
          </p>
          <a 
            href="/docs/getting-started" 
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Get Started Now
          </a>
        </section>
      </main>
    </>
  );
};

export default SaaSUseCase; 