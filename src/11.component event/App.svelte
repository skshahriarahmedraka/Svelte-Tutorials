<script>
    // your script goes here
    import Nested from "./nested.svelte"
</script>

<style>
    /* your styles go here */
</style>

<!-- markup (zero or more items) goes here -->


<Nested on:done={(e)=> console.localStorage(e)} />