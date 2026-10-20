<script lang="ts">
  import type { ProjectDetailData } from '#lib/project-media.js';
  import ProjectDetail from '../project-detail.svelte';

  const project: ProjectDetailData = {
    name: "Personal Website",
    category: 'Frontend Development',
    summary: 'A redesign of my own personal website using SvelteKit and TailwindCSS, hosted on Firebase.',
    overview:
      'This website was created to showcase my portfolio and personal projects. The redesign focused on improving performance, accessibility, and responsiveness across different devices. SvelteKit was chosen for its simplicity and efficiency, while TailwindCSS provided a utility-first approach to styling.',
    context:
      'Created as a personal project to refamiarilize myself with modern web development frameworks and to provide a platform for sharing my work and experiences.',
    role:
      'Sole Developer: responsible for the entire development process, including design, implementation, and deployment. Focused on creating a clean and modern user interface while ensuring optimal performance and accessibility.',
    media: {
      type: 'image',
      src: '/images/website.png',
      alt: "A richly decorated interior environment from Thief's Gambit"
    },
    tools: ['VR', 'Unity', 'Puzzle', 'Shooter'],
    sections: [
    ],
    links: [
      {
        label: 'View the github',
        href: 'https://github.com/THE3RDTRAINER/Homepage'
      }
    ]
  };
</script>

<ProjectDetail {project} />
