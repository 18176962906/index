var cart = new ShoppingCart();

function displayOrderList() {
    // 获取购物车数据
    let cartData = cart.getDataFromLocalStorage();
    // 获取购物车订单列表
    let orderList = cartData.orderList;
    // 遍历订单列表
    for (let i = 0; i < orderList.length; i++) {
        let order = orderList[i];
        // console.log(order)
        // 克隆一个样本节点

        let orderNew = document.createElement("div1");
        let node = document.createTextNode("这是一个新段落。");
        orderNew.appendChild(node);

        var element = document.getElementById("cartList");
        var child = document.getElementById("row");
        element.insertBefore(orderNew,child);
        // 设置一个新id
        //    orderList.id = order;
        // 挂接到父元素

        // 获取所有到数据节点data-name 依次将对应到数据送入节点对应属性

        // 移除新节点到隐藏属性 d-none
    }
}
displayOrderList();
