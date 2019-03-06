<template>
    <div class="product_wrap">
        <div class="product">
            <aside class="product_aside">
                <el-card class="product_category_wrap">
                    <div slot="header">
                        <span class="product_category_title">产品分类</span>
                    </div>
                    <div class="product_category">
                        暂无分类
                    </div>
                </el-card>
            </aside>
            <div class="product_con">
                <el-card class="product_list_wrap" :body-style="productConStyle">
                    <div slot="header" class="product_header">
                        <span class="product_list_title">产品列表</span>
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
                        <div class="">分页</div>
                        <!-- <router-view></router-view> -->
                        <!-- <div class="product_detail"> -->
                            <el-dialog
                                class="product_detail"
                                custom-class="product_dialog"
                                title="提示"
                                :visible.sync="dialogVisible"
                                width="100%" 
                                :fullscreen="false" 
                                :modal="false"
                                :top="0"
                                >
                                <p>这是一段信息</p>
                                <p>这是一段信息</p>
                                <p>这是一段信息</p>
                                <p>这是一段信息</p>
                                <p>这是一段信息</p>
                                <p>这是一段信息</p>
                                <p>这是一段信息</p>
                                <p>这是一段信息</p>
                                <p>这是一段信息</p>
                                <p>这是一段信息</p>
                                <p>这是一段信息</p>
                                <p>这是一段信息</p>
                                <p>这是一段信息</p>
                                <p>这是一段信息</p>
                                <p>这是一段信息</p>
                                <p>这是一段信息</p>
                                <p>这是一段信息</p>
                                <p>这是一段信息</p>
                                <p>这是一段信息</p>
                                <span slot="footer" class="dialog-footer">
                                    <el-button @click="dialogVisible = false">取 消</el-button>
                                    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
                                </span>
                            </el-dialog>
                        <!-- </div> -->
                    </div>
                    
                    <!-- <el-row v-for="list in 3" :key="list" class="product_row">
                        <el-col :span="6"><div class="grid-content bg-purple-dark"></div></el-col>
                        <el-col :span="6"><div class="grid-content bg-purple-purple"></div></el-col>
                        <el-col :span="6"><div class="grid-content bg-purple-purple"></div></el-col>
                        <el-col :span="6"><div class="grid-content bg-purple-dark"></div></el-col>
                    </el-row> -->
                </el-card>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
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
                dialogVisible:true,

            }
        },
        mounted(){
            let dialogDom = document.querySelector(".product_dialog")
            dialogDom.style.margin = "0px"
            // dialogDom.style.height = "100%"
        },
        methods:{
            clickProduct:function(){
                this.dialogVisible = true;
            }
        }
    }
</script>

<style scoped>
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
.product_category_title,.product_list_title{
    font-size:18px;
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
/* 改写productDetail样式 */
.product_body .el-dialog__wrapper{
    position: absolute;
    background-color:#fff
}
.product_body .el-dialog__wrapper .product_dialog{
    background-color:lawngreen !important;
}
.product_dialog .el-dialog__header{
    background-color:lawngreen !important;
}
</style>