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
  role: 'Junior Unity Gameplay Programmer / Technical Artist',
  location: 'Open to junior game development roles',
  contact: [
    { label: 'Email', value: 'sarkicyn@icloud.com', href: 'mailto:sarkicyn@icloud.com' },
    { label: 'GitHub', value: 'github.com/sarkicyn', href: 'https://github.com/sarkicyn' },
    { label: 'Telegram', value: '@yeeeee11111', href: 'https://t.me/yeeeee11111' },
  ],
  summary:
    'Junior Gameplay Programmer and Technical Artist focused on Unity, C#, gameplay systems, UI integration, and Blender-to-Unity asset workflows. Experienced in building progression-based mechanics, stamina and reward systems, interactive UI, prototype gameplay loops, and 3D asset pipelines for game projects.',
  coreSkills: [
    {
      title: 'Unity Gameplay Programming',
      items: [
        'Unity',
        'C# scripting',
        'Gameplay systems',
        'Core game mechanics',
        'Progression systems',
        'Stamina and fatigue systems',
        'Reward systems',
        'Event-driven mechanics',
        'Gameplay debugging',
        'Optimization basics',
      ],
    },
    {
      title: 'Game UI and Frontend',
      items: [
        'Unity UI',
        'TextMeshPro',
        'UI logic integration',
        'Buttons, sliders, panels, and feedback states',
        'JavaScript',
        'HTML5',
        'CSS3',
        'Responsive layouts',
        'Telegram Mini Apps',
      ],
    },
    {
      title: 'Technical Art and 3D Pipeline',
      items: [
        'Blender',
        '3D modeling',
        'PBR materials',
        'Node-based texturing',
        'Texture baking',
        'Lighting setup',
        'Scene composition',
        'Blender-to-Unity asset pipeline',
        'Animation asset workflows',
      ],
    },
  ],
  projectExperience: [
    {
      title: 'Gym Clicker Game',
      role: 'Unity Gameplay Programmer / Technical Artist',
      stack: 'Unity, C#, Blender, TextMeshPro, Unity UI',
      repository: 'https://github.com/sarkicyn/GYMClicker.git',
      points: [
        'Built training, stamina, fatigue, progression, and reward systems for a gym-themed clicker game prototype.',
        'Implemented gameplay UI using TextMeshPro, buttons, sliders, panels, and real-time feedback states.',
        'Integrated C# gameplay logic with UI updates, player progression, and interactive game mechanics.',
        'Worked with Unity physics components, animation systems, object interactions, and gameplay script debugging.',
        'Created Blender assets, materials, and lighting for a basement gym environment.',
      ],
    },
  ],
  keywords: [
    'Junior Unity Developer',
    'Gameplay Programmer',
    'Unity Gameplay Programmer',
    'C# Developer',
    'Technical Artist',
    'Game UI Developer',
    'Unity UI',
    'TextMeshPro',
    'Blender',
    'PBR Materials',
    '3D Asset Pipeline',
    'Telegram Mini Apps',
  ],
};

export const skillGroups = [
  {
    title: 'Game Development',
    items: [
      'Gameplay programming using C# in Unity',
      'Development of gameplay systems and core game mechanics',
      'Implementation of stat, stamina, progression, and reward systems',
      'UI implementation using Unity UI and TextMeshPro',
      'Integration of gameplay logic with UI systems',
      'Working with animation systems, Animator Controller, and physics components',
      'Debugging gameplay scripts and basic optimization',
      'Basic experience creating event-driven gameplay mechanics',
    ],
  },
  {
    title: 'Game Design',
    items: [
      'Gameplay loop design',
      'Understanding of player progression and reward balancing principles',
      'Designing gameplay flow and player interaction systems',
      'Creating progression-based mechanics for training and competition systems',
    ],
  },
  {
    title: '3D & Technical Art',
    items: [
      '3D modeling and scene creation in Blender',
      'Material creation and node-based texturing',
      'PBR workflow and texture baking',
      'Basic lighting setup and scene composition',
      'Asset pipeline setup from Blender to Unity',
      'Working with animation assets and object-to-rig attachment workflows',
    ],
  },
  {
    title: 'Frontend Development',
    items: [
      'HTML5 and CSS3',
      'Basic JavaScript development',
      'Responsive UI layout basics',
      'Understanding of frontend project structure and modular architecture',
      'Basic experience with Telegram Mini Apps',
    ],
  },
];

export const projects = [
  {
    title: 'Gym Clicker Game',
    type: 'Unity / C# / Blender',
    description:
      'A gym-themed clicker game prototype focused on training progression, stamina management, fatigue systems, competitions, and UI-based gameplay feedback.',
    repository: 'https://github.com/sarkicyn/GYMClicker.git',
    points: [
      'Built training, stamina, fatigue, and progression systems',
      'Created Unity UI with TextMeshPro, buttons, sliders, and panels',
      'Integrated gameplay logic with UI updates',
      'Worked with physics components, animation systems, and object interactions',
      'Created Blender assets, materials, and environment lighting for a basement gym atmosphere',
    ],
    visual: 'gym',
  },
];

export const tools = [
  'Unity',
  'C#',
  'Blender',
  'JavaScript',
  'HTML5',
  'CSS3',
  'Git',
  'GitHub',
  'TextMeshPro',
  'Unity UI',
  'Animator Controller',
  'Vite',
  'Telegram Mini Apps',
  'PBR Materials',
  'Texture Baking',
];
