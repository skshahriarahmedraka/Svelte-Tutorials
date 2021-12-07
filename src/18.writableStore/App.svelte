<script lang="ts">
    import {onDestroy } from "svelte"

    import {name } from "./store.js"
    import EditName from "./editname.svelte"

    let nameValue ;
    const unsubscribe = name.subscribe((value)=>{
        nameValue =value 
    })
    onDestroy(unsubscribe)
    // your script goes here
</script>

<style>
    /* your styles go here */
</style>

<!-- markup (zero or more items) goes here -->

<p>name is {nameValue}</p>

<EditName />

