localStorage.setItem("key", "value");//存储变量名为key，值为value的变量 

localStorage.getItem("key");//获取存储的变量key的值

localStorage.removeItem("key")//删除变量名为key的存储变量




//商品类
class Product {
    constructor(id, title, price, imgSrc) {
        //商品类的成员
        this.id = id;
        this.title = title;
        this.price = price;
        this.imgSrc = imgSrc;
    }
}

//订单类2
class Order {
    constructor(product, qty, selectStatus) {
        //订单成员
        this.id = product.id;
        this.title = product.title;
        this.price = product.price;
        this.imgSrc = product.imgSrc;
        this.qty = qty;
        this.selectStatus = selectStatus
    }
}

//购物车数据类，用于记录购物车数据
//包括订单列表项包括：某类商品、商品数量小计
//商品包括：商品id、图片、名称、单价
class CartData {
    constructor() {
        this.orderList = new Array();
        this.units = 0;
        this.totalQt = 0;
        this.totalAmount = 0;
        this.units = 0;

    }
}

//购物车操作类
class ShoppingCart {
    //从本地存储中获取购物车数据
    getDataFromLocalStorage() {
        return localStorage.getItem('lzzyCart');
        //判断购物车是否为空
        if(lzzyCart == nill || lzzyCart == ''){
            return new CartData;
        }
        else {
            return JSON.parse(lzzyCart);
        }
    }
    //将购物车数据写入本地
    setDataToLocalSatorge(CartData) {
        var CartDataString = JSON.stringify(CartData);
        localStorage.setItem('test', CartDataString);

    }

}
