<script lang="ts">
    import Post from "./post.svelte"
    // your script goes here
</script>

<style>
    /* your styles go here */
</style>

<!-- markup (zero or more items) goes here -->

<Post>
    <span slot="title">
        Dom's Fantastic Post about svelte 
    </span>
    <span slot="date-posted">
        Wednesday @ 11:30PM
    </span>
</Post>