import React, { useCallback, useEffect, useState } from "react";

import PropTypes from "prop-types";

const LogoutButton = ({ onLogOut }) => {
    useEffect(() => {
        console.log("render button");
    });

    return (
        <button className="btn btn-primary" onClick={onLogOut}>
            LogoutButton
        </button>
    );
};
LogoutButton.propTypes = {
    onLogOut: PropTypes.func
};

function areEqual(prevState, nextState) {
    if (prevState.onLogOut !== nextState.onLogOut) {
        return false;
    }
    return true;
}

const MemoizedLogOutButton = React.memo(LogoutButton, areEqual);

const MemoWithUseCallbackExample = (props) => {
    const [state, setState] = useState(false);
    const handleLogOut = useCallback(() => {
        localStorage.removeItem("auth");
    }, [props]);
    return (
        <>
            <MemoizedLogOutButton onLogOut={handleLogOut} />
            <button
                className="btn btn-primary mx-2"
                onClick={() => setState(!state)}
            >
                Initiate rerender
            </button>
        </>
    );
};

export default MemoWithUseCallbackExample;
