import {NavLink, Outlet} from "react-router-dom";

import "./Header.css";
import {Search} from "../Search/Search";
import {UserInfo} from "../UserInfo/UserInfo";

const Header = () => {

    return (

        <div className={"firs_page"}>

            <div className={"header"}>

                <NavLink to={"movies"}>
                    <h1 className={"header_button"}>Home</h1>
                </NavLink>

                <Search/>
                <UserInfo/>

            </div>
            <Outlet/>

        </div>
    );
};

export {Header};