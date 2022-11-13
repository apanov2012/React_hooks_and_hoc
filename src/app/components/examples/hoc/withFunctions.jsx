import React from "react";
import CardWrapper from "../../common/Card";

const withFunctions = (Component) => () => {
    const isAuth = Boolean(localStorage.getItem("token"));
    const onLogin = () => {
        localStorage.setItem("token", "true");
    };
    const onLogOut = () => {
        localStorage.removeItem("token");
    };
    return (
        <CardWrapper>
            <Component isAuth={isAuth} onLogin={onLogin} onLogOut={onLogOut} />
        </CardWrapper>
    );
};

export default withFunctions;
