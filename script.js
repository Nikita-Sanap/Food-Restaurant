import{foodItem} from './foodItem.js';
console.log(foodItem);

function displayItems(){
    var biryani= document.getElementById('biryani');
    var paneer= document.getElementById('paneer');
    var maharashtrian= document.getElementById('maharashtrian');
    var gujrati= document.getElementById('gujrati');
    var southindian= document.getElementById('southindian');

const biryaniData= foodItem.filter(item=> item.category=='Biryani Corner');
console.log(biryaniData);

const paneerData= foodItem.filter(item=> item.category=='Delisious Paneer');
console.log(paneerData);

const maharashtrianData= foodItem.filter(item=> item.category=='Maharashtrian-dish');
console.log(maharashtrianData);

const gujratiData= foodItem.filter(item=> item.category=='Gujrati-dish');
console.log(gujratiData);

const southindianData= foodItem.filter(item=> item.category=='South-Indian-dish');
console.log(southindianData);


biryaniData.map(item=> {
    var ItemCard = document.createElement('div');
    ItemCard.setAttribute('id','ItemCard');

    var CardTop =  document.createElement('div');
    CardTop.setAttribute('id','CardTop');

    var star = document.createElement('i');
    star.setAttribute('class','fa fa-star');
    star.setAttribute('id','rating');
    star.innerText= ' '+ item.rating;

    var heart = document.createElement('i');
    heart.setAttribute('class','fa fa-heart-o add-to-cart');
    heart.setAttribute('id',item.id);
    
    CardTop.appendChild(star);
    CardTop.appendChild(heart);

    var img= document.createElement('img');
    img.src=item.img;

    var itemName= document.createElement('p');
    itemName.setAttribute('id','ItemName');
    itemName.innerText = item.name;

    var itemPrice= document.createElement('p');
    itemPrice.setAttribute('id','ItemPrice');
    itemPrice.innerText = 'Price : Rs.'+ item.price;

    ItemCard.appendChild(CardTop);
    ItemCard.appendChild(img);
    ItemCard.appendChild(itemName);
    ItemCard.appendChild( itemPrice);

    biryani.appendChild( ItemCard);

})


paneerData.map(item=> {
    var ItemCard = document.createElement('div');
    ItemCard.setAttribute('id','ItemCard');

    var CardTop =  document.createElement('div');
    CardTop.setAttribute('id','CardTop');

    var star = document.createElement('i');
    star.setAttribute('class','fa fa-star');
    star.setAttribute('id','rating');
    star.innerText= ' '+ item.rating;

    var heart = document.createElement('i');
    heart.setAttribute('class','fa fa-heart-o add-to-cart');
    heart.setAttribute('id',item.id);
    
    CardTop.appendChild(star);
    CardTop.appendChild(heart);

    var img= document.createElement('img');
    img.src=item.img;

    var itemName= document.createElement('p');
    itemName.setAttribute('id','ItemName');
    itemName.innerText = item.name;

    var itemPrice= document.createElement('p');
    itemPrice.setAttribute('id','ItemPrice');
    itemPrice.innerText = 'Price : Rs.'+ item.price;

    ItemCard.appendChild(CardTop);
    ItemCard.appendChild(img);
    ItemCard.appendChild(itemName);
    ItemCard.appendChild( itemPrice);

    paneer.appendChild( ItemCard);

})

maharashtrianData.map(item=> {
    var ItemCard = document.createElement('div');
    ItemCard.setAttribute('id','ItemCard');

    var CardTop =  document.createElement('div');
    CardTop.setAttribute('id','CardTop');

    var star = document.createElement('i');
    star.setAttribute('class','fa fa-star');
    star.setAttribute('id','rating');
    star.innerText= ' '+ item.rating;

    var heart = document.createElement('i');
    heart.setAttribute('class','fa fa-heart-o add-to-cart');
    heart.setAttribute('id',item.id);
    
    CardTop.appendChild(star);
    CardTop.appendChild(heart);

    var img= document.createElement('img');
    img.src=item.img;

    var itemName= document.createElement('p');
    itemName.setAttribute('id','ItemName');
    itemName.innerText = item.name;

    var itemPrice= document.createElement('p');
    itemPrice.setAttribute('id','ItemPrice');
    itemPrice.innerText = 'Price : Rs.'+ item.price;

    ItemCard.appendChild(CardTop);
    ItemCard.appendChild(img);
    ItemCard.appendChild(itemName);
    ItemCard.appendChild( itemPrice);

    maharashtrian.appendChild( ItemCard);

})


gujratiData.map(item=> {
    var ItemCard = document.createElement('div');
    ItemCard.setAttribute('id','ItemCard');

    var CardTop =  document.createElement('div');
    CardTop.setAttribute('id','CardTop');

    var star = document.createElement('i');
    star.setAttribute('class','fa fa-star');
    star.setAttribute('id','rating');
    star.innerText= ' '+ item.rating;

    var heart = document.createElement('i');
    heart.setAttribute('class','fa fa-heart-o add-to-cart');
    heart.setAttribute('id',item.id);
    
    CardTop.appendChild(star);
    CardTop.appendChild(heart);

    var img= document.createElement('img');
    img.src=item.img;

    var itemName= document.createElement('p');
    itemName.setAttribute('id','ItemName');
    itemName.innerText = item.name;

    var itemPrice= document.createElement('p');
    itemPrice.setAttribute('id','ItemPrice');
    itemPrice.innerText = 'Price : Rs.'+ item.price;

    ItemCard.appendChild(CardTop);
    ItemCard.appendChild(img);
    ItemCard.appendChild(itemName);
    ItemCard.appendChild( itemPrice);

    gujrati.appendChild( ItemCard);

})


southindianData.map(item=> {
    var ItemCard = document.createElement('div');
    ItemCard.setAttribute('id','ItemCard');

    var CardTop =  document.createElement('div');
    CardTop.setAttribute('id','CardTop');

    var star = document.createElement('i');
    star.setAttribute('class','fa fa-star');
    star.setAttribute('id','rating');
    star.innerText= ' '+ item.rating;

    var heart = document.createElement('i');
    heart.setAttribute('class','fa fa-heart-o add-to-cart');
    heart.setAttribute('id',item.id);
    
    CardTop.appendChild(star);
    CardTop.appendChild(heart);

    var img= document.createElement('img');
    img.src=item.img;

    var itemName= document.createElement('p');
    itemName.setAttribute('id','ItemName');
    itemName.innerText = item.name;

    var itemPrice= document.createElement('p');
    itemPrice.setAttribute('id','ItemPrice');
    itemPrice.innerText = 'Price : Rs.'+ item.price;

    ItemCard.appendChild(CardTop);
    ItemCard.appendChild(img);
    ItemCard.appendChild(itemName);
    ItemCard.appendChild( itemPrice);

    southindian.appendChild( ItemCard);

  })

}

displayItems();


const categoryListData = [...new Map(foodItem.map(item=> [item['category'],item])).values()];
console.log(categoryListData);

function categoryList(){
    var categoryList= document.getElementById('category-list');
    
    categoryListData.map(item=> {
        var listCard= document.createElement('div');
        listCard.setAttribute('class','list-card');

        var listImg= document.createElement('img');
        listImg.src= item.img;

        var listName= document.createElement('a');
        listName.setAttribute('class','list-name');
        listName.innerText= item.category;
        listName.setAttribute('href','#'+item.category);

        listCard.appendChild(listImg);
        listCard.appendChild(listName);
 
        var cloneListCard= listCard.cloneNode(true);
        categoryList.appendChild(listCard);
    })

}
categoryList();//by calling this fun we generatre list of items on right side with images



document.querySelectorAll('.add-to-cart').forEach(item=>{
    item.addEventListener('click',addToCart);
})

var cartData=[];
 
function addToCart(){
    console.log(this.parentNode.nextSibling.nextSibling);
    var itemToAdd= this.parentNode.nextSibling.nextSibling.innerText;
    var itemObj= foodItem.find(element=>element.name==itemToAdd);
console.log(itemObj);

var index= cartData.indexOf(itemObj);

if(index=== -1){ //when we click on heart that element get added in background
    document.getElementById(itemObj.id).classList.add('toggle-heart');
    cartData= [...cartData,itemObj ];
    console.log(cartData);
}

else if(index > -1){
    alert("Added to cart");
}

document.getElementById('cart-plus').innerText=' '+ cartData.length + 'Items';
//because of above line we get the list of items which we have selected

// document.getElementById('m-cart-plus').innerText=' '+ cartData.length;

totalAmount();
cartItems();
}

function cartItems(){
    var tableBody = document.getElementById('table-body');
    tableBody.innerHTML=' ';

    cartData.map(item=> {
        var tableRow = document.createElement('tr');

        var rowData1 = document.createElement('td');
        var img= document.createElement('img');
        img.src = item.img;// it will add img in list .except this img is not visible
        rowData1.appendChild(img);// even though we use above line except this line img will not get append in that row 

        var rowData2 = document.createElement('td');
        rowData2.innerText = item.name;//this line gives name of selected item 
        // innerText is used bcoz whatever is selected should be printed as it is

        var rowData3 = document.createElement('td');

        var btn1=document.createElement('button');
        btn1.setAttribute('class','decrease-item');
        btn1.innerHTML='-' ;//only button with - sign get created. 

        var span = document.createElement('span');
        span.innerText = item.quantity; //1 quntity is visible in betn two +,- button 

        var btn2=document.createElement('button');
        btn2.setAttribute('class','increase-item');
        btn2.innerHTML='+' ;//only button with + sign get created.

        rowData3.appendChild(btn1);
        rowData3.appendChild(span);
        rowData3.appendChild(btn2);
        //by appending above variables on row-data3 we can see those in that row

        var rowData4 = document.createElement('td');
        rowData4.innerText = item.price;//it gives the price of that selected item

        tableRow.appendChild(rowData1);
        tableRow.appendChild(rowData2);
        tableRow.appendChild(rowData3);
        tableRow.appendChild(rowData4);

        tableBody.appendChild(tableRow);
        //above code work as item-name,its img quantity,increase decrease
        //button in a table or act as list
     })

     document.querySelectorAll('.increase-item').forEach(item=> {
        item.addEventListener('click',incrementItem);
     })
        document.querySelectorAll('.decrease-item').forEach(item=> {
            item.addEventListener('click',decrementItem);
     })

}
cartItems();


var currPrice =0;

function incrementItem(){
let itemToInc = this.parentNode.previousSibling.innerText;
console.log(itemToInc);

var incObj = cartData.find(element=>element.name==itemToInc);
incObj.quantity += 1;//because of this by pressing + symbol amount and quantity get increased

currPrice=(incObj.price*incObj.quantity - incObj.price*(incObj.quantity-1))/(incObj.quantity-1);
//not understood this formula

incObj.price= currPrice*incObj.quantity;
totalAmount();
cartItems();
}


var flag= false;
function decrementItem(){
    let itemToDec= this.parentNode.previousSibling.innerText;
    let decObj= cartData.find(element=>element.name==itemToDec);
    let ind= cartData.indexOf(decObj);

    if(decObj.quantity > 1){
    currPrice=(decObj.price*decObj.quantity - decObj.price*(decObj.quantity-1))/(decObj.quantity);
    decObj.quantity-=1;
    decObj.price= currPrice*decObj.quantity;
    }
    else{
        document.getElementById(decObj.id).classList.remove('toggle-heart');
        cartData.splice(ind,1);
        document.getElementById('cart-plus').innerHTML=' '+ cartData.length + 'Items';
        // document.getElementById('m-cart-plus').innerHTML=' '+ cartData.length ;

        if(cartData.length<1 && flag){
            document.getElementById('foodItems').classList.toggle('foodItems');
            document.getElementById('category-list').classList.toggle('foodItems');
            //document.getElementById('m-cart-plus').classList.toggle('m-cart-toggle');
            document.getElementById('cart-page').classList.toggle('cart-toggle');
           // document.getElementById('category-header').classList.toggle('toggle-category');
            document.getElementById('checkout').classList.toggle('cart-toggle');
            flag=false ;
            alert("Currently no item in cart");

        }
    }
    totalAmount();
    cartItems();
}

function totalAmount(){
    var sum=0;
    cartData.map(item=>{
        sum+= item.price;//use only small p.if we use caps it will not return the sum
    })
    document.getElementById('total-item').innerText='Total Item:'+ cartData.length;
    document.getElementById('total-price').innerText='Total Price : Rs'+sum;
}




document.getElementById('cart-plus').addEventListener('click',cartToggle);
// document.getElementById('m-cart-plus').addEventListener('click',cartToggle);

function cartToggle(){
    if(cartData.length > 0){
        document.getElementById('foodItems').classList.toggle('foodItems');
        document.getElementById('category-list').classList.toggle('foodItems');
        //document.getElementById('m-cart-plus').classList.toggle('m-cart-toggle');
        document.getElementById('cart-page').classList.toggle('cart-toggle1');
       // document.getElementById('category-header').classList.toggle('toggle-category');
        document.getElementById('checkout').classList.toggle('cart-toggle1');
        flag=true ;
    }
    else{
        alert("currently no item in cart");
    }
}


document.getElementById('add-address').addEventListener('click',addAddress);
// document.getElementById('m-add-address').addEventListener('click',addAddress);

function addAddress(){
    var address= prompt('Enter your address');
    if(address){
        document.getElementById('add-address').innerText=' '+ address;
        // document.getElementById('m-add-address').innerText=' '+ address;
    }
    else{
        document.getElementById('add-address').innerText='your address';
        alert("Adress not added");
    }
}