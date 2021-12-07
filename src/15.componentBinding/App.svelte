<script lang="ts">
    import StyledinputField from "./styledinputField.svelte";;
    // your script goes here
    let value ="raka"
</script>

<style>
    /* your styles go here */
</style>

<!-- markup (zero or more items) goes here -->
<p>your name in {value}</p>

<hr>
<StyledinputField bind:value ></StyledinputField>