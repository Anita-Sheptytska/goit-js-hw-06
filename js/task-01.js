const itemsEl = document.querySelectorAll('.item');
console.log(`Number of categories: ${itemsEl.length}`);

itemsEl.forEach.call(itemsEl, (element) => {
    const title = element.querySelector('h2').innerHTML;
    const itemsLength = element.querySelectorAll('li').length;

    console.log(`Category: ${title}. 
Elements: ${itemsLength}`)
})