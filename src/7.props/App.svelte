<script lang="ts">
    import App from "../4.adding style/App.svelte"
import Other from "./other.svelte"

    let person ={
        name:"sk Shahriar",
        age: 24,
    }

</script>

<style>
    /* your styles go here */
</style>

<!-- markup (zero or more items) goes here -->

<Other {...person}></Other>