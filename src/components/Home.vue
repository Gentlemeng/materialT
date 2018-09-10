<template>
  <div class="home">

    <!-- <ul class="actions">
      <li>
        <a class="actions-button" href="#" rel="noopener" @click="addSection">Add section</a>
      </li>
      <li>
        <a class="actions-button" href="#" rel="noopener" @click="removeSection">Remove section</a>
      </li>
      <li>
        <a class="actions-button" href="#" rel="noopener" @click="toggleNavigation">Toggle nav</a>
      </li>
      <li>
        <a class="actions-button" href="#" rel="noopener" @click="toggleScrollbar">Toggle scrollBar</a>
      </li>
    </ul> -->
    <!-- 导航栏 -->
    <!-- <ul id="menu">
      <li data-menuanchor="home" class="active">
        <a href="#home">Section 1</a>
      </li>
      <li data-menuanchor="business">
        <a href="#business">Section 2</a>
      </li>
      <li data-menuanchor="blank">
        <a href="#blank">Section 3</a>
      </li>
      <li>
        <a href="https://twitter.com/imac2" target="_blank" rel="noopener" class="twitter-share">
          <i>
            <svg viewBox="0 0 512 512">
              <path d="M419.6 168.6c-11.7 5.2-24.2 8.7-37.4 10.2 13.4-8.1 23.8-20.8 28.6-36 -12.6 7.5-26.5 12.9-41.3 15.8 -11.9-12.6-28.8-20.6-47.5-20.6 -42 0-72.9 39.2-63.4 79.9 -54.1-2.7-102.1-28.6-134.2-68 -17 29.2-8.8 67.5 20.1 86.9 -10.7-0.3-20.7-3.3-29.5-8.1 -0.7 30.2 20.9 58.4 52.2 64.6 -9.2 2.5-19.2 3.1-29.4 1.1 8.3 25.9 32.3 44.7 60.8 45.2 -27.4 21.4-61.8 31-96.4 27 28.8 18.5 63 29.2 99.8 29.2 120.8 0 189.1-102.1 185-193.6C399.9 193.1 410.9 181.7 419.6 168.6z"></path>
            </svg>
          </i>
        </a>
      </li>
    </ul> -->
    <full-page :options="options" id="fullpage">
      <div class="section">
        <!-- welcome标题 -->
        <div class="welcome">
          <div class="wel-box clear">
            <div class="wel-text left">您好！欢迎光临：邯郸市壮达物资有限公司！</div>
            <div class="contact right">
              <div class="company-tel right">
                <i class="icon-tel"></i>马上联系
                <div class="company-tel-ways">
                  <div class="telephone">
                    <i class="icon-phone"></i>
                    <a href="tel:18330820519">0310-1234567</a>
                  </div>
                  <div class="mobliephone">
                    <i class="icon-mobile"></i>
                    <a href="tel:18330820519">18330820519</a>
                  </div>
                </div>
              </div>
              <div class="company-wx right">
                <i class="icon-wechat"></i>微信号
                <div class="company-wx-box">
                  <img src="./../assets/img/erweima.png" />
                  <!-- <span>打开手机微信，扫一扫</span> -->
                </div>
              </div>
              
            </div>
          </div>
        </div>
        <div class="logo">
          <el-row :gutter="20" style="height:100%;">
            <el-col :span="16" style="height:100%;">
              <div class="grid-content bg-purple" style="height:100%;">
                <div class="company-logo">
                  <h1>壮达物资</h1>
                </div>
              </div>
            </el-col>
            <el-col :span="8" style="height:100%;">
              <div class="grid-content bg-purple" style="height:100%;">
                <div class="company-concact"></div>
              </div>
            </el-col>
          </el-row>
        </div>
        <!-- 首页走马灯 -->
        <div class="carousel-wrap">
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
export default {
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
      }
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
    }
  }
};
</script>

<style>
@import "./../assets/icomoon.css";
.welcome {
  width: 100%;
  height: 5%;
  background-color: #3367d6;
  color: #fff;
  font-size: 12px;
}
.wel-box {
  width: 60%;
  margin: 0 auto;
  height: 100%;
}
.wel-text {
      width: 50%;
  height: 100%;
  line-height: 37.2px;
}
.contact {
      width: 50%;
  height: 100%;
  line-height: 37.2px;
}

.company-wx {
  position: relative;
  display: inline-block;
  cursor: pointer;
}
.company-wx .icon-wechat,
.company-tel .icon-tel {
  margin-right: 0.02rem;
}
.company-wx:hover .company-wx-box {
  display: block;
}
.company-wx-box {
  display: none;
  position: absolute;
  left: -16px;
  top: 94%;
  width: 100px;
  height: 150px;
  color: #000;
  z-index: 10;
}
.company-wx-box img {
  width: 100px;
  height: 100px;
}
/* .company-wx-box span{
    display: block;
    font-size: 12px;
    width: 100%;
    height: 40px;
    line-height: 20px;
} */
.company-tel {
  position: relative;
  display: inline-block;
  margin-left: 0.2rem;
  cursor: pointer;
}
.company-tel:hover .company-tel-ways {
  display: block;
}
.company-tel-ways {
  position: absolute;
  display: none;
  width: 130px;
  color: #000;
  left: -24px;
  top: 100%;
  z-index: 10;
  background: #fff;
}
.telephone {
}
.telephone i,
.mobliephone i {
  margin-left: 10px;
}
.telephone span {
}
.mobliephone {
}

.mobliephone i {
}

.mobliephone span {
}
/*logo区域*/
.logo {
  width: 75%;
    height: 25%;
    margin: 0 auto;
}
.company-logo{
  height:100%;
  background:pink;
}
.company-logo h1{
    width:40%;
    height: 100%;
    line-height: 300%;
    font-size: 48px;
    color: #000;
    margin-left: 10%;
    font-family: monospace;
    /* font-family: 'Courier New', Courier, monospace; */
    
}
.company-concact{
  height:100%;
  background: purple;
}
.carousel-wrap {
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
