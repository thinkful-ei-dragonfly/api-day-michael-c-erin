'use strict';

let api = (function() {
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/michaelc';

  let getItems = function() {
    return fetch(`${BASE_URL}/items`);
      
    //let error;
    // return fetch(BASE_URL + '/items')
    // .then (res => {
    //   if (!res.ok) {
    //     error = {}
    //   }
    //   return res.json();
    // })
    // .then(data => {
    //   if (error) {
    //     error.message = data.message;
    //     return Promise.reject(error)
    //   }
    // })  
  };

  let createItem = function(name) {
    let newItem = JSON.stringify({
      name,
    });
    return fetch(`${BASE_URL}/items`, {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: newItem,
    });
  
  };

  let updateItem = function(id, updateData) {
    let newData= JSON.stringify(updateData);
    return fetch(`${BASE_URL}/items/${id}`, {
      method: 'PATCH',
      header: new Headers({
        'Content-Type': 'application/json'}),
      body: newData,
    });
  };

  let deleteItem = function(id) {
    return fetch(`${BASE_URL}/items/${id}`, {
      method: 'DELETE',
    });
  };
  

  return {
    getItems,
    createItem,
    updateItem,
    deleteItem,
  };
}() );