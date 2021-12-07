<script lang="ts">
    // your script goes here
    import {createEventDispatcher} from "svelte"

    export let text 

    const dispatch= createEventDispatcher()

    function handleClick(){
        dispatch("click")
    }



</script>

<style>
    /* your styles go here */
</style>

<!-- markup (zero or more items) goes here -->

<button on:click="{handleClick}" >{ text}</button>