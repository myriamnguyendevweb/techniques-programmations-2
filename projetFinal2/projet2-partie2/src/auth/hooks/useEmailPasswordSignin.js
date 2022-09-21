import AuthService from "../service/AuthService";

const auth = new AuthService();
const useEmailPasswordSignin = () => {
    return auth.signinWithEmailAndPassword.bind(auth);
}

export default useEmailPasswordSignin;