// //css 选择器--document.querySelector（）
// var img4=document.querySelector('#images>a:nth-child(4)');
// //ID--document.getElementById（）
// var img4=document.getElementById('imgaes').children[4];
// //类名--document.getElementsByClassName（）
// var img4=document.getElementsByClassName('hiddenImg')[3];
// //标签名--documrnt.getElementsByTagName（）
// var img4=documrnt.getElementsByTagName('a')[4];

// console.log(img4);


// 获取一组带超链接的图像

var imagesA=document.getElementById("images").children;
// console.log(imagesA);

//获取一组li文本

// var txtList = document.querySelector(".top").children;
var txtList = document.querySelectorAll(".top>li");
console.log(txtList)

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


var currentNo=0;//当前显示图片编号

// 利用计时器间隔1S，显示1张图像，其余图像隐藏
function changeImg(){
    //排他原理，先去掉同类，同类图片透明度0（.hiddenImg）
    // for(var i=0;i<imagesA.item.length;i++){
    //     imagesA[i].className="hiddenImg";
    //     console.log(imagesA[i]);


    var nodeLength=txtList.length
    for(var i=0;i<nodeLength;i++){
        imagesA[i].className="hiddenImg";
        txtList[i].className="normalColor"
        // button[i].className="btn"


        // console.log(imagesA[i]);
    

    }

    // // 或者
    // for(const item of imagesA){
    //     item.className="hiddenImg";
    // }

//再突出自己, 当前图片透明度1（.displayImg）
    imagesA[currentNo].className="displayImg"
    txtList[currentNo].className="heighlightColor";
    // button[currentNo].className=""
//换个元素，为下一次计时器调用做准备
    if(currentNo<7) {currentNo++;} 
    else{
        currentNo=0;
    }  
    // console.log(currentNo);
}
//网页加载后启动定时器
var timer=window.setInterval(changeImg,1000);

//鼠标移出后移除定时器
function stopChange(){
    window.clearInterval(timer);
}
//鼠标移出后重设定时器
function startChange(){
    timer=window.setInterval(changeImg,1000);
}

//获取sliderDIV以注册移入移出事件
var sliderDiv=document.querySelector(".slider");
// console.log(imagesADiv);
//为sliderDIV注册移入移出事件
sliderDiv.addEventListener('mouseover',stopChange);
sliderDiv.addEventListener('mouseout',startChange);

//为所有文本li注册鼠标移入事件，移入之后
for(var i=0;i<txtList.length;i++){
txtList[i].addEventListener('mouseover',gotoImg);

//添加自定义属性no 记录当前li的编号
txtList[i].no=i;
// console.log(txtList[i]);

}
function gotoImg(){
    //获得当前显示图像的编号/文本编号  this 是当前事件发生的本体
    console.log(this.no);
    currentNo=this.no;
    //调用更换图片/文本函数
    changeImg();
}


// var btnleft=document.querySelectorAll('btn');
var leftButton=document.querySelector('.leftButton');
var rightButton=document.querySelector('.rightButton');
console.log(leftButton);

leftButton.addEventListener('click',leftImg);
rightButton.addEventListener('click',rightImg);

function leftImg(){
    
    if(currentNo>0){
        currentNo--;
    }
    else{
        currentNo=7;
    }
    console.log(currentNo);
    changeImg();
}

function rightImg(){
    if(currentNo<7) {currentNo++;} 
    else{
        currentNo=0;
    }  
    console.log(currentNo);
    changeImg();
}