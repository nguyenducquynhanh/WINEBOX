let listWines = [];
let cart = [];
let intoMoney = [];
let KEY_STORAGE_WINES = "listWines";
let cartData = "cartData";
let intoMoneyData = "intoMoneyData";

function init() {
    if (localStorage.getItem(KEY_STORAGE_WINES) != null) {
        listWines = getLocalStorage(KEY_STORAGE_WINES);
    } else {
        listWines = [
            new Wine(1, "ANGELINE PINOT NOIR", "Vermouth", 95, "http://livedemo00.template-help.com/woocommerce_48364/wp-content/uploads/2013/09/mcmanis_2009_chardonnay_1.png", 100,false),
            new Wine(2, "MCMANIS 2009 CHARDONNA", "Champagne", 100, "http://livedemo00.template-help.com/woocommerce_48364/wp-content/uploads/2013/09/angeline_pinot_noir_1.png", 100,false),
            new Wine(3, "FAIRHILLS MERLOT", "Vermouth", 80, "http://livedemo00.template-help.com/woocommerce_48364/wp-content/uploads/2013/09/fairhills_merlot_-_fair_trade_wine_1.png", 100,false),
            new Wine(4, "GR NV DIAMOND MOUNTAIN", "Red Wine", 99, "http://livedemo00.template-help.com/woocommerce_48364/wp-content/uploads/2013/09/gr_nv_diamond_mountain_cabernet_sauvignon_1.png", 100,false),
            new Wine(5, "LOS COWBOYS MALBEC", "White Wine", 120, "http://livedemo00.template-help.com/woocommerce_48364/wp-content/uploads/2013/09/los_cowboys_torrontes_1.png", 100,false),
            new Wine(6, "MAKULU ISWITHI PINOTAGE", "Vermouth", 120, "http://livedemo00.template-help.com/woocommerce_48364/wp-content/uploads/2013/09/makulu_iswithi_pinotage_1.png", 100,false),
            new Wine(7, "FAIRHILLS CABERNET SAUVIGNON", "Vermouth", 70, "http://livedemo00.template-help.com/woocommerce_48364/wp-content/uploads/2013/09/fairhills_cabernet_sauvignon_-_fair_trade_wine_1.png", 100,false),
            new Wine(8, "FAIRHILLS CHARDONNAY", "Champagne", 100, "https://livedemo00.template-help.com/woocommerce_48364/wp-content/uploads/2013/09/fairhills_chardonnay_-_fair_trade_wine_1.png", 100,false),
            new Wine(9, "MAKULU MOSCATO", "Champagne", 55, "http://livedemo00.template-help.com/woocommerce_48364/wp-content/uploads/2013/09/makulu_moscato_1.png", 100),
            new Wine(10, "FAIR TRADE WINE", "Vermouth", 120, "http://livedemo00.template-help.com/woocommerce_48364/wp-content/uploads/2013/09/fairhills_malbec_-_fair_trade_wine_1.png", 100,false),
        ];
        // saveToStorage(KEY_STORAGE_WINES);
        // localStorage.setItem(KEY_STORAGE_WINES, JSON.stringify(listWines))
        setLocalStorage(KEY_STORAGE_WINES,listWines);
    }

    if(localStorage.getItem(cartData) != null) {
        cart = getLocalStorage(cartData);
    }else {
        cart = [];
        setLocalStorage(cartData,cart);
    }

    if(localStorage.getItem(intoMoneyData) != null) {
        intoMoneyData = getLocalStorage(intoMoneyData);
    }else {
        intoMoney = [];
        setLocalStorage(intoMoneyData,intoMoney);
    }
    renderProducts();
    showCart();
}

function setLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
};

function getLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
};

function Wine(id, name, type, price, image, stock,cartStatus) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.price = price;
    this.image = image;
    this.stock = stock;
    this.cartStatus = cartStatus;
}

function renderProducts() {
    // let listWinesHtml = listWines.map(
    //     function (wine, index) {
    //         return `
    //         <div class="product">
    //         <img src="${wine.image}" alt="" id="image${index}">
    //         <div class="info">
    //             <div id="name${index}" class="name">${wine.name}</div>
    //             <div id="type${index}" class="type">${wine.type}</div>
    //             <div id="price${index}" class="price">$ ${wine.price}</div>
    //             <div id="stock${index}" class="stock"> ${wine.stock}</div>   
    //         </div>
    //         <button id="id"><i class="fas fa-cart-plus" id ="cart" onclick ="addToCart(${index})" ></i></button>
    //         </div>
    //         `
    //     });

    let listWinesHtml = listWines.map(
        function (wine, index) {
            let str = "";
            str += `
            <div class="product">
            <img src="${wine.image}" alt="" id="image${index}">
            <div class="info">
                <div id="name${index}" class="name">${wine.name}</div>
                <div id="type${index}" class="type">${wine.type}</div>
                <div id="price${index}" class="price">$ ${wine.price}</div>
                <div id="stock${index}" class="stock"> ${wine.stock}</div>   
            </div> `
            if (wine.cartStatus){
                str += ` <button id="id"><i class="fas fa-cart-plus cart1" id ="cart" onclick ="addToCart(${index})" ></i></button> </div>`
            } else {
            str += `<button id="id"><i class="fas fa-cart-plus" id ="cart" onclick ="addToCart(${index})" ></i></button>
            </div> ` }
            return str;
        });



    let elementProducts = document.getElementById("idProducts");
    elementProducts.innerHTML = listWinesHtml.join("");
}

function renderCart() {

}
// function saveToStorage(key, list){
//     localStorage.setItem(key, JSON.stringify(list)) 
// }
// function Cart(product){
//     this.product = product
//     this.number;
// }
// function addToCart(id){
//     let index = listWines.findIndex(
//         function(wine){
//             if(id==wine.id){
//                 return true;
//             }
//         }
//     );
//     let product = listWines[index];

//     let cartItem = new Cart(product);
//     listCarts.push(cartItem);


//     saveToStorage(KEY_STORAGE_CARTs, list);
// }

window.addEventListener('DOMContentLoaded', (event) => {

    var searchInput = document.querySelector("#idSearchText")
    // console.log(searchInput);
    searchInput.addEventListener('input', function (event) {
        console.log(event.target.value);
        let Search = event.target.value.trim().toLowerCase()
        let listProductDOM = document.querySelectorAll('.product')
        listProductDOM.forEach(item => {
            // console.log(item.innerText.toLowerCase().includes(txtSearch));
            if (item.innerText.toLowerCase().includes(Search)) {
                item.classList.remove('hide')
            } else {
                item.classList.add('hide')
            }
            // console.log(item.innerText)
        })
    })


});

function Cart(id, name, type, price, image, stock) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.price = price;
    this.image = image;
}

function FindIndexOfArr(arr1,index,arr2) {
    let result;
    for(let i = 0; i < arr2.length; i++) {
        if(arr2[i].name == arr1[index].name) {
            result = i;
            break;
        }
    }
    return result;
}

function addToCart(index) {
    if(!listWines[index].cartStatus){
        const newWine = new Wine();
        newWine.id = document.querySelector("#id").value;
        newWine.name = document.querySelector(`#name${index}`).innerHTML;
        newWine.type = document.querySelector(`#type${index}`).innerHTML;
        newWine.price = document.querySelector(`#price${index}`).innerHTML;
        newWine.stock = document.querySelector(`#stock${index}`).innerHTML;
        newWine.image = document.querySelector(`#image${index}`).src;
        newWine.totalMoney = document.querySelector(`#price${index}`).innerHTML;
        newWine.amount = 1;
        newWine.cartStatus = true;
    
        cart.unshift(newWine);
        listWines[index].stock -= 1;
        listWines[index].cartStatus = true; 
    }else {
        // let result;
        // for(let i = 0; i < cart.length; i++) {
        //     if(cart[i].name == listWines[index].name) {
        //         result = i;
        //         break;
        //     }
        // }
        let indexOfArr = FindIndexOfArr(listWines,index,cart);
        listWines[index].cartStatus = false;
        listWines[index].stock += cart[indexOfArr].amount;
        cart.splice(indexOfArr,1);
    }
    setLocalStorage(KEY_STORAGE_WINES,listWines);
    setLocalStorage(cartData,cart);
    renderProducts();

    if(cart.length != 0) {
        showCart();
        document.querySelector(".container1").style.display = '';
        document.querySelector(".container").style.marginLeft = '250px';
        
    }else {
        document.querySelector(".container1").style.display = 'none';
        document.querySelector(".container").style.marginLeft = '450px';
    }
}

function augmentProduct(index){
    let value = Number(document.getElementById(`numberOfProducts${index}`).value);
    value +=1;
    document.getElementById(`numberOfProducts${index}`).value = value;
    cart[index].amount++;
    let price = cart[index].price;  
    price =price.replace("$","");
    // console.log(price);
    let totalMoney = price * value;
    cart[index].totalMoney = `$${totalMoney}`;
    let indexOfArr = FindIndexOfArr(cart,index,listWines);
    listWines[indexOfArr].stock -=1;
    // cart[index].amount +=1
    setLocalStorage(cartData,cart);
    setLocalStorage(KEY_STORAGE_WINES,listWines);
    renderProducts();
    showCart();
};

function descreasedProduct(index) {
    if(Number(document.getElementById(`numberOfProducts${index}`).value) == 1){
        document.getElementById(`btn-descreased${index}`).disabled = true;
    }else {
    let value = Number(document.getElementById(`numberOfProducts${index}`).value);
    value -=1;
    document.getElementById(`numberOfProducts${index}`).value = value;
    cart[index].amount--;
    let price = cart[index].price;  
    price =price.replace("$","");   
    // console.log(price);
    let totalMoney = price * value;
    

    
    cart[index].totalMoney = `$${totalMoney}`;
    let indexOfArr = FindIndexOfArr(cart,index,listWines);
    listWines[indexOfArr].stock +=1; 
    setLocalStorage(cartData,cart);
    setLocalStorage(KEY_STORAGE_WINES,listWines);
    renderProducts();
    showCart();
    }
}

function showCart() {
    let str = "";
    let sum = 0;
    for(let index in cart) {
        let price = cart[index].totalMoney;
        price = price.replace("$","");
        sum += Number(price);
    }
    intoMoney[0] = sum;
    // console.log(intoMoney[0]);
    setLocalStorage(cartData,cart);
    setLocalStorage(intoMoneyData,intoMoney);
    cart.map(function(element, index){   
        str += `<div class="product" id="product1">
                    <img src="${element.image}"
                        alt="">
                    <div class="info">
                        <div id="name1" class="name">${element.name}</div>
                        <div id="type1" class="type">${element.type}</div>
                        <div id="price1" class="price">${element.price}</div>
                        <div id="amountProduct">
                            <div class="quantity-change" onclick="descreasedProduct(${index})"><button class="btn-change"
                                    id="btn-descreased${index}">-</button></div>
                            <input type="text" class="amountProduct" value="${element.amount}" id="numberOfProducts${index}" oninput="this.value = 
                                !!this.value && Math.abs(this.value) >= 0 ? Math.abs(this.value) : null"
                                onchange="checkInput(${index})" />
                            <div class="quantity-change" onclick="augmentProduct(${index})"><button
                                    class="btn-change">+</button>
                            </div>
                        </div>
                    </div>
                    <span class="intoMoney">${element.totalMoney}</span>
                </div>`
    }) 
    str += ` <div id="totalMoney">Tổng tiền:  <span>$${intoMoney[0]}</span></div>`
    document.querySelector("#idProducts1").innerHTML = str;
}

function checkInput(index) {
    value = Number(document.getElementById(`numberOfProducts${index}`).value);
    let indexOfArr = FindIndexOfArr(cart,index,listWines);
    if(value > (listWines[indexOfArr].stock + cart[index].amount)) {
        alert("Thật tiếc không còn đủ sản phẩm cho ban!")
    } else { 
    listWines[indexOfArr].stock -= (value - cart[index].amount);
    cart[index].amount = value;
    let price = cart[index].price;  
    price =price.replace("$","");
    // console.log(price);
    let totalMoney = price * value;
    cart[index].totalMoney = `$${totalMoney}`;
    setLocalStorage(cartData,cart);
    setLocalStorage(KEY_STORAGE_WINES,listWines);
    renderProducts();
    showCart();
    }
}