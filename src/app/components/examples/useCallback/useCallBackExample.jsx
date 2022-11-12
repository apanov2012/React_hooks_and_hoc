import React, { useCallback, useEffect, useRef, useState } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

const UseCallBackExample = () => {
    const [data, setData] = useState({});

    const withCallback = useRef(0);
    const handleChange = ({ target }) => {
        setData((prev) => ({ ...prev, [target.name]: target.value }));
    };
    // withCallback
    const validateWithCallBack = useCallback((data) => {
        console.log(data);
    }, []);
    useEffect(() => {
        withCallback.current++;
    }, [validateWithCallBack]);
    // withOut Callback
    const withoutCallback = useRef(0);
    const validateWithoutCallBack = (data) => {
        console.log(data);
    };

    useEffect(() => {
        withoutCallback.current++;
    }, [validateWithoutCallBack]);

    useEffect(() => {
        validateWithoutCallBack(data);
        validateWithCallBack(data);
    }, [data]);
    return (
        <CardWrapper>
            <SmallTitle>Example</SmallTitle>
            <p>Render without callback: {withoutCallback.current}</p>
            <p>Render with callback: {withCallback.current}</p>
            <label htmlFor="email" className="form-label">
                Email
            </label>
            <input
                type="email"
                className="form-control"
                id="email"
                value={data.email || ""}
                name="email"
                onChange={handleChange}
            />
        </CardWrapper>
    );
};

export default UseCallBackExample;
