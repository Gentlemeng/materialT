<template>
    <div class="introduce_wrap">
        <section class="introduce">
            <h3 class="company_location">公司地址</h3>
            
            <p class="introduce_txt justify" v-for="(text,index) in companyIntroData.address" :key="'address'+index">{{text}}</p>
            <div id="allmap"></div>
            <h3 class="company_sellRange">经营范围</h3>
            <p class="introduce_txt justify" v-for="(text,index) in companyIntroData.sellRange" :key="'sellRange'+index">{{text}}</p>

            <h3 class="company_promise">业务承诺</h3>
            <p class="introduce_txt justify" v-for="(text,index) in companyIntroData.promise" :key="'promise'+index">{{text}}</p>             
        </section>
    </div>
</template>

<script>
    import BMap from 'BMap';
    import url from './../serviceAPI.config.js'
    export default {
        data() {
            return {
                companyIntroData:{address:[],sellRange:[],promise:[]},
            }
        },
        mounted() {
            this.drawMap();
        },
        created(){
            this.reqIntroData();
            // let _this = this;
            // setTimeout(()=>{
            //     _this.drawMap();

            // },100)
        },
        methods:{
            reqIntroData:function(){
                axios.get(url.companyIntro)
                    .then((res)=>{
                        // console.log(res)
                        if(res.data.code==200){
                            this.companyIntroData = res.data.data[1]
                        }
                    })
            },
            drawMap:function(){
                // 百度地图API功能
                var map = new BMap.Map("allmap");
                // debugger;
                var point = new BMap.Point(114.4913700129,36.6253928896);
                var marker = new BMap.Marker(point);  // 创建标注
                map.addOverlay(marker);              // 将标注添加到地图中
                map.centerAndZoom(point, 15);
                map.enableScrollWheelZoom(true); //允许滚轴缩放
                var opts = {
                    width : 200,     // 信息窗口宽度
                    height: 100,     // 信息窗口高度
                    title : "邯郸市壮达物资有限公司" , // 信息窗口标题
                    enableMessage:true,//设置允许信息窗发送短息
                    message:"8KG轻轨厂家、8KG轻轨厂家"
                }
                var infoWindow = new BMap.InfoWindow("地址：河北省邯郸市丛台区丛台西路25号鹿诚商务大厦C单元13层C1303", opts);  // 创建信息窗口对象 
                marker.addEventListener("click", function(){          
                    map.openInfoWindow(infoWindow,point); //开启信息窗口
                
                });
            }
        }
        
    }
</script>

<style scoped>
.introduce_wrap{
    overflow: hidden;
}
.introduce{
    max-width:1190px;
    margin: 20px auto 0;
}
.company_location,.company_sellRange,.company_promise{
    margin: 0 0 10px;
    font-size: 40px;
    line-height: 54px;
    font-weight: 800;
    color: #000;
}
#allmap{
    width:100%;
    height:500px;
    margin: 20px auto;
}
.introduce_txt{
    text-indent: 2em;
    line-height:28px;
    font-size:18px;
    color:#666;
    margin-bottom: 10px;
}
  @media screen and (min-width: 1px) and (max-width: 750px) {
      .company_location,.company_sellRange,.company_promise{
          font-size:0.4rem;
          text-indent: 2em;
          /* padding: 0 0.4rem; */
      }
      .introduce_txt{
          padding:0 0.4rem;
      }
      #allmap{
          /* margin:0;
          padding:0.4rem; */
      }
  }
</style>