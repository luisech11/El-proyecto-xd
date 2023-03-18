import getProducts from './helpers/getProducts.js'
import loader from './components/loader.js'
import products from './components/products.js'
import showcart from './components/showcart.js'
import showmenu from './components/showmenu.js'
import cart1 from './components/cart1.js'


/*UI Elements*/
/*Ocultar Loder*/
loader()
showmenu()
showcart()
const {bd,PrintProducts}= products(await getProducts())
//cart(bd,PrintProducts)
cart1(bd,PrintProducts)

