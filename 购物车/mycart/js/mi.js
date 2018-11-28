// //抓取元素
// //抓取购物车商品数量
// var totalQty=document.getElementsByName('totalQty')[0];

// //获取所有加号按钮
// var increaseBtns=document.getElementsByName('increase');
// //为所有加号注册单击事件
// for(var i=0;i<increaseBtns.length;i++){
//     increaseBtns[i].addEventListener('click',increaseValue);
// }

// var ptyBtns=document.getElementsByName('qty');
// var decreaseBtns=document.getElementsByName('decrease');





// for(var i=0;i<decreaseBtns.length;i++){
//     decreaseBtns[i].addEventListener('click',decreaseValue);
// }








var btnList=document.querySelectorAll('.btn-group .btn');
var totalQty=document.getElementsByName('totalQty')[0];

for (const key in btnList) {
    if (btnList.hasOwnProperty(key)) {
        const element = btnList[key];
        switch(element.name){
            case 'increase':element.addEventListener('click',increaseValue);break;
            case 'decrease':element.addEventListener('click',decreaseValue);break;
            case 'addToCart':element.addEventListener('click',addToCart);break;
        }        
    }
}
function increaseValue(e){
      var qtyObj=  e.target.nextElementSibling;
      var qty=parseInt(qtyObj.innerText);
      qty++;
      qtyObj.innerText=qty;
      console.log(qty);        
}
function decreaseValue(e){
    var qtyObj=  e.target.previousElementSibling;
    var qty=parseInt(qtyObj.innerText);
   if(qty>1) qty--;
   else qty=0;
    qtyObj.innerText=qty;
    // console.log(qty);        
}




