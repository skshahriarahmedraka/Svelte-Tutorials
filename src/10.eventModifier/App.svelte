<script lang="ts">
    // your script goes here
</script>

<style>
    /* your styles go here */
</style>

<!-- markup (zero or more items) goes here -->

<form action="./">
    <input type="text" name="myUserName">
    <button type="submit" on:click|preventDefault|once ={()=> alert("you have submitted the form")}>Submit</button>
</form>