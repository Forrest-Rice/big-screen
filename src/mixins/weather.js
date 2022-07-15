import AMapJS from 'amap-js'
export default {
    data() {
      return {
        weektext: '',//当前星期
        timetext: '',  //当前时间
        datetext: '',   //日期
        temperature: '', //天气
        //高德引入
        amapLoader: new AMapJS.AMapLoader({
          key:'c324f5ff276a2cba35ee8eee55d17b1d',//首次load key为必填
          version:'2.0',
          plugins:['AMap.IndexCluster','AMap.Scale','AMap.ToolBar','AMap.MarkerCluster','AMap.DistrictSearch','AMap.Autocomplete','AMap.PlaceSearch'],
        }),
        // 创建AMapUI Loader
        amapuiLoader: new AMapJS.AMapUILoader({   version: '1.1',
          plugins:['overlay/SimpleMarker']}),
      }
    },
    created() {
      this.getTime();
      this.currentTime();
      this.getWeater()
    },
    methods: {
      async getWeater(){
        var that = this;
        await this.amapLoader.load();
        await this.amapuiLoader.load();
        AMap.plugin('AMap.Weather',function(){//异步加载插件
          var Weather = new AMap.Weather();
          let regionId = that.getRegionId()
          Weather.getLive(regionId, function(err, data) {
            that.temperature= data.temperature
          });
        });
      },
      getTime:function(){
        var _this = this;
        let yy = new Date().getFullYear();
        let mm = new Date().getMonth()+1;
        let dd = new Date().getDate();
        let hh = new Date().getHours();
        let wk = new Date().getDay()
        let mf = new Date().getMinutes()<10 ? '0'+new Date().getMinutes() : new Date().getMinutes();
        let ss = new Date().getSeconds()<10 ? '0'+new Date().getSeconds() : new Date().getSeconds();
        let weeks = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
        _this.weektext = weeks[wk];
        _this.datetext = yy+'-'+mm+'-'+dd;
        _this.timetext = hh+':'+mf
      },
      currentTime(){
        setInterval(this.getTime,1000)
      },
      getRegionId(){
        let regionId = localStorage.userRegionId || "13";
        let regionCode = "130000"
        if (regionId.length === 2) {
          regionCode = regionId + '0000'
        } else if (regionId.length === 4) {
          regionCode = regionId + '00'
        } else {
          regionCode = regionId
        }
        return regionCode
      },
    }
}
