export const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

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
    points: [
      'Built training, stamina, fatigue, and progression systems',
      'Created Unity UI with TextMeshPro, buttons, sliders, and panels',
      'Integrated gameplay logic with UI updates',
      'Worked with physics components, animation systems, and object interactions',
      'Created Blender assets, materials, and environment lighting for a basement gym atmosphere',
    ],
    visual: 'gym',
  },
  {
    title: 'Telegram Fitness Mini App',
    type: 'JavaScript / Telegram Bot API / Frontend',
    description:
      'A Telegram Mini App concept for fitness tracking, workout records, profiles, and user progression.',
    points: [
      'Designed modular app structure with screens and modals',
      'Implemented UI logic for profile, records, workouts, and navigation',
      'Worked with Telegram Mini App and bot integration concepts',
      'Built level/progression UI logic with JavaScript',
    ],
    visual: 'miniapp',
  },
  {
    title: 'Blender to Unity Asset Workflow',
    type: 'Blender / Unity / Technical Art',
    description:
      'A technical art workflow focused on modeling, material creation, baking textures, and transferring assets from Blender to Unity.',
    points: [
      'Created gym equipment and environment assets',
      'Worked with PBR materials, rust, dirt, metal, roughness, and bump details',
      'Practiced texture baking and material export workflows',
      'Set up lighting and scene composition for a realistic gym environment',
    ],
    visual: 'pipeline',
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
