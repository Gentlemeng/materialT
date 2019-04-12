<template>
  <div class="home">
    <full-page :options="options" id="fullpage">
      <section class="section">
        <!-- 首页走马灯 -->
        <div class="carousel_wrap">
          <el-carousel :autoplay="false">
            <el-carousel-item v-for="(item,index) in carouselImg" :key="index">
              <div class="carousel">
                <p class="carousel_info">{{item.info}}</p>
                <div class="carousel_img" :style='{backgroundImage:"url("+item.url+")"}'></div>
              </div>
            </el-carousel-item>
          </el-carousel>
        </div>
      </section>
      <section class="section">
        <!-- <div class="slide"> -->
        <div class="map_wrap">
          <aside class="order_info_wrap">
            <div class="order_info">
              <el-card class="order_wrap">
                <div slot="header">
                  <span class="card_title">客户订单发货</span>
                </div>
                <div class="order_table">
                  <!-- <div  -->
                  <vue-seamless-scroll :data="listData" :class-option="classOption" class="seamless_wrap">
                    <ul class="item">
                      <li v-for="(item,index) in listData" :key="index" class="col_2_hide">
                        <span>一批</span><span v-text="item.product"></span>
                        <span>已发往</span><span v-text="item.target"></span>
                        <span>客户：</span><span v-text="item.buyer"></span>
                        <span>联系电话:</span><span v-text="item.phone"></span>
                      </li>
                    </ul>
                    <!-- </div> -->
                  </vue-seamless-scroll>
                </div>
              </el-card>
            </div>
            <div class="contact_wrap">
              <el-card class="contact_card">
                <div slot="header">
                  <span class="card_title">联系方式</span>
                </div>
                <div class="contact_table">
                  <template>
                    <el-table :data="contactData" @show-header="false" style="width:100%" :show-header="false">
                      <el-table-column prop="type" label="类型"></el-table-column>
                      <el-table-column prop="value" label="内容"></el-table-column>
                    </el-table>
                  </template>
                </div>
              </el-card>
            </div>

          </aside>
          <section class="map_main">
            <div id="map"></div>
          </section>
          <!-- </div> -->

        </div>
      </section>
      <!-- <section class="section">
        <h3>Section 3</h3>
      </section> -->
    </full-page>
  </div>
</template>

<script>
//   console.log(echarts)
// 按需引入
    let echarts = require('echarts/lib/echarts')
    require('echarts/lib/chart/lines')
    require('echarts/lib/chart/effectScatter')
    require('echarts/lib/chart/map')
    require('echarts/lib/component/geo')
  import Header from "./common/Header.vue"
  import vueSeamlessScroll from 'vue-seamless-scroll'
  export default {
    components: {
      Header,
      vueSeamlessScroll
    },
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
            "#fff",
            "#d7d7d7",
            "#fec401",
            "#1bcee6",
            "#ee1a59",
            "#2c3e4f",
            "#ba5be9",
            "#b4b8ab"
          ],
        },
        // carouselImg
        carouselImg: [{
          //   url: './../static/img/carousel/01.jpg',
          url: '',
          info: "从业10余年，专注服务客户"
        }, {
          url: './../static/img/carousel/02.jpg',
          info: "从业10余年，专注服务客户"
        }, {
          url: './../static/img/carousel/03.jpg',
          info: "从业10余年，专注服务客户"
        }],
        contactData: [{
          type: '电话',
          value: '0310-3120336'
        }, {
          type: '联系人',
          value: '安经理'
        }, {
          type: '手机号码',
          value: '13831000156'
        }],
        listData: [{
          product: '建筑配件、螺杆、穿墙丝',
          target: '广府古城',
          buyer: '李经理',
          phone: '183*****519',
        }, {
          product: '建筑配件、螺杆、穿墙丝',
          target: '广府古城',
          buyer: '李经理',
          phone: '183*****519',
        }, {
          product: '建筑配件、螺杆、穿墙丝',
          target: '广府古城',
          buyer: '李经理',
          phone: '183*****519',
        }, {
          product: '建筑配件、螺杆、穿墙丝',
          target: '广府古城',
          buyer: '李经理',
          phone: '183*****519',
        }, {
          product: '建筑配件、螺杆、穿墙丝',
          target: '广府古城',
          buyer: '李经理',
          phone: '183*****519',
        }, {
          product: '建筑配件、螺杆、穿墙丝',
          target: '广府古城',
          buyer: '李经理',
          phone: '183*****519',
        }, ],
        mapData: null,
        geoCoordMap: { //可以在地图上显示的城市的坐标信息
          '成都': [103.9526, 30.7617],
          '乌鲁木齐': [87.9236, 43.5883],
          '武汉': [114.3896, 30.6628],
          '太原': [112.5570, 37.8768],
          '西安': [108.9463, 34.3475],
          '银川': [106.2389, 38.4923],
          '邯郸': [114.4913, 36.6254],


          // '铜陵': [117.81154, 30.945515],
          // '长春': [125.8154, 44.2584],
          // '长沙': [113.0823, 28.2568],
          // '贵阳': [106.6992, 26.7682],
          // '杨凌': [109.1162, 34.2004],
          // '深圳': [114.5435, 22.5439],
          // '济南': [117.1582, 36.8701],
          // '海口': [110.3893, 19.8516],
          // '沈阳': [123.1238, 42.1216],
          // '红安': [114.23, 31.1],
          // '昆明': [102.9199, 25.4663],
          // '杭州': [119.5313, 29.8773],
          // '拉萨': [91.1865, 30.1465],
          // '天津': [117.4219, 39.4189],
          // '呼和浩特': [111.4124, 40.4901],
          // '哈尔滨': [127.9688, 45.368],
          // '北京': [116.4551, 40.2539],
          // '南京': [118.8062, 31.9208],
          // '南宁': [108.479, 23.1152],
          // '南昌': [116.0046, 28.6633],
          // '上海': [121.4648, 31.2891],
          // '三亚': [109.5000, 18.2000]
        },
        HFData: [ // 数据中name的城市名称必须与geoCoordMap中城市名称一致, 不然关联不上，邯郸到各地区的线路
          [{
            name: '邯郸'
          }, {
            name: '成都',
            value: 66
          }],
          [{
            name: '邯郸'
          }, {
            name: '乌鲁木齐',
            value: 66
          }],
          [{
            name: '邯郸'
          }, {
            name: '太原',
            value: 66
          }],
          [{
            name: '邯郸'
          }, {
            name: '西安',
            value: 66
          }],
          [{
            name: '邯郸'
          }, {
            name: '银川',
            value: 66
          }],
          [{
            name: '邯郸'
          }, {
            name: '武汉',
            value: 66
          }],
          [{
            name: '成都'
          }, {
            name: '邯郸',
            value: 66
          }],
          [{
            name: '乌鲁木齐'
          }, {
            name: '邯郸',
            value: 66
          }],
          [{
            name: '太原'
          }, {
            name: '邯郸',
            value: 66
          }],
          [{
            name: '西安'
          }, {
            name: '邯郸',
            value: 66
          }],
          [{
            name: '银川'
          }, {
            name: '邯郸',
            value: 66
          }],
          [{
            name: '武汉'
          }, {
            name: '邯郸',
            value: 66
          }],
          // [{name: '邯郸'}, {name: '邯郸',value: 66}],

          // [{name: '邯郸'}, {name: '长春',value: 66}],
          // [{name: '邯郸'}, {name: '长沙',value: 66}],
          // [{name: '邯郸'}, {name: '贵阳',value: 66}],
          // [{name: '邯郸'}, {name: '杨凌',value: 66}],
          // [{name: '邯郸'}, {name: '深圳',value: 66}],
          // [{name: '邯郸'}, {name: '济南',value: 66}],
          // [{name: '邯郸'}, { name: '海口',value: 66}],
          // [{name: '邯郸'}, {name: '沈阳',value: 66}],
          // [{name: '邯郸'}, {name: '昆明',value: 66}],
          // [{name: '邯郸'}, {name: '杭州',value: 66}],
          // [{name: '邯郸'}, {name: '拉萨',value: 66}],
          // [{name: '邯郸'}, {name: '天津',value: 66}],
          // [{name: '邯郸'}, {name: '呼和浩特',value: 66}],
          // [{name: '邯郸'}, {name: '哈尔滨',value: 66}],
          // [{name: '邯郸'}, {name: '北京',value: 66}],
          // [{name: '邯郸'}, {name: '南宁',value: 66}],
          // [{name: '邯郸'}, {name: '南昌',value: 66}],
          // [{name: '邯郸'}, {name: '上海',value: 66}]
        ],
        planePath: 'arrow',
        colorArr: ['#fff', '#FFFFA8', '#46bee9'],
        series: [],
        mapBoxOption: {
          tooltip: {
            trigger: 'item',
            formatter: function (result) { //回调函数，参数params具体格式参加官方API
              return result.name
            }
          },
          title: {
            text: '货运网络',
            //subtext:'',
            left: 'center',
            top: '8%',
            textAlign: 'auto',
            textStyle: {
              color: '#c6251e',
              fontSize: 30,
            }
          },
          grid: {
            // width:'50%',
            // height:'70%'
          },
          geo: {
            map: 'china',
            roam: false, // 是否开启鼠标缩放和平移漫游。默认不开启。如果只想要开启缩放或者平移，可以设置成 'scale' 或者 'move'。设置成 true 为都开启
            // aspectScale: 0.75,
            // zoom: 1.20,
            left: 'center',
            top: "15%",
            itemStyle: {
              normal: {
                areaColor: '#0083ce',
                borderColor: 'rgba(0,0,0,.4)'
              },
              // emphasis: {
              //     borderWidth: 0,
              //     borderColor: '#0066ba',
              //     areaColor: "#0494e1",
              //     shadowColor: 'rgba(0, 0, 0, 0.5)'
              // }
            }
          },
          series: null
        },
      };
    },
    computed: {
      classOption: function () {
        return {
          step: 0.5,
          limitMoveNum: 5
        }
      }
    },
    mounted() {
      let _this = this;
      let carsouleDom = document.querySelector(".carousel_wrap");
      carsouleDom.style.height = (1190 * 818 / 1538) + 'px'
      async function drawMap() {
        _this.mapData = await _this.reqMapData();
        //   _this.mapSetOption()
        _this.linkCity()
      }
      drawMap();

      // console.log(echarts);
    },
    methods: {
      //请求地图数据
      reqMapData() {
        return new Promise((resolve, reject) => {
          this.axios('./../static/json/china.json')
            .then((res) => {
              // console.log(res);
              if (res.status === 200) {
                resolve(res.data);
              }
            }).catch((err) => {
              rejectr(err);
            })
        })
      },
      convertData(data) {
        let res = [];
        for (let i = 0; i < data.length; i++) {
          let dataItem = data[i];
          let fromCoord = this.geoCoordMap[dataItem[0].name];
          let toCoord = this.geoCoordMap[dataItem[1].name];
          if (fromCoord && toCoord) {
            res.push([{
              coord: fromCoord
            }, {
              coord: toCoord
            }]);
          }
        }
        return res;
      },
      //遍历由邯郸到其他城市的线路
      linkCity() {
        let _this = this;
        [
          ['邯郸', this.HFData]
        ].forEach(function (item, i) {
          // 配置
          _this.series.push({
            // 系列名称，用于tooltip的显示
            name: item[0],
            type: 'lines',
            zlevel: 1, // 用于 Canvas 分层，不同zlevel值的图形会放置在不同的 Canvas 中
            // effect出发到目的地 的白色尾巴线条
            // 线特效的配置
            effect: {
              show: true,
              period: 6, // 特效动画的时间，单位为 s
              trailLength: 0.1, // 特效尾迹的长度。取从 0 到 1 的值，数值越大尾迹越长
              color: '#46bee9', // 移动箭头颜色
              symbol: _this.planePath,
              symbolSize: 6 // 特效标记的大小
            },
            // lineStyle出发到目的地 的线条颜色
            lineStyle: {
              normal: {
                color: _this.colorArr[i],
                width: 0,
                curveness: 0.2 //幅度
              }
            },
            data: _this.convertData(item[1]) //开始到结束数据
          }, {
            //出发地信息
            name: item[0],
            type: 'lines',
            zlevel: 2,
            effect: {
              show: true,
              period: 6,
              trailLength: 0,
              symbol: _this.planePath,
              symbolSize: 6
            },
            lineStyle: {
              normal: {
                color: echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: '#FFFFA8' // 出发
                }, {
                  offset: 1,
                  color: '#58B3CC ' // 结束 颜色
                }], false),
                width: 1.5,
                opacity: 0.4,
                curveness: 0.2
              }
            },
            data: _this.convertData(item[1])
          }, {
            // 目的地信息
            name: item[0],
            type: 'effectScatter',
            coordinateSystem: 'geo',
            zlevel: 2,
            rippleEffect: {
              brushType: 'stroke'
            },
            label: {
              normal: {
                show: true,
                position: 'right',
                formatter: '{b}'
              }
            },
            symbolSize: function (val) {
              return val[2] / 8;
            },
            itemStyle: {
              normal: {
                color: _this.colorArr[i]
              }
            },
            data: item[1].map(function (dataItem) {
              return {
                name: dataItem[1].name,
                value: _this.geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
              };
            })
          });
        })
        _this.mapBoxOption.series = _this.series;
        //   mapBoxEchart.setOption(mapBoxOption);
        _this.mapSetOption()

      },
      mapSetOption() {
        let mapDom = document.querySelector("#map")
        let mapChart = echarts.init(mapDom)
        echarts.registerMap('china', this.mapData);
        mapChart.setOption(this.mapBoxOption, true);

      },
      afterLoad() {
        //   console.log("After load");
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
  .section {
    padding-top: 150px;
  }

  .carousel {
    position: relative;
    width: 1190px;
    margin: 0 auto;
    height: 100%;
  }

  .carousel_wrap {
    width: 1190px;
    margin: 0 auto;
    /*width:1538px;
      height:818px; */
    /* height: 70%; */
    height: calc(1190px * 818px) / 1538px;
  }

  .carousel_info {
    width: 100%;
    position: absolute;
    top: 1em;
    left: 0;
    font-size: 30px;
    text-align: center;
    color: rgba(255, 255, 255, 1);
  }

  .carousel_img {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-repeat: no-repeat;
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
    /* background-color: #d3dce6; */
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

  /* section2 */
  .map_wrap {
    display: flex;
    width: 1190px;
    height: 100%;
    margin: 0 auto;
    /* background-color: #ddd; */
  }

  .order_info_wrap {
    display: flex;
    flex-direction: column;

    flex: 1.5;
    /* background-color: bisque; */
  }

  .contact_wrap {
    flex: 1;
  }

  .order_info {
    flex: 1;
  }

  .order_wrap {}

  .order_table {}

  .seamless_wrap {
    height: 260px;
    width: 100%;
    overflow: hidden;
  }

  .seamless_wrap ul {
    list-style: none;
    padding: 0;
    margin: 0 auto;
  }

  .seamless_wrap li {
    line-height: 30px;
    word-break: break-all;
    font-size: 15px;
    margin-bottom: 15px;
  }

  .map_main {
    flex: 4;
  }

  #map {
    height: 100%;
  }
</style>
