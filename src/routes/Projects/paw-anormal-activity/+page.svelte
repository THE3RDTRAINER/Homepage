<script lang="ts">
  import ProjectDetail from '../project-detail.svelte';

  const project = {
    name: 'Paw-Anormal Activity',
    category: 'Global Game Jam 2017',
    summary: 'Protect a sleeping owner from possessed objects as a barking dog.',
    overview:
      'Play as a dog guarding its sleeping owner during a stormy night. Bark to defeat the possessed objects, but be careful: too much noise could wake the person you are protecting.',
    context:
      'Created for Global Game Jam 2017 in Unreal Engine 4 as a team game project. The project received an Honorable Mention at SCAD and later won awards at Guild Hall’s startup conference.',
    role:
      'Lead Programmer: coordinated with the other leads and programmers, helped keep features and tasks on schedule, implemented the navigation mesh, debugged issues, and contributed to level design.',
    image: '/images/projects/pawnormal.png',
    imageAlt: 'Paw-Anormal Activity gameplay screenshot',
    tools: ['Unreal Engine 4', 'Global Game Jam', 'NavMesh', 'Level Design'],
    sections: [
      {
        title: 'Gameplay',
        description:
          'The player must fend off possessed household objects by barking while managing the risk of waking the sleeping owner. This creates a balance between defending the room and keeping the dog quiet.'
      },
      {
        title: 'Team Development',
        description:
          'Programming leadership focused on coordinating implementation across the team, checking feature feasibility, debugging, and building the navigation setup that supports enemy movement.'
      },
      {
        title: 'Recognition',
        description:
          'The game earned an Honorable Mention at SCAD, placing second across every category, and went on to receive awards at a Guild Hall startup conference.'
      }
    ],
    links: [
      {
        label: 'Download the Game',
        href: 'https://drive.google.com/file/d/0B4m9J3BRPOLVZXpYUWg4Y01CaWs/view'
      },
      {
        label: 'Global Game Jam Page',
        href: 'https://globalgamejam.org/2017/games/paw-anormal-activity'
      },
      {
        label: 'Original Project Page',
        href: 'http://philtrainer.com/Paw-AnormalActivity.html'
      }
    ]
  };
</script>

<ProjectDetail {project} />
