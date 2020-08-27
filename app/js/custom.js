document.addEventListener('DOMContentLoaded', function() {
    let items = document.querySelectorAll('.product__item');
    let links = document.querySelectorAll('.product__link')
    

    for (let i = 0; i < items.length; i++) {
        items[i].addEventListener('click', handleClick)
    }

    for (let i = 0; i < links.length; i++) {
        links[i].addEventListener('click', handleClick)
    }

    for (let i = 0; i < items.length; i++) {
        items[i].addEventListener('click', handleClick2)
    }
    

    for (let i = 0; i < items.length; i++) {
        items[i].addEventListener('mouseenter', handleEnter)
    }


    function handleEnter () {
            let itemData = this.getAttribute('data-type');
            let itemTitle = document.querySelector(`.product__title[data-type="${itemData}"]`);
            let itemTitleHovered = document.querySelector(`.product__title-hovered[data-type="${itemData}"]`);

        if (this.classList.contains('product__item_active')) {
            itemTitle.classList.add('unvisible')
            itemTitleHovered.classList.add('visible')
        } else {
            itemTitle.classList.remove('unvisible')
            itemTitleHovered.classList.remove('visible')
        }
        
    }

    function handleClick2 () {
        let itemData = this.getAttribute('data-type');
        let itemTitle = document.querySelector(`.product__title[data-type="${itemData}"]`);
        let itemTitleHovered = document.querySelector(`.product__title-hovered[data-type="${itemData}"]`);

        if (!(this.classList.contains('product__item_active'))) {
            console.log(this)
            itemTitle.classList.remove('unvisible')
            itemTitleHovered.classList.remove('visible')
        } 
        
    }


    function handleClick (e) {
        e.preventDefault();
        let itemData = this.getAttribute('data-type');
        let itemActive = document.querySelector(`.product__item[data-type="${itemData}"]`);
        let actionSelected = document.querySelector(`.product__action_selected[data-type="${itemData}"]`);
        let actionBuy = document.querySelector(`.product__action[data-type="${itemData}"]`);
        
        itemActive.classList.toggle('product__item_active')
        actionSelected.classList.toggle('show');
        actionBuy.classList.toggle('hide');
    }
});