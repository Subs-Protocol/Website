import React from 'react';
import { Helmet } from 'react-helmet';

const FAQ = () => {
  return (
    <>
      <Helmet>
        <title>FAQ - Subs Protocol Crypto Subscription Platform</title>
        <meta name="description" content="Find answers to common questions about Subs Protocol, crypto subscriptions, integration, pricing, and technical requirements. Get started with our comprehensive FAQ guide." />
        <meta name="keywords" content="crypto subscription FAQ, web3 subscriptions, crypto payments FAQ, subs protocol guide, blockchain subscriptions" />
        <link rel="canonical" href="https://subsprotocol.com/faq" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="FAQ - Subs Protocol Crypto Subscription Platform" />
        <meta property="og:description" content="Find answers to common questions about Subs Protocol, crypto subscriptions, integration, pricing, and technical requirements." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://subsprotocol.com/faq" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [{
              "@type": "Question",
              "name": "What is Subs Protocol?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Subs Protocol is a crypto-native subscription platform that enables businesses to accept recurring crypto payments for their services."
              }
            }]
          })}
        </script>
      </Helmet>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Frequently Asked Questions</h1>
        
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">General Questions</h2>
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">What is Subs Protocol?</h3>
              <p className="text-gray-700">
                Subs Protocol is a crypto-native subscription platform that enables businesses 
                to accept recurring crypto payments for their services. It provides a 
                secure, efficient, and user-friendly way to implement crypto subscriptions 
                in your project.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">How does crypto subscription work?</h3>
              <p className="text-gray-700">
                Crypto subscriptions work through smart contracts that automatically handle 
                recurring payments. Customers connect their crypto wallet, and payments are 
                processed automatically based on the subscription terms you define.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">Which cryptocurrencies are supported?</h3>
              <p className="text-gray-700">
                Subs Protocol supports major cryptocurrencies including ETH, USDC, USDT, 
                and other popular tokens. We're constantly adding support for more 
                cryptocurrencies based on market demand.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Technical Questions</h2>
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">How do I integrate Subs Protocol?</h3>
              <p className="text-gray-700">
                Integration is simple with our RESTful API and SDK. We provide comprehensive 
                documentation and code examples to help you get started quickly. The basic 
                integration can be done in under 60 seconds.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">What are the technical requirements?</h3>
              <p className="text-gray-700">
                You'll need a basic understanding of web development and API integration. 
                Our platform is compatible with most modern web frameworks and programming 
                languages. We also provide no-code solutions for simple implementations.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">Is it secure?</h3>
              <p className="text-gray-700">
                Yes, Subs Protocol implements industry-leading security measures. Our smart 
                contracts are audited by leading security firms, and we use multi-signature 
                wallets and encrypted data transmission to ensure the safety of your 
                subscription service.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Pricing & Plans</h2>
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">How much does it cost?</h3>
              <p className="text-gray-700">
                Our pricing is based on a percentage of transaction volume. We offer 
                different tiers to suit businesses of all sizes. Contact our sales team 
                for detailed pricing information.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">Are there any hidden fees?</h3>
              <p className="text-gray-700">
                No hidden fees. Our pricing is transparent and includes all necessary 
                features. You only pay for the transactions processed through our platform.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">Do you offer a free trial?</h3>
              <p className="text-gray-700">
                Yes, we offer a 14-day free trial with full access to all features. 
                This allows you to test our platform and see how it works with your 
                specific use case.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Support & Resources</h2>
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">Where can I get help?</h3>
              <p className="text-gray-700">
                We offer multiple support channels including documentation, email support, 
                and a community forum. Our team is always ready to help you with any 
                questions or issues.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">Do you provide implementation support?</h3>
              <p className="text-gray-700">
                Yes, we offer implementation support for all our customers. Our technical 
                team can help you with integration, customization, and optimization of 
                your subscription service.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Still Have Questions?</h2>
          <p className="text-lg mb-6">
            Can't find the answer you're looking for? Our team is here to help.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Contact Support
          </a>
        </section>
      </main>
    </>
  );
};

export default FAQ; 