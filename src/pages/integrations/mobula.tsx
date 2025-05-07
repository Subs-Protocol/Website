import React from 'react';
import { Helmet } from 'react-helmet';

const MobulaIntegration = () => {
  return (
    <>
      <Helmet>
        <title>Subs + Mobula Integration - Crypto Data Solutions</title>
        <meta name="description" content="Integrate Subs Protocol with Mobula for comprehensive crypto data solutions. Access real-time market data, analytics, and subscription management in one platform." />
        <meta name="keywords" content="mobula integration, crypto data api, crypto analytics, web3 data, crypto market data, subs protocol integration" />
        <link rel="canonical" href="https://subsprotocol.com/integrations/mobula" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Subs Protocol + Mobula Integration - Crypto Data Solutions" />
        <meta property="og:description" content="Integrate Subs Protocol with Mobula for comprehensive crypto data solutions. Access real-time market data, analytics, and subscription management in one platform." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://subsprotocol.com/integrations/mobula" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Subs Protocol + Mobula Integration - Crypto Data Solutions",
            "description": "Integrate Subs Protocol with Mobula for comprehensive crypto data solutions.",
            "url": "https://subsprotocol.com/integrations/mobula",
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
        <h1 className="text-4xl font-bold mb-8">Subs Protocol + Mobula Integration</h1>
        
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Powerful Crypto Data Solutions</h2>
          <p className="text-lg mb-6">
            Combine the power of Subs Protocol's subscription management with Mobula's 
            comprehensive crypto data API. Create data-driven subscription services 
            with real-time market insights and analytics.
          </p>
          <img 
            src="/images/mobula-dashboard.png" 
            alt="Mobula integration dashboard with crypto data" 
            className="rounded-lg shadow-lg mb-6"
          />
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Integration Features</h2>
          <ul className="list-disc pl-6 space-y-4">
            <li>Real-time market data access</li>
            <li>Historical price analytics</li>
            <li>Token metadata and information</li>
            <li>Custom data subscription tiers</li>
            <li>Automated data delivery</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Implementation Steps</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">1. Connect APIs</h3>
              <p>Link your Subs Protocol and Mobula accounts</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">2. Configure Data Access</h3>
              <p>Set up subscription tiers and data access levels</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">3. Launch Service</h3>
              <p>Start offering data subscription services</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Code Example</h2>
          <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
            <code>{`
// Example of integrating Subs Protocol with Mobula
const { SubsProtocol } = require('@subsprotocol/sdk');
const { MobulaAPI } = require('@mobula/api');

const subs = new SubsProtocol({
  apiKey: 'your-subs-api-key'
});

const mobula = new MobulaAPI({
  apiKey: 'your-mobula-api-key'
});

// Handle subscription and data delivery
subs.on('subscription:created', async (subscription) => {
  const marketData = await mobula.getMarketData({
    token: subscription.token,
    timeframe: '1d'
  });
  
  await subs.deliverContent(subscription.id, marketData);
});
            `}</code>
          </pre>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Get Started Today</h2>
          <p className="text-lg mb-6">
            Start building data-driven subscription services with Subs Protocol and 
            Mobula. Access our comprehensive documentation and integration guides to 
            get started quickly.
          </p>
          <a 
            href="/docs/mobula-integration" 
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            View Integration Guide
          </a>
        </section>
      </main>
    </>
  );
};

export default MobulaIntegration; 