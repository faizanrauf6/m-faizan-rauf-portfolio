const person = {
  firstName: 'M Faizan',
  lastName: 'Rauf',
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: 'Senior Software Engineer',
  avatar: '/images/avatar-p.png',
  email: 'faizanrauf6@gmail.com',
  location: 'Asia/Karachi',
  languages: ['English', 'Urdu', 'Punjabi'],
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally writes about system design, emerging technologies, and the
      intersection of engineering and innovation.
    </>
  ),
};

const social = [
  {
    name: 'GitHub',
    icon: 'github',
    link: 'https://github.com/faizanrauf6',
  },
  {
    name: 'LinkedIn',
    icon: 'linkedin',
    link: 'https://www.linkedin.com/in/m-faizan-rauf/',
  },
  {
    name: 'X',
    icon: 'x',
    link: 'https://twitter.com/faizanch555',
  },
  {
    name: 'Email',
    icon: 'email',
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: '/',
  image: '/images/og/home.png',
  label: 'Home',
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Blending design and code</>,
  featured: {
    display: true,
    title: (
      <>
        Recent project: <strong className='ml-4'>HelloCustom</strong>
      </>
    ),
    href: '/work/personalization-for-pod-sellers',
  },
  subline: (
    <>
      I'm Faizan Rauf, a Senior Software Engineer at{' '}
      <strong>Must Company</strong>, where I build fast, responsive, and
      accessible websites.
      <br />
      In my free time, I create and refine web projects that solve real-world
      problems.
    </>
  ),
};

const about = {
  path: '/about',
  label: 'About',
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: 'https://cal.com',
  },
  intro: {
    display: true,
    title: 'Introduction',
    description: (
      <>
        Faizan is a Lahore-based web developer who thrives on turning complex
        problems into clean, user-friendly web experiences. His work blends
        modern design with solid engineering across responsive interfaces and
        interactive web applications.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: 'Work Experience',
    experiences: [
      {
        company: 'Must Company',
        timeframe: 'April 2025 - Present',
        role: 'Senior Software Engineer (ReactJs/NextJs)',
        achievements: [
          <>
            Contributed to the development of Must’s internal admin portal,
            implementing critical transaction features such as Peer-to-Peer
            (P2P), Peer-to-User (P2U), and wallet management tools.
          </>,
          <>
            Integrated complex currency conversion flows (e.g., KWT to SUT and
            vice versa), streamlining backend processes and improving
            operational efficiency.
          </>,
          <>
            Developed and launched the “Super Save” feature for user savings
            management, enhancing user retention through intuitive design and
            optimized performance.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          // {
          //   src: '/images/projects/must-p.png',
          //   alt: 'MSQ Admin Portal',
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      {
        company: 'Crewlogix Technologies',
        timeframe: 'Jan 2023 - March 2025',
        role: 'Software Engineer (NodeJs/NestJs)',
        achievements: [
          <>
            Developed and maintained a comprehensive admin panel for a
            multi-vendor e-commerce platform, enhancing user experience and
            operational efficiency.
          </>,
          <>
            Implemented a robust payment gateway integration, ensuring secure
            transactions and compliance with industry standards.
          </>,
        ],
        images: [],
      },
      {
        company: 'Mahir Company',
        timeframe: 'Feb 2022 - Jan 2023',
        role: 'MERN Stack Developer',
        achievements: [
          <>
            Developed Mahir Company’s website, admin panel, and backend APIs
            using the MERN stack, ensuring a seamless and scalable architecture
            for platform growth.
          </>,
          <>
            Collaborated closely with product and design teams to deliver a
            world-class user experience, prototyping new features and
            redesigning existing flows based on user feedback.
          </>,
          <>
            Extended and implemented APIs in coordination with the server team,
            enabling smooth integration across services and improving platform
            reliability.
          </>,
        ],
      },
      {
        company: 'Nielsen Company',
        timeframe: 'Sep 2020 - Feb 2022',
        role: 'SUD Executive',
        achievements: [
          <>
            Designed and implemented scripts for advanced data processing and
            visualization, streamlining analytics workflows and improving data
            clarity.
          </>,
          <>
            Developed AI-driven software solutions for various clients,
            enhancing system automation and delivering tailored performance
            improvements.
          </>,
        ],
      },
      {
        company: 'The A Web Technologies',
        timeframe: 'May 2019 - Feb 2020',
        role: 'Website Developer',
        achievements: [
          <>
            Designed and developed advanced applications using JavaScript,
            React.js, and Node.js, delivering scalable and maintainable
            solutions.
          </>,
          <>
            Implemented comprehensive unit testing strategies to ensure code
            robustness, covering edge cases and enhancing usability.
          </>,
          <>
            Actively performed bug fixes and optimized application performance,
            resulting in improved user experience and reliability.
          </>,
          <>
            Managed data effectively using MongoDB, ensuring efficient storage
            and retrieval for high-performance applications.
          </>,
        ],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: 'Studies',
    institutions: [
      {
        name: 'COMSATS University Islamabad',
        timeframe: '2015 - 2019',
        degree: 'Bachelor of Science in Software Engineering',
        description: (
          <>
            Graduated with a degree in Software Engineering, specializing in
            software development and data structures, with a CGPA of 3.35 (81%).
          </>
        ),
      },
    ],
  },
  technical: {
    display: true,
    title: 'Technical Skills',
    skills: [
      {
        title: 'ReactJS',
        description: <>Experienced in building dynamic UI with ReactJS.</>,
        Icon: 'SiReact',
        category: 'Frontend',
      },
      {
        title: 'Next.js',
        description: <>Building next-gen apps with Next.js</>,
        Icon: 'SiNextdotjs',
        category: 'Frontend',
      },
      {
        title: 'Tailwind CSS',
        description: <>Utility-first CSS framework for rapid UI development.</>,
        Icon: 'SiTailwindcss',
        category: 'Frontend',
      },
      {
        title: 'Node.js',
        description: <>Backend development with Node.js for scalable APIs.</>,
        Icon: 'SiNodedotjs',
        category: 'Backend',
      },
      {
        title: 'NestJS',
        description: (
          <>
            Building efficient, reliable server-side applications with NestJS.
          </>
        ),
        Icon: 'SiNestjs',
        category: 'Backend',
      },
      {
        title: 'Express.js',
        description: <>Lightweight web framework for Node.js.</>,
        Icon: 'SiExpress',
        category: 'Backend',
      },
      {
        title: 'Sails.js',
        description: (
          <>MVC framework for Node.js to build custom, enterprise-grade apps.</>
        ),
        Icon: 'SiSailsdotjs',
        category: 'Backend',
      },
      {
        title: 'MySQL',
        description: <>Relational database management using MySQL.</>,
        Icon: 'SiMysql',
        category: 'Database',
      },
      {
        title: 'PostgreSQL',
        description: <>Advanced SQL database with PostgreSQL.</>,
        Icon: 'SiPostgresql',
        category: 'Database',
      },
      {
        title: 'MongoDB',
        description: <>NoSQL database management with MongoDB.</>,
        Icon: 'SiMongodb',
        category: 'Database',
      },
      {
        title: 'Python',
        description: <>Programming and scripting in Python.</>,
        Icon: 'SiPython',
        category: 'Backend',
      },
      {
        title: 'Solidity',
        description: <>Smart contract development with Solidity.</>,
        Icon: 'SiSolidity',
        category: 'Blockchain',
      },
      {
        title: 'Docker',
        description: <>Containerization and deployment with Docker.</>,
        Icon: 'SiDocker',
        category: 'DevOps',
      },
      {
        title: 'AWS - S3, EC2',
        description: (
          <>Cloud services for storage and computing with AWS S3 and EC2.</>
        ),
        Icon: 'SiAwslambda',
        category: 'DevOps',
      },
      {
        title: 'CI/CD',
        description: <>CI/CD for continuous integration and deployment.</>,
        Icon: 'SiCircleci',
        category: 'DevOps',
      },
      {
        title: 'TypeScript',
        description: (
          <>
            Strongly typed JavaScript with TypeScript for better
            maintainability.
          </>
        ),
        Icon: 'SiTypescript',
        category: 'General',
      },
      {
        title: 'Git',
        description: <>Version control and collaboration with Git.</>,
        Icon: 'SiGit',
        category: 'General',
      },
      {
        title: 'Socket.IO',
        description: (
          <>Real-time communication in web applications with Socket.IO.</>
        ),
        Icon: 'SiSocketdotio',
        category: 'General',
      },
      {
        title: 'GraphQL',
        description: <>API query language for flexible data retrieval.</>,
        Icon: 'SiGraphql',
        category: 'General',
      },
      {
        title: 'RESTful APIs',
        description: <>Building and consuming RESTful APIs.</>,
        Icon: 'SiApollographql',
        category: 'General',
      },
      {
        title: 'Third-Party APIs',
        description: (
          <>
            Integrating with third-party APIs for extended functionality. e-g
            Etsy, Shopify, Amazon, Printify, LinkedIn, Meta- Facebook and
            WhatsApp, Twitter, Google, TTS-Text to Speech, STT-Speech to Text,
            Twilio, and many more.
          </>
        ),
        Icon: 'SiUikit',
        category: 'General',
      },
    ],
  },
};

const blog = {
  path: '/blog',
  label: 'Blog',
  title: 'Writing about design and tech...',
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: '/work',
  label: 'Work',
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: '/gallery',
  label: 'Gallery',
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: '/images/gallery/horizontal-1.jpg',
      alt: 'image',
      orientation: 'horizontal',
    },
    {
      src: '/images/gallery/horizontal-2.jpg',
      alt: 'image',
      orientation: 'horizontal',
    },
    {
      src: '/images/gallery/horizontal-3.jpg',
      alt: 'image',
      orientation: 'horizontal',
    },
    {
      src: '/images/gallery/horizontal-4.jpg',
      alt: 'image',
      orientation: 'horizontal',
    },
    {
      src: '/images/gallery/vertical-1.jpg',
      alt: 'image',
      orientation: 'vertical',
    },
    {
      src: '/images/gallery/vertical-2.jpg',
      alt: 'image',
      orientation: 'vertical',
    },
    {
      src: '/images/gallery/vertical-3.jpg',
      alt: 'image',
      orientation: 'vertical',
    },
    {
      src: '/images/gallery/vertical-4.jpg',
      alt: 'image',
      orientation: 'vertical',
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
