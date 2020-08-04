import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Kuan',
  subtitle: 'I am a',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'I am an enthusiastic developer with a background in business and design. I discovered my passion for coding while working as a junior product manager at a start-up and have since then aspired to build software that can create positive impacts in the society.',
  paragraphTwo:
    'My background in business and design has allowed me to utilise critical thinking and problem-solving abilities to produce visually appealing MVPs that meet user and business needs.',
  paragraphThree: '',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project_terminal.png',
    title: 'Sturdy Card Terminal App',
    info:
      'Sturdy Card is a flashcard terminal app that aims to help students remember pieces of important information in their studies',
    info2: 'This app is built using Ruby and Ruby gems',
    url: 'helloo',
    repo: 'https://github.com/codebender16/sturdycard', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project_portfolio.png',
    title: 'Cloud-themed Portfolio Project',
    info: 'A personal portfolio inspired by the idiom "Every cloud has a silver lining',
    info2: 'This project is built purely using HTML and CSS.',
    url: 'https://gkuanlee.netlify.app',
    repo: 'https://github.com/codebender16/portfolio-project', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project_biztrek.png',
    title: 'Biztrek - A rails app',
    info:
      'Biztrek is an online course marketplace for business mentors and aspiring business venturers to meet.',
    info2:
      'Biztrek uses MVC architecture from Rails and it is deployed on Heroku. The styling of the views are imported from Bootstrap.',
    url: 'https://biztrek.herokuapp.com',
    repo: 'https://github.com/codebender16/biztrek', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: "Let's talk more",
  btn: '📧',
  email: 'leeguankuan@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/codebender16',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: 'https://codepen.io/codebender16',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/kuan-lee/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/codebender16',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
