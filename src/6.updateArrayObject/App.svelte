<script lang="ts">
    let person ={
        name:"raka",
        age:45,
        profession : "security researcher",
    }

    setTimeout(()=>{
        person.profession="web developer"
    },4000)
    // your script goes here
</script>

<style>
    /* your styles go here */
</style>

<!-- markup (zero or more items) goes here -->

<p>
    {person.name} is {person.age} and profession {person.profession}
</p>