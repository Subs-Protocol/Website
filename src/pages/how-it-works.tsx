import React from 'react';
import { Helmet } from 'react-helmet';

const HowItWorks = () => {
  return (
    <>
      <Helmet>
        <title>How Subs Protocol Works - Crypto Subscription Platform</title>
        <meta name="description" content="Learn how Subs Protocol works as a crypto subscription platform. Understand our technology, architecture, and how to implement crypto subscriptions in your project." />
        <meta name="keywords" content="crypto subscription platform, web3 subscriptions, crypto payments, blockchain subscriptions, subs protocol guide" />
        <link rel="canonical" href="https://subsprotocol.com/how-it-works" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="How Subs Protocol Works - Crypto Subscription Platform" />
        <meta property="og:description" content="Learn how Subs Protocol works as a crypto subscription platform. Understand our technology, architecture, and how to implement crypto subscriptions in your project." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://subsprotocol.com/how-it-works" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "How Subs Protocol Works - Crypto Subscription Platform",
            "description": "Learn how Subs Protocol works as a crypto subscription platform.",
            "url": "https://subsprotocol.com/how-it-works",
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
        <h1 className="text-4xl font-bold mb-8">How Subs Protocol Works</h1>
        
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Technology Overview</h2>
          <p className="text-lg mb-6">
            Subs Protocol is built on cutting-edge blockchain technology, enabling 
            secure and efficient crypto subscriptions. Our platform combines smart 
            contracts, off-chain processing, and a user-friendly API to deliver 
            a seamless subscription experience.
          </p>
          <img 
            src="/images/architecture-diagram.png" 
            alt="Subs Protocol architecture diagram" 
            className="rounded-lg shadow-lg mb-6"
          />
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Core Components</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Smart Contracts</h3>
              <p>Secure, audited smart contracts handle subscription logic and payments</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">API Layer</h3>
              <p>RESTful API for easy integration and management</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Payment Processing</h3>
              <p>Multi-chain support for various cryptocurrencies</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Analytics Dashboard</h3>
              <p>Comprehensive insights and reporting tools</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Subscription Flow</h2>
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center">1</div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold">Create Subscription Plan</h3>
                <p>Define pricing, duration, and features for your subscription service</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center">2</div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold">Customer Onboarding</h3>
                <p>Customers connect their crypto wallet and select a plan</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center">3</div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold">Payment Processing</h3>
                <p>Smart contracts handle secure, automated payments</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center">4</div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold">Access Management</h3>
                <p>Automated access control based on subscription status</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Security & Compliance</h2>
          <p className="text-lg mb-6">
            Subs Protocol implements industry-leading security measures and compliance 
            standards to ensure the safety of your subscription service and customer 
            data. Our smart contracts are audited by leading security firms, and we 
            maintain strict compliance with relevant regulations.
          </p>
          <ul className="list-disc pl-6 space-y-4">
            <li>Regular security audits</li>
            <li>Multi-signature wallet support</li>
            <li>Encrypted data transmission</li>
            <li>Compliance with KYC/AML requirements</li>
            <li>Regular updates and patches</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Ready to Get Started?</h2>
          <p className="text-lg mb-6">
            Join the growing number of businesses using Subs Protocol for their 
            crypto subscription needs. Start implementing secure, efficient 
            subscription services today.
          </p>
          <a 
            href="/docs/getting-started" 
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Start Building
          </a>
        </section>
      </main>
    </>
  );
};

export default HowItWorks; 