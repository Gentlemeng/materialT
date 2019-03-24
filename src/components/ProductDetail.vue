<template>
    <div>
        <div class="detail_wrap">
            <div class="product_intro">
                <div class="view_num_wrap">
                    <el-alert
                        class="view_num"
                        type="success"
                        center
                        :closable="false">
                        浏览人数10
                    </el-alert>
                </div>
                <div class="product_img">
                    <img src="./../../static/img/product/01-detail.jpg"/>
                </div>
            </div>
            <div class="product_info_wrap clear">
                <!-- <div class="back_product right" @click="goBack">返回</div> -->
                <el-button class="back_product right" @click="goBack">返回</el-button>
                <!-- 商品列表 -->
                <div class="product_info">
                    <template>
                        <el-table :data="infoData" @show-header="false" style="width:100%" :show-header="false">
                            <el-table-column prop="infoName" label="类型"></el-table-column>
                            <el-table-column prop="value" label="内容"></el-table-column>
                        </el-table>
                    </template>
                    <div class="tab_product">
                        <el-button round @click="preProduct">上一个</el-button>
                        <el-button round @click="nextProduct">下一个</el-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import url from './../serviceAPI.config.js'
    export default {
        data() {
            return {
                // productDetailSrc: "./../static/img/product/01-detail.jpg"
                infoData:[],
                productId:this.$route.params.productId
            }
        },
        mounted () {
            setTimeout(()=>{
                // console.log(this.$route.params.productId);
                this.productId = this.$route.params.productId
            })
            // console.log(this.$route.query);
            // debugger;
            this.getProductDetail()
        },
        methods:{
            goBack:function(){
                this.$router.push({path:'/products'})
            },
            getProductDetail:function(){
                this.axios({  
                    url: url.product_detail,
                    method: 'post',
                    data: {
                        productId: this.productId
                    }
                }).then(res => {
                    if (res.data.code == 200) {
                        console.log(res.data.data)

                        // this.infoData = res.data.data
                    }
                }).catch(err => {
                    console.log(err)
                })
            },
            preProduct:function(){

            },
            nextProduct:function(){

            }
        }
    }
</script>

<style scoped>
    .back_product{
        /* position:absolute;
        top:0;
        right:0; */
        /* font-size: 16px;
        line-height: 32px;
        padding: 10px; */
    }
    .detail_wrap{
        display:flex;
        height:100%;
        background-color:#fff;
    }
    .product_intro{
        display:flex;
        flex-direction: column;
        align-items: center;
        /* justify-content:space-around; */
        flex:0.618;
    }
    .view_num_wrap{
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height:40px;
    }
    .product_img{
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        flex:1;
    }
    .product_intro img{
        margin:auto;
        width:240px;
        height:180px;
    }
    .product_info_wrap{
        flex:1;
    }
    .tab_product{
        display:flex;
        align-items: center;
        justify-content: space-around;
        margin-top:10px;
    }
</style>