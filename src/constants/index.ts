import { IconMoneybag } from "@tabler/icons-react";
import { people01, people02, people03, facebook, instagram, linkedin, medium, twitter, telegram, airbnb, binance, coinbase, dropbox, send, shield, star } from "../assets/index";
import {
  BoltIcon,
  CloudArrowUpIcon,
  CommandLineIcon,
  FireIcon,
  GiftIcon,
  HeartIcon,
  LockClosedIcon,
  PuzzlePieceIcon,
  ServerIcon,
  ShareIcon,
  UserGroupIcon,
  UserPlusIcon,
} from "@heroicons/react/20/solid";

export const navLinks = [
  {
    id: "/#component",
    title: "Uses cases",
  },
  {
    id: "/#integration",
    title: "Integrations",
  },
  // {
  //   id: "/usecases",
  //   title: "Use Cases",
  // },
  // {
  //   id: "/regulator",
  //   title: "Regulators",
  // },
  {
    id: "/faq",
    title: "FAQ",
  },
  // {
  //   id: "/docs",
  //   title: "Docs",
  // },

];

export const features = [
  {
    id: "feature-1",
    icon: star,
    title: "Rewards",
    content:
      "The best credit cards offer some tantalizing combinations of promotions and prizes",
  },
  {
    id: "feature-2",
    icon: shield,
    title: "100% Secured",
    content:
      "We take proactive steps make sure your information and transactions are secure.",
  },
  {
    id: "feature-3",
    icon: send,
    title: "Balance Transfer",
    content:
      "A balance transfer credit card can save you a lot of money in interest charges.",
  },
];

export const feedback = [
  {
    id: "feedback-1",
    content:
      "That's exactly what the industry needs. I'm sure it will be a success.",
    name: "Alix B.",
    title: "Account Manager Kraken",
    img: people01,
  },
  {
    id: "feedback-2",
    content:
      "It's one of the best ways to make people use and adopt crypto on a large scale.",
    name: "Yehor B.",
    title: "Partner at Afford capital",
    img: people02,
  },
  {
    id: "feedback-3",
    content:
      "If you manage to keep it simple and easy to use. You really are onto something.",
    name: "Bourjois L.",
    title: "Business Developer at Solana",
    img: people03,
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "Subscriptions per year",
    value: "3B+",
  },
  {
    id: "stats-3",
    title: "Subscription market on Web2",
    value: "$330B+",
  },
  {
    id: "stats-2",
    title: "Crytpo users yearly growth",
    value: ">10%",
  },

];

export const footerLinks = [
  {
    title: "Protocol",
    links: [
      {
        name: "Whitepaper",
        link: "https://subsprotocol.com/assets/Subs_Protocol_Whitepaper-f476f50d.pdf",
      },
      {
        name: "Uses cases",
        link: "https://subsprotocol1s-organization.gitbook.io/subs-protocol/introduction/uses-cases",
      },
      {
        name: "Deployments",
        link: "https://subsprotocol1s-organization.gitbook.io/subs-protocol/deployments/testnets",
      }
    ],
  },
  {
    title: "Earn With Subs",
    links: [
      {
        name: "Book a demo",
        link: "https://forms.gle/EKGG83TKafZJ95Zx6",
      },
      {
        name: "Create your plan",
        link: "https://app.subsprotocol.com/#/app/default/create",
      },
      {
        name: "How to earn",
        link: "https://subsprotocol1s-organization.gitbook.io/subs-protocol/how-it-works/earn-with-subs",
      },
      {
        name: "Plan example",
        link: "https://testnet.subsprotocol.com/#/0xDEd399C85d29b284ab92fA16915eFcD9dEEd77b9/bsct_4",
      }
    ],
  },
  {
    title: "Developers",
    links: [
      {
        name: "Apps Contracts",
        link: "https://subsprotocol1s-organization.gitbook.io/subs-protocol/developer-docs/apps-contracts",
      },
      {
        name: "Subscriptions Contracts",
        link: "https://subsprotocol1s-organization.gitbook.io/subs-protocol/developer-docs/subscription-contracts",
      },
      {
        name: "API",
        link: "https://subsprotocol1s-organization.gitbook.io/subs-protocol/developer-docs/api",
      },
      {
        name: "Widget",
        link: "https://subsprotocol1s-organization.gitbook.io/subs-protocol/developer-docs/subs-widget",
      },
    ]
  },
  {
    title: "Useful Links",
    links: [
      {
        name: "The team",
        link: "https://www.linkedin.com/search/results/people/?currentCompany=%5B%2291115065%22%5D&origin=COMPANY_PAGE_CANNED_SEARCH&sid=6j~",
      },
      {
        name: "Contact us",
        link: "/#/form",
      },
      {
        name: "subs@subsprotocol.com",
        link: "",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: medium,
    link: "https://medium.com/@subsprotocol1",
  },
  {
    id: "social-media-2",
    icon: telegram,
    link: "https://t.me/+5VRisLxgM3NiNjk0",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://twitter.com/subsprotocol",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com//company/subsprotocol",
  },
];

export const clients = [
  {
    id: "client-1",
    logo: airbnb,
  },
  {
    id: "client-2",
    logo: binance,
  },
  {
    id: "client-3",
    logo: coinbase,
  },
  {
    id: "client-4",
    logo: dropbox,
  },
];

export const subsComponents = [
  {
    name: "Create your plans.",
    description:
      "Create a complex subscription plan in a few clicks. You can set the price, the duration, the frequency and the number of payments.",
    icon: CommandLineIcon,
  },
  {
    name: "Plug and Play.",
    description:
      "Simply download our packages or plugins and deploy it in your code. Everything is ok, just sit back and got recurring revenue directly in your wallet.",
    icon: BoltIcon,
  },
  {
    name: "Draw new customers.",
    description:
      "Imagine being the first in your industry to accept crypto as a subscription method.",
    icon: UserPlusIcon,
  },
];

export const personalSubs = [
  {
    name: "For everyone.",
    description:
      "Simply connect your wallet to the site, create your plans and start building your page.",
    icon: UserGroupIcon,
  },
  {
    name: "Subscribe in 1 click.",
    description:
      "For your users, it's super fast. They just have to connect their wallet and approve the subscription.",
    icon: FireIcon,
  },
  {
    name: "Share it with the world.",
    description:
      "Add your page link on your favorite social media, anywhere you want.",
    icon: ShareIcon,
  },
  {
    name: "Earn money",
    description:
      "Take a rest, every period the funds are taken directly from the user's wallet and sent back to your wallet.",
    icon: IconMoneybag,
  }
];

export const subsExtensions = [
  {
    name: "On a single extension.",
    description:
      "Get our extension and connect it to your wallet and social media. It's free and very simple",
    icon: PuzzlePieceIcon,
  },
  {
    name: "New way to reward followers.",
    description:
      "Content creator have now a way to airdrop or send gifts to their community directly onchain.",
    icon: GiftIcon,
  },
  {
    name: "Support your content creator.",
    description:
      "A new method to send crypto direclty to great creators and witness them pursue their quality work.",
    icon: HeartIcon,
  },
];