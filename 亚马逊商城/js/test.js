var timer;//设计计时器变量

//启动定时器函数定义--若在启动定时器时有很多附加操作可以一并写入该函数。
//若启动定时器动作单一，可以直接嗲偶哦那个window定时器
function startTimer(speed){
    timer = window.setInterval(changeNum,speed);
}
// //调用计时器，使程序从一开始就执行变化
startTimer(1000);

//获取h2元素
var h2Obj = document.querySelector('h2');
var imgObj=document.querySelector('h2>img');
console.log(imgObj);
//设置当前变化的号码变量及初值
var currentNo = 0; 
// var flag = true;      

//定义变化数字函数，0-9，到达9后变化到0
function changeNum() {
    if (currentNo < 8) currentNo++;
    else currentNo = 1;
    h2Obj.innerHTML='<img src="images/0'+currentNo+'.jpg "alt=""></img>';
    //h2Obj.textContent = currentNo;//节点文本内容
    // console.log(currentNo);
}
console.log(timer);
//获取控件按钮
var btnObj = document.getElementById('btnObj');
console.log(btnObj);
//定义启动定时器函数，函数功能为启动定时器的同时改变按钮的显示文本
function startChange(){
    startTimer(500);
    btnObj.textContent="停止";
}

//定义停止定时器函数，函数功能为停止定时器的同时改变按钮的显示文本
function stopChange(){
    window.clearInterval(timer);
    btnObj.textContent="启动";
}
//为按钮添加鼠标移入移出事件
btnObj.addEventListener('mouseover',stopChange);
btnObj.addEventListener('mouseout',startChange);

// //css 选择器--document.querySelector（）
// var img4=document.querySelector('#images>a:nth-child(4)');
// //ID--document.getElementById（）
// var img4=document.getElementById('imgaes').children[4];
// //类名--document.getElementsByClassName（）
// var img4=document.getElementsByClassName('hiddenImg')[3];
// //标签名--documrnt.getElementsByTagName（）
// var img4=documrnt.getElementsByTagName('a')[4];

// console.log(img4);


// //行内样式实现换显示样式

// //26行元素隐藏
// imagesA[0].style.display="none";
// //30行元素显示
// imagesA[4].style.display="block";

// //通过更换CSS类名来实现更换样式

// //26行元素隐藏
// imagesA[0].className="hiddenImg"
// //30行元素显示
// imagesA[0].className="displayImg"



    //排他原理，先去掉同类，同类图片透明度0（.hiddenImg）
    // for(var i=0;i<imagesA.item.length;i++){
    //     imagesA[i].className="hiddenImg";
    //     console.log(imagesA[i]);
