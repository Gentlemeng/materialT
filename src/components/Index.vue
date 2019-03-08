<template>
    <div class="wrapper">
        <Header></Header>
        <div>
            <transition name="move" mode="out-in"><router-view></router-view></transition>
        </div>
    </div>
</template>

<script>
import Header from "./common/Header.vue"
    export default {
        components:{
            Header,
        },
        created(){
            // this.$router.push("/home");
        }
    }
</script>
<style scoped>
</style>
