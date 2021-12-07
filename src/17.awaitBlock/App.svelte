<script lang="ts">
import { get_slot_changes } from "svelte/internal";


    let langPromise =getLang() 

    function getLang(){
    return fetch("http://localhost/languages").then((response)=>{
        return response.json()
    })
    }

    setTimeout(()=>{
        langPromise=getLang()
    },5000)


    // your script goes here
</script>

<style>
    /* your styles go here */
</style>

<!-- markup (zero or more items) goes here -->


#{#await langPromise}
    <p>waiting on languages</p>
{:then langs}
    {#each langs as lang}
        <li>{lang}</li>
    {/each}
{:catch err}
    <code>{err.message}</code>
{/await}