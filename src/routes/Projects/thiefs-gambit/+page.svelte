<script lang="ts">
  import type { ProjectDetailData } from '#lib/project-media.js';
  import ProjectDetail from '../project-detail.svelte';

  const project: ProjectDetailData = {
    name: "Thief's Gambit",
    category: 'Virtual Reality Game',
    summary: 'A Western-themed VR shooter and puzzle game.',
    overview:
      'Break into a bank, solve your way to the vault, and escape with the loot before the law catches up. The project paired a western heist with action and environmental puzzles, with a strong emphasis on polished art and engaging gameplay.',
    context:
      'Created over 10 weeks as part of the senior capstone courses at the Savannah College of Art and Design. The eight-person team brought together multiple disciplines to build the game.',
    role:
      'Lead Programmer: coordinated programming work, supported another programmer, and worked with the other discipline leads to assess scope and technical feasibility.',
    media: {
      type: 'image',
      src: '/images/projects/ThiefsGambit.png',
      alt: 'A richly decorated interior environment from Thief’s Gambit'
    },
    tools: ['VR', 'Unity', 'Puzzle', 'Shooter'],
    sections: [
      {
        title: 'Destructible Objects',
        description:
          'Some props, such as vases, break apart when hit. The system swaps an intact object for a pre-fractured version, then gives the fragments physics bodies and an impulse. This keeps destruction reusable without requiring each fragment to be configured individually.',
        media: {
          type: 'image',
          src: '/images/projects/ThiefsGambit-ArtBible.png',
          alt: 'A collection of game props, including a revolver, for Thief’s Gambit'
        }
      },
      {
        title: 'Performance Challenges',
        description:
          'Maintaining a smooth frame rate in VR was a central technical challenge. Close collaboration between art and programming helped keep assets and systems modular and efficient. The team reported a steady 120 FPS target.',
        media: {
          type: 'image',
          src: '/images/projects/ThiefsGambit-Environment.png',
          alt: 'A detailed interior environment from Thief’s Gambit'
        }
      }
    ],
    links: [
      {
        label: 'Visit Original Project Page',
        href: 'https://philiptraineriii.wixsite.com/philiptrainer/copy-of-skadegamutc'
      },
      {
        label: "View the Trailer",
        href: "/movies/ThiefsGambitFinalTrailer.mp4"
        // href: 'https://www.youtube.com/watch?v=HGDt4luu9oU'
      },
      {
        label: 'Teammates Artstation',
        href: 'https://mcermele20.artstation.com/projects/qAZDKn?album_id=1287398'
      }
    ]
  };
</script>

<ProjectDetail {project} />
