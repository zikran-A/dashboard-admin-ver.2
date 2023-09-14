import Cookies from "js-cookie"

const auth = {
    isAuthenticated: ()=>{
        return Cookies.get('token')
    },
    storeAuthCredential: (token)=>{
        return Cookies.set('token', token);
    },
    logout: ()=>{
        return Cookies.remove('token');
    }
}

export default auth;