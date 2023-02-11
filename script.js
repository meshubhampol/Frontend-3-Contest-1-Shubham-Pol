const url='https://dummyjson.com/products';

// fetching the data and passing that data to callback function
const data = fetch(url).then(response => response.json()).then(
    (result) =>{
        //passing the products array to callback function
        createFlexwrap(result.products);
    })

// accessing the flexbox from html
let flexbox = document.getElementById('items-flex');

// defining every property of product as global variable
let title;
let brand;
let price;
let rating;
let stock;
let thumbnail;
let discount;
let id;

function createFlexwrap(arr) {
    console.log(arr);
    for(item in arr) {
        title=arr[item].title;
        brand=arr[item].brand;
        price=arr[item].price;
        rating=arr[item].rating;
        stock=arr[item].stock;
        thumbnail=arr[item].thumbnail;
        discount=arr[item].discountPercentage;
        id=arr[item].id;
        // calling the function to create and display the data on page
        showOnWebPage();
    }
}

function showOnWebPage() {
    // creating product div tag
    let flexDiv = document.createElement('div');
    flexDiv.classList.add('item');

    // thumbnail-section
    let imgDiv=document.createElement('div');
    let img = document.createElement('img');
    img.src=thumbnail;
    imgDiv.appendChild(img);
    flexDiv.appendChild(imgDiv);

    // title-section
    let titleDiv=document.createElement('div');
    titleDiv.classList.add('span-style');
    let titletag=document.createElement('span');
    titletag.innerHTML=title;
    let brandtag=document.createElement('span');
    brandtag.innerHTML='Brand: '+brand;
    titleDiv.appendChild(titletag);
    titleDiv.appendChild(brandtag);
    flexDiv.appendChild(titleDiv);

    // price-section 
    let priceDiv=document.createElement('div');
    priceDiv.classList.add('span-style');
    let pricetag=document.createElement('span');
    pricetag.innerHTML='$'+price;
    let discounttag=document.createElement('span');
    discounttag.innerHTML='Discount: '+discount+'%'
    priceDiv.appendChild(pricetag);
    priceDiv.appendChild(discounttag);
    flexDiv.appendChild(priceDiv);

    //rating-section
    let ratingDiv=document.createElement('div');
    let ratingtag=document.createElement('span');
    ratingtag.innerHTML='Rating: '+rating;
    ratingDiv.appendChild(ratingtag);
    flexDiv.appendChild(ratingDiv);

    // stock and id section
    let stockDiv=document.createElement('div');
    stockDiv.classList.add('span-style');
    let stocktag=document.createElement('span');
    stocktag.innerHTML='Stock: '+stock;
    let idtag=document.createElement('span');
    idtag.innerHTML='ID: '+id;
    stockDiv.appendChild(stocktag);
    stockDiv.appendChild(idtag);
    flexDiv.appendChild(stockDiv);

    // adding the product in flexbox
    flexbox.appendChild(flexDiv);
}