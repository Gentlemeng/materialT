<template>
  <div class="header">
    <!-- welcome标题 -->
    <div class="welcome">
      <div class="wel-box">
        <div class="wel-text">您好！欢迎光临：邯郸市壮达物资有限公司！</div>
        <div class="contact">
          <div class="company-tel">
            <i class="icon-tel"></i>马上联系
            <div class="company-tel-ways">
              <div class="telephone">
                <i class="icon-phone"></i>
                <a href="tel:18330820519">0310-3120336</a>
              </div>
              <div class="mobliephone">
                <i class="icon-mobile"></i>
                <a href="tel:18330820519">13831000156 </a>
              </div>
            </div>
          </div>
          <div class="company-wx ">
            <i class="icon-wechat"></i>微信号
            <div class="company-wx-box">
              <img src="./../../assets/img/erweima.png" />
              <!-- <span>打开手机微信，扫一扫</span> -->
            </div>
          </div>

        </div>
      </div>
    </div>
    <div class="logo">
      <div class="company-logo">
        <h1>
          <!-- 壮达物资 -->
        </h1>
      </div>
      <div class="nav">
        <Nav></Nav>
      </div>
    </div>
  </div>
</template>

<script>
  import Nav from "./Nav.vue"

  export default {
    components: {
      Nav
    },

  }
</script>

<style scoped>
  @import "./../../assets/icomoon.css";
.header{
    width: 100%;
    height: 150px;
    position:fixed;
    top:0;
    left:0;
    z-index: 2;
    background-color:#fff;
}
  .welcome {
    width: 100%;
    height: 40px;
    line-height: 40px;
    background-color: #3367d6;
    color: #fff;
    font-size: 14px;
  }

  .wel-box {
    display: flex;
    width: 60%;
    margin: 0 auto;
    height: 40px;
  }

  .wel-text {
    flex: 1;
    height: 100%;
    line-height: 40px;
  }

  .contact {
    display: flex;
    flex: 1;
    justify-content: flex-end;
    height: 100%;
    line-height: 40px;
  }

  .company-wx {
    margin-left: 30px;
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

  .telephone i,
  .mobliephone i {
    margin-left: 10px;
  }

  .telephone span {}

  .mobliephone {}

  .mobliephone i {}

  .mobliephone span {}

  /*logo区域*/
  .logo {
    display: flex;
    height: 110px;
    padding: 0 60px;
  }

  .company-logo {
    width: 183px;
    height: 100%;
    background: #ccc;
  }

  .company-logo h1 {
    height: 100%;
    line-height: 110px;
    font-size: 48px;
    color: #000;
    font-family: monospace;
    /* font-family: 'Courier New', Courier, monospace; */

  }

  .nav {
    display: flex;
    flex: 1;
    height: 100%;
  }
</style>