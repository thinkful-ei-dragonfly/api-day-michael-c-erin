'use strict';

let api = (function() {
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/michaelc';
  let getItems = function() {
    return fetch(`${BASE_URL}/items`)
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

  return {
    getItems,
    createItem,
  };
}() );