<template>
    <div>
        <postForm @create = "postCreate"/>
        <postList :posts ="posts" />
    </div>
</template>


<script>
    import postForm from '@/components/postForm.vue';
    import postList from '@/components/postList.vue';


    export default{
        components: {
            postForm, postList
        },
        data() {
            return{
                posts:[
                    {id:1,title:'Javascript',body: 'Описание поста'},
                    {id:2,title:'Javascript 2',body: 'Описание поста 2'},
                    {id:3,title:'Javascript 3',body: 'Описание поста 3'},
                    {id:4,title:'Javascript 4',body: 'Описание поста 4'}
                ],
                
            }
        }, methods: {
            postCreate(post){
                this.posts.push(post);
            }
            
        }
    }
    
</script>

<style>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
</style>