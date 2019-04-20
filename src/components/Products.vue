<template>
  <div class="product_wrap">
    <div class="product" >
      <aside class="product_aside">
        <!-- pc端样式 -->
        <el-card class="product_category_wrap">
          <div slot="header">
            <span class="card_title">产品分类</span>
          </div>
          <div class="product_category">
            <el-tree
              :data="productTree"
              :props="defaultProps"
              @node-click="clickProTree"
            ></el-tree>
          </div>
        </el-card>
        <!-- 移动端样式 -->
        <ul class="product_category_ul">
          <li
            :class="[
              data.ID == productSlectedId ? 'active' : '',
              'product_category_list'
            ]"
            v-for="(data, index) in productTree"
            :key="data.index"
            @click="mobileCategoryClick(index)"
          >
            {{ data.CATEGORY_NAME }}
          </li>
        </ul>
      </aside>
      <div class="product_con">
        <!-- pc端商品展示 -->
        <el-card class="product_list_wrap" :body-style="productConStyle">
          <div slot="header" class="product_header">
            <span class="card_title">产品列表</span>
          </div>
          <div class="product_body">
            <ul class="product_ul clear">
              <li
                class="product_list"
                v-for="(list, index) in productData"
                :key="index"
                @click="clickProduct(list)"
              >
                <el-card
                  class="product_main"
                  shadow="hover"
                  :body-style="productBodyStyle"
                >
                  <img class="product_img" :src="list.pro_img" />
                  <p class="product_name">{{ list.SUB_NAME }}</p>
                  <p class="product_time">
                    {{ list.pro_time ? list.pro_time : "2019-03-14" }}
                  </p>
                </el-card>
              </li>
            </ul>
            <pagination
              :total="pagination.total"
              :page-size="pagination.pageSize"
              :current-page="pagination.currentPage"
              :req-list-fn="reqProductListByPage"
              v-on:currentPage="productCurrentPage"
            >
            </pagination>
            <!-- <router-view class=""></router-view> -->
            <!-- pc商品详情页 -->
            <div class="detail_wrap product_detail" v-show="productShow">
              <div class="product_intro">
                <div class="view_num_wrap">
                  <!-- <el-alert
                        class="view_num"
                        type="success"
                        center
                        :closable="false">
                        浏览人数10
                    </el-alert> -->
                </div>
                <div class="productDetail_img">
                  <img src="./../../static/img/product/01-detail.jpg" />
                </div>
              </div>
              <div class="product_info_wrap clear">
                <!-- <div class="back_product right" @click="goBack">返回</div> -->
                <el-button class="back_product right" @click="goBack"
                  >返回</el-button
                >
                <!-- 商品列表 -->
                <div class="product_info">
                  <template>
                    <el-table
                      :data="infoData"
                      @show-header="false"
                      style="width:100%"
                      :show-header="false"
                    >
                      <el-table-column
                        prop="infoName"
                        label="类型"
                      ></el-table-column>
                      <el-table-column
                        prop="value"
                        label="内容"
                      ></el-table-column>
                    </el-table>
                  </template>
                  <div class="tab_product">
                    <el-button
                      round
                      @click="switchProduct(preId)"
                      :id="preId"
                      :disabled="!Boolean(preId.length)"
                      >上一个
                    </el-button>
                    <el-button
                      round
                      @click="switchProduct(nextId)"
                      :id="nextId"
                      :disabled="!Boolean(nextId.length)"
                      >下一个
                    </el-button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </el-card>
        <!-- 移动端商品展示 -->
        <div class="mobile_product_list_wrap">
          <ul>
            <li
              class="mobile_product_list"
              v-for="(list, index) in productData"
              :key="index"
              @click="clickMobileProduct(list)"
            >
              <img class="product_img" :src="list.pro_img" />
              <p class="product_name">{{ list.SUB_NAME }}</p>
              <p class="product_time">
                {{ list.pro_time ? list.pro_time : "2019-03-14" }}
              </p>
            </li>
          </ul>
          <pagination class="mobile_pagination"
              :total="pagination.total"
              :page-size="pagination.pageSize"
              :current-page="pagination.currentPage"
              :req-list-fn="reqProductListByPage"
              v-on:currentPage="productCurrentPage"
            >
            </pagination>
        </div>
        <!-- 移动商品详情页 -->
        <div class="mobile_product_detail_wrap" v-show="mobileProductShow">
          <header>
            <div class="mobile_detail_back" @click="goBack">返回</div>
          </header>
          <div class="product_detail_main">
            <div class="mobile_product_detail_img">
              <img src="./../../static/img/product/01-detail.jpg" />
            </div>
            <ul class="mobile_product_detail_info">
              <li
                class="mobile_product_detail_list"
                v-for="(data, index) in infoData"
                :key="index"
              >
                <span class="detail_category">{{ data.infoName }}</span>
                <span class="detail_category_value">{{ data.value }}</span>
              </li>
            </ul>
            <div class="mobile_product_detail_tab">
              <el-button
                round
                @click="switchProduct(preId)"
                :id="preId"
                :disabled="!Boolean(preId.length)"
                >上一个
              </el-button>
              <el-button
                round
                @click="switchProduct(nextId)"
                :id="nextId"
                :disabled="!Boolean(nextId.length)"
                >下一个
              </el-button>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
import pagination from "./common/Pagination.vue";
import url from "./../serviceAPI.config.js";
export default {
  components: {
    pagination
  },
  data() {
    return {
      productTree: [],
      defaultProps: {
        children: "children",
        label: "CATEGORY_NAME",
        isLeaf: "ISLEAF"
      },
      productData: [],
      productConStyle: {
        flex: 1
      },
      productBodyStyle: {
        padding: 0,
        width: "100%",
        height: "100%",
        display: "flex",
        "flex-direction": "column",
        "justify-content": "space-around",
        "align-items": "center"
      },
      productSlectedId: "",
      pageNum: 1,
      pageSize: 8,
      pagination: {
        total: 1,
        pageSize: 8,
        currentPage: 1
      },
      dialogVisible: false,
      // 产品详情相关
      // productDetailSrc: "./../static/img/product/01-detail.jpg"
      productShow: false,
      mobileProductShow:false,
      infoData: [],
      productId:
        this.productId ||
        (function () {
          return sessionStorage.getItem("productId");
        })(),
      preId: "",
      nextId: ""
    };
  },
  mounted() {
    // let dialogDom = document.querySelector(".product_dialog")
    // dialogDom.style.margin = "0px"
    // dialogDom.style.height = "100%"
    this.reqTreeData();

    let _this = this;
    setTimeout(() => {
      // console.log(this.$route.params.productId);
      _this.productId = _this.$route.params.productId;
    });
    // console.log(this.$route.query);
    // debugger;

    this.getProductDetail();
  },
  methods: {
    reqTreeData: function () {
      (async () => {
        try {
          let result = await axios.get(url.category);
          // console.log(result)
          if (result.data && result.data.code == 200) {
            this.productTree = result.data.data;

            if (this.productTree.length) {
              this.productSlectedId = this.productTree[0].ID;
              this.reqProductList();
            }
          }
        } catch (err) {
          console.log(err);
        }
      })();
      // let productNewArr = [];
      // this.productArr.forEach((data)=>{
      //     let json={
      //         "ID":data["ID"],

      //     }
      //     let arr = [{
      //             infoName:'产品',
      //             value:data["SUB_NAME"]
      //         },{
      //             infoName:'单价',
      //             value:''
      //         },{
      //             infoName:'最小起订量',
      //             value:1
      //         },{
      //             infoName:'供货总量',
      //             value:100
      //         },{
      //             infoName:'发货期限',
      //             value:'自买家付款之日起3天内发货'
      //         },{
      //             infoName:'有效期至',
      //             value:'2020-12-31'
      //         },{
      //             infoName:'最后更新',
      //             value:'2019-03-07'
      //         }]
      //         json["DETAIL"] = arr
      //         productNewArr.push(json)
      // })
      // console.log(JSON.stringify(productNewArr));
    },
    clickProTree: function (obj, node, ele) {
      //只有当前的分类与选择的不一样时才请求
      if (obj.ID != this.productSlectedId) {
        this.productSlectedId = obj.ID;
        this.reqProductList();
      }
      //回到产品页
      this.productShow = false;
    },
    mobileCategoryClick(index) {
      //   console.log(index)
      var selectedId = this.productTree[index].ID;
      if (selectedId != this.productId) {
        this.productSlectedId = selectedId;
        this.reqProductList();
      }
      this.mobileProductShow=false;
    },
    reqProductListByPage() {
      this.reqProductList(this.pageNum);
    },
    reqProductList: function (pageNum = 1) {
      axios({
        url: url.category_sub,
        method: "post",
        data: {
          categoryId: this.productSlectedId,
          pageNum: pageNum,
          pageSize: this.pageSize
        }
      })
        .then(res => {
          if (res.data.code == 200) {
            this.pagination.total = res.data.count;
            this.productData = res.data.data;
            if (this.productData % 2) {
              // this.productData.push()
            }
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    productCurrentPage(page) {
      this.pageNum = page;
    },
    clickProduct: function (pro_list) {
      this.productId = pro_list.ID;
      this.getProductDetail();
      this.productShow = true;
    },
    clickMobileProduct:function(pro_list) {
      this.productId = pro_list.ID;
      this.getProductDetail();
      this.mobileProductShow = true;
    },
    goBack: function () {
      this.productShow = false;
      this.mobileProductShow = false;
    },
    getProductDetail: function () {
      sessionStorage.setItem("productId", this.productId);
      axios({
        url: url.product_detail,
        method: "post",
        data: {
          productId: this.productId
        }
      })
        .then(res => {
          if (res.data.code == 200) {
            // console.log(res.data.data)
            if (res.data.data.result.length) {
              let detailData = JSON.parse(res.data.data.result[0].DETAIL);
              this.infoData = detailData;
            }
            this.preId = res.data.data.preId;
            this.nextId = res.data.data.nextId;
            // console.log(this.preId+'-----'+this.nextId)
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    switchProduct: function (productId) {
      if (productId) {
        this.productId = productId;
        this.getProductDetail();
        // console.log(productId);
      } else {
        this.$message({
          message: "到头了",
          type: "warning"
        });
      }
    }
  }
};
</script>

<style scoped>
.content {
  padding-top: 0 !important;
}

.product_wrap {
  padding-top: 30px;
}

.product {
  max-width: 1190px;
  /* height:730px; */
  display: flex;
  margin: 0 auto;
}

.product_aside {
  flex: 1.5;
  /* background-color:ivory; */
}
.product_category_ul {
  display: none;
}
.product_category {
  font-size: 14px;
}

.product_con {
  flex: 4;
  background-color: #ddd;
}

.product_list_wrap {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.mobile_product_list_wrap {
  display: none;
}
.product_list_wrap .el-card__header {
  height: auto;
}

.product_header {
  height: auto;
}

.product_body {
  position: relative;
  height: 100%;
  min-height: 472px;
}

.product_ul {
  /* height: 96%; */
}

.product_list {
  float: left;
  width: 25%;
  height: 200px;
  margin-bottom: 20px;
  cursor: pointer;
  /* background-color:#ddd; */
}

.product_main {
  width: 100%;
  height: 100%;
}

.product_img {
  width: 108px;
  height: 108px;
  /* border: 1px solid #ccc; */
}

.product_detail {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* background-color:antiquewhite; */
}

/* 产品详情相关 */
.back_product {
  /* position:absolute;
        top:0;
        right:0; */
  /* font-size: 16px;
        line-height: 32px;
        padding: 10px; */
}

.detail_wrap {
  display: flex;
  height: 100%;
  background-color: #fff;
}

.product_intro {
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content:space-around; */
  flex: 0.618;
}

.view_num_wrap {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 40px;
}

.productDetail_img {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex: 1;
}

.product_intro img {
  margin: auto;
  width: 240px;
  height: 180px;
}

.product_info_wrap {
  flex: 1;
}

.tab_product {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 10px;
}
.mobile_product_detail_wrap {
  display: none;
}
/* 手机端样式 */
@media screen and (min-width: 1px) and (max-width: 750px) {
  .product_wrap {
    padding-top: 0;
    height: 100%;
  }
  .product {
    height: 100%;
    background-color: #fff;
  }
  .product_aside {
    height: 100%;
    border-right: 1px solid #ddd;
    z-index: 1;
  }
  .product_category_wrap {
    display: none;
  }
  .product_category_ul {
    display: block;
  }
  .product_category_list {
    height: 1rem;
    line-height: 1rem;
    font-size: 0.32rem;
    color: #707070;
    border-bottom: 1px solid #ddd;
    text-align: center;
  }
  .product_category_list.active {
    background-color: #c7c7c7;
    color: #fff;
  }
  .product_con {
    position:relative;
    background-color: #fff;
  }
  .product_list_wrap {
    display: none;
  }
  .mobile_product_list_wrap {
    /* overflow: hidden; */
    overflow-y: scroll;
    display: block;
    height: 100%;
  }
  .mobile_product_list_wrap ul {
    display: flex;
    flex-wrap: wrap;
    margin-top: 0.48rem;
  }
  .mobile_product_list {
    /* flex:1; */
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 0.48rem;
  }
  .mobile_product_list .product_img {
    width: 2rem;
    height: 2rem;
  }
  .mobile_product_list .product_name {
    /* width:2rem; */
    /* height:2rem; */
    height: 0.48rem;
    line-height: 0.48rem;
  }
  .mobile_product_list .product_name {
    height: 0.48rem;
    line-height: 0.48rem;
  }
  .mobile_pagination{
    margin-bottom:0.48rem;
  }
  .mobile_product_detail_wrap {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #fff;
    z-index: 10;
    display: flex;
    flex-direction: column;
    overflow: scroll;

  }
  .mobile_product_detail_wrap header {
    height: 0.8rem;
    /* background-color: #3367d6; */
  }
  .mobile_detail_back {
    height: 100%;
    width: 2rem;
    line-height: 0.8rem;
    text-indent: 0.6rem;
    font-size: 0.28rem;
    color: #3367d6;
    background: url("./../../static/img/side/back_blue.png") no-repeat 0.2rem
      center/0.4rem 0.4rem;
  }
  .product_detail_main {
    flex: 1;
  }
  .mobile_product_detail_img {
    width: 4.5rem;
    height: 3.375rem;
    margin: 0 auto;
    border: 1px solid #ccc;
  }
  .mobile_product_detail_img img {
    width: 100%;
    height: 100%;
  }
  .mobile_product_detail_info,
  .mobile_product_detail_tab {
    width: 4.5rem;
    margin: 0.4rem auto;
  }
  .mobile_product_detail_list {
    display: flex;
    width: 100%;
  }
  .mobile_product_detail_list span {
    /* flex:1; */
    height: 0.6rem;
    line-height: 0.6rem;
    font-size: 0.24rem;
    /* text-align:center; */
  }
  .detail_category {
    flex: 1;
  }
  .detail_category_value {
    flex: 2;
  }
  .mobile_product_detail_tab {
    display: flex;
    justify-content: center;
  }
}
</style>