import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Kuan | Software Engineer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hey there, I am',
  name: 'Kuan',
  subtitle: 'I design and build digital products with minimalism in mind',
  cta: 'Check out my work',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'Since my journey as a software engineer, I have done work in multiple projects, solved core problems, collaborated with talented people and helped bring their digital products to the next level',
  paragraphTwo:
    'I am a problem-solver, naturally curious and consistently take intiative to improve one step at a time.',
  paragraphThree:
    'Tooling: Ruby, JavaScript, TypeScript, Java, C#, Cypress, Jest, Rspec, Capybara, AWS, Docker, Angular, React, Vue, Mocha, Chai, Mockito, Python, HTML, CSS, SASS, Git, Postgresql, SQLite, MongoDB, Nuxt.js, Microservices',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'mss.png',
    title: 'Mr Shopper Studio',
    info:
      'Mr Shopper Studio (MSS) is a well-known Singapore-based interior design firm. The website is to improve brand awareness and visibility in the local industry.',
    info2: 'Tools: Wix | React',
    url: 'https://www.mrshopperstudio.com',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'intrepidlogo.png',
    title: 'Intrepid Travel',
    info:
      'Intrepid Travel is a web platform for travellers to explore travel packages, find valuable information and book tours.',
    info2: 'Tools: HTML | SASS | Vue | TypeScript | Nuxt.js | Docker | Github | AWS',
    url: 'https://www.intrepidtravel.com/en',
    repo: 'https://github.com/codebender16/sturdycard', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Visory.png',
    title: 'Visory: A Platform for Bookkeepers',
    info:
      'Visory is a bookkeepers platform built to streamline the engagement and business processes between bookkeepers and their clients',
    info2: 'Tools: Angular | TypeScript | AWS | React | Docker | Github | Bitbucket',
    url: 'https://www.visory.com.au',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project_terminal.png',
    title: 'Sturdy Card Terminal App',
    info:
      'Sturdy Card is a flashcard terminal app that aims to help students remember pieces of important information in their studies',
    info2: 'Tools: Ruby | Command Line',
    repo: 'https://github.com/codebender16/sturdycard', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project_portfolio.png',
    title: 'Cloud-themed Portfolio Project',
    info: 'A personal portfolio inspired by the idiom "Every cloud has a silver lining',
    info2: 'Tools: HTML | CSS | Netlify',
    url: 'https://gkuanlee.netlify.app',
    repo: 'https://github.com/codebender16/portfolio-project', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project_biztrek.png',
    title: 'Biztrek - A rails app (currently down)',
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
