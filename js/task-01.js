
const categoryName = document.querySelectorAll('h2');
const categoryList = document.querySelectorAll('.item ul');
console.log(`Number of categories: ${categoryName.length}`);

for (let i = 0; i < categoryName.length; i += 1){
    console.log(`Category: ${categoryName[i].outerText}`)
    console.log(`Elements: ${categoryList[i].childElementCount}`);
}



// // const itemRef = document.querySelector('.item');
// // console.log('itemRef', itemRef)
// const textEl = document.querySelector('.text');
// console.log(textEl)
// // console.log(textEl.textContent);
// textEl.textContent = 'zviry';

// const navEl = document.createElement('a');
// navEl.classList.add('navigation');
// navEl.textContent = 'this is text';
// navEl.href = '/porif'
// console.log(navEl);
