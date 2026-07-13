export const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Resume', href: '#resume' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const resume = {
  name: 'Artem Sarkisyan',
  role: 'Junior / Junior+ C#/.NET Backend Developer',
  location: 'Open to junior C#/.NET backend roles',
  contact: [
    { label: 'Email', value: 'sarkicyn@icloud.com', href: 'mailto:sarkicyn@icloud.com' },
    { label: 'GitHub', value: 'github.com/sarkicyn', href: 'https://github.com/sarkicyn' },
    { label: 'Telegram', value: '@yeeeee11111', href: 'https://t.me/yeeeee11111' },
  ],
  summary:
    'Junior / Junior+ C#/.NET Backend Developer focused on ASP.NET Core REST APIs, secure authentication, relational data access, and maintainable server-side systems. Practical personal project experience building MyApiBlya with EF Core, PostgreSQL, JWT, OAuth, Docker, and testing.',
  coreSkills: [
    {
      title: 'C# / .NET',
      items: [
        'C#',
        '.NET',
        'Object-Oriented Programming',
        'Async/Await',
        'LINQ',
        'Collections',
        'Dependency Injection',
      ],
    },
    {
      title: 'ASP.NET Core',
      items: [
        'REST API',
        'ASP.NET Core Web API',
        'Routing',
        'Middleware',
        'Model Validation',
        'Swagger / OpenAPI',
      ],
    },
    {
      title: 'Data & Security',
      items: [
        'Entity Framework Core',
        'PostgreSQL',
        'SQL',
        'JWT Authentication',
        'OAuth',
        'CRUD Operations',
      ],
    },
    {
      title: 'Engineering Practices',
      items: [
        'Docker',
        'Unit Testing',
        'Integration Testing',
        'Git / GitHub',
        'Error Handling',
        'Layered Architecture',
      ],
    },
  ],
  projectExperience: [
    {
      title: 'MyApiBlya',
      role: 'Personal ASP.NET Core Backend Project',
      stack:
        'C#, .NET, ASP.NET Core, EF Core, PostgreSQL, JWT, OAuth, Docker, Testing',
      points: [
        'Built a REST API with ASP.NET Core and structured endpoint, service, and data-access layers.',
        'Implemented persistence with Entity Framework Core and PostgreSQL, including CRUD workflows.',
        'Worked with JWT authentication and OAuth-based authorization flows.',
        'Configured Docker for a reproducible local development environment.',
        'Covered key backend scenarios with unit and integration testing.',
      ],
    },
  ],
  keywords: [
    'Junior C#/.NET Backend Developer',
    'C# Developer',
    '.NET Developer',
    'ASP.NET Core',
    'REST API',
    'Entity Framework Core',
    'PostgreSQL',
    'JWT',
    'OAuth',
    'Docker',
    'Unit Testing',
    'Integration Testing',
    'Object-Oriented Programming',
    'Dependency Injection',
    'LINQ',
    'SQL',
    'Git',
    'GitHub',
  ],
};

export const skillGroups = [
  {
    title: 'C# / .NET',
    items: [
      'C#',
      '.NET',
      'OOP',
      'Async/Await',
      'LINQ',
      'Dependency Injection',
    ],
  },
  {
    title: 'ASP.NET Core',
    items: [
      'Web API',
      'REST',
      'Routing',
      'Middleware',
      'Validation',
      'Swagger / OpenAPI',
    ],
  },
  {
    title: 'Data & Security',
    items: [
      'EF Core',
      'PostgreSQL',
      'SQL',
      'CRUD',
      'JWT',
      'OAuth',
    ],
  },
  {
    title: 'Delivery & Quality',
    items: [
      'Docker',
      'Unit Testing',
      'Integration Testing',
      'Git',
      'GitHub',
      'Layered Architecture',
    ],
  },
];

export const projects = [
  {
    title: 'MyApiBlya',
    type: 'ASP.NET Core API',
    description:
      'A personal backend project focused on REST API development, relational persistence, authentication, containerized local setup, and testable server-side code.',
    technologies: [
      'C#',
      '.NET',
      'ASP.NET Core',
      'EF Core',
      'PostgreSQL',
      'JWT',
      'OAuth',
      'Docker',
      'Testing',
    ],
    responsibilities: [
      'Designed REST endpoints and separated API, service, and data-access responsibilities',
      'Implemented EF Core persistence with PostgreSQL',
      'Worked with JWT authentication and OAuth authorization',
      'Prepared Docker-based local development setup',
      'Added unit and integration tests for core backend scenarios',
    ],
    visual: 'pipeline',
  },
];

export const tools = [
  'C#',
  '.NET',
  'ASP.NET Core',
  'Entity Framework Core',
  'PostgreSQL',
  'SQL',
  'JWT',
  'OAuth',
  'Docker',
  'Swagger / OpenAPI',
  'Unit Testing',
  'Integration Testing',
  'Git',
  'GitHub',
];
