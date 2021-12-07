<script lang="ts">
    import {name} from "./store.js"
    let value 

    function handleAppend() {
        $name+=", "+value 
    }

    function handleSet(){
        $name=value
    }

    // your script goes here
</script>

<style>
    /* your styles go here */
</style>

<!-- markup (zero or more items) goes here -->

<input type="text" bind:value >
<button on:click="{handleAppend}">Append</button>
<button on:click={handleSet}> Set</button>
