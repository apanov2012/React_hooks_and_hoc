import React from "react";
import Component from "./someComponent";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";
import withLogin from "./withLogin.jsx";
import withPropsStyles from "./withPropsStyles";
import SimpleComponent from "./simpleComponent";
import withFunctions from "./withFunctions";

const HOCExample = () => {
    const ComponentWithAuth = withLogin(Component);
    const ComponentWithPropStyles = withPropsStyles(Component);
    const NewComponent = withPropsStyles(ComponentWithAuth);
    const ComponentWithHoc = withFunctions(SimpleComponent);

    return (
        <>
            <CardWrapper>
                <SmallTitle>1. Обычный компонент</SmallTitle>
                <Divider />
                <Component />
                <Divider />
                <SimpleComponent />
            </CardWrapper>
            <CardWrapper>
                <SmallTitle>2. Функциональный HOC</SmallTitle>
                <Divider />
                <ComponentWithAuth />
                <Divider />
                <ComponentWithHoc />
            </CardWrapper>
            <CardWrapper>
                <SmallTitle>3. HOC With Styles and Props</SmallTitle>
                <Divider />
                <ComponentWithPropStyles />
            </CardWrapper>
            <CardWrapper>
                <SmallTitle>4. Composed HOC</SmallTitle>
                <Divider />
                <NewComponent />
            </CardWrapper>
        </>
    );
};

export default HOCExample;
