<script>
    import {onMount ,onDestroy} from "svelte"
    let languages=[]

    onMount(async ()=>{
        console.log("onMount")
        const response =await fetch("http://localhost:3000/")
        languages=await response.json()
    })

    onDestroy(()=>{
        console.log("onDestroy")
    })
    
    
    // your script goes here
</script>

<style>
    div {
        border: 3px solid red ;
        padding:10px;
    }
    /* your styles go here */
</style>

<!-- markup (zero or more items) goes here -->

{#if languages.length>0}
    <ul>
        {#each lang as languages}
        <li>{lang}</li>
             <!-- content here -->
        {/each}
    </ul>
     <!-- content here -->
{/if}