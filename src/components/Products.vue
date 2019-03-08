<template>
    <div class="product_wrap">
        <div class="product">
            <aside class="product_aside">
                <el-card class="product_category_wrap">
                    <div slot="header">
                        <span class="card_title">产品分类</span>
                    </div>
                    <div class="product_category">
                        <el-tree :data="productTree" :props="defaultProps" @node-click="clickProTree"></el-tree>
                    </div>
                </el-card>
            </aside>
            <div class="product_con">
                <el-card class="product_list_wrap" :body-style="productConStyle">
                    <div slot="header" class="product_header">
                        <span class="card_title">产品列表</span>
                    </div>
                    <div class="product_body">
                        <ul class="product_ul clear">
                            <li class="product_list" v-for="(list,index) in productData" :key="index" @click="clickProduct">
                                <el-card class="product_main" shadow="hover" :body-style="productBodyStyle">
                                    <img class="product_img" :src="list.pro_img"/>
                                    <p class="product_name">{{list.pro_name}}</p>
                                    <p class="product_time">{{list.pro_time}}</p>
                                </el-card>
                            </li>
                        </ul>
                        <pagination :total="pagination.total"
                            :page-size="pagination.pageSize" 
                            :current-page="pagination.currentPage"
                            :req-list-fn="reqProductList" v-on:currentPage="viewCurrentPage">
                        </pagination>
                        <router-view class="product_detail"></router-view>
                    </div>
                </el-card>
            </div>
        </div>
    </div>
</template>

<script>
  import pagination from "./common/Pagination.vue"

    export default {
        components: {
            pagination
        },
        data() {
            return {
                productTree: [
                    {
                        label: '一级 1',
                        children: [{
                            label: '二级 1-1',
                            children: [{
                                label: '三级 1-1-1',
                                id:"123"
                            }]
                        }]
                    }
                ],
                defaultProps: {
                    children: 'children',
                    label: 'label'
                },
                productData:[
                    {
                        pro_img:'./../static/img/product/01.jpg',
                        pro_name:'43KG重轨',
                        pro_time:'2019-03-06',
                    },{
                        pro_img:'./../static/img/product/01.jpg',
                        pro_name:'43KG重轨',
                        pro_time:'2019-03-06',
                    },{
                        pro_img:'./../static/img/product/01.jpg',
                        pro_name:'43KG重轨',
                        pro_time:'2019-03-06',
                    },{
                        pro_img:'./../static/img/product/01.jpg',
                        pro_name:'43KG重轨',
                        pro_time:'2019-03-06',
                    },{
                        pro_img:'./../static/img/product/01.jpg',
                        pro_name:'43KG重轨',
                        pro_time:'2019-03-06',
                    }
                ],
                productConStyle:{
                    flex:1,
                },
                productBodyStyle:{
                    padding:0,
                    width:"100%",
                    height:"100%",
                    display:"flex",
                    "flex-direction": "column",
                    "justify-content": "space-around",
                    "align-items": "center",
                },
                productPage:1,
                pagination:{
                    total:15,
                    pageSize:1,
                    currentPage:1,
                },
                dialogVisible:false,

            }
        },
        mounted(){
            // let dialogDom = document.querySelector(".product_dialog")
            // dialogDom.style.margin = "0px"
            // dialogDom.style.height = "100%"
        },
        methods:{
            clickProTree:function(obj,node,ele){
                if(node.isLeaf){
                    console.log(obj)
                    console.log(node)
                    console.log(ele)
                }
            },
            reqProductList:function(){

            },
            viewCurrentPage(page){
                this.productPage = page;
            },
            clickProduct:function(){
                // this.dialogVisible = true;
                this.$router.push({path:'productDetail'})
            }
        }
    }
</script>

<style scoped>
.content {
    padding-top: 0 !important;
  }
.product_wrap{
    padding-top:150px;
}
.product{
    width:1190px;
    /* height:730px; */
    display:flex;
    margin:0 auto;
}
.product_aside{
    flex:1.5;
    /* background-color:ivory; */
}
.product_category{
    font-size:14px;
}
.product_con{
    flex:4;
    background-color:#ddd;   
}
.product_list_wrap{
    display:flex;
    flex-direction: column;
    height:100%;
}
.product_list_wrap .el-card__header{
    height:auto;
}
.product_header{
    height:auto;
}
.product_body{
    position:relative;
    height:100%;
}
.product_ul{
    /* height: 96%; */
}
.product_list{
    float:left;
    width:25%;
    height:200px;
    margin-bottom:20px;
    cursor: pointer;
    /* background-color:#ddd; */
}
.product_main{
    width:100%;
    height:100%;
}
.product_img{
    width:108px;
    height:108px;
    border:1px solid #ccc;
}
.product_detail{
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    /* background-color:antiquewhite; */
}
</style>