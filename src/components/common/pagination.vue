<template>
    <div align="center" class="pagination">
        <el-pagination background layout="prev, pager, next" :total="total" :page-size="pageSize"
            @current-change="currentPagechange" @prev-click="prevClick"
            @next-click="nextClick">
          </el-pagination>
    </div>
</template>

<script>
    export default {
        props: {
            total:{
                type:Number,
                default:0
            },
            pageSize:{
                type:Number,
                default:0
            },
            // currentPage:{
            //     type:Number,
            //     default:0
            // },
            reqListFn: {
                type: Function,
                default:function(){}
            },
        },
        data() {
            return {
                // totalSelf:this.total,
                // pageSizeSelf:this.pageSize,
                // currentPageSelf:this.currentPage
                currentPage:1
            }
        },
        created () {
            // this.reqListFn();
        },
        methods:{
            // 分页相关
            prevClick(pageNum){
                // this.reqListFn(pageNum);
            },
            nextClick(pageNum){
                // this.reqListFn(pageNum);
            },
            currentPagechange(pageNum) {
                this.$emit("currentPage",pageNum);
                this.reqListFn(pageNum);        
            }
        }
    }
</script>

<style scoped>

</style>