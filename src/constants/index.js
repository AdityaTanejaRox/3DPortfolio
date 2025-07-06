const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
  { name: "Projects",
    link: "/projects" 
  }
];

const projects = [
  {
    slug: "order",
    title: "Zero-Latency Orderbook Matching Engine",
    description: "Real-time matching engine using C++.",
    image: "/images/project4.png",
  },
  {
    slug: "heap",
    title: "Custom Memoy Heap Allocator & Visual Debugger",
    description: "Custom C++ memory allocator",
    image: "/images/project5.png",
  },
  {
    slug: "signal",
    title: "Real-Time Market Signal Forecaster",
    description: "Real-Time C++ and Python Market Signal Forecaster.",
    image: "/images/project6.png",
  },
  {
    slug: "graphics",
    title: "Graphics Engine",
    description: "Real-Time Graphics Engine in C++",
    image: "/images/project7.png",
  },
  {
    slug: "audio",
    title: "Audio Engine",
    description: "Real-Time Multi-threaded Audio Engine in c++.",
    image: "/images/project8.png",
  },
  {
    slug: "trading",
    title: "Live 24/7 Algorithmic Trading Bot",
    description: "Fully Automated trading bot capable of executing trades 24/7.",
    image: "/images/project9.png",
  },
  {
    slug: "spaceinvaders",
    title: "Space Invaders Clone",
    description: "Built a Space Invaders Clone from Scratch",
    image: "/images/project10.png",
  },
  {
    slug: "omegarace",
    title: "Omega Race",
    description: "Made Omega Race Networked",
    image: "/images/project11.png",
  },
];


const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 1, suffix: "+", label: "Years of Experience" },
  { value: 4, suffix: "+", label: "Satisfied Clients" },
  { value: 108, suffix: "+", label: "Completed Projects" },
  { value: 97, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review: "Aditya brought creativity and technical expertise to the team, significantly improving our frontend performance. His work has been invaluable in delivering faster experiences.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "Backend Developer",
    date: "December 2024 - Present",
    responsibilities: [
      "Lead the migration of an existing codebase from C++ to Java, enhancing maintainability and cross-platform compatibility.",
      "Developing a sistributed knowledge-based operating syatem, allowing users to upload, share and access research projects efficiently.",
      "Implemented Java Networking solutions to facilitate seamless data exchange between researchers.",
      "Engineered multi-threaded backend solutions using OOP design principles."
    ],
  },
  {
    review: "Aditya’s contributions to WallStreetQuant's alpha generation have been outstanding. He approaches challenges with a problem-solving mindset.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.png",
    title: "Quantative Researcher Intern",
    date: "July 2024 - September 2024",
    responsibilities: [
      "Developed and back tested statistical arbitrage strategies in cryptocurrency markets using Python, Pandas, and Numpy.",
      "Integrated performance evaluation metrics (Sharpe, drawdown, alpha) and simulated execution with market impact models.",
      "Engineered momentum and mean-revision models, achieving a Sharpe ratio os 1.8 and simulated annualized returns of 15-20%.",
      "Implemented high-frequency data processing pipelines to analyse price-volume relationships and predict returns.",
      "Optimized execution strategies to reduce trading costs by ~20bps per trade, incorporating market impact analysis.",
      "Built backtesting frameworks for performance evaluation, tracking metrics such as volatility, max drawdown, and alpha/beta."
    ],
  },
  {
    review: "Aditya’s work on the project brought a high level of quality and efficiency. He delivered solutions that optimized our project & meet our product goals.",
    imgPath: "/images/exp3.png",
    logoPath: "/images/logo3.png",
    title: "Software Developer Research Assistant",
    date: "March 2024 - June 2024",
    responsibilities: [
      "Designed and developed a distributed K-V storage system in Go with 99.9% availability, supporting 1M QPS with linearizable read/write operations.", 
      "Leveraged consistent hashing for even data distribution and dynamic load balancing with data migration across Raft groups",
      "Optimized performance using FollowerReads, RocksDB integration, and MVCC - reduced read latency by 42%",
      "Integrated multiple storage engines (RocksDB, B+ trees, hash tables) for optimized performance, using MVCC for concurrency control.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Aditya was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Aditya’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Aditya was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
    url: "https://www.instagram.com/adityataneja1",
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
    url: "https://www.facebook.com/adityataneja",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    url: "https://www.linkedin.com/in/adityatanejarox",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
  projects,
};
