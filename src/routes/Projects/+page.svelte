<!-- src/routes/Projects/+page.svelte -->
<script lang="ts">
  import ProjectCard from './projectCard.svelte';
  import projectData from './projects.json';

  type Project = {
    projectName: string;
    projectDescription: string;
    projectLink: string;
    projectImage: string;
    tags?: string[];
  };

  const projects: Project[] = projectData;
</script>
<head>
    <title>Projects - Philip Trainer</title>
</head>

<main class="mx-auto min-h-screen max-w-7xl p-6 sm:p-10">
  <h1 class="mb-8 text-center text-4xl font-bold text-white text-shadow-[0_0_10px_black]">My Projects</h1>

  <section class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3" aria-label="Projects">
    {#each projects as project (project.projectLink)}
      <ProjectCard
        projectName={project.projectName}
        projectDescription={project.projectDescription}
        projectLink={project.projectLink}
        projectImage={project.projectImage}
        tags={project.tags}
      />
    {/each}
  </section>
</main>