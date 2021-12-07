<script lang="ts">
    import Nested from "./Nested.svelte";
    let show=false;
    // your script goes here
</script>

<style>
    /* your styles go here */
</style>

<!-- markup (zero or more items) goes here -->

<button onclick="{()=>(show =!show)}">show</button>

{#if show}
<Nested/>
     <!-- content here -->
{/if}