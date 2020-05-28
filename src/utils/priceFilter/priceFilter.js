const priceFilter = (array, price) => array.filter((restaurant) => restaurant.price === parseInt(price, 10));

export default priceFilter;
