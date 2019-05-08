'use strict';

let api = (function() {
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/michaelc';

  let getItems = function() {
    return fetch(`${BASE_URL}/items`)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error(response.statusText);
      }); 

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
      //undo shorthand?
    });
    return fetch(`${BASE_URL}/items`, {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: newItem,
    });
    //need to do a .then?
    //.then(res => res.json())
  };

  return {
    getItems,
    createItem,
  };
}() );