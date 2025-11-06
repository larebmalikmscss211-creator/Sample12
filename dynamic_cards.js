let products=[
    
    {
        name:"p1",price:1.20,image:"b1.png"
    },
       {
        name:"p2",price:1.20,image:"b2.png"
    },
       {
        name:"p3",price:1.20,image:"b3.png"
    }
]
let grid=document.getElementById('productGrid');

products.forEach(pro=>{
    let card=document.createElement('div');
    card.className='product';
    card.innerHTML=`
    <img src="${pro.image}" alt="${pro.name}">
<h3>${pro.name}</h3>
<p>${pro.price}</p>
<button class="addtocart">Add to cart</button>
    `

    grid.appendChild(card)
});


let b=document.querySelectorAll('.addtocart');
b.forEach(button=>{
    button.addEventListener('click',function(){
        this.textContent='Added to cart';
        this.disabled=true;
        this.style.color='red'
    });
});

let c=document.querySelectorAll('.product')
c.forEach(card=>{
    card.style.backgroundColor="blue";
    card.style.color="white";
    card.style.border='2px solid black';
    card.style.borderRadius='20%'
    card.style.width='500px';
    card.style.margin='10px';
    card.style.textAlign='center'

})