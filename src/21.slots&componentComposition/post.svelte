<script>
    // your script goes here
</script>

<style>
    .post {
        padding:15px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.25)
    }
    .title {
        font-size: 2em;
        font-weight :bold ;
    }
    .date-posted {
        font-size: 0.9em;
        color: #777;
    }
    /* your styles go here */
</style>

<!-- markup (zero or more items) goes here -->

<div class="post">
    <div class="title">
        <slot name="title">A sample Post Title</slot>
    </div>
    <div class="date-posted">
        <slot name="data-posted">unknown posted dated</slot>
    </div>

</div>