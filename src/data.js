import Django from "./images/Django.png";
import Django_react from "./images/Django_react.png";
import Laravel from "./images/Laravel.png";
import Laravel_Vue from "./images/Laravel_Vue.png";
import MEVN from "./images/MEVN.png";
import Next_Gatsby_Amazon from "./images/Next_Gatsby_Amazon.png"
import Nuxt_express from "./images/Nuxt_express.png"
import React_firebase from "./images/React_firebase.png"
import React_spring from "./images/React_spring.png"

export const projects = [{
        title: "SECURE THE BAG",
        subtitle: "React.js, Node.js, MySQL, Storybook, Firebase, Swagger",
        description: "Register user's income and make you know financial reports day, month and year.",
        image: React_firebase,
        link: "https://securethebag.io",
        code: "",
    },
    {
        title: "Lufthansa",
        subtitle: "React.js, Spring, MySQL, CSS and HTML",
        description: "Allow the users to offer destination.",
        image: React_spring,
        link: "https://www.lufthansa.com/",
        code: "",
    },
    {
        title: "Suitopia",
        subtitle: "HTML, CSS and JavaScript, Django",
        description: "Supporting designing the clothes and price with fashion component.",
        image: Django,
        link: "https://www.suitopia.com/",
        code: "",
    },
    {
        title: "DEGENESIS",
        subtitle: "Nuxt.js Express",
        description: "Game site for publishing, selling and analyzing",
        image: Nuxt_express,
        link: "https://degenesis.com/",
        code: "",
    },
    {
        title: "Photocrowd",
        subtitle: "Django React.js(Hooks, Context, Lifecycle methods)",
        description: "Allow users to upload there photos and exhibition.",
        image: Django_react,
        link: "https://www.photocrowd.com/",
        code: "",
    },
    {
        title: "Sainsbury's",
        subtitle: "Next.js, React, Gatsby, Amazon Web Service",
        description: "Show how to order food and receipe",
        image: Next_Gatsby_Amazon,
        link: "https://www.sainsburys.co.uk/",
        code: "",
    },
    {
        title: "Cusorcart",
        subtitle: "Laravel, Vue.js",
        description: "HongKong E-commerce Site",
        image: Laravel_Vue,
        link: "https://cusorcart.com/",
        code: "",
    },
    {
        title: "Kaufland",
        subtitle: "Laravel, MySQL",
        description: "German E-Commerce Site",
        image: Laravel,
        link: "https://www.kaufland.de/",
        code: "",
    },

];

export const hardSkills = ["Git & GitHub", "BitBucket", "Firebase Auth", "Amazon Web Services", "HTML(5)& CSS(3)", "Javascript", "Typescript", "React JS", "Node JS", "Rest API's", "MySQL Database", "Swagger", "Postman", "Storybook", "Tailwind CSS", "React-Native", "MS Azure", "Docker", "GatsbyJs"];

export const softSkills = ["Approachable", "Initiative Driven", "Active Learning", "Innovative Thinking", "Team Work", "Team Leadership", "Creative Problem solving", "Attention to detail", "Time management", "Code review"];

export const workExperience = [{
    title: "Full-stack Software Engineer- Remote",
    company: "Almosafter",
    description: ["Updated the first generation of Almosafer website & mobile iOS/Android app",
    "Served as architect and technical lead for the frontend development of the Almosafer hotel booking website",
    ] ,
    from: "Apr 2021 - ",
    to: "Aug 2022"
},
{
    title: "MERN Stack Developer - Remote",
    company: "Legably",
    description: ["Developed a job market platform with MERN.",
    "Integrated Stripe API to make payments.",
    "Developed admin dashboard to manage users, projects.",] ,
    from: "Feb 2019 -",
    to: "Nov 2020"
},
{
    title: "Software Engineer - Remote",
    company: "1ST NATIONS MORTGAGE CORPORATION",
    description: ["Maintained multiple live websites",
    "Ensured that all websites are bug-free and easy to use",
    "Developed mobile apps supporting the safe maintenance of web site",] ,
    from: "Apr 2016 - ",
    to: "Nov 2018"
},
]

export const education=[
    {
        title: "Bachelor's Computer Science",
        school: "University of Aizu",
        description: "Learned Web Development and AI & ML and awarded bachelor of Computer Science",
        from: "2012 - ",
        to: "2016"
    },
]