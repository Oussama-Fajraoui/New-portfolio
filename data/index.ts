export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Expanding Web Development Skills",
    description: "Full-stack technologies.",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "ASCEND platform for job and recruitment offers",
    des: "Developed Ascend, a job and recruitment platform using the MERN stack. The application connects job seekers with employers, streamlining the hiring process through an intuitive and efficient interface.",
    img: "/p1g.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/Expjs.svg", "/nodejs.svg"],
    link: "https://ascend-front.digitalcook.me/signin",
  },
  {
    id: 2,
    title: "Horizon - Banking Web App",
    des: "Horizon is a financial SaaS platform that connects to multiple bank accounts, displays transactions in real-time, allows users to transfer money to other platform users, and manages their finances altogether.",
    img: "/horizon.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://banking-jet.vercel.app/sign-in",
  },
  {
    id: 3,
    title: "AI Image SaaS - Canva Application",
    des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "/ui.aiimg.com",
  },
  {
    id: 4,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://iphone-doc.vercel.app/",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Oussama was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Oussama's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Oussama is the ideal partner.",
    name: "Ayoub Fajraoui",
    title: "CEO of Quadra Digital Solution",
    photo: "/ayoub.png",
  },
  {
    quote:
      "Partnering with Oussama was a remarkable experience. His skill, efficiency, and unwavering commitment to excellence made a significant impact on our project. Oussama's genuine enthusiasm for development is truly inspiring. If you need someone to take your website and brand to the next level, Oussama is your go-to professional.",
    name: "Anis Tabakh",
    title: "Director of DigitalCook",
    photo: "/anis.jpg",
  },
  {
    quote:
      "Working with Oussama was a fantastic experience. His expertise, timely responses, and commitment to high-quality outcomes were clear from start to finish. Oussama's passion for development shines through in every task he undertakes. For anyone looking to enhance their website and boost their brand, Oussama is the perfect collaborator.",
    name: "Ahmed Hlaimi",
    title: "Software Developer @ VERMEG",
    photo: "/ahmed.jpeg",
  },
];

export const companies = [
  {
    id: 1,
    name: "Digitalcook",
    img: "/digital.svg",
    nameImg: "/digitalName.svg",
  },
  {
    id: 2,
    name: "Quadra Digital Solution",
    img: "/quadra.svg",
    nameImg: "/quadraName.svg",
  },
  {
    id: 3,
    name: "VERMEG",
    img: "/vermeg.svg",
    nameImg: "/vermegName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Full-Stack Developer",
    desc: "Development of a web-based platform using MERN stack technologie.",
    className: "md:col-span-2",
    thumbnail: "/digital.svg",
  },
  {
    id: 2,
    title: "Full-Stack javaScript Developer",
    desc: "Development of web apps for mutltiple clients using React, Next, Angular.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/quadra.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client usng React Native, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];
