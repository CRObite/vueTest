<template>
    <input :value="modalValue"  @input="updateInput" class="input" type="text">
</template>

<script>
    export default{
        name: 'my-input',
        props: {
            modalValue: [String, Number]
        },
        methods: {
            updateInput(event) {
                this.$emit('update:modalValue', event.target.value)
            }
        }
    }
</script>

<style scoped>

.input{
    width: 50%;
    border: 2px solid blue;
    padding: 15px;
    border-radius: 15px;
}

</style>