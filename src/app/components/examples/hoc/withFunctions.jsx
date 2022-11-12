import React from "react";
import CardWrapper from "../../common/Card";

const withFunctions = (Component) => () => {
    const isAuth = localStorage.getItem("token");
    const onLogin = () => {
        localStorage.setItem("token", "123");
    };
    const onLogOut = () => {
        localStorage.setItem("token", "");
    };
    return (
        <CardWrapper>
            <Component isAuth={isAuth} onLogin={onLogin} onLogOut={onLogOut} />
        </CardWrapper>
    );
};

export default withFunctions;
