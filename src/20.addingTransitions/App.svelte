<script lang="ts">
    import {fade,scale} from "svelte/transition"
    let show =false 
    // your script goes here
</script>

<style>
div {
    background-color: aqua;
    padding:10px ;
    color:#ffffff;
}

/* your styles go here */
</style>

<!-- markup (zero or more items) goes here -->


<label for=""> <input type="checkbox" bind:checked={show}> show</label>
<hr>

{#if show }
    <div in:scale={{duration:5000}} out:fade>sk shahriar ahmed raka</div>
     <!-- content here -->
{/if}