function showcart() {
    const btncart=document.querySelector('.btn__cart')
    const cart=document.querySelector('.cart')
    btncart.addEventListener('click', function(e){
        cart.classList.toggle('show--cart')
    })
    cart.addEventListener('click', function(e){
        if (e.target.closest('.btn__close')) {
            cart.classList.remove('show--cart')
        }
    })
}
export default  showcart

