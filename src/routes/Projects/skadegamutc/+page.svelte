<script lang="ts">
  import ProjectDetail from '../project-detail.svelte';

  const project = {
    name: 'Skadegamutc',
    category: '2D Platformer',
    summary: 'A Unity platformer about a hunter racing back to his village while pursued by a ghost witch.',
    overview:
      'After disturbing the spirits of the forest, a hunter awakens the Skadegamutc, a ghost witch. Run back toward the village, dodge traps and obstacles, and try to stay ahead of the pursuing spirit.',
    context:
      'Built during a 10-week course focused on making 2D games in Unity. This was the developer’s first 2D game made with Unity.',
    role:
      'Programmer: implemented the game’s programming, while a teammate created the artwork.',
    image: '/images/projects/Skadegamutc.png',
    imageAlt: 'Skadegamutc project artwork',
    tools: ['Unity 2017', '2D Platformer', 'Gameplay Programming'],
    sections: [
      {
        title: 'A Race Through the Forest',
        description:
          'The player navigates a route back to the village, avoiding traps and obstacles while keeping ahead of the ghost witch. The chase gives the platforming a clear objective and constant pressure.'
      },
      {
        title: 'Course Project',
        description:
          'The game was completed over ten weeks as part of a course in 2D game development. Programming and artwork were split between the developer and an artist teammate.'
      }
    ],
    links: [
      {
        label: 'Original Project Page',
        href: 'http://philtrainer.com/Skadegamutc.html'
      }
    ]
  };
</script>

<ProjectDetail {project} />
