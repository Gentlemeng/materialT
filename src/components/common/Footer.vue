<template>
    <div class="footer">
        <a :href="href" class="beian">冀ICP备19014939号-1</a>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                href: "http://www.beian.miit.gov.cn/"
            }
        },
    }
</script>

<style scoped>
.footer{
    display:flex;
    justify-content: center;
    height:40px;
    background-color:#3367d6;
}
.beian{
    display: inline-block;
    height: 40px;
    line-height: 40px;
    margin: 0 auto;
    font-size:14px;
    color: #fff;
    text-align: center;
}
</style>