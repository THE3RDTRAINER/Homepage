<script lang="ts">
  import type { ProjectDetailData } from '#lib/project-media.js';
  import ProjectDetail from '../project-detail.svelte';

  const project: ProjectDetailData = {
    name: 'Procedural Planet',
    category: 'Gameplay Systems',
    summary: 'An Unreal Engine Blueprint system for routing a ship and asteroid hazards around a planet.',
    overview:
      'A Blueprint system for a space game in which a ship travels around a planet. A spline defines the route, and designers can adjust its points to change how close the ship passes to the planet.',
    context:
      'Developed as part of a game project that evolved as its design changed. Later iterations focused on making the underlying systems and tools easier for designers to adjust.',
    role:
      'Gameplay Programmer: built the orbit path and asteroid spawning systems, then adapted them to support designer-authored timing and route changes.',
    media: {
      type: 'image',
      src: '/images/projects/ProceduralPlanet.png',
      alt: 'Procedural Planet project artwork'
    },
    tools: ['Unreal Engine 4', 'Blueprints', 'Splines', 'CSV-driven design tools'],
    sections: [
      {
        title: 'Spline-Based Orbit',
        media: {
          type: 'video',
          src: '/movies/ProceduralPlanet.mp4',
          title: 'Full Demo for Space Cowboys'
        },
        description:
          'Used the Unreal spline component with circle-position mathematics to create an editable route around the planet. Designers could modify the spline points to bring the ship closer to or farther from the surface.'
      },
      {
        title: 'Asteroid Spawning & Iteration',
        description:
          'Spawned rows of asteroids along the route, keeping their placement aligned as designers reshaped the spline. In a later iteration, asteroid timing was read from CSV data so designers could edit spawn schedules in a spreadsheet. Other systems included procedural buildings and AI movement to selected positions on the planet.'
      }
    ],
    links: [
      {
        label: 'Original Project Page',
        href: 'https://philiptraineriii.wixsite.com/philiptrainer/blank'
      }
    ]
  };
</script>

<ProjectDetail {project} />
