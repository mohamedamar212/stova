// مثال على إضافة المنتجات
let products = [];

function showLogin(type) {
  if (type === 'user') {
    document.getElementById('auth-section').innerHTML = `
      <h2>تسجيل مستخدم</h2>
      <input type="text" placeholder="اسم المستخدم">
      <input type="password" placeholder="كلمة المرور">
      <button onclick="registerUser()">تسجيل</button>
    `;
  } else if (type === 'admin') {
    document.getElementById('auth-section').innerHTML = `
      <h2>دخول المشرف</h2>
      <input type="text" placeholder="اسم المستخدم">
      <input type="password" placeholder="كلمة المرور">
      <button onclick="loginAdmin()">دخول</button>
    `;
  }
}

function registerUser() {
  // إضافة منطق التسجيل هنا
}

function loginAdmin() {
  // إضافة منطق الدخول للمشرف هنا
  document.getElementById('admin-panel').classList.remove('hidden');
}

function addProduct() {
  let name = document.getElementById('product-name').value;
  let price = document.getElementById('product-price').value;
  let image = document.getElementById('product-image').value;

  if (name && price && image) {
    let newProduct = { name, price, image };
    products.push(newProduct);
    renderProducts();
  }
}

function renderProducts() {
  let productsContainer = document.getElementById('products');
  productsContainer.innerHTML = '';

  products.forEach(product => {
    productsContainer.innerHTML += `
      <div class="product">
        <img src="${product.image}" alt="${product.name}" />
        <h3>${product.name}</h3>
        <p>${product.price} جنيه</p>
      </div>
    `;
  });
}

