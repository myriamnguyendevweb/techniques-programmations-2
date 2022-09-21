import AuthService from "../service/AuthService";

const auth = new AuthService();
const useEmailPasswordSignup = () => {
    return auth.signupWithEmailAndPassword.bind(auth);
}

export default useEmailPasswordSignup;
