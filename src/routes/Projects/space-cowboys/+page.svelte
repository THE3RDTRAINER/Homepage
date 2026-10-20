<script lang="ts">
  import type { ProjectDetailData } from '#lib/project-media.js';
  import ProjectDetail from '../project-detail.svelte';

  const project: ProjectDetailData = {
    name: 'Space Cowboys',
    category: 'Virtual Reality Game',
    summary: 'A western-themed VR shooting gallery starring cowboy-hat-wearing Roombas.',
    overview:
      'Space Cowboys began as a six-day school prototype for the standalone Vive Focus. The prototype explored the headset’s six degrees of freedom and combined a shooting-gallery concept with the joke of robot vacuums invading a western town. Encouraged to continue, the developer kept expanding the project after the initial assignment.',
    context:
      'The first version was created as a short school project and later continued as an ongoing personal development effort.',
    role:
      'Gameplay Programmer: improved lighting and performance, created particles, animations, and UI, explored shaders, and developed enemy behavior and weapons.',
    media: {
      type: 'image',
      src: '/images/projects/SpaceCowboys.png',
      alt: 'Space Cowboys project artwork'
    },
    tools: ['Vive Focus', 'Virtual Reality', 'AI', 'Raycasts', 'UI'],
    sections: [
      {
        title: 'Enemy AI',
        description:
          'Developed enemies that move around the environment, fire at the player, and evade incoming shots. Raycasts check whether a target point is reachable, preventing enemies from walking through obstacles or gathering in the same space. The headset’s six-degree-of-freedom tracking gives the player room to dodge incoming fire.',
        media: {
          type: 'video',
          src: '/movies/spaceCowboysDemoAI.mp4',
          title: 'Demo of Space Cowboys enemy AI showing enemies moving around'
        }
      },
      {
        title: 'Gameplay & Presentation',
        media: {
          type: 'video',
          src: '/movies/spaceCowboysFullDemo.mp4',
          title: 'Full Demo for Space Cowboys'
        },
        description:
          'Expanded the prototype with lighting and optimization work, plus custom particle effects, animations, and UI. Also explored shaders and programmed additional firearms, including a shotgun, for future gameplay.'
      }
    ],
    links: [
      {
        label: 'Visit Original Project Page',
        href: 'https://philiptraineriii.wixsite.com/philiptrainer/blank-1'
      }
    ]
  };
</script>

<ProjectDetail {project} />
