//设置视频宽高
var iWindowWidth;
var iWindowHeight;
window.onresize = function () {
    autoWH();
    myPlayer.style.width = iWindowWidth + "px";
    myPlayer.style.height = iWindowHeight + "px";
};
//获取videojs生成的video
var myPlayer = document.getElementById("videoLive");
//播放按钮
var oPlayBtn = document.getElementById("playBtn");
//获取视频盒子
var oVideoBox = document.getElementById("videoBox");
//获取滚动盒子
var oScrollBox = document.getElementById("scrollBox");
//遮罩层
var oShade = document.getElementById("shade");
//遮罩图片
var oPoster = document.getElementById("poster");
//图片加载完
window.onload = function () {
    oVideoBox.style.height = oPoster.offsetHeight + "px";
    oShade.style.height = oPoster.offsetHeight + "px";
};
//根据图片高度设置视频高度
var fScroll=new iScroll(oScrollBox, {hScrollbar: false, vScrollbar: false,bounce:false});
window.addEventListener('touchmove', function (e) {
    e.preventDefault();
}, false);
function autoWH() {
    //获取可视区宽度
    iWindowWidth = window.innerWidth;
    //获取可视区高度
    iWindowHeight = window.innerHeight;
    var iScrollH = 3 * iWindowWidth / 4;
    oScrollBox.style.top = iScrollH + "px";
    oScrollBox.style.height = iWindowHeight - iScrollH + "px";
    fScroll.refresh();
}
autoWH();
//播放按钮呗点击
oPlayBtn.onclick = function () {
    myPlayer.play();
    this.style.display = oPoster.style.display = oShade.style.display = "none";
};
//监听播放
myPlayer.addEventListener('play', function () {
    //alert("播放");
    console.log("播放");
}, false);
//监听暂停
myPlayer.addEventListener('pause', function () {
    //alert("暂停");
    console.log("暂停");
}, false);
//监听结束
myPlayer.addEventListener('ended', function () {
    //alert("结束");
    console.log("结束");
}, false);