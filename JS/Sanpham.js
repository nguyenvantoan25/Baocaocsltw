function openTab(tabName) {
    // Ẩn tất cả các nội dung
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => {
        content.classList.remove('active');
    });

    // Hiển thị tab được chọn
    const selectedTab = document.getElementById(tabName);
    selectedTab.classList.add('active');
}
// 
let currentIndex = 0;
const products = document.querySelectorAll('.products'); // Lấy tất cả sản phẩm
const totalProducts = products.length;
const productsToShow = 4; // Hiển thị 4 sản phẩm mỗi lần
const prevButton = document.querySelector('.products-btc-control-prev');
const nextButton = document.querySelector('.products-btc-control-next');

// Hiển thị các sản phẩm đầu tiên
function showProducts() {
    // Ẩn tất cả sản phẩm
    products.forEach((product, index) => {
        product.style.display = 'none';
    });

    // Hiển thị sản phẩm trong phạm vi hiện tại
    for (let i = currentIndex; i < currentIndex + productsToShow; i++) {
        if (i < totalProducts) {
            products[i].style.display = 'block';
        }
    }

    // Ẩn/hiển thị nút điều hướng
    if (currentIndex === 0) {
        prevButton.style.display = 'none'; // Ẩn nút quay lại nếu đang ở sản phẩm đầu tiên
    } else {
        prevButton.style.display = 'block'; // Hiển thị nút quay lại
    }

    if (currentIndex + productsToShow >= totalProducts) {
        nextButton.style.display = 'none'; // Ẩn nút tiếp theo nếu đang ở sản phẩm cuối cùng
    } else {
        nextButton.style.display = 'block'; // Hiển thị nút tiếp theo
    }
}

function nextSlide() {
    if (currentIndex + productsToShow < totalProducts) {
        currentIndex++;
        showProducts(); // Cập nhật sản phẩm hiển thị
    }
}

function prevSlide() {
    if (currentIndex > 0) {
        currentIndex--;
        showProducts(); // Cập nhật sản phẩm hiển thị
    }
}

// Ban đầu hiển thị sản phẩm
showProducts();

// Gán sự kiện cho các nút điều hướng
prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);
