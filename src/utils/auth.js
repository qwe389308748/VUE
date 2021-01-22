function isLogin () {
    return document.cookie.includes('login=true');
  }

function login() { 
  const expiresDay = 3;
  const data = new Date();
  data.setTime(data.getTime() + expiresDay * 24 * 60 * 60 * 1000);
  document.cookie = `login=true;expiresDay=${data.toDateString()}`;
 }

 function cancelLogin() { 
   const data = new Date();
   data.setTime(data.getTime()-1000000000);
   document.cookie = `login=true;expiresDay=${data.toDateString()}`
  } 
export default {
    isLogin,
    login,
    cancelLogin
}