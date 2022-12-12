import React, {useCallback, useEffect} from 'react';
import './App.css';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {Login} from "../../n2_features/f1-auth/a1-login/login";
import {Registration} from "../../n2_features/f1-auth/a2-register/registration";
import {Main} from "./main";
import {useAppDispatch, useAppSelector} from "./Hooks";
import {Test} from "./Test";
import {PasswordRecovery} from "../../n2_features/f1-auth/a2-password/passwordRecovery";
import {NewPassword} from "../../n2_features/f1-auth/a2-password/newRecovery";
import {Error404} from "./routes/Error404";
import {RoutesNavLink} from "./routes/routes";


const App = () => {

    const isLoggedIh = useAppSelector((state) => state.login.isLoggedIh)
    //const initialized = useAppSelector((state) => state.appReducer.isInitialized)
    const dispatch = useAppDispatch()

    useEffect(() => {
        // dispatch(initializedTC())
    }, [])

    const onLogOutHandler = useCallback(() => {
        // dispatch(logOutTC())
    }, [isLoggedIh])

    return (

        <BrowserRouter>
            <div className="App">
                <RoutesNavLink/>
                <Routes>
                    <Route path={'/'} element={<Navigate to={'/main'}/>}/>
                    <Route path={'/main'} element={<Main/>}/>
                    <Route path={'/test'} element={<Test/>}/>
                    <Route path={'/login'} element={<Login/>}/>
                    <Route path={'/registration'} element={<Registration/>}/>
                    <Route path={'/passwordRecovery'} element={<PasswordRecovery/>}/>
                    <Route path={'/newRecovery'} element={<NewPassword/>}/>
                    <Route path={'/404'} element={<Error404/>}/>
                    <Route path="*" element={<Navigate to={'/404'}/>}/>
                </Routes>
            </div>
        </BrowserRouter>

    );
}


export default App;
