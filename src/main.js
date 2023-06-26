const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const menu = $('.click')
const displayNav = $('.navbar_include')
const chartsDisplay = $$('.header_navbar-charts-item')
const btnCharts =  $('.header_navbar-charts-push')
const btnSlideLeft =   $('.btn-left')
const btnSlideRight =  $('.btn-right')

window.addEventListener('DOMContentLoaded', function () {
    toggleMenu()
    slideMain() 
    productRender()
})

// MENU DISPLAY
function toggleMenu() {
    menu.addEventListener('click', function () {
    displayNav.classList.toggle('visible')
    toggleCharts()
});
}

// CHARTS DISPLAY
function toggleCharts() {
    btnCharts.addEventListener('click', function () {
        console.log(123);
        const display = document.querySelector('.header_navbar-charts-select')
        const display1 = document.querySelector('.default')
        const display2 = document.querySelector('.push')

        display.classList.toggle('show-text')
        display1.classList.toggle('show-text')
        display2.classList.toggle('show-text')
    });
}

// BUTTONS SLIDE
let imgIndex = 0

function slideMain() {
    const slideImgs = $$('.container_slide-include')

    btnSlideRight.addEventListener('click', function () {
        let slideImgFirst = slideImgs[imgIndex]
        let slideImgSecond = slideImgs[imgIndex === slideImgs.length - 1 ? 0 : imgIndex + 1]

        slideImgFirst.classList.replace('first', 'second')
        slideImgSecond.classList.replace('second', 'first')

        imgIndex++;
        if (imgIndex >= slideImgs.length) {
            imgIndex = 0;
        }
        console.log(slideImgFirst, slideImgSecond);
    });

    btnSlideLeft.addEventListener('click', function () {
        let slideImgFirst = slideImgs[imgIndex]
        
        imgIndex--;
        
        if (imgIndex < 0) {
            imgIndex = slideImgs.length - 1
        }
        let slideImgSecond = slideImgs[imgIndex]

        slideImgFirst.classList.replace('first', 'second')
        slideImgSecond.classList.replace('second', 'first')

    });
}

function slideShow() {
    const slideImgs = $$('.container_slide-include')

    let slideImgFirst = slideImgs[imgIndex]
    let slideImgSecond = slideImgs[imgIndex === slideImgs.length - 1 ? 0 : imgIndex + 1]

    slideImgFirst.classList.replace('first', 'second')
    slideImgSecond.classList.replace('second', 'first')

    imgIndex++;
    if (imgIndex >= slideImgs.length) {
        imgIndex = 0;
    }

    setTimeout(slideShow, 3200)
}

// RENDER-ITEM
const shopItems = [
    {
        id: 'sp1',
        title: 'Sofa Lorem ipsum,',
        img: './images/prd1.jpg',
        price:  '3400',
    },
    {
        id: 'sp2',
        title: 'Sofa Lorem ipsum,',
        img: './images/prd2.jpg',
        price:  '1200',
    },
    {
        id: 'sp3',
        title: 'Sofa Lorem ipsum,',
        img: './images/prd3.jpg',
        price:  '9200',
    },
    {
        id: 'sp4',
        title: 'Sofa Lorem ipsum,',
        img: './images/prd4.jpg',
        price:  '1700',
    },
    {
        id: 'sp5',
        title: 'Sofa Lorem ipsum,',
        img: './images/prd5.jpg',
        price:  '8400',
    },
    {
        id: 'sp6',
        title: 'Sofa Lorem ipsum,',
        img: './images/prd6.jpg',
        price:  '4300',
    },
    {
        id: 'sp7',
        title: 'Sofa Lorem ipsum,',
        img: './images/prd7.jpg',
        price:  '2700',
    },
    {
        id: 'sp8',
        title: 'Sofa Lorem ipsum,',
        img: './images/prd8.jpg',
        price:  '1800',
    },
];

function productRender() {
const gridProduct = $('.grid-wrap-item')

const shop = shopItems.map((shop) => {

    let { id, title, img, price } = shop

    return `
    <div id=${id} onmouseover="onMouseHover(this.id, this)" onmouseout="onMouseOut(this.id, this)" class="home_product">
        <img class="home_product-img" src=${img} alt="">
        <div class="home_product-des">
            <h3 class="home_product-text">${title}</h3>
            <p class="home_product-price">$${price}</p>
        </div>
        <div id=${id} class="item-box__item">
            <div id=${id} onclick="addCartItem(this.id)" class="cart-wrap">
                <i class="fas fa-shopping-cart"></i> ADD TO CART
            </div>
            <div class="box-inner">
                <a href="" class="box-inner__item-icon wishlist">
                    <i class="fas fa-heart"></i>
                    <div class="icon-script">Add to Wishlist</div>
                </a>
                <a href="" class="box-inner__item-icon compare">
                    <i class="fas fa-random"></i>
                    <div class="icon-script">Compare</div>
        
                </a>
                <a id=${id} onclick="onViewModal(this.id, this)" class="box-inner__item-icon view">
                    <i class="fas fa-eye"></i>
                    <div class="icon-script">Quick View</div>
                </a>
            </div>
        </div>
    </div>
    `
    }).join('')
    gridProduct.innerHTML = shop
    onMouseHover()
    scrollItem()
}

// ONMOUSEHOVER
function onMouseHover(id, element) {
    // console.log(y);
            // console.log(element);

    shopItems.forEach((item) => {
        if (id == item.id) {
            element.classList.add('first')
            const box = element.querySelector('.item-box__item')
            // console.log(box);
            box.classList.add('first')
        }
    })
}

function onMouseOut(id, element) {
    shopItems.forEach((item) => {
        if (id == item.id) {
            element.classList.remove('first')
            const box = element.querySelector('.item-box__item')
            box.classList.remove('first')
        }
    })
}

function onViewModal() {
    const modalView = $('.modal_view')
    const styles = $('.modal_view-page')
    // console.log(styles);

    if (styles) {
        modalView.classList.add('page')
        styles.style.display = 'block'
    }
}

function removeModal() {
    const modalView = $('.modal_view')
    const styles = $('.modal_view-page')
    
    modalView.classList.remove('page')
    styles.style.display = 'none'
}

function onMouseModal(id) {
    const modalImg = $('.product_left-select')
    // console.log(id);
    shopItems.forEach((item) => {
        const arrImg = item.img
        // console.log(arrImg);
        if (id === item.id) {
        console.log(arrImg);
            console.log('checked');
            modalImg.src = arrImg
        }
    })
}
// SCROLL ON ITEM 
function scrollItem() {
    const btnContainer = document.querySelectorAll('.container_btn')
    const homeFillter = document.querySelector('.home_fillter')
    btnContainer.forEach((item) => {
    item.addEventListener('click', function () {
            homeFillter.scrollIntoView({behavior: "smooth"})
        })  
    })
}

// CART ITEM PUSH-DELETE-QUNTITY
const btnCart = document.querySelector('.btn_cart')
const cartFixed = document.querySelector('.button_cart-main')
const shopCart = document.querySelector('.shop_cart') 
const shopCartItem = document.querySelector('.shop_cart-include')
const shopCollection = document.querySelector('.shop_cart-collection')
const closeBtn = document.querySelector('.close')
const price = document.querySelector('.price-cart')

let newProduct = []

btnCart.addEventListener('click', function () {
    cartFixed.classList.add('up')
    shopCart.classList.add('page')
    shopCartItem.classList.add('display')
})

closeBtn.addEventListener('click', function () {
    cartFixed.classList.remove('up')
    shopCart.classList.remove('page')
    shopCartItem.classList.remove('display')
})

function addCartItem(id) {
    let select = id

    let search = newProduct.find((ex) => {
        return ex.id === id
    })

    if (search === undefined) {
        newProduct.push({
            id: select,
            item: 1
        })
    }else {
        search.item += 1
    }
    addDisplayCart()
}

function addDisplayCart() {
    if (newProduct.length != 0) {
        let displayCart = newProduct.map((item) => {
        let find = shopItems.find((sp) => {
            return sp.id === item.id
        }) || []

        return `
            <div id=${item.id} class="shop_cart-item">
                <div class="cart-item">
                    <img class="cart-item-image" src="${find.img}" width="100" height="100">
                    <div class="cart-item-title">${find.title}</div>
                </div>
                <div class="cart-price">
                    <div class="price">
                        $${find.price}
                    </div>
                </div>
                <div class="cart-quantity">
                    <button id=${item.id} onclick="decrease(this.id)" class="btn-decrease" type="button">
                        <i class="fa-solid fa-chevron-left"></i>
                    </button>
                    <div id=${item.id} class="quantity">${item.item}</div>
                    <button id=${item.id}  onclick="increase(this.id)" class="btn-increase" type="button">
                        <i class="fa-solid fa-chevron-right"></i>
                    </button>
                </div>
                <div class="cart-remove">
                    <button id=${item.id} onclick="removeCart(this)" class="btn-danger" type="button">REMOVE</button>
                </div>
            </div>
        `
    }).join('')
    shopCollection.innerHTML = displayCart
    }
    total()
}

function total() {
    if (newProduct.length !== 0) {
        let coin
        let amount = newProduct.map((x) => {
                let search = shopItems.find((y) => y.id === x.id) || [];
                // console.log(typeof parseInt(search.price));
                coin = parseInt(search.price)
                
                return coin * x.item;

            }).reduce(function (x, y) {
                // console.log(y);
                return x + y
            }, 0);
        price.innerHTML = `$${amount}`;
    }
    // console.log(newProduct);
}

function increase (id) {
    let search = newProduct.find((item) => {
        return item.id == id
    }) || [];

    search.item ++
    console.log(newProduct);
    addDisplayCart()
}

function decrease (id) {
    let search = newProduct.find((item) => {
        return item.id == id
    }) || [];

    checked = search.item--
    console.log(newProduct);
    addDisplayCart()
}

function removeCart(element) {
    let select = element.parentElement.parentElement
    let checked = select.id

    if (select) {
        select.remove()
        newProduct = newProduct.filter((item) => {
            return item.id != checked
        })
    }
    if (newProduct.length === 0) {
        price.innerHTML = `?`
    }
    total()
    // console.log(newProduct);
}





