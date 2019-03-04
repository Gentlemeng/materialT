<template>
  <div class="home">
    <full-page :options="options" id="fullpage">
      <div class="section">
        <!-- 首页走马灯 -->
        <div class="carousel_wrap">
          <el-carousel :autoplay="false">
            <el-carousel-item v-for="item in 4" :key="item">
              <h3>{{ item }}</h3>
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
      <div class="section">
        <div class="slide">
          <h3>Slide 2</h3>
        </div>
      </div>
      <div class="section">
        <h3>Section 3</h3>
      </div>
    </full-page>
  </div>
</template>

<script>
import Header from "./common/Header.vue"
export default {
    components:{Header},
  data() {
    return {
      options: {
        licenseKey: "OPEN-SOURCE-GPLV3-LICENSE",
        afterLoad: this.afterLoad,
        scrollBar: false,
        menu: "#menu",
        navigation: true,
        anchors: ["home", "business", "blank"],
        sectionsColor: [
          "#fff",
          "#ccc",
          "#ddd",
          "#fec401",
          "#1bcee6",
          "#ee1a59",
          "#2c3e4f",
          "#ba5be9",
          "#b4b8ab"
        ]
      },
    };
  },
  methods: {
    afterLoad() {
      console.log("After load");
    },
    addSection(e) {
      e.preventDefault();
      var newSectionNumber =
        document.querySelectorAll(".fp-section").length + 1;

      // creating the section div
      var section = document.createElement("div");
      section.className = "section";
      section.innerHTML = `<h3>Section ${newSectionNumber}</h3>`;

      // adding section
      document.querySelector("#fullpage").appendChild(section);

      // creating the section menu element
      var sectionMenuItem = document.createElement("li");
      sectionMenuItem.setAttribute(
        "data-menuanchor",
        "page" + newSectionNumber
      );
      sectionMenuItem.innerHTML = `<a href="#page${newSectionNumber}">Section${newSectionNumber}</a>`;

      // adding it to the sections menu
      var sectionsMenuItems = document.querySelector("#menu");
      sectionsMenuItems.appendChild(sectionMenuItem);

      // adding anchor for the section
      this.options.anchors.push(`page${newSectionNumber}`);

      // we have to call `update` manually as DOM changes won't fire updates
      // requires the use of the attribute ref="fullpage" on the
      // component element, in this case, <full-page>
      // ideally, use an ID element for that element too
      this.$refs.fullpage.build();
    },
    removeSection() {
      var sections = document
        .querySelector("#fullpage")
        .querySelectorAll(".fp-section");
      var lastSection = sections[sections.length - 1];

      // removing the last section
      lastSection.parentNode.removeChild(lastSection);

      // removing the last anchor
      this.options.anchors.pop();

      // removing the last item on the sections menu
      var sectionsMenuItems = document.querySelectorAll("#menu li");
      var lastItem = sectionsMenuItems[sectionsMenuItems.length - 1];
      lastItem.parentNode.removeChild(lastItem);
    },
    toggleNavigation() {
      this.options.navigation = !this.options.navigation;
    },
    toggleScrollbar() {
      console.log("Changing scrollbar...");
      this.options.scrollBar = !this.options.scrollBar;
    },
    // 自定义逻辑方法
    
  }
};
</script>

<style>
.content{
    padding-top:0 !important;
}
.home{
    padding-top: 150px;

}
.carousel_wrap {
  height: 70%;
}
.el-carousel {
  height: 100%;
}
.el-carousel__container {
  height: 100%;
}
.el-carousel__item {
  height: 100%;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
/* 主要产品 */
.container {
  width: 60%;
  height: 42%;
  margin: 0 auto;
}
.container-aside {
  background: #ccc;
}
.container-main {
  background: #ddd;
}
</style>
