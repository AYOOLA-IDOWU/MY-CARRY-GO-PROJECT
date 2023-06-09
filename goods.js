let user = JSON.parse(localStorage.getItem('user'))
let currentUserIndex = localStorage.getItem('currentUserIndex')
console.log(user[currentUserIndex]);
if (user) {
  currentUserIndex.innerHTML = `Hi, ${user[currentUserIndex].name}`
}
const now=()=>{
  bod.innerHTML=`loading..... <br>  <img src="./image/d77bce75b53ed81f656be3f4249b372b.gif" alt="">`
  setTimeout(() => {
    window.location.href="female.html"
  }, 3000);
  bod.style.backgroundColor="white"
  bod.style.display="flex"
  bod.style.justifyContent="center"
} 

const log=()=>{
  bod.innerHTML=`loading..... <br> <img src="./image/d77bce75b53ed81f656be3f4249b372b.gif" alt=""> `
  setTimeout(() => {
    window.history.replaceState({}, document.title, 'signin.html');
    window.location.href="signin.html"
  }, 3000);
  bod.style.backgroundColor="white"
  bod.style.display="flex"
  bod.style.justifyContent="center"
}

const men=()=>{
  bod.innerHTML=`loading..... <br> < <img src="./image/d77bce75b53ed81f656be3f4249b372b.gif" alt=""> `
  setTimeout(() => {
    window.location.href="male.html"
  }, 3000);
  bod.style.backgroundColor="white"
  bod.style.display="flex"
  bod.style.justifyContent="center"
}

const chi=()=>{
  bod.innerHTML=`loading..... <br>  <img src="./image/d77bce75b53ed81f656be3f4249b372b.gif" alt=""> `
  setTimeout(() => {
    window.location.href="child.html"
  }, 3000);
  bod.style.backgroundColor="white"
  bod.style.display="flex"
  bod.style.justifyContent="center"
}

const about=()=>{
  bod.innerHTML=`loading..... <br>  <img src="./image/d77bce75b53ed81f656be3f4249b372b.gif" alt=""> `
  setTimeout(() => {
    window.location.href="about.html"
  }, 3000);
  bod.style.backgroundColor="white"
  bod.style.display="flex"
  bod.style.justifyContent="center"
}

const acc=()=>{
  bod.innerHTML=`<h1>loading..... <br>  <img src="./image/d77bce75b53ed81f656be3f4249b372b.gif" alt="">`
  setTimeout(() => {
    window.location.href="index.html"
  }, 3000);
  bod.style.backgroundColor="white"
  bod.style.display="flex"
  bod.style.justifyContent="center"
}
const cart=()=>{
  window.location.href="cart.html"
}



let addBtn = document.querySelectorAll(".product")
addBtn.forEach((item,indx)=>{
  item.addEventListener('click',()=>{
       console.log(item);
       console.log(item.firstElementChild.src);
     })
})

function tryIt(foto, price, itemName, quantity){
  let map ={
    foto, price, itemName, quantity
  }
  localStorage.setItem("allItem", JSON.stringify(map))
  console.log(map);
  window.location. href ="cart.html"
}
function displayCart(){
  
   let allItem = localStorage.getItem("allItem")
   if (allItem){
    let  ourValue = JSON.parse(localStorage.getItem("allItem"))
    console.log(ourValue);
    image.attributes.src.value = ourValue.foto
    price.innerHTML = ourValue.price
    item.innerHTML= ourValue.itemName
    // dis.innerHTML= ourValue.quantity
   }
}

// document.getElementById("search-form").addEventListener("submit", function(event) {
// //   event.preventDefault(); // Prevent form submission

// //   var searchTerm = document.getElementById("search-input").value;
// //   navigateToSearchResult(searchTerm);
// // });

// // function navigateToSearchResult(searchTerm) {
// //   window.location.href = "https://carrygo.com" + encodeURIComponent(searchTerm);
// // }

     
var quantity = [];
var editIndex = -1;

if (localStorage.quantity) {
  quantity = JSON.parse(localStorage.getItem("quantity"));
}

function qua() {
  var input = document.getElementById("input");
  var dis = document.getElementById("dis");

  if (isNaN(Number(input.value))) {
    alert("Write in number");
    input.value = "";
  } else {
    quantity.push(input.value);
    dis.innerHTML += `${input.value}`;
    console.log(quantity);
    localStorage.setItem('quantity', JSON.stringify(quantity));
    input.value = "";
  }
}


function deleteItem() {
var index = quantity.length - 1;
quantity.pop();
localStorage.setItem('quantity', JSON.stringify(quantity));
dis.innerHTML = dis.innerHTML.slice(0, -1);
}

function openEditModal() {  
editIndex = quantity.length - 1;
var editInput = document.getElementById("editInput");
editInput.value = quantity[editIndex];
var editModal = new bootstrap.Modal(document.getElementById("editModal"));
editModal.show();
}

function updateQuantity() {
var editInput = document.getElementById("editInput");
var newQuantity = editInput.value;
if (newQuantity !== "") {
  quantity[editIndex] = newQuantity;
  localStorage.setItem('quantity', JSON.stringify(quantity));
  dis.innerHTML = newQuantity;
}
var editModal = new bootstrap.Modal(document.getElementById("editModal"));
editModal.hide();
}