let aside= document.querySelector('aside');
let sidebarBtn=document.querySelector('#sidebarBtn');
let MoblieMenu=document.querySelector('#MoblieMenu');
let Mobile_menu_dropdown=document.querySelector('.Mobile_menu_dropdown');


sidebarBtn.addEventListener('click',()=>{
  aside.classList.toggle('asideToggle');
  document.querySelector('.profile_info').classList.toggle('toggleProfile')
 document.querySelector('.nav-item').classList.toggle('toggleProfile');
 document.querySelector('.nav-item2').classList.toggle('toggleProfile');
 document.querySelector('.nav-item3').classList.toggle('toggleProfile');
 document.querySelector('.nav-item4').classList.toggle('toggleProfile');

});

MoblieMenu.addEventListener('click',()=>{
  Mobile_menu_dropdown.classList.toggle('showMobileMenu')
})