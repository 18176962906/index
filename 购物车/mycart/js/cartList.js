var cart = new ShoppingCart();
console.log(cart);

function displayOrderList() {
    let cartData = cart.getDataFromLocalStorage();
    // 获取购物车json数据中的订单列表  
    let orderList = cartData.orderList;
    console.log(orderList);
    //找订单列表父元素
    let cartList = document.querySelector('#cartList');
    // 找样本节点
    let exmapleNode = document.querySelector('#orderExample');
    //当前订单数据
    for (let i = 0; i < orderList.length; i++) {
        let order = orderList[i];
        console.log(order);
        node = exmapleNode.cloneNode(true);
        cartList.appendChild(node);
        node.id = order.id;
        let imgNode = node.querySelector('[data-name="imgSrc"]');
        imgNode.src = 'images/' + order.imgSrc;
        //名称
        let titleNode = node.querySelector('[data-name="title"]');
        titleNode.textContent = order.title;
        //价格
        let priceNode = node.querySelector('[data-name="price"]');
        priceNode.textContent = order.price;
        //数量
        let qtyNode = node.querySelector('[data-name="qty"]');
        qtyNode.textContent = order.qty;
        //总价
        let subPriceNode = node.querySelector('[data-name="subPrice"]');
        subPriceNode.textContent = order.qty * order.price;

        //显示购物车所有总数据
        let unitsNode = document.querySelector('[data-name="units"]');
        cartData = cart.getDataFromLocalStorage();
        unitsNode.textContent = cartData.units;
        let selectedAmountNode = document.querySelector('[data-name="selectedAmount"]');
        selectedAmountNode.textContent = cart.getSelectedAmount().toFixed(2);
        let selectedQtyNode = document.querySelector('[data-name="selectedQty"]');
        selectedQtyNode.textContent = cart.getSelectedQty();

        node.classList.remove('d-none');
        let selectNode = node.querySelector('[data-operator="checkItem"]');
        selectNode.checked = order.selectStatus;
        console.log(selectNode);
        console.log(node);
    }
    function displaySelectedTotal() {

        //获取总数相关节点,并设置对应值
        
        let totalNode = cartRoot.querySelector(dataNameJson.units);
        totalNode.textContent = cart.getTotalUnits();
    
    
        totalNode = cartRoot.querySelector(dataNameJson.selectedQty);
        totalNode.textContent = cart.getSelectedQty();
    
        totalNode = cartRoot.querySelector(dataNameJson.selectedAmount);
        totalNode.textContent = (cart.getSelectedAmount()).toFixed(2);
    
    }
    // function regEvent (){
    //     let element = cartRoot.querySelector(openatorGlobal.clearAll);
    //     console.log()

    // }
}

displayOrderList();
displaySelectedTotal();
// regEvent();