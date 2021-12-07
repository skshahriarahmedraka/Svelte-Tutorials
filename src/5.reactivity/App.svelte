<script lang="ts">
    let  age= 30;
    let name="raka"
    $: if (age>35){
        console.log(`your name${name} and age ${age}`)
    }

    function handleClick(){
        age++ 
    }
    // your script goes here
</script>

<style>
    /* your styles go here */
</style>

<!-- markup (zero or more items) goes here -->

<button on:click={handleClick}>increase Age</button>