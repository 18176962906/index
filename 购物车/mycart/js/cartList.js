var cart = new ShoppingCart();

function displayOrderList() {
    //找订单列表父元素
    let cartList= document.querySelector('#cartList');
    // 找样本节点
    let exmapleNode =document.querySelector('#orderExanple');
    // 遍历订单列表
    for (let i = 0; i < orderList.length; i++) {
        let order = orderList[i];
        console.log(order)
        //当前订单数据
        let order = orderList[i];
        console.log(order);
        //克隆样本节点形成当前订单节点
        nadm = exmapleNode.cloneNode(true);
        //挂接到父元素
        cartList.appendChild(nadm);

        //设置数据
        //节点ID
        node.id = order.id;

        //图像地址
        //找图像节点
        let imgNode = node.querySelector('')
        imgNode.src='images/'+order.imgSrc;

        node.classList.remove('d-none');


        //设选中状态
        //找选中节点
        let selectNode.checked = order.selectStatus;
        

    }
}
displayOrderList();
