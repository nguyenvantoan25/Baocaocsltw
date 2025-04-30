let currentIndex = 0; // Chỉ số của sản phẩm hiện tại

const products = [
    {
        img: 'https://bizweb.dktcdn.net/thumb/large/100/312/616/products/12.jpg?v=1525922725847',
        name: 'Nước hoa DG',
        priceStart: '100.000đ',
        priceEnd: '150.000đ',
        discount: '-33%',
    },
    {
        img: 'https://bizweb.dktcdn.net/thumb/large/100/312/616/products/13.jpg?v=1525922724947',
        name: 'Túi nhỏ nhắn mặt quỷ',
        priceStart: '168.000đ',
    },
    {
        img: 'https://bizweb.dktcdn.net/thumb/large/100/312/616/products/08.jpg?v=1525922722587',
        name: 'Quà tặng chocolate Vimax',
        priceStart: '600.000đ',
    },
    {
        img: 'https://bizweb.dktcdn.net/thumb/large/100/312/616/products/11c6fe4ca42878460fae66ca86d30f.jpg?v=1525922721673',
        name: 'Vali đẹp cute',
        priceStart: '800.000đ',
    },
    {
        img: 'https://bizweb.dktcdn.net/thumb/large/100/312/616/products/1691894f5b799347cb9515ad307e51.jpg?v=1525922719323',
        name: 'Balo thời trang',
        priceStart: '350.000đ',
    },
];

function renderProducts() {
    const container = document.querySelector('.products-container');
    container.innerHTML = ''; // Clear existing content
    const displayProducts = products.slice(currentIndex, currentIndex + 4); // Slice the products to show 4 at a time
    displayProducts.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('products');
        productElement.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            ${product.discount ? `<div class="discount">${product.discount}</div>` : ''}
            <div class="button-container">
                <button class="buy-btc">Mua hàng</button>
            </div>
            <div class="products-name">${product.name}</div>
            <div class="price">
                <span class="price-start">${product.priceStart}</span>
                ${product.priceEnd ? `<span class="price-end">${product.priceEnd}</span>` : ''}
            </div>
        `;
        container.appendChild(productElement);
    });
    toggleArrows();
}

function nextSlide() {
    if (currentIndex + 4 < products.length) {
        currentIndex++;
        renderProducts();
    }
}

function prevSlide() {
    if (currentIndex > 0) {
        currentIndex--;
        renderProducts();
    }
}

function toggleArrows() {
    const prevArrow = document.querySelector('.products-btc-control-prev');
    const nextArrow = document.querySelector('.products-btc-control-next');

    // Hide prev arrow if at the beginning
    if (currentIndex === 0) {
        prevArrow.classList.add('hidden');
    } else {
        prevArrow.classList.remove('hidden');
    }

    // Hide next arrow if at the end
    if (currentIndex + 4 >= products.length) {
        nextArrow.classList.add('hidden');
    } else {
        nextArrow.classList.remove('hidden');
    }
}

// Initial render
renderProducts();