import { Course, Project, ContactInfo } from '../types';

export const courses: Course[] = [
  {
    id: '1',
    title: 'Scientific Computing with Python',
    provider: 'freeCodeCamp',
    icon: 'https://cdn.freecodecamp.org/platform/universal/fcc_primary.svg',
    category: 'programming'
  },
  {
    id: '2',
    title: 'Harvard CS50X',
    provider: 'Harvard University',
    icon: 'https://cs50.harvard.edu/x/2023/favicon.ico',
    category: 'programming'
  },
  {
    id: '3',
    title: 'DSA: Graph Search, Shortest Paths',
    provider: 'Stanford',
    icon: 'https://www.stanford.edu/favicon.ico',
    category: 'programming'
  },
  {
    id: '4',
    title: 'DSA: Divide and Conquer',
    provider: 'Stanford',
    icon: 'https://www.stanford.edu/favicon.ico',
    category: 'programming'
  },
  {
    id: '5',
    title: 'Introduction to Machine Learning',
    provider: 'Global AI Hub',
    icon: 'https://globalaihub.com/favicon.ico',
    category: 'ml-quantum'
  },
  {
    id: '6',
    title: 'Google Quantum AI QubitxQubit',
    provider: 'IBM, Google, The Coding School',
    icon: 'https://quantumai.google/favicon.ico',
    category: 'ml-quantum'
  }
];

export const projects: Project[] = [
  {
    id: '1',
    title: 'focus.com',
    description: 'A productivity-focused web application built with modern web technologies.',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    githubUrl: 'https://github.com/me50/e-elektron/tree/cs50/problems/2023/x/project',
    liveUrl: '#',
    technologies: ['React', 'TypeScript', 'CSS']
  },
  {
    id: '2',
    title: 'Sneaker Monitor: Web Scraper',
    description: 'An automated web scraping tool for monitoring sneaker releases and price changes.',
    image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=800',
    githubUrl: 'https://github.com/kentumut/kanyas-monitor',
    technologies: ['Python', 'BeautifulSoup', 'Selenium']
  },
  {
    id: '3',
    title: 'Discord Node.js Bot',
    description: 'A feature-rich Discord bot built with Node.js for community management.',
    image: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Node.js', 'Discord.js', 'JavaScript']
  }
];

export const contactInfo: ContactInfo = {
  email: 'kentumut@pm.me',
  linkedin: 'https://www.linkedin.com/in/kentumut/'
};