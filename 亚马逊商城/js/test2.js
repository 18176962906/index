//初始化

//---------获取相关元素--------------
//获取sliderDIV以注册移入移出事件
var sliderDiv=document.querySelector(".slider");
// 获取一组带超链接的图像
var imagesA=document.getElementById("images").children;
//获取一组li文本
var txtList = document.querySelectorAll(".top>li");
//上一张下一张控制按钮
var leftButton=document.querySelector('.leftButton');
var rightButton=document.querySelector('.rightButton');


//-------------初始化控制变量------------------
//当前显示图片编号
var currentNo=0;
//图片/文本总数
const nodeLength = 8;



//--------------构建功能函数----------------


//显示高亮当前某张图片/文本
function changeImg(){
    //排他原理1将同类设置为同意状态
    // var nodeLength=txtList.length
    for(var i=0;i<nodeLength;i++){
        //同类图片透明度0（.hiddenImg）
        imagesA[i].className="hiddenImg";
        //同类文本设置正常非高亮
        txtList[i].className="normalColor"
    }
    //排他原理2，突出自己，当前图片透明度1（.displayImg）
    imagesA[currentNo].className="displayImg"
    //排他原理2，文本高亮
    txtList[currentNo].className="heighlightColor";
}

//--------------左向控制编号变化（当前编号）-------------
function leftImg(){
    
    if(currentNo>0){ currentNo--; }
    else{
        currentNo= nodeLength-1;
    }
}

//--------------右向控制编号变化（当前编号++）--------------
function rightImg(){
    if(currentNo< nodeLength-1) {currentNo++;} 
    else{
        currentNo=0;
    }  
}

//---------左向换片/文本------------
function leftImgGo(){
    leftImg();
    changeImg();
}


//--------换向换片/文本------------
function rightImgGo(){
    rightImg();
    changeImg();
}

//停止计时器
function stopChange(){
    window.clearInterval(timer);
}
//启动记时器
function startChange(){
    timer=window.setInterval(changeImgGo,1000);
}

//切换到编号文本/图片
function gotoImg(){
    currentNo=this.no;
    changeImg();
}

//---------------为各大元素增加事件------------
//为sliderDIV注册移入移出事件
sliderDiv.addEventListener('mouseover',stopChange);
sliderDiv.addEventListener('mouseout',startChange);


//为所有文本li注册鼠标移入事件
for(var i=0;i<txtList.length;i++){
    txtList[i].addEventListener('mouseover',gotoImg);
    //添加自定义属性no  记录当前li的编号
    txtList[i].no = i;
}

//上下一张注册事件
leftButton.addEventListener('click',leftImgGo);
rightButton.addEventListener('click',rightImgGo);

//网页加载后启动定时器，每隔1秒调用changeImgGo（）换片
var timer=window.setInterval(rightImgGo,1000);