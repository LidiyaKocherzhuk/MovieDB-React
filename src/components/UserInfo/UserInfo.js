import React from "react";

import "./UserInfo.css";

const UserInfo = () => {

    return (
        <div className={"user"}>
            <img src="https://www.borenius.com/app/uploads/sites/4/2021/05/Bw_Aleksander-Poychenko_400x400-1-400x400.jpg"
                 alt="user"/>
            <h3>Jon Snow</h3>
        </div>
    );
};

export {UserInfo};