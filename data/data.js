import SVG3 from "../public/Svg-3.svg";
import SVG4 from "../public/Svg-4.svg";
import SVG5 from "../public/Svg-5.svg";

export const menu = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },

  {
    title: "Contact",
    path: "/contact",
  },
];

export const services = [
  {
    image: SVG3,
    title: "Frontend Developer",
    technologies:
      "React JS, Next Js, Redux, Apollo-Client and Django/Flask-Python",
    description: [
      {
        item: "UX/UI designing",
      },

      {
        item: "Design implementation",
      },
      { item: "App testing" },
    ],
  },
  {
    image: SVG4,
    title: "Backend Developer",
    technologies: "Node, GraphQL and MongoDB",
    description: [
      {
        item: "Backend design",
      },
      {
        item: "Backend implemetation",
      },
      {
        item: "Backend testing",
      },
    ],
  },
  {
    image: SVG5,
    title: "Payment Gateways",
    technologies: "MPESA-Daraja API, Paypal, Stripe, Jambo Pay",
    description: [
      {
        item: "Payment integration",
      },
      {
        item: "Integration testing",
      },
    ],
  },
];
export const frontend_skills = [
  {
    skill: "HTML",
    level: 90,
  },
  {
    skill: "CSS",
    level: 90,
  },
  {
    skill: "Javascript",
    level: 85,
  },
  {
    skill: "React Js",
    level: 90,
  },
  {
    skill: "Next Js",
    level: 90,
  },
  {
    skill: "Redux",
    level: 80,
  },
];

export const backend_skills = [
  {
    skill: "GraphQL",
    level: 90,
  },
  {
    skill: "Node Js",
    level: 80,
  },
  {
    skill: "Mongoose",
    level: 100,
  },
];
export const payment_gateways = [
  {
    skill: "MPESA",
    level: 100,
  },
  {
    skill: "Stripe",
    level: 100,
  },
  {
    skill: "Jambo Pay",
    level: 100,
  },
  {
    skill: "IPay",
    level: 100,
  },
];

export const ux_ui = [
  {
    skill: "Figma",
    level: 100,
  },
  {
    skill: "Framer",
    level: 80,
  },
];
