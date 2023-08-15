document.getElementById('login-btn').addEventListener('click', function(){
    
    const emailInput = document.getElementById('email-input');
    const emailInputText = emailInput.value ;
    console.log(emailInputText);
    emailInput.value = ' ';
    const passInput = document.getElementById('pass-input');
    const passInputText = passInput.value ;
    console.log(passInputText);
    passInput.value = '';
    if(emailInputText === 'admin@gmail.com' && passInputText === '12345'){
        window.location.href = "bank.html";
    }else{
        return alert('please input correct')
    }   
})