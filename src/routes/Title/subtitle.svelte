<script lang="ts">
    type TitleProps = {
        text: string;
        link: string;
        openNewTab?: boolean;
    };

    let { text, link, openNewTab = false }: TitleProps = $props();
</script>

<a class="text-2xl font-semibold text-white underline text-shadow-[0_0_10px_black] hover:text-orange-400" 
href={link} target={openNewTab ? '_blank' : undefined} rel={openNewTab ? 'noopener noreferrer' : undefined}>
    {text}
</a>