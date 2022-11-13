import React from "react";
import CollapseWrapper from "../common/collapse";
import PropTypes from "prop-types";

const ChildrenExercise = () => {
    const ListComponent = ({ children }) => {
        return React.Children.map(children, (child, index) => {
            return React.cloneElement(child, { num: index + 1 });
        });
    };
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть компоненты Списка. Вам необходимо к каждому из них
                добавить порядковый номер, относительно того, как они
                располагаются на странице. Вы можете использовать как{" "}
                <code>React.Children.map</code> так и{" "}
                <code>React.Children.toArray</code>
            </p>
            <ListComponent>
                <Component />
                <Component />
                <Component />
            </ListComponent>
        </CollapseWrapper>
    );
};

const Component = ({ num }) => {
    return <div>Компонент списка {num}</div>;
};
Component.propTypes = {
    num: PropTypes.number
};

export default ChildrenExercise;
