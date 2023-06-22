import { people01, people02, people03, facebook, instagram, linkedin, medium, twitter, telegram, airbnb, binance, coinbase, dropbox, send, shield, star  } from "../assets/index";
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
    title: "Subs Products",
  },
  // {
  //   id: "/usecases",
  //   title: "Use Cases",
  // },
  {
    id: "/regulator",
    title: "Regulators",
  },
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
      "That's exactly what the industry needs. Bring Web2 tools to Web3",
    name: "Alix B.",
    title: "Account Manager France",
    img: people01,
  },
  {
    id: "feedback-2",
    content:
      "It's one of the best ways to make people use and adopt crypto on a large scale.",
    name: "Yehor B.",
    title: "Stealth Startup Co-Founder",
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
  // {
  //   title: "Useful Links",
  //   links: [
  //     {
  //       name: "Content",
  //       link: "https://www.hoobank.com/content/",
  //     },
  //     {
  //       name: "How it Works",
  //       link: "https://www.hoobank.com/how-it-works/",
  //     },
  //     // {
  //     //   name: "Create",
  //     //   link: "https://www.hoobank.com/create/",
  //     // },
  //     // {
  //     //   name: "Explore",
  //     //   link: "https://www.hoobank.com/explore/",
  //     // },
  //     {
  //       name: "Terms & Services",
  //       link: "https://www.hoobank.com/terms-and-services/",
  //     },
  //   ],
  // },
  // {
  //   title: "Community",
  //   links: [
  //     {
  //       name: "Help Center",
  //       link: "https://www.hoobank.com/help-center/",
  //     },
  //     {
  //       name: "Suggestions",
  //       link: "https://www.hoobank.com/suggestions/",
  //     },
  //     // {
  //     //   name: "Blog",
  //     //   link: "https://www.hoobank.com/blog/",
  //     // },
  //     {
  //       name: "Newsletters",
  //       link: "https://www.hoobank.com/newsletters/",
  //     },
  //   ],
  // },
  {
    title: "",
    links: [
      {
        name: "",
        link: "",
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
        link: "/form",
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
    name: "Plug and Play.",
    description:
      "Simply download our packages or plugins and deploy it in your code.",
    icon: BoltIcon,
  },
  {
    name: "Utilize our APIs.",
    description:
      "Create plans and collect your funds automatically through our set of APIs.",
    icon: CommandLineIcon,
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
    name: "Subscribe in 2 clicks.",
    description:
      "It's super fast. Connect your wallet and approve the subscription.",
    icon: FireIcon,
  },
  {
    name: "Share it with the world.",
    description:
      "Add your page link on your favorite social media, anywhere you want.",
    icon: ShareIcon,
  },
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