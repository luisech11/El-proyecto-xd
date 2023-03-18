function getProducts() {
   return window.fetch('https://ecommercebackend.fundamentos-29.repl.co/').then((res)=> res.json()).then((data)=>data).catch((err)=>{console.log(err)})
}
/*async function getProducts(){
   try{

      const resp= await window.fetch('https://ecommercebackend.fundamentos-29.repl.co/')
      const data= resp.json()
      return data
      
   }catch{
      console.log(Error)
   }
*/



export default getProducts