const toys=[
{name:"Cuddle Bear",type:"plush",emoji:"🧸",price:1499},
{name:"Speed Racer",type:"vehicles",emoji:"🏎️",price:2199},
{name:"Magic Blocks",type:"learning",emoji:"🧩",price:1299},
{name:"Super Ball",type:"outdoor",emoji:"⚽",price:699},
{name:"Rocket Ship",type:"vehicles",emoji:"🚀",price:2499},
{name:"Cute Bunny",type:"plush",emoji:"🐰",price:1199},
{name:"Color Puzzle",type:"learning",emoji:"🎨",price:899},
{name:"Rainbow Kite",type:"outdoor",emoji:"🪁",price:1099}
];
let visible=[...toys],cart=[];
function render(){
document.getElementById("products").innerHTML=visible.map((t,i)=>`<article class="product"><div class="pic">${t.emoji}</div><h3>${t.name}</h3><p class="type">${t.type}</p><div class="priceRow"><span class="price">Rs. ${t.price.toLocaleString()}</span><button class="add" onclick="addToCart(${toys.indexOf(t)})">+ Add</button></div></article>`).join("");
}
function filterToys(type){visible=type==="all"?[...toys]:toys.filter(t=>t.type===type);render()}
function sortToys(){let v=document.getElementById("sort").value;if(v==="low")visible.sort((a,b)=>a.price-b.price);if(v==="high")visible.sort((a,b)=>b.price-a.price);render()}
function addToCart(i){cart.push(toys[i]);updateCart();toggleCart()}
function updateCart(){
document.getElementById("cartCount").textContent=cart.length;
document.getElementById("cartItems").innerHTML=cart.length?cart.map((t,i)=>`<div class="cartItem"><span class="emoji">${t.emoji}</span><div><b>${t.name}</b><br><small>Rs. ${t.price.toLocaleString()}</small></div><button class="remove" onclick="removeItem(${i})">Remove</button></div>`).join(""):"<p style='padding:25px 0;color:#777'>Your cart is empty.</p>";
document.getElementById("cartTotal").textContent=cart.reduce((s,t)=>s+t.price,0).toLocaleString();
}
function removeItem(i){cart.splice(i,1);updateCart()}
function toggleCart(){document.getElementById("cartPanel").classList.toggle("open");document.getElementById("overlay").classList.toggle("show")}
function checkout(){alert("Demo checkout — connect your payment/order system here.");}
render();updateCart();