'use strict';
/* global shoppingList, store */

$(document).ready(function() {
  shoppingList.bindEventListeners();
  shoppingList.render();
  
  api.getItems()
    .then(res => res.json())
    .then((items) => {
      items.forEach((item) => store.addItem(item));
      shoppingList.render();
    });
});

// store.items.push(Item.create('apples'));

api.getItems();
//.then(res => console.log(res));

console.log(api.BASE_URL);


// api.createItem('pears')
//   .then(res => res.json())
//   .then((newItem) => {
//     return api.getItems();
//   })
//   .then(res => res.json())
//   .then((items) => {
//     console.log(items);
//   });

// api.getItems()
//   .then(res => res.json())
//   .then((items) => {
//     const item = items[0];
//     return api.updateItem(item.id, { name: 'this should be THIS'});
//   })
//   .then(res => res.json())
//   .then(() => console.log('updated!'));




// fetch('https://thinkful-list-api.herokuapp.com/ei-student/items')
//   .then(res => res.json())
//   .then(data => console.log(data));

// api.getItems()
//   .then(items => {
//     items.forEach(item => store.addItem(item));
//     shoppingListrender();
//   });
//     .catch(e => console.log(e.message);