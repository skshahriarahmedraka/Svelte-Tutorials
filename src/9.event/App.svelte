<script lang="ts">
    function handlekeyup(e){
        console.log(e)
    }
    // your script goes here
</script>

<style>
    /* your styles go here */
</style>

<!-- markup (zero or more items) goes here -->

<input type="text" on:keypress="{handlekeyup}">