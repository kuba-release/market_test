    let products = [
        // {name: "Cs2 Прайм Авторег", cnt:221, price:2.9, img:"../svg icon pres/icon2cs.svg",cat: "cs", id:1, cart:0, section: "steam"},
        // {name: "Dota 2 перелив", cnt:200, price:2.9, img:"../svg icon pres/icon3dota.svg", cat:"dota", id:2, cart:0, section: "steam"}
        
    ]
    


    function createCard(product){
        return `<div class="table1Border">
                    <div class="table1Icon">
                        <img src="${product.img}" id="table1Icons">
                    </div>
                    <div class="card-content">
                    <div class="titleTable1"><h3>${product.name}</h3></div>
                    <div class="textTable1"><p>Excellent quality. Login:Pass:Email:EmailPass:Auth_token</p></div>
                    <div class="countTable">
                        <p>${product.cnt} шт.</p>
                    </div>
                    <div class="pricetoptable">
                        <p>$${product.price}</p>
                    </div>
                    </div>
                    <div class="buyTopSale">
                        <button class="btnCart">
                            <img src="../svg icon pres/buttoncart.svg" id="imgBtnCart">
                        </button>
                        <button class="btnBuy">Купить</button>
                    </div>
                </div>`
    }

    function card(category){
        let container = document.querySelector(".containerCards"); 
        container.innerHTML = "";
        let cnt = 0;
        let fillterProducts = products.filter(res => res.section == category)
        fillterProducts.forEach(
            product =>{
                container.innerHTML += createCard(product);
                cnt++;
            }
        )
        if(cnt == 0){alert("Товаров нет в наличии")}

    }
    function addCnt(){
        
    }
    function getSelectedCategory(){
        return localStorage.getItem("selectedCategory")
    }

    window.addEventListener('DOMContentLoaded', function()
    {
    let categoryGet = getSelectedCategory();
    
    // card(categoryGet);
    fetch("../base/cards.json")
        .then(response => response.json())
        .then(productsJSON => {
            products = productsJSON;
            card(categoryGet);}
            
        );
    });