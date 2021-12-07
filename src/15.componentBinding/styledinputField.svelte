<script lang="ts">
    // your script goes here
    export let value=""
</script>

<style>
    /* your styles go here */
    input {
        box-shadow: 0 0 10px rgba(0,0,0,0.5);
        border:none;
        padding:5px;
        border-radius: 10px;
    }
</style>

<!-- markup (zero or more items) goes here -->

<input type="text" bind:value >