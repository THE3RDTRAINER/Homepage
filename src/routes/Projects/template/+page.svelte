<script lang="ts">
  import type { ProjectMedia } from '#lib/project-media.js';

  type ProjectHighlight = {
    title: string;
    description: string;
    media?: ProjectMedia;
  };

  const highlights: ProjectHighlight[] = [
    {
      title: 'Feature or System',
      description:
        'Explain an interesting feature, how it works, and your contribution to implementing it.',
      media: { type: 'image', src: '', alt: 'Describe the image' }
    },
    {
      title: 'Video Demo',
      description:
        'Describe what this video shows. Use a direct video file URL, such as an MP4, not a YouTube page URL.',
      media: { type: 'video', src: '', title: 'Describe the video content' }
    }
  ];

  const project = {
    name: 'Project Name',
    overview:
      'Describe the game or project, its core idea, and what players or users do. Keep this as a short introduction.',
    context:
      'Describe when and why the project was made, the team, and your role. Include the work you led or contributed.',
    role: 'Your role on the project',
    tools: ['Tool or technology', 'Another tool'],
    tags: ['Add', 'Project', 'Tags'],
    link: '',
    highlights
  };
</script>

<svelte:head>
  <title>{project.name} - Philip Trainer</title>
  <meta name="description" content={project.overview} />
</svelte:head>

<main class="mx-auto min-h-screen max-w-6xl px-6 py-10 text-white sm:px-10">
  <a class="mb-8 inline-block rounded-lg bg-black px-4 py-2 text-lg font-semibold text-white shadow-lg transition hover:bg-gray-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white" href="/Projects">
    &larr; Back to Projects
  </a>

  <header class="mb-10 border-b border-white/20 pb-8 text-center">
    <h1 class="text-4xl font-bold text-white text-shadow-[0_0_10px_black] sm:text-6xl">{project.name}</h1>
  </header>

  <section class="mb-12 grid gap-8 md:grid-cols-2">
    <div class="rounded-2xl bg-slate-950/70 p-6 shadow-xl sm:p-8">
      <h2 class="mb-4 text-2xl font-bold">About the Project</h2>
      <p class="leading-relaxed text-white/90">{project.overview}</p>
    </div>

    <div class="rounded-2xl bg-slate-950/70 p-6 shadow-xl sm:p-8">
      <h2 class="mb-4 text-2xl font-bold">Team &amp; Role</h2>
      <p class="leading-relaxed text-white/90">{project.context}</p>
      <p class="mt-4 font-semibold text-cyan-300">{project.role}</p>
    </div>
  </section>

  <section class="space-y-12" aria-label="Project details">
    {#each project.highlights as highlight, index (highlight.title)}
      <article class="grid items-center gap-6 rounded-2xl bg-slate-950/70 p-6 shadow-xl sm:p-8 md:grid-cols-2">
        <div class={index % 2 === 1 ? 'md:order-2' : ''}>
          <h2 class="mb-4 text-2xl font-bold">{highlight.title}</h2>
          <p class="leading-relaxed text-white/90">{highlight.description}</p>
        </div>

        {#if highlight.media?.type === 'image' && highlight.media.src}
          <img
            class="h-64 w-full rounded-xl object-cover shadow-lg md:h-80"
            src={highlight.media.src}
            alt={highlight.media.alt}
          />
        {:else if highlight.media?.type === 'video' && highlight.media.src}
          <!-- svelte-ignore a11y_media_has_caption -->
          <video
            class="h-64 w-full rounded-xl object-cover shadow-lg md:h-80"
            src={highlight.media.src}
            poster={highlight.media.poster}
            aria-label={highlight.media.title}
            controls
            playsinline
            preload="metadata"
          >
            {#if highlight.media.captions}
              <track
                kind="captions"
                src={highlight.media.captions.src}
                srclang={highlight.media.captions.lang}
                label={highlight.media.captions.label}
                default
              />
            {/if}
          </video>
        {:else}
          <div class="grid h-64 place-items-center rounded-xl border border-white/20 bg-black/30 text-center text-white/60 md:h-80">
            Add an image path for this section
          </div>
        {/if}
      </article>
    {/each}
  </section>

  <footer class="mt-12 rounded-2xl bg-slate-950/70 p-6 shadow-xl sm:p-8">
    <h2 class="mb-4 text-2xl font-bold">Tools &amp; Technologies</h2>
    <ul class="flex flex-wrap gap-2" aria-label="Tools and technologies">
      {#each project.tools as tool (tool)}
        <li class="rounded-full bg-slate-800 px-3 py-1 text-sm font-medium text-cyan-100">{tool}</li>
      {/each}
      {#each project.tags as tag (tag)}
        <li class="rounded-full bg-cyan-950 px-3 py-1 text-sm font-medium text-cyan-100">{tag}</li>
      {/each}
    </ul>
  </footer>

  {#if project.link}
    <div class="mt-8 text-center">
      <a
        class="inline-block rounded-lg bg-black px-6 py-3 font-semibold text-white shadow-lg transition hover:bg-gray-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        View Project
      </a>
    </div>
  {/if}
</main>
