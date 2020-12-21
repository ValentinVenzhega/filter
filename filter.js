const filterBox = document.querySelectorAll('.box');

document.querySelector('nav').addEventListener('click', (event) => {
   const target = event.target;
   if(target.tagName !== 'LI') return false;

   let filterClass = target.dataset['f'];
   
   filterBox.forEach( (elem) => {
      elem.classList.remove('hide');
      if (!elem.classList.contains(filterClass) && filterClass != 'all') {
         elem.classList.add('hide');
      }
   });
}); 