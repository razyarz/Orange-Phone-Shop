

const cartBtn = document.querySelector('#cart-button');
const cartBox = document.querySelector('.cartBox');
const closeBtn = document.querySelector('#closeBtn');
  
  cartBtn.addEventListener('click', function() {
    cartBox.classList.add('active')
  });

  closeBtn.addEventListener('click', function() {
   cartBox.classList.remove('active')
  });



    let products = [
  {
   id: 1,  
   name: 'iPhone 12 Pro',
   tag: 'ip12p',
   price: 999.99,
   inCart: 0
  }, 

  {
   id: 2,  
   name: 'iPhone 12',
   tag: 'ip12',
   price: 799.99,
   inCart: 0
  },

  {
   id: 3,  
   name: 'iPhone 11',
   tag: 'ip11',
   price: 599.99,
   inCart: 0
  },

  {
   id: 4,  
   name: 'Galaxy Note 30',
   tag: 'gn30',
   price: 999.99,
   inCart: 0
  },

  {
   id: 5,  
   name: 'Galaxy S20',
   tag: 'gs20',
   price: 899.99,
   inCart: 0
  },
  
  {
   id: 6,  
   name: 'Galaxy Note 10',
   tag: 'gn10',
   price: 799.99,
   inCart: 0
  },

  {
   id: 7,  
   name: 'Google Pixel 5',
   tag: 'gp5',
   price: 999.99,
   inCart: 0
  },


  {
   id: 8,  
   name: 'LG V60 ThinQ',
   tag: 'lgv',
   price: 899.99,
   inCart: 0
  },


  {
   id: 9,   
   name: 'Moto G9 Power',
   tag: 'm9p',
   price: 699.99,
   inCart: 0
  }


];

const btn = document.getElementsByClassName('addcart')

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener('click', function(e) {
  const cartContainer = document.querySelector('.cart-items');
  let total = document.querySelector('.cart-total-price');
  total = 0;
  cartContainer.innerHTML += `

    <div class="cart-row">
      <div class="cart-item cart-column">
        <img class="cart-item-image" src="./images/${products[i].tag}.jpg" width="100" height="100">
        <span class="cart-item-title">${products[i].name}</span>
      </div>
        <span class="cart-price cart-column">$${products[i].price}</span>
      <div class="cart-quantity cart-column">
         <input class="cart-quantity-input" type="number" value="1">
         <button class="btn btn-danger" type="button">REMOVE</button>
      </div>
    </div>
    

  `

  
  })



}

 









const openNav = document.querySelector(".hamburger");
const closeNav = document.querySelector(".nav__close");
const nav = document.querySelector(".nav__list");

openNav.addEventListener("click", () => {
  const navLeft = nav.getBoundingClientRect().left;
  if (navLeft < 0) {
    nav.style.left = "0";
    document.body.classList.add("active");
  }
});

closeNav.addEventListener("click", () => {
  const navLeft = nav.getBoundingClientRect().left;
  if (navLeft === 0) {
    nav.style.left = "-40rem";
    document.body.classList.remove("active");
  }
});

// Smooth Scroll
const scrollLinks = [...document.querySelectorAll(".scroll-link")];

scrollLinks.forEach(link => {
  link.addEventListener("click", e => {
    const id = e.target.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    const position = element.offsetTop;

    window.scrollTo({
      left: 0,
      top: position,
    });
    nav.style.left = "-40rem";
    document.body.classList.remove("active");
  });
});








