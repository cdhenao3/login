(() => {
  document.getElementById('login').addEventListener('click',e =>{
    e.preventDefault();
    
    let password = document.getElementById('password').value;
    let email = document.getElementById('email').value;

    if(password && email){
      document.getElementById('success').style.display = 'block';
      setTimeout(()=>{
        document.getElementById('success').style.display = 'none';
      }, 4000);
    }else{
      document.getElementById('alert').style.display = 'block';
      setTimeout(()=>{
        document.getElementById('alert').style.display = 'none';
      }, 4000);
    }

  });
})();