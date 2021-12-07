<script lang="ts">
    let name= "Raka"
    let enjoyCoding=true 
    // your script goes here
</script>

<style>
    /* your styles go here */
</style>

<!-- markup (zero or more items) goes here -->

<p>Your name is {name} you are {enjoyCoding ? "enjoying" :"not enjoying"} coding</p>

<hr>

<input type="text" bind:value={name}>

<br>

<label for="">
    Do you enjoy coding <input type="checkbox" bind:checked={enjoyCoding} >
</label>



