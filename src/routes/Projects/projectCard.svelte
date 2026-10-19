<script lang="ts">
    let {
        projectName,
        projectDescription,
        projectLink = "null",
        projectImage,
        tags,
    }: {
        projectName: string;
        projectDescription: string;
        projectLink?: string;
        projectImage: string;
        tags?: string[];
    } = $props();
</script>

<a
    class="group relative block aspect-[4/3] overflow-hidden rounded-xl bg-slate-950 text-white shadow-xl outline-none focus-visible:ring-4 focus-visible:ring-cyan-300"
    href={projectLink}
    target="_blank"
    rel="noopener noreferrer"
>
    <img
        class="absolute inset-0 h-full w-full object-cover transition duration-500 ease-in-out group-hover:scale-105 group-hover:opacity-0 group-focus-visible:scale-105 group-focus-visible:opacity-0 motion-reduce:transition-none"
        src={projectImage}
        alt=""
    />
    <div
        class="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/40 transition-opacity duration-500 group-hover:opacity-0 group-focus-visible:opacity-0 motion-reduce:transition-none"
        aria-hidden="true"
    ></div>
    <h2
        class="absolute inset-x-3 top-5 z-10 text-center text-2xl font-bold text-white text-shadow-[0_0_10px_black]"
    >
        {projectName}
    </h2>
    <div
        class="absolute inset-0 flex flex-col items-center justify-between gap-4 p-6 pt-20 text-center opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100 motion-reduce:transition-none"
    >
        <p class="flex flex-1 items-center text-lg">{projectDescription}</p>
        <span class="font-semibold text-cyan-300 underline">View Project</span>
        {#if tags?.length}
            <section class="flex flex-wrap justify-center gap-2" aria-label="Project tags">
                {#each tags as tag (tag)}
                    <span class="rounded-full bg-slate-800/90 px-3 py-1 text-sm font-medium text-cyan-100">
                        {tag}
                    </span>
                {/each}
            </section>
        {/if}
    </div>
</a>
