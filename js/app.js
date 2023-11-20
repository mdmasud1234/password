
let pass_show_hide = document.querySelector('#pass_show_hide');

let password = document.querySelector('#password');

pass_show_hide.addEventListener('click',()=>{
   if( password.type == 'password'){
    password.type = 'text';
    pass_show_hide.innerHTML = '<i class="fa-solid fa-eye"></i>';
   }else{
    password.type = 'password';
    pass_show_hide.innerHTML = '<i class="fa-solid fa-eye-slash"></i>';
   }
})