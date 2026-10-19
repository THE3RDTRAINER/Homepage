
<script>
  import { onMount } from 'svelte';
  import { fly } from 'svelte/transition';

  const titles = ['Software Engineer', 'Devops Engineer', 'System Administrator', 'Cloud Engineer', "People Person"];

  let index = $state(0);

  onMount(() => {
    const interval = setInterval(() => {
      index = (index + 1) % titles.length;
    }, 2000);

    return () => clearInterval(interval);
  });
</script>

<span class="inline-grid align-baseline overflow-hidden whitespace-nowrap">
  <span class="invisible row-start-1 col-start-1 justify-self-center" aria-hidden="true">System Administrator</span>
  {#key index}
    <span class="inline-block row-start-1 col-start-1 justify-self-center text-center" in:fly={{ y: 20, duration: 400 }}
        out:fly={{ y: -20, duration: 300 }}>
      {titles[index]}
    </span>
  {/key}
</span>
