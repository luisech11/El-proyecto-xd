function products(products) {
    const bd = [...products]

    function PrintProducts() {
        const productsDom = document.querySelector('.products__container')
        let htmlProduct = ' '
        for (let product of bd) {
            htmlProduct += `
            <article class="product">
                    <div class="product__image">
                        <img src="${product.image}" alt="${product.name}">
                    </div>
                    <div class="product__content">
                        <button type="button" class="product__btn add--to--cart" data-id="${product.id}">
                            <i class="bx bx-cart-download"></i>
                        </button>
                        <span class="product__price">${product.price}</span>
                        <span class="product__stock">Disponibles: ${product.quantity}</span>
                        <h3 class="product__title">${product.name}</h3>
                    </div>
                </article>           
        `
        }
        productsDom.innerHTML= htmlProduct
    }
    PrintProducts()
    return {
        bd,
        PrintProducts
    }
}
export default products