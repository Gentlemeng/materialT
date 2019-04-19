<template>
    <div class="wrapper">
        <Header :isShowMenu="isShowMenu" v-on:isShowMenu="getIsShowMenu"></Header>
        <div :class="[isShowMenu? 'active' : '','main']">
            <transition name="move" mode="out-in"><router-view></router-view></transition>
            <div :class="[isShowMenu? 'active' : '','main_layer']" v-show="isShowMenu"></div>
        </div>
        <!-- 移动端导航侧边栏 -->
        <nav :class="[isShowMenu? 'active' : '','mobile_nav']">
            <ul class="mobile_nav_ul">
                <li v-for="(item,index) in navData" :key="item.index" :class="[item.isSelected?'active':'','mobile_nav_list']"  @click="switchRouter(index)">
                <p>
                    <router-link class="nav_link" :to="{path: '/' + item.index}">{{item.title}} </router-link>
                </p>
                </li>
            </ul>
            <div :class="[isShowMenu? 'active' : '','mobile_nav_layer']"></div>
        </nav>
    </div>
</template>

<script>
import Header from "./common/Header.vue"
  import navData from "./../navData.js"

    export default {
        components:{
            Header,
        },
        data(){
            return {
            navData: navData,
            isShowMenu: false
            }
        },
        created(){
            // this.$router.push("/home");
            
        },
        mounted() {
            let _this = this;
            let layer = document.querySelector(".main_layer");
            // let layer = document.getElementsByClassName("mobile_nav")[0];
            // debugger;
            layer.addEventListener('touchstart', function (e) {
                // console.log("aaa")
                layer.addEventListener("touchmove", function (e) {
                e.preventDefault();
                })
                //   return false;
            })
            layer.addEventListener("click", function (e) {
                _this.isShowMenu = false;
            })
        },
        methods:{
            getIsShowMenu: function (isShowMenu) {
                // this.isShowMenu = isShowMenu ? false : true;
                this.isShowMenu = isShowMenu;
            },
            switchRouter:function(index){
                this.navData.forEach((item)=>{
                    item.isSelected = false;
                })
                this.navData[index].isSelected = true;
                this.isShowMenu = false;
            }
        }
    }
</script>
<style scoped>
.wrapper{
    overflow: hidden;
    background-color:#fff;
}
.main{
    position:relative;
    transition: all 0.2s ease-in;
    -moz-transition: all 0.2s ease-in;
    -webkit-transition: all 0.2s ease-in;
    -o-transition: all 0.2s ease-in;
}
.main.active{
    /* translateX:50%; */
    transform: translate3d(50%,0,0);
}
.main_layer{
        z-index: 2;
    position:absolute;
    top:0;
    left:0;
    height: 100%;
    width: 100%;
    background-color:rgba(0,0,0,0.5);
}
  .mobile_nav {
    overflow: hidden;
    display: none;
    z-index: 3;
    position: absolute;
    top: 0.8rem;
    left: -50%;
    width: 50%;
    height: 100%;
    margin: 0;
    transition: all 0.1s linear;
    -moz-transition: all 0.1s linear;
    -webkit-transition: all 0.1s linear;
    -o-transition: all 0.1s linear;

    /* transition: all 0.1s ease-in;
    -moz-transition: all 0.1s ease-in;
    -webkit-transition: all 0.1s ease-in;
    -o-transition: all 0.1s ease-in; */
  }

  .mobile_nav.active {
    left: 0;
    /* box-shadow: 5px 0 5px rgba(0, 0, 0, 0.2); */
  }

  .mobile_nav_ul {
    width: 100%;
    height: 100%;
    background-color: #3367d6;
  }

  .mobile_nav_list {
    height: 1rem;
    line-height: 1rem;
    font-size: 0.32rem;
    color: #fff;
    /* margin-left:0.8rem; */
  }
  .mobile_nav_list.active{
      background-color:rgba(225,225,225,0.5)
  }

  .mobile_nav_list p {
    text-align: center;
  }

  .nav_link {
    color: #fff;
  }


  @media screen and (min-width: 1px) and (max-width: 750px) {
      body{
          height:100%;
      }
      #app{
          height:100%;
      }
      .wrapper{
          height: 100%;
          display:flex;
          flex-direction: column;
      }
        .main{
            flex:1;
            overflow-y: scroll;
        }
      .mobile_nav{
            display:flex;
        }
  }

</style>
