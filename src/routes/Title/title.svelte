<script>
    import Titles from './RevolingTitles/rotating-title.svelte'
    import Subtitle from './subtitle.svelte'
    import "../layout.css"
</script>

<div class="flex min-h-screen flex-col items-center justify-center">
    <h1 class="my-[0.67em] text-center text-8xl leading-normal font-bold text-white text-shadow-[0_0_10px_black]">Philip Trainer</h1>
    <h2 class="m-0 text-center text-[clamp(1.5rem,5vw,3rem)] leading-normal font-bold text-white text-shadow-[0_0_10px_black]">
        I am a <Titles /> for
        <a class="text-[#ff0000] no-underline hover:text-[#ffa500] hover:underline" href="https://red-alpha.com/" target="_blank">Red Alpha</a>!
    </h2>
    <!-- <a class="mt-8 text-2xl font-semibold text-white underline text-shadow-[0_0_10px_black] hover:text-orange-400" href="/Projects">
        Projects
    </a> -->
    <nav class="mt-8 flex flex-wrap justify-center gap-8">
        <Subtitle text="Projects" link="/Projects" />
        <Subtitle text="Github" link="https://github.com/THE3RDTRAINER" openNewTab />
        <Subtitle text="LinkedIn" link="https://www.linkedin.com/in/philiptrainer/" openNewTab />
    </nav>
</div>