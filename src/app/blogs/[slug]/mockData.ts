import { Story } from "./page";

export const mockStories: Story[] = [
  {
    _id: "1",
    title:
      "When Scarce Resources Become Battlegrounds: Understanding Conflict Drivers in Northern Kenya",
    slug: { current: "conflict-drivers-northern-kenya" },
    excerpt:
      "Northern Kenya’s vast drylands conceal an escalating struggle for survival. Samale Foundation promotes peace through community empowerment and dialogue.",
    category: "Peace & Resilience",
    author: "Samale Foundation",
    publishedAt: "2025-01-01",
    status: "current",
    readingTime: 5,
    featuredImage: {
      asset: { url: "/images/conflict.jpg" },
      alt: "Pastoral communities in Northern Kenya",
    },
    content: [
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "Northern Kenya’s vast drylands, though stunningly beautiful, conceal an escalating struggle for survival. With every drought, water points shrink and grazing lands wither, setting communities on a collision course. When scarcity rules, every drop, every patch of green, becomes contested territory.",
          },
        ],
      },
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "Samale Foundation’s integrated peace approach emphasizes community peace forums, Alternative Justice Systems (AJS), and youth peace ambassador training. By empowering local leadership and linking early warning systems to county structures, communities can anticipate and diffuse conflict before it escalates.",
          },
        ],
      },
    ],
  },
  {
    _id: "2",
    title:
      "Building Trust from the Ground Up: How Community Peace Forums and Alternative Justice Systems Help Stabilize Northern Kenya",
    slug: { current: "community-peace-forums-northern-kenya" },
    excerpt:
      "Peace is not built in conference rooms—it’s forged in village gatherings under acacia trees. Learn how Samale Foundation nurtures trust through dialogue and justice.",
    category: "Peace & Resilience",
    author: "Samale Foundation",
    publishedAt: "2025-01-02",
    status: "upcoming",
    readingTime: 4,
    featuredImage: {
      asset: { url: "/images/peace-forum.jpg" },
      alt: "Community peace forum under an acacia tree",
    },
    content: [
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "Community peace forums (CPFs) have emerged as critical local structures that nurture reconciliation, dialogue, and trust across divided groups.",
          },
        ],
      },
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "Through the Alternative Justice Systems (AJS), disputes that might otherwise turn violent are resolved through customary law, guided by respected elders. These systems ensure inclusivity and cultural legitimacy.",
          },
        ],
      },
    ],
  },
  {
    _id: "3",
    title:
      "From Charcoal to Carpentry: Transforming Livelihoods in Northern Kenya",
    slug: { current: "charcoal-to-carpentry" },
    excerpt:
      "Samale Foundation’s vocational model replaces tree-cutting with training in carpentry, solar maintenance, and tailoring—reviving livelihoods and landscapes.",
    category: "Economic Empowerment",
    author: "Samale Foundation",
    publishedAt: "2025-01-03",
    status: "upcoming",
    readingTime: 4,
    featuredImage: {
      asset: { url: "/images/carpentry.jpg" },
      alt: "Youth carpentry training in Northern Kenya",
    },
    content: [
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "In many arid parts of Northern Kenya, survival has often meant cutting down trees for charcoal. Samale Foundation’s vocational model offers youth and women practical alternatives.",
          },
        ],
      },
    ],
  },
  {
    _id: "4",
    title:
      "Value Chains in Arid Lands: How Northern Kenya Can Link up with Markets",
    slug: { current: "value-chains-northern-kenya" },
    excerpt:
      "Connecting producers to regional markets transforms resilience into opportunity. Discover how Samale Foundation strengthens value chains across arid lands.",
    category: "Economic Empowerment",
    author: "Samale Foundation",
    publishedAt: "2025-01-04",
    status: "completed",
    readingTime: 4,
    featuredImage: {
      asset: { url: "/images/value-chain.jpg" },
      alt: "Traders connecting through market cooperatives",
    },
    content: [
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "Samale Foundation envisions a thriving network where local producers connect to regional and national markets through cooperatives and mentorship.",
          },
        ],
      },
    ],
  },
  {
    _id: "5",
    title: "Regenerating the Land: Climate-Smart Practices in Northern Kenya",
    slug: { current: "regenerating-land-northern-kenya" },
    excerpt:
      "From water harvesting to reforestation, Samale Foundation’s regenerative agriculture programs restore fertility and hope in the drylands.",
    category: "Climate Resilience",
    author: "Samale Foundation",
    publishedAt: "2025-01-05",
    status: "current",
    readingTime: 4,
    featuredImage: {
      asset: { url: "/images/regeneration.jpg" },
      alt: "Community tree planting and soil conservation",
    },
    content: [
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "Samale Foundation is promoting regenerative agriculture and climate-smart practices that bring the land back to life.",
          },
        ],
      },
    ],
  },
  {
    _id: "6",
    title:
      "Clean Energy in Arid Lands: How Cookstoves and Solar Options Save Forests and Improve Health",
    slug: { current: "clean-energy-northern-kenya" },
    excerpt:
      "Energy-saving cookstoves and solar solutions are transforming homes across Northern Kenya—saving forests and improving lives.",
    category: "Clean Energy",
    author: "Samale Foundation",
    publishedAt: "2025-01-06",
    status: "current",
    readingTime: 4,
    featuredImage: {
      asset: { url: "/images/clean-energy.jpg" },
      alt: "Woman using energy-saving cookstove in Kenya",
    },
    content: [
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "Samale Foundation’s clean energy initiative introduces energy-saving cookstoves and solar technologies that cut fuel use, reduce emissions, and improve health.",
          },
        ],
      },
    ],
  },
];
