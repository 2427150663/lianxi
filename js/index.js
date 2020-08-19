(function(doc, win) {
    var docEl = doc.documentElement, //html
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize', //浜嬩欢鍚嶇О
        recalc = function() {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            if (clientWidth >= 750) {
                docEl.style.fontSize = '100px';
            } else {
                docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
            }
        };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    recalc();
})(document, window);

const $ = sel => {
    let all = document.querySelectorAll(sel);
    return all.length > 1 ? all : all[0];
}
let inx = 0;
domjinDu()

function domjinDu() {
    if (inx == 100) {
        $(".btn").style.transform = "scale(1)";
        $(".btn").style.opacity = 1;
        setTimeout(() => {
            $(".btn").classList.add("atm")
        }, 400)
        return
    }
    inx++;
    setTimeout(() => {
        $(".deg").innerHTML = inx + "%";
        domjinDu();
    }, 10)
}


// canvas 中播放视频
var v = document.getElementById("videoLive");
var c = document.getElementById("myCanvas");
let wid = window.innerWidth;
let het = window.innerHeight;
c.width = wid;
c.height = het;
ctx = c.getContext('2d');
//每20毫秒画一次图
v.addEventListener('play', function() {
    var i = window.setInterval(function() {
        ctx.drawImage(v, 0, 0, wid, het);
        //打印当前视频的播放时间
        //console.log(v.currentTime);
        //当视频结束的时候去掉循环
        if (v.ended) {
            clearInterval(i)
            $("#con2").classList.remove("hid");
        }
    }, 20);
}, false);

// 点击开启按钮
$(".btn").onclick = function() {
        $("#con1").classList.add("hid");
        $("#myCanvas").classList.remove("hid");
        v.play();
    }
    //打开惊喜
$("#con2").onclick = function(e) {
    var e = e || window.event;
    var target = e.target || window.srcElement;
    console.log(target)
}