import jwtDecode from "jwt-decode";
import SecureLS from "secure-ls";

let ls = new SecureLS({encodingType: 'aes'});                 //شوف بتشتغل ازاى من الجيت هاب

let decodeToken1=ls.set('user1');
let decodeToken2=jwtDecode(decodeToken1);

export default decodeToken2;
