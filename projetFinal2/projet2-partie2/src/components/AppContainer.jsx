import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import AuthService from "../service/AuthService";
import { updateWholeUser } from "../store/AuthSlice";
import { useEffect } from "react";

const auth = new AuthService();

const AppContainer = ({ children }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onAuth = (user) => {

        if (user) {
            dispatch(updateWholeUser({ email: user.email }));
            navigate("/");
        } else {
            navigate("/login");
        }
    };

    useEffect(() => {
        auth.onAuthChange(onAuth);
    }, [auth]);

    return <>{children}</>;
};

export default AppContainer;
