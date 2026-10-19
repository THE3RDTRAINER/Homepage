<script lang="ts">
  import ProjectDetail from '../project-detail.svelte';

  const project = {
    name: 'Wasteland',
    category: 'Environment Art',
    summary: 'A game-art environment modeled, textured, and assembled from individually created assets.',
    overview:
      'A project for a Game Art class focused on creating an environment from a collection of assets. The scene was assembled and rendered in Unreal Engine 4.',
    context:
      'Completed as an individual environment-art project for a Game Art class.',
    role:
      'Environment Artist: modeled, UV mapped, textured, and placed all of the assets shown in the scene.',
    image: '/images/projects/wasteland.png',
    imageAlt: 'Wasteland environment art project',
    tools: ['Maya', 'Headus', 'Substance Painter', 'Photoshop', 'Unreal Engine 4'],
    sections: [
      {
        title: 'Modeling & UVs',
        description:
          'Created the environment assets in Maya and edited their UVs with Headus in preparation for texturing.'
      },
      {
        title: 'Texturing & Scene Assembly',
        description:
          'Textured the assets with Substance Painter and Photoshop, then placed and composed them in Unreal Engine 4 to create the final environment.'
      }
    ],
    links: [
      {
        label: 'Original Project Page',
        href: 'http://philtrainer.com/Wasteland.html'
      }
    ]
  };
</script>

<ProjectDetail {project} />
