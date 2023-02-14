
let asideBar = document.querySelector('aside')
let cartCount = document.querySelector(".cart-count")
let closeIcon = document.querySelector(".closeIcon")



cartCount.addEventListener('click',e => {
    e.preventDefault()
    asideBar.classList.toggle('open')
})
closeIcon.addEventListener('click',e => {
    e.preventDefault()
    asideBar.classList.toggle('open')
})


// array of items 
const items = [{
    id:0,
    title:"Product 1",
    price:40,
    img:"images/pic1.jpg",
    amount:1
},
{
    id:1,
    title:"Product 2",
    price:25,
    img:"images/pic2.jpg",
    amount:1
},
{
    id:2,
    title:"Product 3",
    price:60,
    img:"images/pic3.jpg",
    amount:1
},
{
    id:3,
    title:"Product 4",
    price:30,
    img:"images/pic4.jpg",
    amount:1
},
{
    id:4,
    title:"Product 5",
    price:80,
    img:"images/pic5.jpg",
    amount:1
},
{
    id:5,
    title:"Product 6",
    price:55,
    img:"images/pic6.jpg",
    amount:1
}]

// render items 
let parentBox = document.querySelector('.parent-box')
let shopItems = ""
function renderItems() {
    items.forEach(item => {
        shopItems += `
        <div class="box">
                <img src="${item.img}" alt="" srcset="">
                <h4 class="product">${item.title} </h4>
                <h5 class="price">$${item.price}.00</h5>
                <div class="cart" data-id="${item.id}" >
                    <i class="fa-solid fa-cart-shopping"></i>
                </div>
    </div>
        `
        parentBox.innerHTML = shopItems
    })
}
renderItems()


// render cart items 
let cartItems = []
let cartItemsBody = ''

function renderCartItems() {
    cartItemsBody = ""
    cartItems.forEach(item => {
        cartItemsBody += `
        <tr>
                <td>${item.id}</td>
                <td> <img src="${item.img}" alt="" srcset=""> </td>
                <td>${item.title}</td>
                <td>
                    <span class="btn" onclick="updateCartItem('increase',${item.id})"> + </span>
                    <span class="amount"> ${item.amount} </span>
                    <span class="btn" onclick="updateCartItem('decrease',${item.id})"> - </span>
                </td>
                <td>${item.price}.00$</td>
                <td>${item.price * item.amount}.00$</td>
                <td><Button onclick="deleteCartItem(${item.id})">Delete</Button></td>
    </tr>

        `
        document.querySelector('tbody').innerHTML = cartItemsBody
    })
    // change span number
    document.querySelector('.cart-count span').innerHTML = cartItems.length
}
renderCartItems()







// array 
// add
let addCartButtons = document.querySelectorAll('.cart')


addCartButtons.forEach(btn => {
    btn.addEventListener('click',e => {
        let id = btn.dataset.id
        items.find(item => {
            if (item.id == id) {

               if (cartItems.some(cartItem => cartItem.id == id)) {
                    alert('product already added')
               }else{
                cartItems.push(item)
                renderCartItems()
               }
              
            }
        })
    })
})
//
function updateCartItem(action,id) {
    cartItems.find(item => {
        if (item.id == id) {
            if (action == 'increase') {
                item.amount += 1
            }else{
                if (item.amount > 1) {
                    item.amount -= 1
                }
            }

            renderCartItems()

        }
    })
}


// delete
function deleteCartItem(id) {
    cartItems = cartItems.filter(item => item.id != id)
    renderCartItems()
    if (cartItems.length == 0) {
        document.querySelector('tbody').innerHTML = ""
    }
}

function deleteAll() {
    cartItems = []
    document.querySelector('tbody').innerHTML = ""

}



// other side //


