<template>
    <div>
        <ListItem v-for="post in posts" :key="post.id" :post ="post"/>
    </div>
    

</template>

<script>
import ListItem from '@/components/listItem.vue';

    export default{
    props: {
        posts: {
            type: Array,
            required: true
        }
    },
    components: { ListItem }
}
</script>

<style scoped>

.post{
    padding: 15px;
    border: 2px solid blue;
    margin: 10px 20px;
    border-radius: 15px;
    background-color: rgb(48, 34, 74);
    color: white;
}

</style>