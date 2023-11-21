const n = document.querySelector('.nom');
const submit =document.querySelector('.submit');
const error1 =document.querySelector('.error1');
const error2 =document.querySelector('.error2');
const email =document.querySelector('.email');
const error3 =document.querySelector('.error3');
const error4 =document.querySelector('.error4');
const conp =document.querySelector('.conPasse');
const pw =document.querySelector('.password');


submit.addEventListener('click',(event) => {
    if (n.value == "") {
     error1.innerHTML='<span>nom et vide</span>';
        return;
    } else {
        error1.innerHTML="";
    }
    if (email.value == ""){
        error2.innerHTML='email est vide';
        return;
        } 
        else {
            error2.innerHTML="";
        }
    if (pw.value == ""){
        error3.innerHTML='password is vide';
        return; }
    if(!/^[0-9a-Az-Z]+$/.test(pw)){
        error3.innerHTML='passwrord doit etre des numero'
    }
    
    else {
        error3.innerHTML="";
    }
    if (conp.value !=pw.value){
        error4.innerHTML ='valider le mot de passe';
        return;
    } 
    else {
        error4.innerHTML="";}
}) 
        

