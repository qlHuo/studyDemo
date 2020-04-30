/*
  1:歌曲搜索接口
    请求地址:https://autumnfish.cn/search
    请求方法:get
    请求参数:keywords(查询关键字)
    响应内容:歌曲搜索结果

  2:歌曲url获取接口
    请求地址:https://autumnfish.cn/song/url
    请求方法:get
    请求参数:id(歌曲id)
    响应内容:歌曲url地址
  3.歌曲详情获取
    请求地址:https://autumnfish.cn/song/detail
    请求方法:get
    请求参数:ids(歌曲id)
    响应内容:歌曲详情(包括封面信息)
  4.热门评论获取
    请求地址:https://autumnfish.cn/comment/hot?type=0
    请求方法:get
    请求参数:id(歌曲id,地址中的type固定为0)
    响应内容:歌曲的热门评论
  5.mv地址获取
    请求地址:https://autumnfish.cn/mv/url
    请求方法:get
    请求参数:id(mvid,为0表示没有mv)
    响应内容:mv的地址
*/
var app = new Vue({
  el: "#player",
  data: {
    // 歌曲查询关键字
    query: "",
    // 音乐列表
    musicList: [],
    // 音乐地址
    musicUrl: "",
    // 图片地址
    picUrl: "",
    // 热门评论
    hotComments: [],
    // 控制碟片是否旋转
    isPlaying: false,
    // MV的URL
    mvUrl: "",
    // 遮罩层
    isShow: false
  },
  methods: {
    // 歌曲搜索
    searchMusic: function () {
      //axios中回调函数中的this与当前作用域中的this的指向不一样。
      var that = this;

      // 使用axois获取接口数据
      axios.get('https://autumnfish.cn/search?keywords=' + this.query).then(function (response) {
        // console.log(response.data.result.songs);
        that.musicList = response.data.result.songs
      }, function (err) {
        console.log(err);
      })
    },
    // 歌曲播放
    playMusic: function (musicId) {
      // console.log(musicId);
      var that = this;
      // 获取歌曲地址
      axios.get('https://autumnfish.cn/song/url?id=' + musicId).then(function (response) {
        //console.log(response.data.data[0].url);
        that.musicUrl = response.data.data[0].url;
      }, function (err) {
        console.log(err);
      });

      // 获取歌曲详情
      axios.get('https://autumnfish.cn/song/detail?ids=' + musicId).then(function (response) {
        // console.log(response.data.songs[0].al.picUrl);
        that.picUrl = response.data.songs[0].al.picUrl;
      }, function (err) {
        console.log(err);
      });

      // 歌曲评论
      axios.get('https://autumnfish.cn/comment/hot?type=0&id=' + musicId).then(function (response) {
        console.log(response.data.hotComments);
        that.hotComments = response.data.hotComments;
      }, function (err) {
        console.log(err);
      });

    },
    // 歌曲播放
    play: function () {
      // console.log("play");
      this.isPlaying = true;
    },
    // 歌曲暂停
    pause: function () {
      // console.log("pause");
      this.isPlaying = false;
    },
    // MV播放
    playMv: function (mvid) {
      var that = this;
      axios.get('https://autumnfish.cn/mv/url?id=' + mvid).then(function (response) {
        console.log(response.data.data.url);
        that.isShow = true;
        that.mvUrl = response.data.data.url;
      }, function (err) {
        console.log(err);
      })
    },
    // 隐藏遮罩层
    hide: function () {
      this.isShow = false;
    }
  }
});
