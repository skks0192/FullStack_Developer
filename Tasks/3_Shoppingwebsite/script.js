const products=[
    { id:1,image:"https://m.media-amazon.com/images/I/510uTHyDqGL._AC_UF1000,1000_QL80_.jpg",name:"Laptop",price:80000,},
    { id:2,image:"https://vasanthandco.in/UploadedFiles/productimages/20251022012320-71BiI-RQ--L-_SL1500_.jpg",name:"Phone",price:50000,},
    { id:3,image:"https://hammeronline.in/cdn/shop/files/Bash_2.0_Bluetooth_Headphones.webp?v=1726899059",name:"Headphones",price:2000,},
    { id:4,image:"https://www.intex.in/cdn/shop/files/Nova_1024x1024.png?v=1720503757",name:"Mouse",price:1500,},
    { id:5,image:"https://images-cdn.ubuy.co.in/6937d434f15a63ade90e413f-snpurdiri-60-wired-gaming-keyboard-rgb.jpg",name:"Keyboard",price:1200,},
    { id:6,image:"https://images-cdn.ubuy.co.in/6938032359dc944d3e05a166-ibuypower-pro-gaming-pc-computer-desktop.jpg",name:"PC",price:10000},
    { id:7,image:"https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/C28489s.jpg?im=Resize,width=750",name:"Shoes",price:250},
    { id:8,image:"https://images.meesho.com/images/products/370918460/poyzg_512.webp?width=512",name:"Sandel",price:500},
    { id:9,image:"https://sunglassic.com/cdn/shop/files/sunglassic-swiftor-gun-black-green-premium-shot-sunglasses.jpg?v=1766060413&width=2000",name:"Sunglass",price:100},
    { id:10, image:"https://images-na.ssl-images-amazon.com/images/I/61BnfS+ovqL._AC_UL600_SR600,600_.jpg",name:"Jacket",price:1200},

];
let cart=[];

// --------------------------------------display Products---------------------------------
function displayproduct(filterText=""){
    const container=document.getElementById("productlist");
    container.innerHTML="";


    // filter product by search text
    const filteredProducts=products.filter(p=>
        p.name.toLowerCase().includes(filterText.toLowerCase())
    );

    filteredProducts.forEach(p =>{
        const card =`<div class="card ">
                      <img src="${p.image}" alt="images"/>
                      <h2>${p.name}</h2>
                      <p>Price:${p.price}</p>
                        <button onclick="addToCart(${p.id})">Add to Cart</button>
                      </div> `;
            container.innerHTML+= card;
    });
}
// ---------------------------------------add to cart--------------------------------
function addToCart(id){
    const product=products.find(p => p.id === id);
    const existingProduct=cart.find(item=> item.id === id);

    if(existingProduct){
        existingProduct.quantity +=1;
    }
    else{
        cart.push({ ...product,quantity:1}); 
    }
    displayCart();

    document.querySelector(".div").style.display="block";
}

// -------------------------------------------remove form cart-----------------------------------
function removeFromCart(id){
    cart=cart.filter(item =>item.id !== id);
    displayCart();
}

// ---------------------------------------------updatequantiti(+/-)------------------------------------------
function updateQuantity(id,change){
    const item=cart.find(i => i.id === id);
    if(item){
        item.quantity +=change;

        if(item.quantity <=0){
            removeFromCart(id);
        }
    }
    displayCart();
    }

    // ----------------------------------------------calculate total----------------------------------
    function calculateTotal(){
        let totalItems=0;
        let totalPrice=0;

        //using+,*, and camparison operators
        cart.forEach(item =>{
            totalItems += item.quantity;
            totalPrice +=item.price*item.quantity;
        });
        
        // display total
        const total=document.getElementById("total");
        total.innerHTML=`Total Items:${totalItems} | Total Price:${totalPrice}`;

        // return values(optional)
        return{totalItems,totalPrice};
    }


// --------------------------------------------display cart-------------------------------------------
function displayCart(){
    const cartContainer=document.getElementById("cartItem");
    cartContainer.innerHTML="";

    cart.forEach(item =>{
        const subtotal=item.price*item.quantity;
        const cartItem =`<div class="cart-item">
            <span>${item.name}</span>
            <div>
            <button onclick="updateQuantity(${item.id},-1)">-</button>
            <span>${item.quantity}</span>
            <button onclick="updateQuantity(${item.id},1)">+</button>
            <button onclick="removeFromCart(${item.id})">Remove</button>
            </div>
            <span>Subtotal:${subtotal}</span>
            </div>`;
            cartContainer.innerHTML+=cartItem;
    });

    //recalculate totals after every update
    calculateTotal();
}

// ---------------------------------------search functionality-----------------
document.getElementById("searchbar").oninput=function(e){
    const text =e.target.value;
    displayproduct(text); //show filtered products live
};

// initial call
displayproduct();

