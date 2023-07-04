<template>
    <button class="btn">
        <slot></slot>
    </button>
    
</template>

<script>
    export default{
        name: 'my-button'
    }
</script>

<style scoped>
.btn{

    align-self: flex-start;
    padding: 10px 15px;
    border: 2px solid blue;
    border-radius: 15px;
}

</style>