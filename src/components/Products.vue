<template>
  <div class="product_wrap">
    <div class="product">
      <aside class="product_aside">
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
      </aside>
      <div class="product_con">
        <el-card
          class="product_list_wrap"
          :body-style="productConStyle"
        >
          <div
            slot="header"
            class="product_header"
          >
            <span class="card_title">产品列表</span>
          </div>
          <div class="product_body">
            <ul class="product_ul clear">
              <li
                class="product_list"
                v-for="(list,index) in productData"
                :key="index"
                @click="clickProduct(list)"
              >
                <el-card
                  class="product_main"
                  shadow="hover"
                  :body-style="productBodyStyle"
                >
                  <img
                    class="product_img"
                    :src="list.pro_img"
                  />
                  <p class="product_name">{{list.SUB_NAME}}</p>
                  <p class="product_time">{{list.pro_time?list.pro_time:'2019-03-14'}}</p>
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
            <router-view class="product_detail"></router-view>
          </div>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
import pagination from "./common/Pagination.vue"
import url from './../serviceAPI.config.js'
export default {
  components: {
    pagination
  },
  data() {
    return {
      productTree: [],
      defaultProps: {
        children: 'children',
        label: 'CATEGORY_NAME',
        isLeaf: 'ISLEAF',
      },
      productData: [],
      productConStyle: {
        flex: 1,
      },
      productBodyStyle: {
        padding: 0,
        width: "100%",
        height: "100%",
        display: "flex",
        "flex-direction": "column",
        "justify-content": "space-around",
        "align-items": "center",
      },
      productSlectedId: '',
      pageNum: 1,
      pageSize: 8,
      pagination: {
        total: 1,
        pageSize: 8,
        currentPage: 1,
      },
      dialogVisible: false,
    }
  },
  mounted() {
    // let dialogDom = document.querySelector(".product_dialog")
    // dialogDom.style.margin = "0px"
    // dialogDom.style.height = "100%"
    this.reqTreeData()
  },
  methods: {
    reqTreeData: function () {
      (async () => {
        try {
          let result = await this.axios.get(url.category)
          // console.log(result)
          if (result.data && result.data.code == 200) {
            this.productTree = result.data.data

            if (this.productTree.length) {
              this.productSlectedId = this.productTree[0].ID
              this.reqProductList()
            }
          }
        } catch (err) {
          console.log(err)
        }
      })()
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

      this.productSlectedId = obj.ID
      this.reqProductList()

    },
    reqProductListByPage() {
      this.reqProductList(this.pageNum)
    },
    reqProductList: function (pageNum = 1) {
      this.axios({        
        url: url.category_sub,
        method: 'post',
        data: {
          categoryId: this.productSlectedId,
          pageNum: pageNum,
          pageSize: this.pageSize
        }
      }).then(res => {
        if (res.data.code == 200) {
          this.pagination.total = res.data.count
          this.productData = res.data.data
        }
      }).catch(err => {
        console.log(err)
      })
    },
    productCurrentPage(page) {
      this.pageNum = page;
    },
    clickProduct: function (pro_list) {
      // console.log(pro_list);
      // this.dialogVisible = true;
      // this.$router.push({path:'productDetail',query: {productData: pro_list}})
      // console.log(pro_list)
      this.$router.push({ name: 'productDetail', params: { productId: pro_list.ID } })
    }
  }
}
</script>

<style scoped>
.content {
  padding-top: 0 !important;
}
.product_wrap {
  padding-top: 150px;
}
.product {
  width: 1190px;
  /* height:730px; */
  display: flex;
  margin: 0 auto;
}
.product_aside {
  flex: 1.5;
  /* background-color:ivory; */
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
  border: 1px solid #ccc;
}
.product_detail {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* background-color:antiquewhite; */
}
</style>