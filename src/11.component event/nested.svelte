<script lang="ts">
    // your script goes here
    import {createEventDispatcher} from "svelte"
    const dispatch =createEventDispatcher();

    let n=0

    function handleDone(){
        dispatch("done",{
            currentNumber:n,
        })
    }

</script>

<style>
    /* your styles go here */
</style>

<!-- markup (zero or more items) goes here -->

<button on:click={()=>(n+=1)}>({n}) increment  </button>
<button on:click="{handleDone}">Done</button>