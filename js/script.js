window.addEventListener('DOMContentLoaded', () =>{
  const starParent = document.querySelector('.blog__content'),
        star =  starParent.querySelectorAll('.fa-regular'),
        bokksParent = document.querySelector('.books__content'),
        book = bokksParent.querySelectorAll('.fa-regular'),
        top  = document.querySelector('.top'),
        navigation = document.querySelector('.navigation');


      star.forEach((item) =>{
        item.addEventListener('click', ()=>{
        item.classList.toggle('red');
        });
      });

      book.forEach((item) =>{
      item.addEventListener('click', () => {
       item.classList.toggle('red');
      });
      });
      function byScroll () {
        if(window.pageYOffset == 0 ){
         top.classList.add('hide');
         top.classList.remove('show');
        }
        else{
            top.classList.remove('hide');
            top.classList.add('show');
        }
      }
      byScroll();
      window.addEventListener('scroll', byScroll);
     
    //   function openHeader(){
    //     navigation.classList.add('show');
    //     navigation.classList.remove('hide');
    //   }
    // openHeader();
    //   function closeHeader (){
    //     navigation.classList.remove('show');
    //     navigation.classList.add('hide');
    //   }

      
    //   function byScrollHeader (){
    //     if(
    //         window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight
    //     ){
           
    //       window.addEventListener('scroll', closeHeader);
    //     }
    //   }

    //fixed__books

    const fBooks = document.querySelector('.fixed__books');
    const kitoblar = document.querySelector('#kitoblar');
    const mother = document.querySelector('.header');
     

    kitoblar.addEventListener('mouseenter', () =>{
      fBooks.classList.remove('hide');
      fBooks.classList.add('show');
    });
    mother.addEventListener('mouseenter', ()=>{
      fBooks.classList.remove('show');
      fBooks.classList.add('hide');
    });
     

    //search
    const searchFixed = document.querySelector('.search__fixed');
    const closeSearch = document.querySelector('.close__search');
    const search = document.querySelector('.fa-magnifying-glass');

    search.addEventListener('click', ()=>{
   searchFixed.classList.add('show', 'fade');
   searchFixed.classList.remove('hide');
   document.body.style.overflow = 'hidden';
    });
    closeSearch.addEventListener('click', () =>{
      searchFixed.classList.remove('show');
      searchFixed.classList.add('hide', 'fade');
      document.body.style.overflow = '';

    });
    

    //fixed__bars

    const fixedBars = document.querySelector('.fixed__bars'),
           navbar = document.querySelector('.nav__icon'),
           bars  = navbar.querySelector('.fa-bars'),
           closeBars = fixedBars.querySelector('.close__bars');


          bars.addEventListener('click', () => {
          fixedBars.classList.remove('hide');
          fixedBars.classList.add('show', 'fade');
          document.body.style.overflow = 'hidden';
  });
          closeBars.addEventListener('click', () =>{
            fixedBars.classList.remove('show');
            fixedBars.classList.add('hide');
            document.body.style.overflow = '';
          });
});

//davomi bor 