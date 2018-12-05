var products;//储存商品数据
//数据请求
var request=new XMLHttpRequest();
request.open('GET','products.json');
request.responseType='json';

request.onload=function(){
    if(request.status===200){
        products=request.response;
        console.log(products);
    }
};
request.send();

function initialize() {
console.log(shopping);}


