let carts= document.querySelectorAll('add-cart');

let products =[
    {
        name: 'GShock watches',
        tag: 'gshock watches',
        price : 50,
        incart: 0
    },
    {
        name: 'Timex watches',
        tag: 'timex watches',
        price : 90,
        incart: 0
    },
    {
        name: 'Fossil watches',
        tag: 'Fossil watches',
        price : 190,
        incart: 0
 
    }
];
for (let i=0; i<carts.length; i++) {
    carts[i].addEventListener('click', () => {
     cartNumbers(products[i]);
    })

}
 function onLoadCartNumbers(){
    let productNumbers= localStorage.getItem('cartNumbers ');
   if (productNumbers) {
    document.querySelector('.cart span').textContent = productNumbers;
   }
 }
function cartNumbers(product) {
    let productNumbers= localStorage.getItem('cartNumbers ');

    productNumbers=parseInt(productNumbers);
    if (productNumbers) {
        localStorage.setItem('cartNumbers' , productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers +1;
    } else {
    localStorage.setItem('cartNumbers' , 1);
    document.querySelector('.cart span').textContent = 1;
    } 
    setItems(product);
}
   function setItems(product) {
       let cartItems = localStorage.getItem('productsInCart');
       cartItems = JSON.parse(cartItems);
       console.log('My cartItems are ', cartItems);
       
       

       product.incart =1 ; 

     let cartItems = {
         [product.tag] : product
     }
       
       localStorage.setItem('productsInCart', JSON.stringify 
       (cartItems));

   }

  onLoadCartNumbers();