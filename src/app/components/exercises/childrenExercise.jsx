import React from "react";
import CollapseWrapper from "../common/collapse";
const ChildrenExercise = () => {
    const ListComponent = ({ children }) => {
        let count = 0;
        return React.Children.map(children, (child) => {
            count++;
            return React.cloneElement(child, { name: count });
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

const Component = () => {
    return <div>Компонент списка</div>;
};

export default ChildrenExercise;
