'use strict';

/* global */

// eslint-disable-next-line no-unused-vars
const store = (function(){

  const setError = function(error) {
    this.error = error;
  };

  const addItem = function(item) {
    this.items.push(item);
  };

  const findAndUpdate = function(id, newData) {
    let foundItem = this.findById(id);
    Object.assign(foundItem, newData);
  };

  const findById = function(id) {
    return this.items.find(item => item.id === id);
  };

  // const findAndToggleChecked = function(id) {
  //   const item = this.findById(id);
  //   item.checked = !item.checked;
  // };

  const findAndDelete = function(id) {
    this.items = this.items.filter(item => item.id !== id);
  };

  // const findAndUpdateName = function(id, name) {
  //   try {
  //     Item.validateName(name);
  //     const item = this.findById(id);
  //     item.name = name;
  //   } catch(e) {
  //     console.log('Cannot update name: ' + e.message);
  //   }
  // };

  const toggleCheckedFilter = function() {
    this.hideCheckedItems = !this.hideCheckedItems;
  };

  const setItemIsEditing = function(id, isEditing) {
    const item = this.findById(id);
    item.isEditing = isEditing;
  };

  const setSearchTerm = function(term) {
    this.searchTerm = term;
  };

  return {
    items: [],
    hideCheckedItems: false,
    searchTerm: '',
    findAndUpdate,
    addItem,
    findById,
    findAndDelete,
    toggleCheckedFilter,
    setSearchTerm,
    setItemIsEditing,
    setError,
    // findAndToggleChecked,
    // findAndUpdateName,
  };
  
}());
