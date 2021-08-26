let jsonProducts = '{"products": [{"id": 1, "name": "t - shirt print 1", "price": 7.6, "imgUrl": "./img/T - shirt print 1.png"}, {"id": 2, "name": "t - shirt print 2", "price": 1.2, "imgUrl": "./img/T - shirt print 2.png"},	{"id": 3, "name": "Hoodie", "price": 2.0, "imgUrl": "./img/Hoodie.png"}, {"id": 4, "name": "Ecobag print 1", "price": 4.5, "imgUrl": "./img/Ecobag print 1.png"}, {"id": 5, "name": "Ecobag print 2", "price": 10.0, "imgUrl": "./img/Ecobag print 2.png"},	{"id": 6, "name": "Cap", "price": 9.6, "imgUrl": "./img/Cap.png"}, {"id": 7, "name": "t - shirt print 3", "price": 15.5, "imgUrl": "./img/T - shirt print 3.png"}, {"id": 8, "name": "Sweatshirt", "price": 3.3, "imgUrl": "./img/Sweatshirt.png"}]}';
let productsObj = JSON.parse(jsonProducts);
let productsArr = productsObj.products;
let str = '<h2>Most Popular Products</h2>';

for (let i = 0; i < productsArr.length; i++) {
	str += '<article id="' + productsArr[i].id + '">' +
        '<img src="' + productsArr[i].imgUrl +
        	'" class="product" alt="' + productsArr[i].name +'"/>' +
        '<h3>' + productsArr[i].name +'</h3>' +
        '<p>$' + productsArr[i].price +'</p>' +
        '<button class="add-to-card btn btn-primary">Add to card</button>' +
    '</article>';	
}

let productsHTML = document.getElementById('products');
productsHTML.innerHTML = str;