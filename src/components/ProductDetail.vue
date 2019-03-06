<template>
    <div>
        <div class="go_back" @click="goBack">返回</div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                key: value
            }
        },
        methods:{
            goBack:function(){
                this.$router.push({path:'/products'})
            }
        }
    }
</script>

<style scoped>

</style>