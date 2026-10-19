<script lang="ts">
  import type { LayoutProps } from './$types';

  let { children }: LayoutProps = $props();
</script>

<div class="min-h-screen bg-[url('/brick.jpg')] bg-cover bg-center bg-no-repeat">
  {@render children()}
</div>
