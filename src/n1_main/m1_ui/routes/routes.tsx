import {NavLink} from "react-router-dom";
import s from "./routes.module.css"

export const RoutesNavLink = () => {
    return (
        <nav className={s.nav}>
            <div><NavLink to="/test" className={(navData) => navData.isActive ? s.active : s.item}>Test</NavLink></div>
            <div><NavLink to="/main" className={(navData) => navData.isActive ? s.active : s.item}>Main</NavLink></div>
            <div><NavLink to="/login" className={(navData) => navData.isActive ? s.active : s.item}>Login</NavLink></div>
            <div><NavLink to="/registration" className={(navData) => navData.isActive ? s.active : s.item}>Registration</NavLink></div>
            <div><NavLink to="/passwordRecovery" className={(navData) => navData.isActive ? s.active : s.item}>Password recovery</NavLink></div>
            <div><NavLink to="/newRecovery" className={(navData) => navData.isActive ? s.active : s.item}>New password</NavLink></div>
        </nav>
    )
}