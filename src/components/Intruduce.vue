<template>
    <div class="introduce_wrap">
        <section class="introduce">
            <h3 class="company_location">公司地址</h3>
            
            <p class="introduce_txt">邯郸市壮达物资有限公司位于历史文化名城赵国古都邯郸。历史文化底蕴丰厚，有“成语之都”之美誉。衔晋冀鲁豫四省交际中心，交通发达，为公司发展奠定了坚实的空间基础。</p>
            <div id="allmap"></div>
            <h3 class="company_sellRange">经营范围</h3>
            <p class="introduce_txt">我公司经营：8-30kg轻轨，38-60kg重轨，38-120kg起重轨，各种型号工字钢，矿用工字钢，U型钢，六棱钢，槽钢，扁钢，角钢，道钉，道夹板，鱼尾螺栓，锚杆，锚网，定做各种异形件以及建筑类木方，木胶板等。</p>
            <h3 class="company_promise">业务承诺</h3>
            <p class="introduce_txt">公司自成立以来，始终坚持“优惠一切归客户”的原则，以最低的价格提供的产品，始终秉承“诚信合作，互利共赢”的理念，以的团队追求更好的服务。并且成立了公司专用的物流车队，到货及时，极大方便了客户。
            <p class="introduce_txt">壮达深信：每一个产品就是一条广告，以一流的产品、完善的售后服务来赢得用户的信任，壮达竭诚希望与新老客户合作与沟通，与客户同谋发展，共享新经济的繁荣。</p>
        </section>
    </div>
</template>

<script>
    import BMap from 'BMap';
    export default {
        data() {
            return {
                // key: value
            }
        },
        mounted() {
            this.drawMap();
        },
        created(){
            // let _this = this;
            // setTimeout(()=>{
            //     _this.drawMap();

            // },100)
        },
        methods:{
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
    padding-top:150px;
}
.introduce{
    width:1190px;
    margin:50px auto;
}
.introduce h3{
    margin: 40px 0;
    font-size: 40px;
    line-height: 54px;
    font-weight: 800;
    color: #000;
}
#allmap{
    width:100%;
    height:500px;
    margin:40px auto;
}
.introduce_txt{
    text-indent: 2em;
    line-height:28px;
    font-size:18px;
    color:#666;
}
</style>