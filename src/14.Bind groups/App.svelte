<script lang="ts">
    let programmingLanguages =["rust","golang","python"]
    let selected=[] 
</script>

<style>
</style>


<!-- <p>you have selected {selected.length ? selected.join(",") : 'nothing' }</p>


{#each  programmingLanguages as lang}
    <label for="">
        <input type="checkbox" bind:group={selected} value={lang}>
    </label>
    {lang}
{/each} -->


<select multiple bind:selected>
    {#each programmingLanguages as lang}
    <option type="checkbox"  value="{lang}">{lang}</option>
         <!-- content here -->
    {/each}


</select>