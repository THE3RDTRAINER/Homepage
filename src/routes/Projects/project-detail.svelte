<script lang="ts">
  import type { ProjectDetailData } from '#lib/project-media.js';

  let { project }: { project: ProjectDetailData } = $props();
</script>

<svelte:head>
  <title>{project.name} - Philip Trainer</title>
  <meta name="description" content={project.summary} />
</svelte:head>

<main class="mx-auto min-h-screen max-w-6xl px-6 py-10 text-white sm:px-10">
  <a
    class="mb-8 inline-block rounded-lg bg-black px-4 py-2 text-lg font-semibold text-white shadow-lg transition hover:bg-gray-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
    href="/Projects"
  >
    &larr; Back to Projects
  </a>

  <header class="mb-10 border-b border-white/20 pb-8 text-center">
    <p class="mb-3 font-semibold uppercase tracking-[0.2em] text-white-300 text-shadow-[0_0_10px_black]">{project.category}</p>
    <h1 class="text-4xl font-bold text-shadow-[0_0_10px_black] sm:text-6xl">{project.name}</h1>
    <p class="mt-4 text-xl text-white/90 text-shadow-[0_0_10px_black] sm:text-2xl text-shadow-[0_0_10px_black]">{project.summary}</p>
  </header>

  <figure class="mb-12">
    {#if project.media.type === 'image'}
      <img
        class="max-h-[38rem] w-full rounded-2xl object-cover shadow-2xl"
        src={project.media.src}
        alt={project.media.alt}
      />
    {:else}
      <!-- svelte-ignore a11y_media_has_caption -->
      <video
        class="max-h-[38rem] w-full rounded-2xl object-cover shadow-2xl"
        src={project.media.src}
        poster={project.media.poster}
        aria-label={project.media.title}
        controls
        playsinline
        preload="metadata"
      >
        {#if project.media.captions}
          <track
            kind="captions"
            src={project.media.captions.src}
            srclang={project.media.captions.lang}
            label={project.media.captions.label}
            default
          />
        {/if}
      </video>
    {/if}
  </figure>

  <section class="mb-12 grid gap-8 md:grid-cols-2" aria-label="Project overview and role">
    <article class="rounded-2xl bg-slate-950/70 p-6 shadow-xl sm:p-8">
      <h2 class="mb-4 text-2xl font-bold">About the Project</h2>
      <p class="leading-relaxed text-white/90">{project.overview}</p>
    </article>

    <article class="rounded-2xl bg-slate-950/70 p-6 shadow-xl sm:p-8">
      <h2 class="mb-4 text-2xl font-bold">Team &amp; Role</h2>
      <p class="leading-relaxed text-white/90">{project.context}</p>
      <p class="mt-4 leading-relaxed text-cyan-100">{project.role}</p>
    </article>
  </section>

  <section class="space-y-10" aria-label="Development details">
    {#each project.sections as section, index (section.title)}
      <article class="grid items-center gap-6 rounded-2xl bg-slate-950/70 p-6 shadow-xl sm:p-8 md:grid-cols-2">
        <div class={index % 2 === 1 ? 'md:order-2' : ''}>
          <h2 class="mb-4 text-2xl font-bold">{section.title}</h2>
          <p class="leading-relaxed text-white/90">{section.description}</p>
        </div>
        {#if section.media?.type === 'image'}
          <img
            class="h-64 w-full rounded-xl object-cover shadow-lg md:h-80"
            src={section.media.src}
            alt={section.media.alt}
          />
        {:else if section.media?.type === 'video'}
          <!-- svelte-ignore a11y_media_has_caption -->
          <video
            class="h-64 w-full rounded-xl object-cover shadow-lg md:h-80"
            src={section.media.src}
            poster={section.media.poster}
            aria-label={section.media.title}
            controls
            playsinline
            preload="metadata"
          >
            {#if section.media.captions}
              <track
                kind="captions"
                src={section.media.captions.src}
                srclang={section.media.captions.lang}
                label={section.media.captions.label}
                default
              />
            {/if}
          </video>
        {/if}
      </article>
    {/each}
  </section>

  <footer class="mt-10 rounded-2xl bg-slate-950/70 p-6 shadow-xl sm:p-8">
    <h2 class="mb-4 text-2xl font-bold">Tools &amp; Technologies</h2>
    <ul class="flex flex-wrap gap-2" aria-label="Tools and technologies">
      {#each project.tools as tool (tool)}
        <li class="rounded-full bg-cyan-950 px-3 py-1 text-sm font-medium text-cyan-100">{tool}</li>
      {/each}
    </ul>
  </footer>

  {#if project.links.length}
    <nav class="mt-8 flex flex-wrap justify-center gap-4" aria-label="Project links">
      {#each project.links as link (link.href)}
        <a
          class="inline-block rounded-lg bg-black px-6 py-3 font-semibold text-white shadow-lg transition hover:bg-gray-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {link.label}
        </a>
      {/each}
    </nav>
  {/if}
</main>
