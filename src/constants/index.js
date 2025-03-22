import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  carrent,
  jobit,
  tripguide,
  threejs,
  magemarketer,
  webmantra,
  integrate,
  nextjs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "tech",
    title: "Skillset",
  },
  {
    id: "projects",
    title: "Projects",
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
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Freelancer",
    icon: creator,
  },
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Fullstack Web Developer",
    company_name: "Mage Marketer, Pune, India.",
    icon: magemarketer,
    iconBg: "#E6DEDD",
    date: "November 2024 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Developing and maintaining Websites, Ecommerce Stores & Landing pages using WordPress, WooCommerce and Shopify.",
    ],
  },
  {
    title: "Frontend Developer Intern",
    company_name: "Web Mantra IT Solutions, sangli, India.",
    icon: webmantra,
    iconBg: "#E6DEDD",
    date: "June 2024 - Nov 2024",
    points: [
      "Focused on React.js development, working on UI enhancements and interactive components.",
      "Assisted in responsive design implementation for mobile-first applications.",
      "Participated in code reviews, optimizing code quality and performance.",
      "Worked closely with senior developers to debug and resolve front-end issues.",
    ],
  },
  {
    title: "Frontend Developer Intern",
    company_name: "Integrate Infosolutions, Sangli, India.",
    icon: integrate,
    iconBg: "#E6DEDD",
    date: "Aug 2023 - Oct 2023",
    points: [
      "Gained foundational experience in React.js, HTML, CSS, and JavaScript.",
      "Worked on minor UI fixes and feature implementations for client projects.",
      "Collaborated with the design team to convert Figma/PSD mockups into responsive web pages.",
      "Assisted in debugging and cross-browser testing.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Sanket is an exceptional developer who built a fast and responsive website for our business. His expertise in React and Next.js ensured a smooth user experience. Highly recommend him for any web project!",
    name: "Rahul Sharma",
    designation: "Startup Founder",
    company: "TechNova Solutions",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    testimonial:
      "Sanket developed a full-stack MERN application for us, and his coding skills were top-notch. He structured the backend efficiently and ensured the frontend was smooth and interactive. A fantastic developer to work with!",
    name: "Neha Desai",
    designation: "Lead Developer",
    company: "CodeCrafters Technologies",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
  },
  {
    testimonial:
      "Sanket is a highly reliable and skilled developer. He delivered our project on time with exceptional quality and efficiency, and his suggestions added great value. Looking forward to working with him again!",
    name: "Vikram Nair",
    designation: "Founder",
    company: "PixelWave Studios",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
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
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
