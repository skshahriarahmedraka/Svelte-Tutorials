<script lang="ts">
    let show=true 
    // your script goes here
    function myclick(){
        show= !show 
    }
</script>

<style>
    /* your styles go here */
</style>

<!-- markup (zero or more items) goes here -->


{#if show}
     <!-- content here -->
     <button on:click={myclick}> if show </button>
     <!-- {:else if  } -->
     <!-- else if content here -->
     {:else}
     <button on:click={myclick}> else show </button>
     <!-- else content here -->
{/if}