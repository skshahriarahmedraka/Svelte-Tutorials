<script lang="ts">

    import {name } from "./store.js"
    import EditName from "./editname.svelte"

    
    // your script goes here
</script>

<style>
    /* your styles go here */
</style>

<!-- markup (zero or more items) goes here -->

<p>name is {$name} !</p>

<EditName />

