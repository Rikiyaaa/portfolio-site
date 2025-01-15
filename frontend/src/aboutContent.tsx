import stefImage from '../public/images/stef.jpg';
import jpImage from '../public/images/jp.jpg';

/* eslint-disable no-multiple-empty-lines */
/* eslint-disable max-len */
export const aboutContent = {
  intro: ["I'm Bryant! (he/him)", 'I build web experiences'],
  mission: [
    'I am a freelance dev who helps awesome designers (like you) build their wildest dreams.',
    'Together, let\'s create something that stands out––and has your users saying, "woah."',
  ],
  testimonials: [
    {
      quote:
        "Bryant's kickass work is complemented by his infectious energy and passion for creating original, exciting work. He is a true creative partner––always bringing new ideas to the table.",
      shortName: 'Stef',
      name: 'Stephanie Jung',
      headshot: stefImage, // Ensure stef.jpg exists
      title: ['Brand Design Lead, Employer Marketing at Handshake'],
    },
    {
      quote:
        "Bryant's collaborative mindset and aptitude to explore ideas well beyond the minimum viable product make him an invaluable partner.",
      name: 'JP Ramirez',
      shortName: 'JP',
      title: [
        'Design Manager, Brand Design Strategy at Intuit',
        'Director, Studio Ramírez',
      ],
      headshot: jpImage, // Ensure jp.jpg exists
    },
    {
      quote:
        "Bryant's building enables award-winning projects––including FWA Site Of The Day, Webby, 2x Awwwards Honorable Mention, CSSDA Special Kudos, CSSDA Best UI/UX/Innovation, 4x STA100, Type Director's Club, Webby For Good... & more.",
      name: 'The award people',
      shortName: 'Awards',
      headshot: '/images/star-icon.svg', // Ensure star-icon.svg exists
    },
  ],
  skills: [
    `
      9 years working with
      best-in-class designers building award-winning projects
    `,
    `
      strong command of design systems. excellent
      at interpreting mockups in any form (adobe, figma,
      whatev) and working with minimal OR maximal direction
    `,
    `
      exceptional at visual
      styling and attention to
      detail.  whatever tool it
      takes: CSS, SCSS/PostCSS,
      Tailwind, animation,
      2D & 3D rendering...
    `,
    `
      expert communication &
      project management.
      leading up, down, and laterally. transforming chaos into launches
    `,
    `
      full stack & at the cutting edge. this site is built with React/NextJS,
      Typescript, Sanity, Three.js/R3F, GLSL, and a laundry list more
    `,
    `
      always accessible, functional, responsive, compatible,
      performant and search engine optimized
    `,
  ],
};
