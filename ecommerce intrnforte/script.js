const products = [
    { name: 'Smartphone', category: 'electronics', price: 29999, image: 'images/smartphone.jpg' },
    { name: 'Laptop', category: 'electronics', price: 99999, image: 'images/laptop.jpg' },
    { name: 'Tablet', category: 'electronics', price: 19999, image: 'images/tablet.jpg' },
    { name: 'Smart TV', category: 'electronics', price: 59999, image: 'images/smarttv.jpg' },
    { name: 'Headphones', category: 'electronics', price: 9999, image: 'images/headphones.jpg' },
    { name: 'Camera', category: 'electronics', price: 39999, image: 'images/camera.jpg' },
    { name: 'T-shirt', category: 'clothing', price: 1999, image: 'images/tshirt.jpg' },
    { name: 'Jeans', category: 'clothing', price: 4999, image: 'images/jeans.jpg' },
    { name: 'Dress', category: 'clothing', price: 5999, image: 'images/dress.jpg' },
    { name: 'Sweater', category: 'clothing', price: 3999, image: 'images/sweater.jpg' },
    { name: 'Shoes', category: 'clothing', price: 7999, image: 'images/shoes.jpg' },
    { name: 'Watch', category: 'accessories', price: 7999, image: 'images/watch.jpg' },
    { name: 'Sunglasses', category: 'accessories', price: 3999, image: 'images/sunglasses.jpg' },
    { name: 'Backpack', category: 'accessories', price: 4999, image: 'images/backpack.jpg' },
    { name: 'Wallet', category: 'accessories', price: 2999, image: 'images/wallet.jpg' },
    { name: 'Bracelet', category: 'accessories', price: 1999, image: 'images/bracelet.jpg' },
  ];
  
  function showCategory(category) {
    const minPrice = parseInt(document.getElementById('minPrice').value);
    const maxPrice = parseInt(document.getElementById('maxPrice').value);
    
    const filteredProducts = products.filter(product => product.category === category && product.price >= minPrice && product.price <= maxPrice);
    
    const productsSection = document.getElementById('products');
    productsSection.innerHTML = '';
    filteredProducts.forEach(product => {
      const productElement = document.createElement('div');
      productElement.classList.add('product');
      productElement.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>₹${product.price.toLocaleString('en-IN')}</p>
      `;
      productsSection.appendChild(productElement);
    });
  }
  