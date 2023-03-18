function cart(bd,PrintProducts) {
  let  cart = []

  const productsDom = document.querySelector('.products__container')
  const notifyDom = document.querySelector('.notify')
  const cartDom = document.querySelector('.cart__body')
  const countDom = document.querySelector('.cart__count__item')
  const totalDom = document.querySelector('.cart__total__item')
  const checkoutDom = document.querySelector('.btn__buy')

    function pintarcarro() {
        let htmlcart = ''
        console.log('carrito'+cart)
        if(cart.length===0){

            htmlcart += ` 
            <div class="cart__empty">
                        <i class='bx bx-cart-download'></i>
                        <p class="cart__empty__text">No hay Productos en el carrito</p>
                    </div>  `

            notifyDom.classList.remove('show--notify')
        }
        else{
            notifyDom.classList.add('show--notify')

            for (const item of cart) {
                const product= bd.find(p => p.id ===item.id)

                htmlcart += ` <article class="article">
                <div class="article__image">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="article__content">
                    <h3 class="article__title">${product.name}</h3>
                    <span class="article__price">$${product.price}</span>
                    <div class="article__quantity">
                        <button type="button" class="article__quantity_btn article__minus" data-id="${item.id}">
                            <i class='bx bx-minus'></i>
                        </button>
                        <span class="article__quantity_text">${item.qty}</span>
                        <button type="button" class="article__quantity_btn article__plus" data-id="${item.id}">
                            <i class='bx bx-plus'></i>
                        </button>
                    </div>
                    <button type="button" class="article__quantity_btn remove_from_cart" data-id="${item.id}">
                        <i class='bx bx-trash'></i>
                    </button>
                </div>

            </article>
                `

            }
        }
        cartDom.innerHTML=htmlcart
        notifyDom.innerHTML=duma()
        countDom.innerHTML=duma()
        totalDom.innerHTML=total()
console.log('items'+duma())
//console.log('items'+total())
    }
    function agregar(id, qty = 1) {
        const itemFirnfdd = cart.find(i => i.id === id)
        if (itemFirnfdd) {
            console.log('ya esta:' + id)
            itemFirnfdd.qty += qty
        }
        else {
            console.log('no esta' + id)
            cart.push({ id, qty })
        }
        pintarcarro()
    }
   
    function modifica(id,qty=1){
        const itemFirnfdd = cart.find(i => i.id === id)
        const res= itemFirnfdd.qty - qty
        if (res>0) {
            console.log('quedan con el id'+id)
            itemFirnfdd.qty -= qty
        }
        else{
            console.log('no quedan:'+id)
            cart=cart.filter(i=>i.id !== id)
        }
        pintarcarro()
    }
   
    function borrar(id) {
        cart=cart.filter(i=>i.id !==id)
        console.log('borra'+id)
        pintarcarro()
    }
   

    function duma(){
        let suma=0
        for (const item of cart) {
            suma +=item.qty
            
        }
        return suma
    }
    function total() 
    {
    let res=0
    for (const item of cart) {
        const valor= bd.find(p => p.id === item.id)
        res += item.qty * valor.price
    }
    return res  
    }

    function venta() {
        for (const item of cart) {
            
            const valor= bd.find(p => p.id === item.id)
            valor.quantity -=item.qty
        }
        
        cart=[]
        pintarcarro()
        PrintProducts()
        window.alert('muchas pay ')
    }
   

    pintarcarro()
    
    /*eventos*/
    
    productsDom.addEventListener('click', function (e) {
        if(e.target.closest('.add--to--cart')){
            const id = +e.target.closest('.add--to--cart').dataset.id
            agregar(id)
        } 
        
    })
    

    cartDom.addEventListener('click', function (e) {  
        if (e.target.closest('.article__minus')) {
            const   id = +e.target.closest('.article__minus').dataset.id
            modifica(id)
        }
    })
        cartDom.addEventListener('click', function (e) {
            if (e.target.closest('.article__plus')) {
                const  id = +e.target.closest('.article__plus').dataset.id
                agregar(id)
            }
            
           
        })

        cartDom.addEventListener('click', function (e) {
            if (e.target.closest('.remove_from_cart')) {
                const  id = +e.target.closest('.remove_from_cart').dataset.id
                borrar(id)
            }
            
           
        })

        checkoutDom.addEventListener('click', function (e) {
           venta()
            
           
        })
       
}


export default cart