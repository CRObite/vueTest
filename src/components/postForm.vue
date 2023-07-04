<template>

    <form @submit.prevent>
        <my-input v-model="post.title" type="text" placeholder="Name" class="input"/>
        <my-input v-model="post.body"  type="text" placeholder="Description" class="input"/>
        <my-button class="btn" @click="createPost">Set</my-button>
    </form>

</template>

<script>
    
    export default{
       
        data() {
            return{
                post: {
                    title: '',
                    body: ''
                }
            }
        },
        methods: {
            createPost(){
                this.post.id = Date.now();
                this.$emit('create', this.post , 'sdfsd','sdfsdfsdf');
                this.post = {
                    title: '',
                    body: ''
                }
               
            }
        }
    }
</script>

<style scoped>


form{
    display: flex;
    flex-direction: column;

}

.input{
    margin: 5px 20px;
}
.btn{
    margin: 5px 20px;
}

</style>