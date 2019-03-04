!<template>
  <!-- <div> -->
  <nav>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" unique-opened router @select="handleSelect">
      <template v-for="item in items">
        <template v-if="item.subs">
          <el-submenu :index="item.index" :key="item.index">
            <template slot="title">
              <i :class="item.icon"></i>
              <span>{{ item.title }}</span>
            </template>
            <el-menu-item v-for="(subItem,i) in item.subs" :key="i" :index="subItem.index"><span>{{ item.title }}</span>
          </el-menu-item>
          </el-submenu>
        </template>
        <template v-else>
          <el-menu-item :index="item.index" :key="item.index">
            <i :class="item.icon"></i><span>{{ item.title }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </nav>
  <!-- </div> -->
</template>

<script>
  export default {
    data() {
      return {
        activeIndex: "home",
        items: [{
            // icon: "el-icon-menu",
            index: "home",
            title: "公司首页",
          },{
            // icon: "el-icon-menu",
            index: "company_introduce",
            title: "公司介绍",
          },
          {
            // icon: "el-icon-menu",
            index: "products",
            title: "供应产品"
          },
          {
            // icon: "el-icon-menu",
            index: "information",
            title: "资讯中心",
          },
          {
            // icon: "el-icon-menu",
            index: "contact",
            title: "联系方式",
            // subs: [{
            //   index: "c",
            //   title: "导航四"
            // }]
          }
        ]
      }
    },
    methods: {
        
        handleSelect(key, keyPath) {
            this.activeIndex = key;
        }
    }
  }
</script>

<style scoped>
 nav{
    width:50%;
    margin:auto;
}
.nav .el-menu-item,.nav .el-submenu__title{
  font-size:18px !important;
}
</style>