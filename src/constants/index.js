import {
  mobile,
  backend,
  web,
  javascript,
  html,
  css,
  reactjs,
  nodejs,
  postgresql,
  mongodb,
  meta,
  starbucks,
  tesla,
  shopify,
  pcpartpicker,
  inotebook,
  gamearray,
  newsmonkey,
  textifypro,
  cloneflix,
  calculator
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  }
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "ReactJS",
    icon: reactjs,
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
  },
  {
    name: "NodeJS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
   {
    name: "PcPartPicker",
    description:
      "A website that helps users build and compare custom PC configurations by providing compatibility checks, pricing, and component recommendations.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: pcpartpicker,
    source_code_link: "https://github.com/MSK-009/PcPartPicker",
  },
  {
    name: "iNotebook",
    description:
      "Web-based platform that allows users to add, see, update & delete their notes, providing a convenient and efficient solution for storing notes.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: inotebook,
    source_code_link: "https://github.com/MSK-009/iNotebook-React",
  },
  {
    name: "TheGameArray",
    description:
      "Web-based platform designed for gamers to explore, rate, and discuss video games. Users can search for games, add them to their personal game library, rate them, and participate in discussions in forum topics.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "purple-text-gradient",
      },
      {
        name: "javascript",
        color: "orange-text-gradient",
      },
      {
        name: "postgresql",
        color: "orange-text-gradient",
      },
    ],
    image: gamearray,
    source_code_link: "https://github.com/MSK-009/TheGameArray",
  },
  {
    name: "NewsMonkey",
    description:
      "A news aggregation website that curates articles from various sources, allowing users to browse through different categories and read articles from multiple outlets.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "purple-text-gradient",
      },
      {
        name: "bootsrap",
        color: "pink-text-gradient",
      },
    ],
    image: newsmonkey,
    source_code_link: "https://github.com/MSK-009/NewsMonkey",
  },
  {
    name: "TextifyPro",
    description:
      "A simple web-based text manipulation tool that offers various functionalities such as text formatting and translation to provide users with a quick and easy way to transform and manage text for different purposes.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      }
    ],
    image: textifypro,
    source_code_link: "https://github.com/MSK-009/TextifyPro",
  },
  {
    name: "Netflix Clone",
    description:
      "A clone of Netflix's homepage, mimicking the layout, design, and core UI features such as the navigation bar, hero banner, and content carousel.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "js",
        color: "purple-text-gradient",
      }
    ],
    image: cloneflix,
    source_code_link: "https://github.com/MSK-009/Netflix-Clone-using-HTML-CSS-JS",
  },
  {
    name: "Basic Calculator",
    description:
      "A basic calculator made using HTML5, CSS3 and Javascript",
    tags: [
    {
      name: "html",
      color: "blue-text-gradient",
    },
    {
      name: "css",
      color: "pink-text-gradient",
    },
    {
      name: "js",
      color: "purple-text-gradient",
    }
    ],
    image: calculator,
    source_code_link: "https://github.com/MSK-009/Basic-calculator-using-HTML-CSS-JavaScript",
  }

];

export { services, technologies, experiences, testimonials, projects };
