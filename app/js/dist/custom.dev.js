"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var items = document.querySelectorAll('.product__item');
  var links = document.querySelectorAll('.product__link');

  for (var i = 0; i < items.length; i++) {
    items[i].addEventListener('click', handleClick);
  }

  for (var _i = 0; _i < links.length; _i++) {
    links[_i].addEventListener('click', handleClick);
  }

  for (var _i2 = 0; _i2 < items.length; _i2++) {
    items[_i2].addEventListener('click', handleClick2);
  }

  for (var _i3 = 0; _i3 < items.length; _i3++) {
    items[_i3].addEventListener('mouseenter', handleEnter);
  }

  function handleEnter() {
    var itemData = this.getAttribute('data-type');
    var itemTitle = document.querySelector(".product__title[data-type=\"".concat(itemData, "\"]"));
    var itemTitleHovered = document.querySelector(".product__title-hovered[data-type=\"".concat(itemData, "\"]"));

    if (this.classList.contains('product__item_active')) {
      itemTitle.classList.add('hide');
      itemTitleHovered.classList.add('show');
    } else {
      itemTitle.classList.remove('hide');
      itemTitleHovered.classList.remove('show');
    }
  }

  function handleClick2() {
    var itemData = this.getAttribute('data-type');
    var itemTitle = document.querySelector(".product__title[data-type=\"".concat(itemData, "\"]"));
    var itemTitleHovered = document.querySelector(".product__title-hovered[data-type=\"".concat(itemData, "\"]"));

    if (!this.classList.contains('product__item_active')) {
      console.log(this);
      itemTitle.classList.remove('hide');
      itemTitleHovered.classList.remove('show');
    }
  }

  function handleClick(e) {
    e.preventDefault();
    var itemData = this.getAttribute('data-type');
    var itemActive = document.querySelector(".product__item[data-type=\"".concat(itemData, "\"]"));
    var actionSelected = document.querySelector(".product__action_selected[data-type=\"".concat(itemData, "\"]"));
    var actionBuy = document.querySelector(".product__action[data-type=\"".concat(itemData, "\"]"));
    itemActive.classList.toggle('product__item_active');
    actionSelected.classList.toggle('show');
    actionBuy.classList.toggle('hide');
  }
});