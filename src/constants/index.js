import {
    // mobile,
    backend,
    // creator,
    ui,
    react,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    // redux,
    tailwind,
    // nodejs,
    // mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    Real,
    Art,
    // tripguide,
    threejs,
    Java,
    Firebase,
    nextjs,
    glam,
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
      title: "Fronted Developer",
      icon: web,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "React.js Developer",
      icon: react,
    },
    {
      title: "UI/UX Designer",
      icon: ui,
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
      name: "Tailwind CSS",
      icon: tailwind,
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
    {
      name: "Java",
      icon: Java,
    },
    {
      name: "Firebase",
      icon: Firebase,
    },
    {
      name: "Nextjs",
      icon: nextjs,
    },
  ];
  
  const experiences = [
    {
      title: "Frontend Developer",
      company_name: "Starbucks",
      icon: javascript,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        'Crafting captivating and immersive websites using the dynamic trio of HTML, CSS, and JavaScript to weave digital experiences that leave a lasting impression – check out my portfolio to witness the magic!'
      ],
    },
    {
      title: "Java Developer",
      company_name: "Tesla",
      icon: Java,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Mastering the art of backend development in Java, I sculpt interactive, scalable, and secure systems that power the digital world. My code breathes life into applications, orchestrating data, and delivering seamless experiences. Witness the architectural marvels I've crafted to transform ideas into digital realities"
      ],
    },
    {
      title: "React js Developer",
      company_name: "Shopify",
      icon: reactjs,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        'Designing captivating and immersive user interfaces with ReactJS is where my creative journey unfolds. I harness the power of cutting-edge technology to breathe life into digital experiences, making every click, swipe, and interaction a delightful journey. witness how I turn visionary designs into interactive web marvels that leave users spellbound.'
      ],
    },
    {
      title: "UI/Ux Designer",
      company_name: "Meta",
      icon: figma,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Crafting extraordinary UI/UX designs is my canvas, and with Figma, Adobe XD, and Canva as my brushes, I transform ideas into visually enchanting digital worlds. My designs aren't just pixels; they are a seamless fusion of aesthetics and functionality, inviting users to explore, engage, and immerse themselves."
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Animesh proved me wrong.",
      name: "Muskan Singh",
      designation: "Web Developer",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a  developer who truly cares about their clients' success like Animesh does.",
      name: "Vijay Gupta",
      designation: "Java Developer",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Animesh optimized our website Design, our traffic increased by 50%. We can't thank them enough!",
      name: "Akash singh",
      designation: "Ui Designer",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Real Estate",
      description:
        "Web-based platform that allows users to search, properties from various providers, providing a convenient and efficient solution for properties.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Material ui",
          color: "green-text-gradient",
        },
       
      ],
      image: Real,
      source_code_link: "https://github.com/BeardbabaJS/Realstate",
    },
    {
      name: "Artistry Studio",
      description:
        "Artistry Studio isn't just a website; it's a digital atelier where design visions are woven into reality, a virtual canvas where creativity knows no bounds.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "Javascript",
          color: "pink-text-gradient",
        },
      ],
      image: Art,
      source_code_link: "https://github.com/BeardbabaJS/ArtistryStudio.github.io",
    },
    {
      name: "Glam Hives",
      description:
        "Glam Hives is not just a website; it's your exclusive gateway to a world of sartorial elegance, where fashion dreams come to life. Explore, shop, and elevate your style effortlessly.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "Javascript",
          color: "pink-text-gradient",
        },
        {
          name: "UI/UX",
          color: "pink-text-gradient",
        },
      ],
      image: glam,
      source_code_link: "https://beardbabajs.github.io/fashion.github.io/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };