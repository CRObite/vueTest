<template>
    
    <div class ="post">
        <div>
            <div><strong>Name:</strong> {{ post.title }}</div>
            <div><strong>Description:</strong> {{ post.body }}</div>
        </div>
        <my-button>Delete</my-button>
    </div>
        
    
    
</template>

<script>


    export default{

        props: {
            post:{
                type: Object,
                required: true
            }
        }
    }
</script>

<style scoped>

.post{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px;
    border: 2px solid blue;
    margin: 10px 20px;
    border-radius: 15px;
    background-color: rgb(48, 34, 74);
    color: white;
}

</style>