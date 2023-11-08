const categoriesList = document.querySelector('#categories');
const categories = categoriesList.querySelectorAll('.item');

console.log(`Number of categories: ${categories.length}`);

categories.forEach((category) => {
  const categoryName = category.firstElementChild.textContent;
  const categoryItems = category.lastElementChild('ul li').length;
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryItems}`);
});